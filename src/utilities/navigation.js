import LoadableFactory from './LoadableFactory'
import Loading from '../Components/Loading'
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
      loader: () => import('../Containers/About'),
      loading: Loading
    })
  },
  {
    id: 'projects',
    label: 'Proyectos',
    link: '/projects/',
    component: LoadableFactory({
      loader: () => import('../Containers/Projects'),
      loading: Loading
    })
  },
  {
    id: 'contact',
    label: 'Contacto',
    link: '/contact/',
    component: LoadableFactory({
      loader: () => import('../Containers/Contact'),
      loading: Loading
    })
  }
]
