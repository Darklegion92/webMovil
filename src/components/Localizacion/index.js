import React from 'react'
import { Layout, Col, Row, Form, Select, DatePicker, Button } from 'antd'
import Map from './Map'

const { Content } = Layout
const { RangePicker } = DatePicker
function Localizacion () {
  return (
    <Content style={{ backgroundColor: 'white', paddingTop: '30px' }}>
      <Row gutter={16} justify='center' align='middle'>
        <Col span={5}>
          <Form layout='vertical'>
            <Form.Item name='usuario' label='Usuario'>
              <Select></Select>
            </Form.Item>
            <Form.Item name='fechas' label='Fechas'>
              <RangePicker />
            </Form.Item>
            <Form.Item>
              <Button type='primary' htmlType='submit'>
                CONSULTAR
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col span={17}>
          <Map />
        </Col>
      </Row>
    </Content>
  )
}

export default Localizacion
