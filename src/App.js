import React, { Component } from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { HomeScene, ProfileScene } from './scenes'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={HomeScene} />
          <Route exact path='/profile' component={ProfileScene} />
        </div>
      </Router>
    )
  }
}

export default App

