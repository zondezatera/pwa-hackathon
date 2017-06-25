import React, { Component } from 'react'
import { Card, CardTitle, CardActions, CardText } from 'react-toolbox/lib/card'

class Summary extends Component {
  render() {
    return (
      <Card className="wrapper-view">
        <CardTitle
          title="Summary Your Limit"
          subtitle="safe-limit drinking"
          className="center text-center"
        />
        <CardActions className="center">
          <CardText>
            ...
          </CardText>
        </CardActions>
      </Card>
    )
  }
}

export default Summary
