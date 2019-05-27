// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
	// Env data
	const requestHeaders = Cypress.env('requestHeaders');
	
	// Request URLs
	const joinVoteUrl = "/parse/classes/Vote/";
	const createRoomUrl = "/parse/classes/Room/";

	/**
	* With HTTP requests, joins a existing room and vote
	* 
	* @param userAndRoom: JSON with 2 keys {username, roomCode}
	* @param userId: Object with 1 key {objectId} - value to be set
	* @param shouldFail: boolean - 
	*/
	Cypress.Commands.add('joinRoom', (userAndRoom, userId, shouldFail = true) => {
		cy
			.request({
				method: 'POST', 
				url: joinVoteUrl, 
				headers: requestHeaders,
				body: userAndRoom,
				failOnStatusCode: shouldFail
			}).then((resp) => {
				userId.objectId = resp.body.objectId
			})
	})
	
	/**
	* With HTTP requests, votes with an existing user
	* 
	* @param userId: Object with 1 key {objectId} (get from response after join)
	* @param voteValue: String - value to vote
	*/
	Cypress.Commands.add('votePoker', (userId, voteValue) => {
		cy
			.request({
				method: 'PUT', 
				url: joinVoteUrl + userId.objectId, 
				headers: requestHeaders,
				body: { "pokerplanning": voteValue }
			})
	})
	
	/**
	* With HTTP requests, creates a new roo
	*
	* @param roomName: String - name of the room
	* @param userAndRoom: Object with key {roomCode} - value to be set
	* @param roomId: Object with key {objectId} - value to be set
	*/
	Cypress.Commands.add('createRoom', (roomName, userAndRoom, roomId) => {
		cy
			.request({
				method: 'POST', 
				url: createRoomUrl, 
				headers: requestHeaders, 
				body: { "name": roomName }
			}).then((resp) => {
				userAndRoom.roomCode = resp.body.code
				roomId.objectId = resp.body.objectId
			})
	})
	
	/**
	* Creates a new room from homepage
	*
	* @param roomName: String - name of the room
	* @param userAndRoom: userAndRoom: JSON with 2 keys {username, roomCode} - roomCode value to be set
	*/
	Cypress.Commands.add('createRoomFromHomepage', (roomName, userAndRoom, roomId) => {
		// Creates a new room
		cy.get('.validate')
			.type(roomName)
		cy.get('button').contains('Create')
			.click()
			
		// Gets the roomCode
		cy.route({
			method: 'POST', 
			url: '/parse/classes/Room', 
			onResponse: (response) => {
				userAndRoom.roomCode = response.response.body.results[0].code
				roomId.objectId = response.response.body.results[0].objectId
			},
		}).as('getCreatedRoom')
		cy.wait('@getCreatedRoom')
		
		// Checks redirection and if room name is displayed
		cy.url().should('include', '/room')
		cy.contains(roomName)
	})
	
	/**
	* Checks if the user's vote is correctly displayed on its card and the participants list
	* 
	* @param usernameStr: String - name of the user
	* @param voteValue: String - vote value to check
	*/
	Cypress.Commands.add('isUserVoteValueDisplayed', (usernameStr, voteValue) => {
		// Checks if the user and his vote indicator are displayed
		cy.get('.participants-list')
			.contains(usernameStr)
		cy.get('.participants-list')
			.contains('div', usernameStr)
			.get('.participant-vote')
			.contains(voteValue)
			
		// Checks if the displayed value matches the vote
		cy.get('.poker-card-container')
			.contains('div', usernameStr)
			.get('.poker-card.card-front')
			.contains(voteValue)
	})
	
	/**
	* Deletes the current room and checks if correctly redirected to the homepage
	* 
	* @param frontUrl: String - Homepage URL
	*/
	Cypress.Commands.add('deleteRoomFromUi', (frontUrl) => {
		cy.get('.btn-delete-container')
			.contains('Delete Room')
			.click()
		cy.get('.delete-modal button')
			.contains('Delete')
			.click()
		cy.contains('Create a Room')
		cy.url().should('eq', frontUrl)
	})

	/**
	* With HTTP requests, deletes the current room
	* 
	* @param frontUrl: String - Homepage URL
	*/
	Cypress.Commands.add('deleteRoom', (roomId) => {
		cy
			.request({
				method: 'DELETE', 
				url: createRoomUrl + roomId.objectId, 
				headers: requestHeaders
			})
	})

	/**
	 * Joins an existing room
	 * 
	 * @param userAndRoom: userAndRoom: JSON with 2 keys {username, roomCode}
	 */
	Cypress.Commands.add('joinExistingRoom', (userAndRoom) => {
		cy.contains('Join existing Room')
			.click()
		cy.get('.validate').within(($field) => {
			cy.root().type(userAndRoom.roomCode)
		})
		cy.get('button').contains('Join')
			.click()
	})
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
