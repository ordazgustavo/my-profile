import React from 'react'
import { RouteComponentProps } from '@reach/router'
import {
  FaPhone,
  FaEnvelope,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaHeart,
  FaRss,
  FaHackerrank,
} from 'react-icons/fa'

import { ContactList } from '../Components'
import { contact } from '../personal'

// @ts-ignore
export default function Contact(props: RouteComponentProps) {
  return (
    <React.Fragment>
      <h2>Contacto</h2>
      <hr />
      <ContactList
        title="Directo"
        items={[
          {
            id: 'phone',
            icon: FaPhone,
            link: `https://api.whatsapp.com/send?phone=${contact.phone}`,
            label: contact.phone,
          },
          {
            id: 'email',
            icon: FaEnvelope,
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
            icon: FaTwitter,
            link: contact.twitter,
            label: '@ordazsgustavo',
          },
          {
            id: 'instagram',
            icon: FaInstagram,
            link: contact.instagram,
            label: '@ordazsgustavo',
          },
          {
            id: 'linkedin',
            icon: FaLinkedin,
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
            icon: FaHeart,
            link: contact.platzi,
            label: 'Platzi',
          },
          {
            id: 'github',
            icon: FaGithub,
            link: contact.github,
            label: '@ordazgustavo',
          },
          {
            id: 'blog',
            icon: FaRss,
            link: contact.blog,
            label: 'Blog',
          },
          {
            id: 'hackerrank',
            icon: FaHackerrank,
            link: contact.hackerrank,
            label: 'Hackerrank',
          },
        ]}
      />
    </React.Fragment>
  )
}
