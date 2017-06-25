import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, CardTitle, CardActions, CardText } from 'react-toolbox/lib/card'
import FontIcon from 'react-toolbox/lib/font_icon'
import { summaryList } from '../../constants'

class Summary extends Component {
  StandardDrink(vol = 100, ABV = 0.01) {
    let standardDrink = 0
    standardDrink = (vol * ABV * 0.789) / 10
    return standardDrink
  }

  SafeDrink(age = 18, sex = 'male') {
    // age < 65 and male = 4 standard drink per day
    // age < 65 and female = 2 standard drink per day
    // age > 65 = 1 standard drink per day
    let personalDrink = 0
    if (age > 65) {
      personalDrink = 1
    } else {
      if (sex === 'male') {
        personalDrink = 4
      }
      personalDrink = 2
    }
    return personalDrink
  }

  ComparePersonalDrink() {
    const { ABV, age, sex } = this.props.summaryData
    const safeDrinkPerPersonal = this.SafeDrink(500, ABV)
    const standardDrink = this.StandardDrink(age, sex)
    if (safeDrinkPerPersonal < standardDrink) {
      return this.renderTextSummary('safe')
    }
    return this.renderTextSummary('overload')
  }

  renderTextSummary(type) {
    const summaryData = summaryList[type]
    const summaryTitle = summaryData.title
    const summaryText = summaryList[type].description
    const summaryIcon = summaryList[type].icon
    return (
      <CardText className="center">
        <p className="text-center"><FontIcon value={summaryIcon} style={{ fontSize: '100px' }} /></p>
        <h2 className="text-center">{summaryTitle}</h2>
        <p>{summaryText}</p>
      </CardText>
    )
  }
  render() {
    console.log(this.props.summaryData)
    return (
      <Card className="wrapper-view">
        <CardTitle
          title="Summary Your Limit"
          subtitle="safe-limit drinking"
          className="center text-center"
        />
        <CardActions className="center">
          {this.ComparePersonalDrink()}
        </CardActions>
      </Card>
    )
  }
}
Summary.propTypes = {
  summaryData: PropTypes.func
}
export default Summary
