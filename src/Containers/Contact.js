import React, { Fragment } from 'react'

import { ContactList } from '../Components'
import { contact } from '../personal'

const Contact = () => (
  <Fragment>
    <h3>Contacto</h3>
    <hr />
    <ContactList
      title="Directo"
      items={[
        {
          id: 'phone',
          icon: ['fas', 'phone'],
          link: `https://api.whatsapp.com/send?phone=${contact.phone}`,
          label: contact.phone
        },
        {
          id: 'email',
          icon: ['fas', 'envelope'],
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
          icon: ['fab', 'twitter'],
          link: contact.twitter,
          label: '@ordazsgustavo'
        },
        {
          id: 'instagram',
          icon: ['fab', 'instagram'],
          link: contact.instagram,
          label: '@ordazsgustavo'
        },
        {
          id: 'linkedin',
          icon: ['fab', 'linkedin'],
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
          icon: ['fas', 'heart'],
          link: contact.platzi,
          label: 'Platzi'
        },
        {
          id: 'github',
          icon: ['fab', 'github'],
          link: contact.github,
          label: '@ordazgustavo'
        },
        {
          id: 'hackerrank',
          icon: ['fab', 'hackerrank'],
          link: contact.hackerrank,
          label: 'Hackerrank'
        }
      ]}
    />
  </Fragment>
)

export default Contact
