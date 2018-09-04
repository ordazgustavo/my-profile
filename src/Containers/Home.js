import React, { Fragment } from 'react'

import { contact } from 'personal'

export default () => {
  return (
    <Fragment>
      <p>Hola, soy Gustavo Ordaz.</p>
      <p>
        Soy un Web Developer con dos años de experiencia en el área. Me
        apasiona trabajar en el front-end, sin embargo, también tengo
        experiencia con lenguajes de back-end como <strong>PHP</strong> y{' '}
        <strong>Python</strong>. Tengo un año trabajando con{' '}
        <strong>React JS</strong>, ya sea, creando y desplegando aplicaciones o
        trabajando con aplicaciones previamente desarrolladas.
      </p>
      <a href={contact.cvPdf} target="_blank" rel="noopener no referrer">
        CV
      </a>{' '}
      <a href={contact.github} target="_blank" rel="noopener no referrer">
        GitHub
      </a>
    </Fragment>
  )
}
