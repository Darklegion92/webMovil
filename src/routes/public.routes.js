import React from 'react'
import { Switch, Redirect } from 'react-router-dom'

import { PublicRoute } from './helperRoutes'
import Home from '../components/Home'
import Rutas from '../components/Rutas'
import GestionUsuario from '../components/GestionUsuario'
import Localizacion from '../components/Localizacion'

const PublicRoutes = () => {
  return (
    <Switch>
      <PublicRoute exact path='/' component={Home} />
      <PublicRoute exact path='/rutas' component={Rutas} />
      <PublicRoute exact path='/usuarios' component={GestionUsuario} />
      <PublicRoute exact path='/localizacion' component={Localizacion} />
      <Redirect path='/**' to='/' />
    </Switch>
  )
}

export default PublicRoutes
