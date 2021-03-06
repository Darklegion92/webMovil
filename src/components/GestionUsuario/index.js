import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import {
  Row,
  Col,
  Typography,
  Input,
  Button,
  Form,
  Layout,
  Select,
  message
} from 'antd'

const { Title } = Typography
const { Content } = Layout
const { Option } = Select
function GestionUsuario () {
  const { usuarios, actualizarUsuario,crearUsuario } = useContext(GlobalContext)
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null)

  const handleOnChageUsuario = id => {
    const selected = usuarios.filter(item => item._id === id)
    setUsuarioSeleccionado(selected[0])
  }

  const handleFinishUpdate = async values => {
    if (values.password === values.confirma) {
      const resp = await actualizarUsuario({
        _id: values.usuario,
        nombre: values.nombre,
        password:values.password
      })
      if (resp) {
        setUsuarioSeleccionado({})
        message.success('Usuario Actualizado Correctamente')
      } else {
        message.error('Error al Actualizar')
      }
    } else if(values.password){
      message.warning("Contraseña No Coincide")
    } else {
      const resp = await actualizarUsuario({
        _id: values.usuario,
        nombre: values.nombre
      })
      if (resp) {
        message.success('Usuario Actualizado Correctamente')
      } else {
        message.error('Error al Actualizar')
      }
    }
  }

  const handleFinishCreate = async values => {
    if (values.password === values.confirma) {
      const resp = await crearUsuario(values)
      if (resp) {
        message.success('Usuario Creado Correctamente')
      } else {
        message.error('Error al Crear')
      }
    } else{
      message.warning("Contraseña No Coincide")
    }
  }

  return (
    <Content style={{ backgroundColor: 'white', paddingTop: '50px' }}>
      <Row gutter={36} justify='center'>
        <Col span={6}>
          <Title level={3}>CREAR USUARIO</Title>
          <Form name='registro' layout='vertical' onFinish={handleFinishCreate}>
            <Form.Item name='usuario' label='Usuario'  rules={[{ required: true, message: 'Usuario es obligatrio' }]}>
              <Input />
            </Form.Item >
            <Form.Item name='nombre' label='Nombre' rules={[{ required: true, message: 'Nombre es obligatrio' }]}>
              <Input />
            </Form.Item>
            <Form.Item name='password' label='Contraseña' rules={[{ required: true, message: 'Contraseña es obligatria' }]}>
              <Input.Password />
            </Form.Item>
            <Form.Item name='confirma' label='Confirmar Contraseña'  rules={[
              {
                required: true,
                message: 'Porfavor Confirma Tu Contraseña',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('Contraseñas No Coinciden'));
                },
              }),
            ]}>
              <Input.Password />
            </Form.Item>
            <Form.Item>
              <Button type='primary' htmlType='submit'>
                GUARDAR
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col spna={6}>
          <Title level={3}>EDITAR USUARIO</Title>
          <Form
            name='editar'
            layout='vertical'
            fields={[
              { name: 'nombre', value: usuarioSeleccionado?.nombre },
              { name: 'password', value: usuarioSeleccionado?.password },
              { name: 'confirma', value: usuarioSeleccionado?.password }
            ]}
            onFinish={handleFinishUpdate}
          >
            <Form.Item name='usuario' label='Usuario'>
              <Select onChange={handleOnChageUsuario}>
                {usuarios.map(usuario => (
                  <Option key={usuario._id}>{usuario.usuario}</Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item name='nombre' label='Nombre'>
              <Input />
            </Form.Item>
            <Form.Item name='password' label='Contraseña'>
              <Input.Password />
            </Form.Item>
            <Form.Item name='confirma' label='Confirmar Contraseña'>
              <Input.Password />
            </Form.Item>
            <Form.Item>
              <Button type='primary' htmlType='submit'>
                ACTUALIZAR
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Content>
  )
}

export default GestionUsuario
