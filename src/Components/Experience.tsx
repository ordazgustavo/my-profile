import React from 'react'
import format from 'date-fns/format'

interface IProps {
  company: string,
  location: string,
  position: string,
  date: { from: string, to?: string},
  description: string,
}

export default function Experience({
  company,
  location,
  position,
  date,
  description,
}: IProps) {
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
