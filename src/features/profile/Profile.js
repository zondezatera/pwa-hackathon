import React, { Component } from 'react'
import Input from 'react-toolbox/lib/input'
import { Card, CardActions } from 'react-toolbox/lib/card'
import RadioGroup from 'react-toolbox/lib/radio/RadioGroup'
import RadioButton from 'react-toolbox/lib/radio/RadioButton'
import Button from 'react-toolbox/lib/button/Button'
import { withReactRouterLink } from '../../utils/RRHoc'

const RRButton = withReactRouterLink(Button)

class Profile extends Component {
  render() {
    return (
      <Card className='wrapper-view'>
        <CardActions>
          <section>
            <Input type='text' label='name' value="Zonde Zatera" name='name' icon='account_circle' maxLength={50} />
            <Input type='number' label='Age' value="26" name='bodyAge' icon={<span>A</span>} />
            <RadioGroup name='sex' value="male">
              <RadioButton label='Male' value='male' className="form-choose-sex" />
              <RadioButton label='Female' value='female' className="form-choose-sex" />
            </RadioGroup>
          </section>
        </CardActions>
        <div className="center">
          <RRButton className="confirmBtn" raised primary to='/alcohol'>Next</RRButton>
        </div>
      </Card>
    )
  }
}

export default Profile
