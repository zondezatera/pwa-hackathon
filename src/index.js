import React from 'react'
import ReactDOM from 'react-dom'
import * as firebase from 'firebase'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router5'
import registerServiceWorker from './utils/registerServiceWorker'
import './theme/index.css'
import App from './App'
import configureStore from './store/configStore'
import createRouter from './create-router'

const config = {
  apiKey: 'AIzaSyCT4dOTEjbQ4Z5JwpZYMd4S0PJiLOvLuKY',
  authDomain: 'pwa-hackathon-67271.firebaseapp.com',
  databaseURL: 'https://pwa-hackathon-67271.firebaseio.com',
  projectId: 'pwa-hackathon-67271',
  storageBucket: '',
  messagingSenderId: '419104359716'
}
const router = createRouter()
const store = configureStore(router)
const wrappedApp = (
  <Provider store={ store } >
    <RouterProvider router= { router }>
      <App />
    </RouterProvider>
  </Provider>
)

firebase.initializeApp(config)
window.$firebase = firebase

registerServiceWorker()
router.start(() => {
  ReactDOM.render(wrappedApp, document.getElementById('root'))
})

