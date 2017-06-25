import React, { Component } from 'react'
import { Home, Profile, Alcohol, AlcoholDetail, Summary } from '../index'

class StepGuide extends Component {
  constructor(props) {
    super(props)
    this.state = {
      step: 0
    }
    this.nexStep = this.nexStep.bind(this)
  }

  nexStep(state) {
    this.setState(Object.assign({}, state, { step: this.state.step + 1 }))
  }

  renderStep() {
    switch (this.state.step) {
      case 0:
        return (<Profile profileData ={this.nexStep} />)
      case 1:
        return (<Alcohol alcoholData ={this.nexStep} />)
      case 2:
        return (<AlcoholDetail itemIndex={this.state.itemIndex} alcoholData ={this.nexStep} />)
      case 3:
        return (<Summary summaryData ={this.state} />)
      default:
        return (<Home />)
    }
  }
  render() {
    console.log(this)
    return (
      <div>
        {this.renderStep()}
      </div>
    )
  }
}

export default StepGuide
