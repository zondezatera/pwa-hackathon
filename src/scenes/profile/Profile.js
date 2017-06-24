import React, { Component } from 'react'
import { ToolBar } from '../../common'
import { Profile } from '../../features'

class ProfileScene extends Component {
  render() {
    return (
      <div>
        <ToolBar />
        <Profile />
      </div>
    )
  }
}

export default ProfileScene
