import React from 'react'
import format from 'date-fns/format'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Certification({
  issuer,
  title,
  date,
  license,
  link,
  label
}) {
  return (
    <div>
      <p>
        <strong>{title}</strong>
        <br />
        {issuer}{' '}
        <small>
          {format(date, 'MMM dd YYYY')} - {license}
        </small>
      </p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {label}{' '}
        <small>
          <FontAwesomeIcon icon={['fas', 'external-link-alt']} />
        </small>
      </a>
    </div>
  )
}
