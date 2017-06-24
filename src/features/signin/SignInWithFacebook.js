import React, { Component } from 'react'
import firebase from 'firebase'
import Button from 'react-toolbox/lib/button/Button'

class SignInWithFacebook extends Component {
  signInWithFireBase() {
    const provider = new firebase.auth.FacebookAuthProvider()
    firebase.auth().signInWithRedirect(provider).then((result) => {
      console.log(result)
    }).catch((error) => {
      alert(`Cannot sign in: ${String(error)}`)
    })
  }
  render() {
    return (
      <Button className='facebook' href='http://github.com/javivelasco' target='_blank' raised onClick={() => this.signInWithFireBase()}>
        Sign With Facebook
      </Button>
    )
  }
}

export default SignInWithFacebook
