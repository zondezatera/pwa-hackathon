import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div>
        <nav className="nav has-shadow">
          <div className="nav-left">
            <span className="nav-toggle">
              <span></span>
              <span></span>
              <span></span>
            </span>
            <a className="nav-item">
              <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-zondez.appspot.com/o/icon-96x96.png?alt=media&token=3eaeeea0-b9c3-4002-9b45-f31acef86515" alt="test" />
              Drunk Limit
            </a>
          </div>
          <div className="nav-center">
          </div>
          <div className="nav-right nav-menu">
            <a className="nav-item">
              <span className="icon">
                test1
              </span>
            </a>
            <a className="nav-item">
              <span className="icon">
                test
              </span>
            </a>
          </div>
        </nav>
        <div>
          test
        </div>
      </div>
    )
  }
}

export default App

