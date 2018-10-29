import Loadable from 'react-loadable'
import { Loading } from '../Components'

export default opts =>
  Loadable({
    loading: Loading,
    delay: 500,
    timeout: 10000,
    ...opts,
  })
