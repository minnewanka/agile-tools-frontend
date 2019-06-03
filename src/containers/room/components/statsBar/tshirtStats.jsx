import React from 'react'
import { Bar } from 'react-chartjs-2'
import { countTshirt } from './utils'
import { sortParticipants, containsCeremonyValue } from '../../utils'
import { ReactComponent as TshirtFront } from '../../../../img/tshirt-front.svg'

import './statsBar.scss'

const TshirtStats = ({ participants }) => {
  // Tshirt ChartJS
  const participantsSortedByTshirt = sortParticipants(
    participants.filter(participant => participant.tshirt !== '?'),
    'tshirt'
  )
  let maxTshirtValue
  let minTshirtValue

  if (participantsSortedByTshirt.length > 0) {
    maxTshirtValue = participantsSortedByTshirt[0].tshirt
    minTshirtValue =
      participantsSortedByTshirt[participantsSortedByTshirt.length - 1].tshirt
  }

  const tshirtNote = countTshirt(participants)
  // remove size with 0 count
  for (const f in tshirtNote) {
    if (tshirtNote[f] === 0) {
      delete tshirtNote[f]
    }
  }

  const containsQuestionMark = containsCeremonyValue(
    participants,
    'tshirt',
    '?'
  )

  const tshirtData = {
    pointLabelFontFamily: "'FontAwesome'",
    labels: Object.keys(tshirtNote),
    datasets: [
      {
        backgroundColor: 'rgba(69,107,178,0.5)',
        borderColor: '#456BB2',
        borderWidth: 1,
        hoverBackgroundColor: '#456BB2',
        hoverBorderColor: 'rgba(69,107,178,0.5)',
        data: Object.values(tshirtNote)
      }
    ]
  }
  return (
    <div className="statsBar-container">
      <div className="tshirts fade-in-top">
        <div className="tshirt-row fade-in-top">
          <TshirtFront />
          <div className="floatTL">
            <span className="span-tshirt-size">{minTshirtValue}</span>
          </div>
          <span className="username">Min</span>
        </div>
        <div className="tshirt-row fade-in-top">
          <TshirtFront />
          <div className="floatTL">
            <span className="span-tshirt-size">{maxTshirtValue}</span>
          </div>
          <span className="username">Max</span>
          <div />
        </div>
        {containsQuestionMark ? (
          <div className="tshirt-row fade-in-top">
            <TshirtFront />
            <div className="floatTL">
              <span className="span-tshirt-size">?</span>
            </div>
            <div />
          </div>
        ) : null}
      </div>
      <div className="tshirt-results">
        <Bar
          data={tshirtData}
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
                    labelString: 't-shirt value',
                    fontFamily: 'Roboto',
                    fontColor: 'black'
                  }
                }
              ]
            }
          }}
        />
      </div>
    </div>
  )
}

export default TshirtStats
