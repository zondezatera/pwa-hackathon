import React, { Component } from 'react'
import { Card, CardMedia, CardTitle, CardActions } from 'react-toolbox/lib/card'
import Button from 'react-toolbox/lib/button/Button'

class HomeDetail extends Component {
  render() {
    return (
      <Card style={{ width: '350px', margin: '0 auto', marginTop: '35px', marginBottom: '35px', padding: '20px 0' }}>
        <CardMedia
          aspectRatio="square"
          image="https://firebasestorage.googleapis.com/v0/b/pwa-hackathon-67271.appspot.com/o/icon-384x384.png?alt=media&token=7c49b623-d215-432f-a4da-8bddd6fc5c3c"
        />
        <CardTitle
          title="Drunk Limit"
          subtitle="Limit and Tracking your drunk !"
          style={{ textAlign: 'center', margin: ' 0 auto' }}
        />
        <CardActions style={{ margin: '0 auto' }}>
          <Button icon='games' label='Let Do it !' raised primary />
        </CardActions>
      </Card>
    )
  }
}

export default HomeDetail
