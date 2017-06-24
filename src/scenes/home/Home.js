import React, { Component } from 'react'
import { HomeDetail } from '../../features'
import { ToolBar } from '../../common'

class HomeScene extends Component {
  render() {
    return (
      <div className="wrapper-view">
        <ToolBar />
        <HomeDetail />
      </div>
    )
  }
}

export default HomeScene
