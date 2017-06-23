import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './theme/index.css'
import App from './app'
import registerServiceWorker from './utils/registerServiceWorker'

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'))
registerServiceWorker()

