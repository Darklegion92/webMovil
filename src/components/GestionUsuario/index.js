import React from 'react'

import { Row, Col, Typography, Input, Button, Form, Layout, Select } from 'antd'

const { Title } = Typography
const { Content } = Layout
function GestionUsuario () {
  return (
    <Content style={{ backgroundColor: 'white', paddingTop: '50px' }}>
      <Row gutter={36} justify='center'>
        <Col span={6}>
          <Title level={3}>CREAR USUARIO</Title>
          <Form name='registro' layout='vertical'>
            <Form.Item name='usuario' label='Usuario'>
              <Input />
            </Form.Item>
            <Form.Item name='nombre' label='Nombre'>
              <Input />
            </Form.Item>
            <Form.Item name='password' label='Contraseña'>
              <Input />
            </Form.Item>
            <Form.Item name='confirma' label='Confirmar Contraseña'>
              <Input />
            </Form.Item>
            <Form.Item>
              <Button type='primary'>GUARDAR</Button>
            </Form.Item>
          </Form>
        </Col>
        <Col spna={6}>
          <Title level={3}>EDITAR USUARIO</Title>
          <Form name='editar' layout='vertical'>
            <Form.Item name='usuario' label='Usuario'>
              <Select></Select>
            </Form.Item>
            <Form.Item name='password' label='Contraseña'>
              <Input />
            </Form.Item>
            <Form.Item name='confirma' label='Confirmar Contraseña'>
              <Input />
            </Form.Item>
            <Form.Item>
              <Button type='primary'>ACTUALIZAR</Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Content>
  )
}

export default GestionUsuario
