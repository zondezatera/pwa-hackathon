import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, CardMedia, CardTitle, CardActions } from 'react-toolbox/lib/card'
import Input from 'react-toolbox/lib/input'
import Button from 'react-toolbox/lib/button/Button'
import { alcoholType } from '../../constants'
// import { withReactRouterLink } from '../../utils/RRHoc'

// const RRButton = withReactRouterLink(Button)
class AlcoholDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      vol: 0,
    }
  }
  handleChange(name, value) {
    this.setState({ ...this.state, [name]: value })
  }
  render() {
    const { itemIndex } = this.props
    const itemDetail = alcoholType[itemIndex]
    const coverUrl = itemDetail.coverUrl
    const title = itemDetail.title
    const subtitle = itemDetail.subtitle
    return (
      <Card className="wrapper-view">
        <CardActions>
          <Card>
            <CardMedia
              aspectRatio="wide"
              image={coverUrl}
            />
            <CardTitle
              title={title}
              subtitle={subtitle}
              className="center text-center"
            />
            <CardActions className="center">
              <Input
                name='vol'
                type='number'
                label='Volume'
                value={this.state.vol}
                onChange={value => this.handleChange('vol', value)}
              />
            </CardActions>
            <CardActions className="center">
              <Button label='Check Limit' raised primary onClick={() => this.props.alcoholData(this.state)} />
              {/* <RRButton label='Choose It !' raised primary to="/summary" />*/}
            </CardActions>
          </Card>
        </CardActions>
      </Card>
    )
  }
}
AlcoholDetail.propTypes = {
  alcoholData: PropTypes.func,
  itemIndex: PropTypes.number
}
export default AlcoholDetail
