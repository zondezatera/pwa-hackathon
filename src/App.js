import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div>
        <nav className="nav has-shadow">
          <div className="nav-left">
            <a className="nav-item">
              <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-zondez.appspot.com/o/icon-96x96.png?alt=media&token=3eaeeea0-b9c3-4002-9b45-f31acef86515" alt="test" />
              Drunk Limit
            </a>
          </div>
          <div className="nav-center">
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
          <div className="nav-right nav-menu">
          </div>
        </nav>
      </div>
    )
  }
}

export default App

