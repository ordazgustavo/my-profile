import uuid from 'uuid'
import { AsyncAbout, AsyncProjects, AsyncContact } from '../Containers'

export default [
  {
    id: uuid(),
    label: 'Acerca',
    link: 'about',
    component: AsyncAbout
  },
  {
    id: uuid(),
    label: 'Proyectos',
    link: 'projects',
    component: AsyncProjects
  },
  {
    id: uuid(),
    label: 'Contacto',
    link: 'contact',
    component: AsyncContact
  }
]
