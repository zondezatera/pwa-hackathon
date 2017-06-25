import React, { Component } from 'react'
import firebase from 'firebase'
import Button from 'react-toolbox/lib/button/Button'

class SignInWithFacebook extends Component {
  signInWithFireBase() {
    const provider = new firebase.auth.FacebookAuthProvider()
    firebase.auth().signInWithPopup(provider).then((result) => {
      this.setState({ user: result.user })
    })
  }
  render() {
    return (
      <Button className='facebook' target='_blank' raised onClick={() => this.signInWithFireBase()}>
        Sign With Facebook
      </Button>
    )
  }
}

export default SignInWithFacebook
