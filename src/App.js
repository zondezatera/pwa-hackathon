import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'

class TestComponent extends Component {
  render() {
    return (
      <div className="App">
        <AppBar
          title="Drunk Limit"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
      </div>
    )
  }
}

export default TestComponent
