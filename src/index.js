import React from 'react'
import ReactDOM from 'react-dom'
import * as firebase from 'firebase'
import { Provider } from 'react-redux'
import ThemeProvider from 'react-toolbox/lib/ThemeProvider'
import registerServiceWorker from './utils/registerServiceWorker'
import './theme/index.css'
import theme from './theme/react-toolbox/theme'
import App from './App'
import store from './store/configStore'
import firebaseConfig from './config/firebase'

firebase.initializeApp(firebaseConfig)
window.$firebase = firebase

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>
  , document.getElementById('root'))
registerServiceWorker()
