import React, { Component } from 'react'
import { drawer } from 'material-components-web'

class ToolBar extends Component {
  constructor(props) {
    super(props)
    this.openDrawer = this.openDrawer.bind(this)
  }
  openDrawer() {
    this.drawer.open = true
  }
  componentDidMount() {
    this.drawer = new drawer.MDCTemporaryDrawer(this.refs.drawer)
  }
  render() {
    return (
      <header id="header" className="mdc-toolbar">
        <div className="mdc-toolbar__row">
          <section className="mdc-toolbar__section mdc-toolbar__section--align-start">
            <button className="material-icons mdc-toolbar__icon--menu" onClick={() => this.openDrawer()}>menu</button>
          </section>
        </div>
        <aside className="mdc-temporary-drawer" ref="drawer">
          <nav className="mdc-temporary-drawer__drawer">
            <nav className="mdc-temporary-drawer__content mdc-list">
              <div className="mdc-list-item" onClick={() => console.log('test')}>Home</div>
              <div className="mdc-list-item" onClick={() => console.log('test')}>Dashboard</div>
              <div className="mdc-list-item" onClick={() => console.log('test')}>History</div>
              <div className="mdc-list-item" onClick={() => console.log('test')}>About</div>
            </nav>
          </nav>
        </aside>
      </header>
    )
  }
}

export default ToolBar
