import React, { Component } from 'react'
import firebase from 'firebase'

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
      <button className='mdc-button mdc-button--raised facebook' onClick={() => this.signInWithFireBase()}> Sign With Facebook </button>
    )
  }
}

export default SignInWithFacebook
