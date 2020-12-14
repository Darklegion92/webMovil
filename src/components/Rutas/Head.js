import React from 'react'
import {
  Row,
  Col,
  Form,
  Typography,
  Input,
  Select,
  Button,
  Space,
  Divider
} from 'antd'

import { SearchOutlined } from '@ant-design/icons'

const { Title } = Typography
function Head () {
  return (
    <Row gutter={16} justify='center'>
      <Col span={14}>
        <Title level={4}>AGREGAR RUTA</Title>
        <Form layout='vertical' name='agregar'>
          <Space>
            <Form.Item
              name='usuario'
              label='Usuario'
              style={{ width: '150px' }}
            >
              <Select></Select>
            </Form.Item>
            <Form.Item
              name='diasemana'
              label='Día Semana'
              style={{ width: '150px' }}
            >
              <Select></Select>
            </Form.Item>
            <Form.Item name='documento' label='Documento'>
              <Input />
            </Form.Item>
            <Form.Item label=' '>
              <Button type='primary' htmlType='submit'>
                AGREGAR
              </Button>
            </Form.Item>
          </Space>
        </Form>
      </Col>
      <Divider type='vertical' />
      <Col span={5}>
        <Title level={4}>BUSCAR RUTA</Title>
        <Form layout='vertical' name='buscar'>
          <Space>
            <Form.Item name='documento' label='Documento'>
              <Input />
            </Form.Item>
            <Form.Item label=' '>
              <Button
                type='primary'
                htmlType='submit'
                icon={<SearchOutlined />}
              />
            </Form.Item>
          </Space>
        </Form>
      </Col>
    </Row>
  )
}

export default Head
