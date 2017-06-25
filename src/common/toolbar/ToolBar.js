import React, { Component } from 'react'
import AppBar from 'react-toolbox/lib/app_bar/AppBar'
import Drawer from 'react-toolbox/lib/drawer/Drawer'
// import { Card, CardTitle } from 'react-toolbox/lib/card'
import { List, ListItem } from 'react-toolbox/lib/list'
import { withReactRouterLink } from '../../utils/RRHoc'
import { menuList } from '../../constants/'

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
  renderItem(item, index) {
    return (
      <RRListItem caption={item.title} leftIcon={item.icon} to={item.url} key={`menu-item-${index}`} />
    )
  }

  renderListItem() {
    return menuList.map((item, index) => this.renderItem(item, index))
  }

  render() {
    return (
      <div>
        <Drawer active={this.state.active} onOverlayClick={() => this.handleToggle()}>
          {/* <Card style={{ width: '350px', marginTop: '30px' }}>
            <CardTitle
              avatar="https://placeimg.com/80/80/people"
              title="Guest"
            />
          </Card>*/}
          <List>
            {this.renderListItem()}
          </List>
        </Drawer>
        <AppBar title='Drink Limit' leftIcon='menu' onLeftIconClick={() => this.handleToggle()} scrollHide />
      </div>
    )
  }
}

export default ToolBar
