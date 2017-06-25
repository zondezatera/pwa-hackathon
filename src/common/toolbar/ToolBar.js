import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AppBar from 'react-toolbox/lib/app_bar/AppBar'
import Drawer from 'react-toolbox/lib/drawer/Drawer'
import { Card, CardTitle, CardActions } from 'react-toolbox/lib/card'
import { List, ListItem } from 'react-toolbox/lib/list'
import Button from 'react-toolbox/lib/button/Button'
import firebase from 'firebase'
import { withReactRouterLink } from '../../utils/RRHoc'
import { menuList } from '../../constants/'

const RRListItem = withReactRouterLink(ListItem)

class ToolBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLogin: false,
      active: false,
      avatar: 'https://placeimg.com/80/80/people',
      usertitle: 'Guest'
    }
    this.renderProflieCard = this.renderProflieCard.bind(this)
  }

  loginWithFacebook() {
    const provider = new firebase.auth.FacebookAuthProvider()
    firebase.auth().signInWithPopup(provider).then((result) => {
      this.setState({ usertitle: result.user.displayName, avatar: result.user.photoURL, isLogin: true })
      this.props.getUserData(this.state)
    })
  }

  logOut() {
    firebase.auth().signOut().then(() => {
      this.setState({ usertitle: 'Guest', avatar: 'https://placeimg.com/80/80/people', isLogin: false })
      this.props.getUserData(this.state)
    })
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

  renderProflieCard() {
    const avatar = this.state.avatar
    const title = this.state.usertitle
    return (
      <Card style={{ marginTop: '30px' }}>
        <CardTitle
          avatar={avatar}
          title={title}
          className="center"
        />
        <CardActions className="center" >
          {
            this.state.isLogin ? <Button label="Logout" target='_blank' raised onClick={() => this.logOut()} /> : <Button className='facebook' label="Sign With Facebook" target='_blank' raised onClick={() => this.loginWithFacebook()} />
          }
        </CardActions>
      </Card>
    )
  }

  render() {
    return (
      <div>
        <Drawer active={this.state.active} onOverlayClick={() => this.handleToggle()}>
          {this.renderProflieCard()}
          <List>
            {this.renderListItem()}
          </List>
        </Drawer>
        <AppBar title='Drink Limit' leftIcon='menu' onLeftIconClick={() => this.handleToggle()} scrollHide />
      </div>
    )
  }
}

ToolBar.propTypes = {
  getUserData: PropTypes.func,
}

export default ToolBar
