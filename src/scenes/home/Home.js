import React, { Component } from 'react'
import { ToolBar } from '../../common'
import { HomeDetail, Profile } from '../../features'

class HomeScene extends Component {
  render() {
    return (
      <div className="wrapper-view">
        <ToolBar />
        <HomeDetail />
        <Profile />
      </div>
    )
  }
}

export default HomeScene
