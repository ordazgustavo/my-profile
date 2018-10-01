import uuid from 'uuid'

export default [
  {
    id: uuid(),
    name: 'React Material Dashboard 🐙',
    description: 'OSS Material Design Dashboard.',
    tech: 'React, Material-UI',
    links: [
      {
        to: 'https://github.com/ordazgustavo/react-material-dashboard',
        label: 'Github'
      }
    ]
  },
  {
    id: uuid(),
    name: 'Create React Project 📚',
    description: 'Heavily opinionated React project boilerplate.',
    tech: 'React',
    links: [
      {
        to: 'https://github.com/ordazgustavo/create-react-project',
        label: 'Github'
      }
    ]
  },
  {
    id: uuid(),
    name: 'Blog personal 👨‍💻',
    description: 'Mi blog personal, enfocado en desarrollo web.',
    tech: 'React, Gatsby, GraphQL, Netlify CMS',
    links: [
      {
        to: 'https://github.com/ordazgustavo/my-blog',
        label: 'Github'
      },
      {
        to: 'https://blog.ordazgustavo.com',
        label: 'Visitar'
      }
    ]
  },
  {
    id: uuid(),
    name: 'Reflex ⚛️',
    description: "JavaScript library to create dynamic UI's",
    tech: 'Javascript',
    links: [
      {
        to: 'https://github.com/ordazgustavo/reflex',
        label: 'GitHub'
      }
    ]
  },
  {
    id: uuid(),
    name: 'Soy Savio',
    description: `Autor de Soy Savio, aplicación web desarrollada en React, 
    que permite conectar a personas con agencias de cambio de manera segura.`,
    tech: 'React, Firebase, IBM Cloud',
    links: [
      {
        to: 'http://soysavio.com',
        label: 'Visitar'
      }
    ]
  }
]
