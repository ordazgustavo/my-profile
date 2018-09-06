import React from 'react'
import moment from 'moment'

export default ({ company, location, position, date, description }) => (
  <div>
    <p>
      <strong>{company}</strong> - <small>{location}</small>
      <br />
      <small>
        {position} - {moment(date.from).format('MMM YYYY')} -{' '}
        {date.to ? moment(date.to).format('MMM YYYY') : 'Act.'}
      </small>
    </p>
    <p>{description}</p>
  </div>
)
