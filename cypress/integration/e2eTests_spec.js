describe('End-to-End tests', function () {

	// Init test data
	const frontUrl = Cypress.env('frontUrl');
	
	beforeEach(function () {
		cy.server()
	})
	
	it('Creates a room, joins, votes and clears', () => {
		// Inits test data
		const roomName = "Cypress room"
		const usernameStr = "Cypress User"
		const voteValue = "3"
		var userAndRoom = { username: usernameStr, roomCode: "" }
		var userId = { objectId: "" }
		var roomId = { objectId: "" }
		
		// Accesses web app
		cy.visit(frontUrl)
		
		cy.createRoomFromHomepage(roomName, userAndRoom, roomId)
		
		// Joins the newly created room and vote
		cy.joinRoom(userAndRoom, userId)
		cy.votePoker(userId, voteValue)
		
		// Reloads page to display vote 
		cy.reload()
		
		// Aliases participants-list for reuse
		cy.get('.participants-list').as('participantsList')
		
		// Checks if the user and his vote indicator are displayed
		cy.get('@participantsList')
			.contains(usernameStr)
		cy.get('@participantsList')
			.contains('div', usernameStr)
			.get('.participant-vote')
			.contains("voted")
		
		// Reveals vote
		cy.get('button').contains('Reveal')
			.click()
			
		// Checks if the displayed value matches the vote
		cy.isUserVoteValueDisplayed(usernameStr, voteValue)
		
		// Clears votes and checks that cards are not visible anymore and the vote indicator are cleared
		cy.get('button').contains('Clear')
			.click()
		cy.get('.poker-card-container').should('not.exist')
		cy.get('@participantsList')
			.get('.participant-vote')
			.should('be.empty')
		
		// Deletes room and redirects to homepage
		cy.deleteRoomFromUi(frontUrl)
	})
	
	it('Updates a vote', () => {
		// Inits test data
		const roomName = "Cypress room"
		const usernameStr = "Cypress User"
		const voteValue = "3"
		const newVoteValue = "2"
		var userAndRoom = { username: usernameStr, roomCode: "" }
		var userId = { objectId: "" }
		var roomId = { objectId: "" }
		
		// Accesses web app
		cy.visit(frontUrl)
		
		cy.createRoomFromHomepage(roomName, userAndRoom, roomId)
		
		// Joins the newly created room and vote
		cy.joinRoom(userAndRoom, userId)
		cy.votePoker(userId, voteValue)
		
		// Reloads page to display vote 
		cy.reload()
		
		// Reveals vote
		cy.get('button').contains('Reveal')
			.click()
		cy.isUserVoteValueDisplayed(usernameStr, voteValue)
		
		// Hide vote
		cy.get('button').contains('Hide')
			.click()
		
		// Vote value should be replaced by vote indicator
		cy.get('.participants-list')
			.contains('div', usernameStr)
			.get('.participant-vote')
			.contains("voted")
		
		// Votes again and checks if new vote is displayed
		cy.votePoker(userId, newVoteValue)
		cy.get('button').contains('Reveal')
			.click()
		cy.isUserVoteValueDisplayed(usernameStr, newVoteValue)
		
		cy.deleteRoom(roomId)
	})
	
	it('Tries to join a deleted room', () => {
		// Inits test data
		const roomName = "Cypress room"
		const usernameStr = "Cypress User"
		var userAndRoom = { username: usernameStr, roomCode: "" }
		var userId = { objectId: "" }
		var roomId = { objectId: "" }
		
		cy.createRoom(roomName, userAndRoom, roomId)
		cy.deleteRoom(roomId)

		// Checks that joining the deleted room through HTTP request returns error
		cy.joinRoom(userAndRoom, userId, false)
		.then((resp) => {
			expect(resp.status).to.eq(400)
			expect(resp.body.code).to.eq(141)
			expect(resp.body.error.code).to.eq('ERR-005')
		})

		// Accesses web app and tries to join the deleted room
		cy.visit(frontUrl)
		cy.joinExistingRoom(userAndRoom)

		// Checks that error message is displayed
		cy.get('.card-panel').contains('Cannot Load room, invalid code or room has been deleted.')
	})
	
	it('Changes language', () => {
		// Inits test data
		const roomName = "Cypress room"
		const usernameStr = "Cypress User"
		var userAndRoom = { username: usernameStr, roomCode: "" }
		var roomId = { objectId: "" }
		
		// Accesses web app
		cy.visit(frontUrl)
		
		// Switches to French
		cy.get('button').contains(/FR/)
			.click()
		
		// Checks if french texts are displayed
		cy.contains('Créer une Room')
		cy.get('button').contains('Créer')
		cy.contains('Obtenir l\'application mobile')
		
		// Switches back to English and creates a room
		cy.get('button').contains(/EN/)
			.click()
		cy.createRoomFromHomepage(roomName, userAndRoom, roomId)
		
		// Switches to French and checks if french texts are displayed
		cy.get('button').contains(/FR/)
			.click()
		cy.get('button').contains('Révéler')
		cy.get('button').contains('Réinitialiser')
		
		cy.deleteRoom(roomId)
	})

	it('Checks apps links', () => {
		// Accesses web app
		cy.visit(frontUrl)
		
		// Checks links to apps
		cy.get('.google-badge-container a')
			.invoke('attr', 'href')
			.should('eq', 'https://play.google.com/store/apps/details?id=ca.siicanada.agiletools')
		cy.get('.apple-badge-container a')
			.invoke('attr', 'href')
			.should('eq', 'https://itunes.apple.com/us/app/urbanspoon/id1454388380')
	})
	
	it('Sends feedback', () => {
		// Inits test data
		const firstName = "FirstName"
		const lastName = "LASTNAME"
		const email = "thisisa@fakeemail.fake"
		const company = "Company name"
		const subject = "Report a bug"
		const subjectValue = "BUG"
		const message = "This message is for test automation purpose."
		
		// Accesses web app
		cy.visit(frontUrl)
		
		// Opens feedback modal
		cy.get('button').contains('feedback')
			.click()
		cy.get('#feedbackModal')
			.should('be.visible')
		
		// Get route to check request contents
		cy.route({
			method: 'POST', 
			url: '/parse/functions/sendFeedback', 
		}).as('getSendFeedback')

		// Fills all fields, sends feedback and checks request contents
		cy.get('#feedbackModal').within(() => {
			cy.get('input[name="firstname"]').type(firstName)
			cy.get('input[name="lastname"]').type(lastName)
			cy.get('input[name="email"]').type(email)
			cy.get('input[name="company"]').type(company)
			cy.get('textarea[name="message"]').type(message)
			cy.get('select').select(subject)
			cy.get('button').contains('Send').click()
			cy.wait('@getSendFeedback').then((xhr) => {
				var reqBody = xhr.request.body
				expect(reqBody).to.have.property('firstname', firstName)
				expect(reqBody).to.have.property('lastname', lastName)
				expect(reqBody).to.have.property('email', email)
				expect(reqBody).to.have.property('company', company)
				expect(reqBody).to.have.property('subject', subjectValue)
				expect(reqBody).to.have.property('message', message)
			})
			cy.contains('Thank you for your feedback !')
		})
	})
	
	it('Joins a existing room as read-only user', () => {
		// Inits test data
		const roomName = "Cypress room"
		const usernameStr = "Cypress User"
		const voteValue = "3"
		var userAndRoom = { username: usernameStr, roomCode: "" }
		var userId = { objectId: "" }
		var roomId = { objectId: "" }
		
		// Creates a new room and gets roomCode
		cy.createRoom(roomName, userAndRoom, roomId)
		
		// Joins the newly created room and vote
		cy.joinRoom(userAndRoom, userId)
		cy.votePoker(userId, voteValue)
		
		// Accesses web app
		cy.visit(frontUrl)
		
		// Join the newly created room
		cy.joinExistingRoom(userAndRoom)

		// Checks redirection and if room name is displayed
		cy.url().should('include', '/room')
		cy.contains(roomName)

		// Checks if Clear and Delete buttons are not displayed and participant cannot be kicked out the room
		cy.get('button').contains('Clear')
			.should('be.not.visible')
		cy.get('button').contains('Delete Room')
			.should('be.not.visible')
		cy.get('.participants-list')
			.contains('div', usernameStr)
			.get('.deleteIcon')
			.should('be.not.visible')
		
		// Reveals vote
		cy.get('button').contains('Reveal')
			.click()
		cy.isUserVoteValueDisplayed(usernameStr, voteValue)

		cy.deleteRoom(roomId)
	})
})