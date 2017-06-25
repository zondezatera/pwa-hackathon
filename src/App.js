import React, { Component } from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { HomeScene, SignInScene, KnowledgeScene, StepGuideScene } from './scenes'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={HomeScene} />
          <Route exact path='/signin' component={SignInScene} />
          <Route exact path='/knowledge' component={KnowledgeScene} />
          <Route exact path='/stepguide' component={StepGuideScene} />
        </div>
      </Router>
    )
  }
}

export default App

