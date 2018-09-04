import React, { Fragment } from 'react'

import { contact } from 'personal'

export default () => {
  return (
    <Fragment>
      <h3>Front End Developer</h3>
      <hr />
      <p>
        Profesional Universitario en el área de Ingeniería de Sistemas,
        enfocado en el desarrollo web. Con dos años de experiencia en el
        mantenimiento, administración y desarrollo de sistemas web. Un año de
        experiencia con React js.
      </p>

      <a href={contact.cvPdf} target="_blank" rel="noopener no referrer">
        CV
      </a>

      <a href={contact.github} target="_blank" rel="noopener no referrer">
        GitHub
      </a>
    </Fragment>
  )
}
