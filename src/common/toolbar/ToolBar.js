import React, { Component } from 'react'
import AppBar from 'react-toolbox/lib/app_bar/AppBar'
// import Link from 'react-toolbox/lib/link/Link'
import Drawer from 'react-toolbox/lib/drawer/Drawer'
import MenuItem from 'react-toolbox/lib/menu/MenuItem'
import MenuDivider from 'react-toolbox/lib/menu/MenuDivider'
import { Card, CardTitle } from 'react-toolbox/lib/card'

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
          <Card style={{ width: '350px' }}>
            <CardTitle
              avatar="https://placeimg.com/80/80/people"
              title="Zonde Zatera"
              subtitle="..."
            />
          </Card>
          <MenuItem value='home' icon='home' caption='Home' />
          <MenuItem value='dashboard' icon='dashboard' caption='Dashboard' />
          <MenuItem value='history' icon='history' caption='History' />
          <MenuDivider />
          <MenuItem value='settings' icon='settings' caption='Setting' />
        </Drawer>
        <AppBar title='Drunk Limit' leftIcon='menu' onLeftIconClick={() => this.handleToggle()} />
      </div>
    )
  }
}

export default ToolBar
