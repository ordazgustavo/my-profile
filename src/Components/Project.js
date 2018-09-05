import React from 'react'

export default ({ name, description, link, label }) => {
  return (
    <div>
      <p>
        <strong>{name}</strong>
      </p>
      <p>{description}</p>
      <a href={link}>{label}</a>
    </div>
  )
}
