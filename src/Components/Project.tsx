import React from 'react'

interface IProps {
  name: string,
  description: string,
  tech: string,
  links: { to: string, label: string }[]
}

export default function Projects({ name, description, tech, links }: IProps) {
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
        <a key={link.to} href={link.to}>
          {link.label}
        </a>
      ))}
    </div>
  )
}
