import React from 'react'
import { Layout } from 'antd'
import './App.less'
import Head from './components/Head'
import Foot from './components/Foot'
import PrivateRoutes from './routes/private.routes'
import PublicRoutes from './routes/public.routes'
import { isAuthenticated } from './services/authentication'

const App = props => {
  const isAuth = isAuthenticated()
  return (
    <Layout style={{ backgroundColor: 'white' }}>
      {isAuth && <Head />}
      <PublicRoutes />
      <PrivateRoutes props={props} />
      <Foot />
    </Layout>
  )
}

export default App
