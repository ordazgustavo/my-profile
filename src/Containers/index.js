import Home from './Home'

import LoadableFactory from '../utilities/LoadableFactory'

const AsyncAbout = LoadableFactory({
  loader: () => import('./About')
})
const AsyncProjects = LoadableFactory({
  loader: () => import('./Projects')
})
const AsyncContact = LoadableFactory({
  loader: () => import('./Contact')
})

export { Home, AsyncAbout, AsyncProjects, AsyncContact }
