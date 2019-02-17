import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { FaReact, FaNodeJs } from 'react-icons/fa'

import { contact } from '../personal'

// @ts-ignore
export default function Home(props: RouteComponentProps) {
  return (
    <React.Fragment>
      <p>Hola, soy Gustavo Ordaz.</p>
      <p>
        Soy un Full-Stack JavaScript Developer con más de dos años de
        experiencia en el área. Las principales tecnologías con las que me gusta
        trabajar son: React JS <FaReact /> para el Front-End y Node JS{' '}
        <FaNodeJs /> y GraphQL para el Back-End.
      </p>
      <a
        style={{ marginRight: 15 }}
        href={contact.blog}
        target="_blank"
        rel="noopener noreferrer"
      >
        Blog
      </a>{' '}
      <a href={contact.github} target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
    </React.Fragment>
  )
}
