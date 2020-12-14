import React from 'react'
import { Switch } from 'react-router-dom'
import Login from '../components/Login'

import { PublicRoute } from './helperRoutes'

const PublicRoutes = () => {
  return (
    <Switch>
      <PublicRoute exact path='/login' component={Login} />
    </Switch>
  )
}

export default PublicRoutes
