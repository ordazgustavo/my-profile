import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@reach/router'

import 'typeface-ubuntu'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import GlobalStyles from './globalStyles'

ReactDOM.render(
  <React.Fragment>
    <Router>
      <App path="/*" />
    </Router>
    <GlobalStyles />
  </React.Fragment>,
  document.getElementById('root'),
)
registerServiceWorker()
