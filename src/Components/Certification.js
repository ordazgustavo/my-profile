import React from 'react'
import moment from 'moment'

export default ({ issuer, title, date, license, link, label }) => {
  return (
    <div>
      <p>
        <strong>{title}</strong>
        <br />
        {issuer}
      </p>
      <p>
        <small>
          {moment(date).format('ll')} {`- ${license}`}
        </small>
      </p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {label}
      </a>
    </div>
  )
}
