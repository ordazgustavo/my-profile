import React from 'react'

export default function Projects({ name, description, tech, links }) {
  return (
    <div>
      <p>
        <strong>{name}</strong>
      </p>
      <p>
        {description}
        <br />
        <small>{tech}</small>
      </p>
      {links.map(link => (
        <a href={link.to}>{link.label}</a>
      ))}
    </div>
  )
}
