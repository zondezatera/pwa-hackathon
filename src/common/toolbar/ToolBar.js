import React, { Component } from 'react'
import AppBar from 'react-toolbox/lib/app_bar/AppBar'
import Navigation from 'react-toolbox/lib/navigation/Navigation'
// import Link from 'react-toolbox/lib/link/Link'
import Drawer from 'react-toolbox/lib/drawer/Drawer'

class ToolBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false
    }
  }

  handleToggle() {
    this.setState({ active: !this.state.active })
  }

  render() {
    return (
      <div>
        <Drawer active={this.state.active} onOverlayClick={() => this.handleToggle()}>
          <h5>Drunk Limit</h5>
          <p>You can embed any content you want, for example a Menu.</p>
        </Drawer>
        <AppBar title='Drunk Limit' leftIcon='menu' onLeftIconClick={() => this.handleToggle()}>
          <Navigation type='horizontal'>
          </Navigation>
        </AppBar>
      </div>
    )
  }
}

export default ToolBar
