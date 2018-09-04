import React from 'react'

export default ({ company, position, date, description }) => {
  return (
    <div>
      <p>
        <strong>{company}</strong>
        <br />
        <small>
          {position} - {date.from} - {date.to || 'Act.'}
        </small>
      </p>
      <p>{description}</p>
    </div>
  )
}
