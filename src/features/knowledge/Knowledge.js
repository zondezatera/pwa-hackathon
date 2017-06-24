import React, { Component } from 'react'
import { Card, CardTitle, CardActions, CardText } from 'react-toolbox/lib/card'


class Knowledge extends Component {
  render() {
    return (
      <Card className="wrapper-view">
        <CardTitle
          title="Know Your Limit"
          subtitle="Standard Drink"
          className="center text-center"
        />
        <CardActions className="center">
          <CardText>
            <p>
              Standard Drink คือ เครื่องดื่มที่มีปริมาณแอลกอฮอล์ ประมาณ 10 กรัม หรือประมาณ 12.5 มิลลิลิตร โดยปกติกลไกการทำงานในร่างกายของคนเรา จะมีตับทำหน้าที่ขับแอลกอฮอล์ออกจากร่างกาย สำหรับผู้ที่มีสุขภาพแข็งแรง ตับจะใช้เวลาเฉลี่ยประมาณ หนึ่งชั่วโมง ในการขับแอลกอฮอล์ปริมาณ Standard Drink ออกจากร่างกาย
            </p>
          </CardText>
        </CardActions>
      </Card>
    )
  }
}

export default Knowledge
