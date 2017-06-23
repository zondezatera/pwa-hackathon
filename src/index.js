import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TestComponent from './App'
import registerServiceWorker from './registerServiceWorker'

const App = () => (
  <MuiThemeProvider >
    <TestComponent />
  </MuiThemeProvider>
)

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
