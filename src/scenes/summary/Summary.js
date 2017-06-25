import React, { Component } from 'react'
import { Summary } from '../../features'
import { ToolBar } from '../../common'

class SummaryScene extends Component {
  render() {
    return (
      <div>
        <ToolBar />
        <Summary />
      </div>
    )
  }
}


export default SummaryScene
