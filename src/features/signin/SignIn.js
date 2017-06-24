import React, { Component } from 'react'
import { Logo } from '../../common'
import SignInWithFacebook from './SignInWithFacebook'

class SignIn extends Component {
  render() {
    return (
      <div className="mdc-layout-grid">
        <div className="mdc-layout-grid__inner">
          <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-3 mdc-layout-grid__cell--span-2-tablet mdc-layout-grid__cell--span-2-phone"></div>
          <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-6 mdc-layout-grid__cell--span-8-tablet  mdc-layout-grid__cell--span-8-phone">
            <div className="mdc-card wrapper-card">
              <section className="mdc-card__primary text-center">
                <h1 className="mdc-card__title mdc-card__title--large">
                  <Logo />
                  Drunk Limit
                </h1>
              </section>
              <section className="mdc-card__supporting-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </section>
              <section className="mdc-card__actions center">
                <SignInWithFacebook />
              </section>
            </div>
          </div>
          <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-3 mdc-layout-grid__cell--span-2-tablet mdc-layout-grid__cell--span-2-phone"></div>
        </div>
      </div>
    )
  }
}

SignIn.propTypes = {

}

export default SignIn
