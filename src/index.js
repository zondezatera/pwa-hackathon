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

const config = {
  apiKey: 'AIzaSyCT4dOTEjbQ4Z5JwpZYMd4S0PJiLOvLuKY',
  authDomain: 'pwa-hackathon-67271.firebaseapp.com',
  databaseURL: 'https://pwa-hackathon-67271.firebaseio.com',
  projectId: 'pwa-hackathon-67271',
  storageBucket: '',
  messagingSenderId: '419104359716'
}

firebase.initializeApp(config)
window.$firebase = firebase

registerServiceWorker()
ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>
  , document.getElementById('root'))
