import React from 'react'
import ReactDOM from 'react-dom'
import * as firebase from 'firebase'
import registerServiceWorker from './utils/registerServiceWorker'
import './theme/index.css'
import App from './App'

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

ReactDOM.render((
  <App />
), document.getElementById('root'))
registerServiceWorker()

