import React from 'react'

export default ({ name, description, tech, link, label }) => (
  <div>
    <p>
      <strong>{name}</strong>
    </p>
    <p>{description}</p>
    <p>
      <small>{tech}</small>
    </p>
    <a href={link}>{label}</a>
  </div>
)
