import React, { Fragment } from 'react'

import { ContactList } from 'Components'
import { personal } from 'utilities'

export default () => {
  return (
    <Fragment>
      <h3>Contacto</h3>
      <hr />
      <ContactList
        title="Directo"
        items={[
          {
            id: 'phone',
            icon: 'fas fa-phone',
            link: `https://api.whatsapp.com/send?phone=${personal.phone}`,
            label: personal.phone
          },
          {
            id: 'email',
            icon: 'fas fa-envelope',
            link: `email:${personal.gmail}`,
            label: personal.gmail
          }
        ]}
      />

      <ContactList
        title="Me puedes encontrar en mis redes sociales como"
        items={[
          {
            id: 'twitter',
            icon: 'fab fa-twitter',
            link: personal.twitter,
            label: '@ordazsgustavo'
          },
          {
            id: 'instagram',
            icon: 'fab fa-instagram',
            link: personal.instagram,
            label: '@ordazsgustavo'
          },
          {
            id: 'linkedin',
            icon: 'fab fa-linkedin',
            link: personal.linkedin,
            label: 'Linkedin'
          }
        ]}
      />

      <ContactList
        title="También me puedes encontrar en"
        items={[
          {
            id: 'platzi',
            icon: 'fas fa-heart',
            link: personal.platzi,
            label: 'Platzi'
          },
          {
            id: 'github',
            icon: 'fab fa-github',
            link: personal.github,
            label: '@ordazgustavo'
          },
          {
            id: 'hackerrank',
            icon: 'fab fa-hackerrank',
            link: personal.hackerrank,
            label: 'Hackerrank'
          }
        ]}
      />
    </Fragment>
  )
}
