import React from 'react'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default ({ issuer, title, date, license, link, label }) => (
  <div>
    <p>
      <strong>{title}</strong>
      <br />
      {issuer}{' '}
      <small>
        {moment(date).format('ll')} {`- ${license}`}
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
