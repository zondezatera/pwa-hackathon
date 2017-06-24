import React, { Component } from 'react'
import { ToolBar } from '../../common'
import { Knowledge } from '../../features'

class KnowledgeScene extends Component {
  render() {
    return (
      <div>
        <ToolBar />
        <Knowledge />
      </div>
    )
  }
}

export default KnowledgeScene
