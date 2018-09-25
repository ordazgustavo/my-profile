import React from 'react'
import ReactDOM from 'react-dom'
import 'typeface-ubuntu'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './globalStyles'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
