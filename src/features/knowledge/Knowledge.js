import React, { Component } from 'react'
import { Card, CardTitle, CardActions, CardText } from 'react-toolbox/lib/card'

class Knowledge extends Component {
  render() {
    return (
      <Card className="wrapper-view">
        <CardTitle
          title="Know Your Limit"
          subtitle="Must know for drink"
          className="center text-center"
        />
        <CardActions className="center">
          <CardText>
            <h4 className="text-center" > Standard Drink </h4>
            <p>
              เครื่องดื่มที่มีปริมาณแอลกอฮอล์ ประมาณ 10 กรัม หรือประมาณ 12.5 มิลลิลิตร โดยปกติกลไกการทำงานในร่างกายของคนเรา จะมีตับทำหน้าที่ขับแอลกอฮอล์ออกจากร่างกาย สำหรับผู้ที่มีสุขภาพแข็งแรง ตับจะใช้เวลาเฉลี่ยประมาณ หนึ่งชั่วโมง ในการขับแอลกอฮอล์ปริมาณ Standard Drink ออกจากร่างกาย
            </p>
            <hr />
            <h4 className="text-center" > Alcohol by Volume (ABV) </h4>
            <p>
               ปริมาณแอลกอฮอล์เป็นเปอร์เซนต์ของปริมาตรเครื่องดื่ม ยิ่งเปอร์เซ็นสูงก็มีโอกาสที่จะได้รับแอลกอฮอล์เข้าร่างกายสูงตามปริมาณที่ระบุ เปอร์เซนต์ยิ่งสูงก็ หมายถึงความ แรง ของเครื่องดื่มที่จะทำให้เราเมาได้เร็วขึ้น ง่ายขึ้นเท่านั้น
            </p>
          </CardText>
        </CardActions>
      </Card>
    )
  }
}

export default Knowledge
