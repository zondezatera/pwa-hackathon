import React, { Component } from 'react'
import { StepGuide } from '../../features'
import { ToolBar } from '../../common'

class StepGuideScene extends Component {
  render() {
    return (
      <div>
        <ToolBar />
        <StepGuide />
      </div>
    )
  }
}


export default StepGuideScene
