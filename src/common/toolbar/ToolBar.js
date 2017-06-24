import React, { Component } from 'react'
import AppBar from 'react-toolbox/lib/app_bar/AppBar'
import Drawer from 'react-toolbox/lib/drawer/Drawer'
import { Card, CardTitle } from 'react-toolbox/lib/card'
import { List, ListItem, ListDivider } from 'react-toolbox/lib/list'
import { withReactRouterLink } from '../../utils/RRHoc'

const RRListItem = withReactRouterLink(ListItem)

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
          <List>
            <RRListItem caption='Home' leftIcon='home' to='/' />
            <RRListItem caption='Dashboard' leftIcon='dashboard' />
            <RRListItem caption='History' leftIcon='history' />
            <ListDivider />
            <RRListItem caption='Setting' leftIcon='settings' />
          </List>
        </Drawer>
        <AppBar title='Drunk Limit' leftIcon='menu' onLeftIconClick={() => this.handleToggle()} />
      </div>
    )
  }
}

export default ToolBar
