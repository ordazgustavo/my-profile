import React from 'react'

export default ({ company, location, position, date, description }) => {
  return (
    <div>
      <p>
        <strong>{company}</strong> - <small>{location}</small>
        <br />
        <small>
          {position} - {date.from} - {date.to || 'Act.'}
        </small>
      </p>
      <p>{description}</p>
    </div>
  )
}
