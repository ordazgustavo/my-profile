import LoadableFactory from './LoadableFactory'
import Home from '../Containers/Home'

export default [
  {
    id: 'home',
    label: 'Gustavo Ordaz',
    link: '/',
    exact: true,
    component: Home
  },
  {
    id: 'about',
    label: 'Acerca de',
    link: '/about/',
    component: LoadableFactory({
      loader: () => import('../Containers/About')
    })
  },
  {
    id: 'projects',
    label: 'Proyectos',
    link: '/projects/',
    component: LoadableFactory({
      loader: () => import('../Containers/Projects')
    })
  },
  {
    id: 'contact',
    label: 'Contacto',
    link: '/contact/',
    component: LoadableFactory({
      loader: () => import('../Containers/Contact')
    })
  }
]
