import React from 'react'
import { Bar } from 'react-chartjs-2'
import { countCards } from './utils'
import { sortParticipants, containsCeremonyValue } from '../../utils'

import './statsBar.scss'

const CardStats = ({ participants }) => {
  const participantsSortedByCard = sortParticipants(
    participants.filter(participant => !isNaN(participant.pokerplanning)),
    'pokerplanning'
  )
  let pokerMaxNote
  let pokerMinNote
  if (participantsSortedByCard.length > 0) {
    pokerMaxNote = participantsSortedByCard[0].pokerplanning
    pokerMinNote =
      participantsSortedByCard[participantsSortedByCard.length - 1]
        .pokerplanning
  }

  const cardNote = countCards(participants)

  // replace scissor string by unicode for labelling
  const labels = Object.keys(cardNote).map(key =>
    key.replace('scissor', '\u{2702}')
  )
  const cardData = {
    labels,
    datasets: [
      {
        backgroundColor: 'rgba(69,107,178,0.5)',
        borderColor: '#456BB2',
        borderWidth: 1,
        hoverBackgroundColor: '#456BB2',
        hoverBorderColor: 'rgba(69,107,178,0.5)',
        data: Object.values(cardNote)
      }
    ]
  }
  const containsQuestionMark = containsCeremonyValue(
    participants,
    'pokerplanning',
    '?'
  )
  const containsScissor = containsCeremonyValue(
    participants,
    'pokerplanning',
    'scissor'
  )

  return (
    <>
      <div className="cards">
        <div className="card-container">
          <div className="card">
            <span className="content">{pokerMinNote}</span>
          </div>
          <div className="label username">Min</div>
        </div>
        <div className="card-container">
          <div className="card">
            <span className="content">{pokerMaxNote}</span>
          </div>
          <div className="label username">Max</div>
        </div>
        {containsQuestionMark || containsScissor ? (
          <div className="card-container-other">
            {containsQuestionMark ? (
              <div className="card">
                <span className="content">?</span>
              </div>
            ) : null}
            {containsScissor ? (
              <div className="card">
                <span className="content">&#9986;</span>
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
      <div className="fade-in">
        <Bar
          data={cardData}
          width={50}
          height={200}
          options={{
            maintainAspectRatio: false,
            legend: {
              display: false
            },
            scales: {
              yAxes: [
                {
                  scaleLabel: {
                    display: true,
                    labelString: 'count',
                    fontFamily: 'Roboto',
                    fontColor: 'black'
                  },
                  ticks: {
                    min: 0,
                    stepSize: 1
                  }
                }
              ],
              xAxes: [
                {
                  scaleLabel: {
                    display: true,
                    labelString: 'card value',
                    fontFamily: 'Roboto',
                    fontColor: 'black'
                  }
                }
              ]
            }
          }}
        />
      </div>
    </>
  )
}

export default CardStats
