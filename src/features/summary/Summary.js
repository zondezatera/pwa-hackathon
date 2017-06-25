import React, { Component } from 'react'
import { Card, CardTitle, CardActions, CardText } from 'react-toolbox/lib/card'
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
    const safeDrinkPerPersonal = this.SafeDrink()
    const standardDrink = this.StandardDrink()
    if (safeDrinkPerPersonal < standardDrink) {
      return this.renderTextSummary('safe')
    }
    return this.renderTextSummary('overload')
  }

  renderTextSummary(type = 'safe') {
    const summaryData = summaryList[type]
    const summaryTitle = summaryData.title
    const summaryText = summaryList[type].description
    return (
      <CardText>
        <h4 className="text-center">{summaryTitle}</h4>
        <p>{summaryText}</p>
      </CardText>
    )
  }
  render() {
    return (
      <Card className="wrapper-view">
        <CardTitle
          title="Summary Your Limit"
          subtitle="safe-limit drinking"
          className="center text-center"
        />
        <CardActions className="center">
          {this.renderTextSummary()}
        </CardActions>
      </Card>
    )
  }
}

export default Summary
