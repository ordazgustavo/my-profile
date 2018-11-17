import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { contact } from '../personal'

export default function Home() {
  return (
    <React.Fragment>
      <p>Hola, soy Gustavo Ordaz.</p>
      <p>
        Soy un Web Developer con dos años de experiencia en el área. Me apasiona
        trabajar en el front-end, sin embargo, también tengo experiencia con
        lenguajes de back-end como{' '}
        <strong>
          PHP <FontAwesomeIcon icon={['fab', 'php']} />
        </strong>{' '}
        y{' '}
        <strong>
          Python <FontAwesomeIcon icon={['fab', 'python']} />
        </strong>
        . Tengo un año trabajando con{' '}
        <strong>
          React JS <FontAwesomeIcon icon={['fab', 'react']} />
        </strong>
        , ya sea, creando y desplegando aplicaciones o trabajando con
        aplicaciones previamente desarrolladas.
      </p>
      <a href={contact.blog} target="_blank" rel="noopener noreferrer">
        Blog
      </a>{' '}
      <a href={contact.github} target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
    </React.Fragment>
  )
}
