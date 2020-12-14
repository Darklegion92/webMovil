import React from 'react'
import { Layout } from 'antd'
import Head from './Head'
import Tabla from './Tabla'

const { Content } = Layout
function Rutas () {
  return (
    <Content
      style={{
        padding: '50px',
        height: '100%',
        backgroundColor: 'white'
      }}
    >
      <Head />
      <Tabla />
    </Content>
  )
}

export default Rutas
