import React, { Fragment } from 'react'

import { ContactList } from 'Components'
import { contact } from 'personal'

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
            link: `https://api.whatsapp.com/send?phone=${contact.phone}`,
            label: contact.phone
          },
          {
            id: 'email',
            icon: 'fas fa-envelope',
            link: `email:${contact.gmail}`,
            label: contact.gmail
          }
        ]}
      />

      <ContactList
        title="Me puedes encontrar en mis redes sociales como"
        items={[
          {
            id: 'twitter',
            icon: 'fab fa-twitter',
            link: contact.twitter,
            label: '@ordazsgustavo'
          },
          {
            id: 'instagram',
            icon: 'fab fa-instagram',
            link: contact.instagram,
            label: '@ordazsgustavo'
          },
          {
            id: 'linkedin',
            icon: 'fab fa-linkedin',
            link: contact.linkedin,
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
            link: contact.platzi,
            label: 'Platzi'
          },
          {
            id: 'github',
            icon: 'fab fa-github',
            link: contact.github,
            label: '@ordazgustavo'
          },
          {
            id: 'hackerrank',
            icon: 'fab fa-hackerrank',
            link: contact.hackerrank,
            label: 'Hackerrank'
          }
        ]}
      />
    </Fragment>
  )
}
