import React, { Component } from 'react'
import { Card, CardMedia, CardTitle, CardActions } from 'react-toolbox/lib/card'
import { alcoholType } from '../../constants'

class Alcohol extends Component {
  renderItem(item, index) {
    return (
      <CardActions key={`AlcoholType-${index}`}>
        <Card>
          <CardMedia
            aspectRatio="wide"
            image={item.coverUrl}
          />
          <CardTitle
            title={item.title}
            subtitle={item.subtitle}
            className="center text-center"
          />
        </Card>
      </CardActions>
    )
  }
  renderListItem() {
    return alcoholType.map((item, index) => this.renderItem(item, index))
  }
  render() {
    return (
      <Card className="wrapper-view" style={{ padding: 0 }}>
        {this.renderListItem()}
      </Card>
    )
  }
}

export default Alcohol
