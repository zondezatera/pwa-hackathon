import React, { Component } from 'react'
import { Card, CardMedia, CardTitle, CardActions } from 'react-toolbox/lib/card'
import Button from 'react-toolbox/lib/button/Button'
import { withReactRouterLink } from '../../utils/RRHoc'

const RRButton = withReactRouterLink(Button)

class Home extends Component {
  render() {
    return (
      <Card className='wrapper-view'>
        <CardMedia
          aspectRatio="square"
          image="https://firebasestorage.googleapis.com/v0/b/pwa-hackathon-67271.appspot.com/o/icon-384x384.png?alt=media&token=7c49b623-d215-432f-a4da-8bddd6fc5c3c"
        />
        <CardTitle
          title="Drunk Limit"
          subtitle="Limit and Tracking your drunk !"
          style={{ textAlign: 'center', margin: ' 0 auto' }}
        />
        <CardActions className="center">
          <RRButton icon='games' label='Let Do it !' raised primary to="/profile" />
        </CardActions>
      </Card>
    )
  }
}

export default Home
