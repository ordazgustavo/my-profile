import React from 'react'
import format from 'date-fns/format'

export default function Experience({
  company,
  location,
  position,
  date,
  description
}) {
  return (
    <div>
      <p>
        <strong>{company}</strong> - <small>{location}</small>
        <br />
        <small>
          {position} - {format(date.from, 'MMM YYYY')} -{' '}
          {date.to ? format(date.to, 'MMM YYYY') : 'Act.'}
        </small>
      </p>
      <p>{description}</p>
    </div>
  )
}
