import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isAuthenticated } from '../services/authentication'
/**
 * Crea rutas publicas
 * @param {component,options} param0
 */
export const PublicRoute = ({ component, ...options }) => {
  const isAuth = isAuthenticated()

  if (!isAuth) return <Route {...options} component={component} />

  return <Redirect to='/' />
}

// TODO: actualizar con servicio de autenticacion
/**
 * Crea rutas privadas
 * @param {component,options} param0
 */
export const PrivateRoute = ({ component, ...options }) => {
  const isAuth = isAuthenticated()

  if (isAuth) return <Route {...options} component={component} />

  return <Redirect to='/login' />
}
