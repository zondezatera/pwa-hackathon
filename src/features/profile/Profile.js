import React, { Component } from 'react'
import Input from 'react-toolbox/lib/input'
import { Card, CardActions } from 'react-toolbox/lib/card'
import Button from 'react-toolbox/lib/button/Button'

class Profile extends Component {
  render() {
    return (
      <Card style={{ width: '350px', margin: '0 auto', marginTop: '35px', marginBottom: '35px', padding: '20px 0' }}>
        <CardActions>
          <section>
            <Input type='text' label='name' value="Zonde Zatera" name='name' icon='account_circle' maxLength={50} />
            <Input type='number' label='Age' value="26" name='bodyAge' icon={<span>A</span>} />
            <Input type='number' label='Height' value="170" name='bodyHeight' icon={<span>H</span>} />
            <Input type='number' label='Weight' value="70" name='bodyWeight' icon={<span>W</span>} />
          </section>
        </CardActions>
        <div className="center">
          <Button className="confirmBtn" raised primary>Next</Button>
        </div>
      </Card>
    )
  }
}

export default Profile
