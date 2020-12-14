import React from 'react'
import { Layout } from 'antd'

const { Footer } = Layout
function Foot () {
  return (
    <Footer
      style={{
        bottom: 0,
        position: 'absolute',
        width: '100%',
      }}
    >
      Diseñado Por SOLTEC - Tecnología y Desarrollo 2020
    </Footer>
  )
}

export default Foot
