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
          title="Drink Limit"
          subtitle="Limit and Tracking your drink !"
          className="text-center center"
        />
        <CardText></CardText>
        <CardActions className="center">
          <SignInWithFacebook />
        </CardActions>
      </Card>
    )
  }
}

SignIn.propTypes = {

}

export default SignIn
