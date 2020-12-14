import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

/**
 * Crea rutas publicas
 * @param {component,options} param0
 */
export const PublicRoute = ({ component, ...options }) => {
  const { isAuth } = useContext(GlobalContext);

  if (!isAuth) return <Route {...options} component={component} />;

  return <Redirect to="/" />;
};

// TODO: actualizar con servicio de autenticacion
/**
 * Crea rutas privadas
 * @param {component,options} param0
 */
export const PrivateRoute = ({ component, ...options }) => {
  const { isAuth } = useContext(GlobalContext);

  if (isAuth) return <Route {...options} component={component} />;

  return <Redirect to="/login" />;
};
