import React from 'react'
import ReactDOM from 'react-dom'
import 'typeface-ubuntu'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import GlobalStyles from './globalStyles'

ReactDOM.render(
  <React.Fragment>
    <App />
    <GlobalStyles />
  </React.Fragment>,
  document.getElementById('root'),
)
registerServiceWorker()
