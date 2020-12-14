import React from 'react'
import { Layout, Image, Typography } from 'antd'

const { Content } = Layout
const { Title } = Typography
function Home () {
  return (
    <Content
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '50px',
        paddingBottom: '155px',
        backgroundColor: 'white'
      }}
    >
      <Image width='250px' src='logo512.png' />
      <Title>SOLTEC - DISCOIL SEGUIMIENTO FUERZA DE VENTAS</Title>
    </Content>
  )
}

export default Home
