import React from 'react'
import { Switch, Redirect } from 'react-router-dom'

import { PrivateRoute } from './helperRoutes'
import Home from '../components/Home'
import Rutas from '../components/Rutas'
import GestionUsuario from '../components/GestionUsuario'
import Localizacion from '../components/Localizacion'

const PrivateRoutes = ({ props }) => {
  return (
    <Switch>
      <PrivateRoute exact path='/' component={Home} />
      <PrivateRoute exact path='/rutas' component={Rutas} />
      <PrivateRoute exact path='/usuarios' component={GestionUsuario} />
      <PrivateRoute exact path='/localizacion' component={Localizacion} />
    </Switch>
  )
}

export default PrivateRoutes
