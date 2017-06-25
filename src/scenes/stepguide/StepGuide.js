import React, { Component } from 'react'
import { StepGuide } from '../../features'
import { ToolBar } from '../../common'

class StepGuideScene extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.getUserData = this.getUserData.bind(this)
  }
  getUserData(state) {
    console.log(state)
    this.setState(Object.assign({}, state))
  }

  render() {
    return (
      <div>
        <ToolBar getUserData={() => this.getUserData} />
        <StepGuide userData={this.state} />
      </div>
    )
  }
}


export default StepGuideScene
