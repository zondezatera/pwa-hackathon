import React, { Component } from 'react'
import { SignIn } from '../../features'
import { ToolBar } from '../../common'

class SignInScene extends Component {
  render() {
    return (
      <div>
        <ToolBar />
        <SignIn />
      </div>
    )
  }
}


export default SignInScene
