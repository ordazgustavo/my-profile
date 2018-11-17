import React from 'react'

import { ContactList } from '../Components'
import { contact } from '../personal'

export default function Contact() {
  return (
    <React.Fragment>
      <h2>Contacto</h2>
      <hr />
      <ContactList
        title="Directo"
        items={[
          {
            id: 'phone',
            icon: ['fas', 'phone'],
            link: `https://api.whatsapp.com/send?phone=${contact.phone}`,
            label: contact.phone,
          },
          {
            id: 'email',
            icon: ['fas', 'envelope'],
            link: `mailto:${contact.gmail}`,
            label: contact.gmail,
          },
        ]}
      />

      <ContactList
        title="Me puedes encontrar en mis redes sociales como"
        items={[
          {
            id: 'twitter',
            icon: ['fab', 'twitter'],
            link: contact.twitter,
            label: '@ordazsgustavo',
          },
          {
            id: 'instagram',
            icon: ['fab', 'instagram'],
            link: contact.instagram,
            label: '@ordazsgustavo',
          },
          {
            id: 'linkedin',
            icon: ['fab', 'linkedin'],
            link: contact.linkedin,
            label: 'Linkedin',
          },
        ]}
      />

      <ContactList
        title="También me puedes encontrar en"
        items={[
          {
            id: 'platzi',
            icon: ['fas', 'heart'],
            link: contact.platzi,
            label: 'Platzi',
          },
          {
            id: 'github',
            icon: ['fab', 'github'],
            link: contact.github,
            label: '@ordazgustavo',
          },
          {
            id: 'blog',
            icon: ['fas', 'rss'],
            link: contact.blog,
            label: 'Blog',
          },
          {
            id: 'hackerrank',
            icon: ['fab', 'hackerrank'],
            link: contact.hackerrank,
            label: 'Hackerrank',
          },
        ]}
      />
    </React.Fragment>
  )
}
