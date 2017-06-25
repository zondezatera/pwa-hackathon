import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Input from 'react-toolbox/lib/input'
import { Card, CardActions } from 'react-toolbox/lib/card'
import RadioGroup from 'react-toolbox/lib/radio/RadioGroup'
import RadioButton from 'react-toolbox/lib/radio/RadioButton'
import Button from 'react-toolbox/lib/button/Button'
// import { withReactRouterLink } from '../../utils/RRHoc'

// const RRButton = withReactRouterLink(Button)
class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Guest',
      age: 18,
      sex: 'male'
    }
  }
  handleChange(name, value) {
    this.setState({ ...this.state, [name]: value })
  }
  render() {
    return (
      <Card className='wrapper-view'>
        <CardActions>
          <section>
            <Input
              name='name'
              type='text'
              label='name'
              value={this.state.name}
              icon='account_circle'
              maxLength={50}
              onChange={value => this.handleChange('name', value)}
            />
            <Input
              name='age'
              type='number'
              label='Age'
              value={this.state.age} icon={<span>A</span>}
              onChange={value => this.handleChange('age', value)}
            />
            <RadioGroup name='sex' value={this.state.sex} onChange={value => this.handleChange('sex', value)}>
              <RadioButton label='Male' value='male' className="form-choose-sex" />
              <RadioButton label='Female' value='female' className="form-choose-sex" />
            </RadioGroup>
          </section>
        </CardActions>
        <div className="center">
          <Button className="confirmBtn" raised primary onClick={() => this.props.profileData(this.state)} >Next</Button>
          {/* <RRButton className="confirmBtn" raised primary to='/alcohol'>Next</RRButton>*/}
        </div>
      </Card>
    )
  }
}

Profile.propTypes = {
  profileData: PropTypes.func
}

export default Profile
