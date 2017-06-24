import React, { Component } from 'react'
import { ToolBar } from '../../common'
import { Home } from '../../features'

class HomeScene extends Component {
  render() {
    return (
      <div className="wrapper-view">
        <ToolBar />
        <Home />
      </div>
    )
  }
}

export default HomeScene
