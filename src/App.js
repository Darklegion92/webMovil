import React from 'react'
import { Layout } from 'antd'
import './App.less'
import Head from './components/Head'
import Foot from './components/Foot'
import PrivateRoutes from './routes/private.routes'
import PublicRoutes from './routes/public.routes'

const App = () => (
  <Layout>
    <Head />
    <PrivateRoutes />
    <PublicRoutes />
    <Foot />
  </Layout>
)

export default App
