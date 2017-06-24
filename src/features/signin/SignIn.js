import React, { Component } from 'react'
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card'
import SignInWithFacebook from './SignInWithFacebook'

class SignIn extends Component {
  render() {
    return (
      <Card className='wrapper-view'>
        <CardMedia
          aspectRatio="square"
          image="https://firebasestorage.googleapis.com/v0/b/pwa-hackathon-67271.appspot.com/o/icon-384x384.png?alt=media&token=7c49b623-d215-432f-a4da-8bddd6fc5c3c"
        />
        <CardTitle
          title="Drunk Limit"
          style={{ textAlign: 'center', margin: ' 0 auto' }}
        />
        <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</CardText>
        <CardActions style={{ margin: '0 auto' }}>
          <SignInWithFacebook />
        </CardActions>
      </Card>
    )
  }
}

SignIn.propTypes = {

}

export default SignIn
