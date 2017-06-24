import React, { Component } from 'react'
import { ToolBar } from '../../common'
import { Alcohol } from '../../features'

class AlcoholScene extends Component {
  render() {
    return (
      <div>
        <ToolBar />
        <Alcohol />
      </div>
    )
  }
}

export default AlcoholScene
