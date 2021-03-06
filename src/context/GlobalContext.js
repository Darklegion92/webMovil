import React, { useState,useEffect } from "react";
import { message } from "antd";
import axios from "axios";

const GlobalContext = React.createContext({});
const { Provider, Consumer } = GlobalContext;

const GlobalProvider = ({ children }) => {
  const URL = 'http://45.82.72.196:8089'
  const [usuario, setUsuario] = useState()
  const [isAuth, setIsAuth] = useState(false)
  const [usuarios, setUsuarios] = useState([])
  const [rutas, setRutas] = useState([])
  const [localizacionUsuario, setLocalizacionUsuario] = useState([])

useEffect(()=>{
  consultarUsuarios();
},[])

  /**
   * Se encarga de validar las credenciales y darle acceso a la aplicacion
   * @param {datos} datos
   */
  const login = async (datos) => {
    try {
      const json = await axios.post(URL + "/usuario/login", datos);

      if (json.status === 200) {
        message.success("Bienvenido");
        localStorage.setItem("Token", json.data.autorization_key);
        setUsuario(json.data);
        consultarUsuarios();
        setIsAuth(true);
      } else {
        message.warn("Usuario o Contraseña Erroneos");
        setIsAuth(false);
      }
    } catch (error) {
      console.log(error);
      // message.error(error)
    }
  };

  /**
   * Consulta la lista de todos los usuarios
   */
  const consultarUsuarios = async () => {
    let json;
    try {
      const token = localStorage.getItem("Token");
      json = await axios.get(URL + "/usuario/consultar", {
        headers: { authorization: token },
      });

      if (json.status === 200) {
        setUsuarios(json.data);
      } else {
        setUsuarios([]);
      }
    } catch (error) {
      setUsuarios([]);
      message.error("Se ha presentado un error actualice la página");
      console.log(error);
    }
  };

  /**
   * Se encarga de validar el token y traer el usuario
   * Ademas de cargar parametros iniciales
   */
  const validarAuth = async () => {
    let json;
    try {
      const token = localStorage.getItem("Token");
      json = await axios.get(URL + "/usuario/validartoken", {
        headers: { authorization: token },
      });

      if (json.status === 200) {
        setUsuario(json.data);
        consultarUsuarios();
        setIsAuth(true);
      } else if (json.status === 401) {
        message.info("Token ha expirado");
        localStorage.clear();
        setIsAuth(false);
      } else if (json.status === 400) {
        message.error("Token no válido");
        localStorage.clear();
        setIsAuth(false);
      }
    } catch (error) {
      if (json) {
        if (json.status === 401) {
          message.info('Token ha expirado')
          localStorage.clear()
          setIsAuth(false)
        } else if (json.status === 400) {
          message.error('Token no válido')
          localStorage.clear()
          setIsAuth(false)
        } else {
          message.error('Error De Conexión, Intentelo Nuevamente')
        }
      } else message.error('Error De Conexión, Intentelo Nuevamente')

    }
  };

  const guardarRuta = async (datos) => {
    let json;
    try {
      //consulta al cliente
      const token = localStorage.getItem("Token");
      const jsonCliente = await axios.get(
        URL + "/clientes/consultar/documento/" + datos.documento,
        { headers: { authorization: token } }
      );
      if (jsonCliente.status === 200) {
        json = await axios.post(
          URL + "/rutas/guardar",
          {
            documento: jsonCliente.data.Identification,
            telefono: jsonCliente.data.Phone.Number,
            nombre: jsonCliente.data.FullName,
            idUsuario: datos.usuario,
            idSIIGO: jsonCliente.data.IdSiigo,
            direccion: jsonCliente.data.Address,
            diaSemana: datos.diasemana,
          },
          { headers: { authorization: token } }
        );

        if (json.status === 200) {
          message.success("Cliente Agregado Correctamente");
          setRutas(json.data);
        }
      } else {
        message.warning("Cliente no existe en SIIGO");
      }
    } catch (error) {
      message.error("Algo ha pasado Intentelo de nuevo");
    }
  };

  const consultarRutas = async (idUsuario) => {
    let json;
    try {
      const token = localStorage.getItem("Token");
      json = await axios.get(URL + "/rutas/usuario", {
        params: { idUsuario },
        headers: { authorization: token },
      });
      if (json.status === 200) {
        message.success("Consulta Completa");
        setRutas(json.data);
      } else {
        message.warning("No encontrado datos");
      }
    } catch (error) {}
  };

  const eliminarRuta = async (id, idUsuario) => {
    let json;
    try {
      const token = localStorage.getItem("Token");
      json = await axios.put(
        URL + "/rutas/eliminar",
        { id, idUsuario },
        { headers: { authorization: token } }
      );
      if (json.status === 200) {
        message.success("Consulta Completa");
        setRutas(json.data);
      } else {
        message.warning("No encontrado datos");
      }
    } catch (error) {}
  };

  const localizacionUsuarioFecha = async (datos) => {
    let json;
    try {
      const token = localStorage.getItem("Token");
      json = await axios.get(URL + "/localizacion", {
        params: datos,
        headers: { authorization: token },
      });

      if (json.status === 200) {
        console.log(json.data);
        setLocalizacionUsuario(json.data);
        message.success("Infomración Cargada");
      } else {
        setLocalizacionUsuario([]);
        message.warning("No se encontraron datos");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const actualizarUsuario = async user => {
    const token = localStorage.getItem('Token')

    const json = await axios.post(
      URL + '/usuario/actualizar',
      { user },
      { headers: { authorization: token } }
    )


    if(json.status===200){
      return true
    }else{
      return false
    }
  }

  const crearUsuario = async user => {
    const token = localStorage.getItem('Token')

    const json = await axios.post(
      URL + '/usuario/guardar',
      { user },
      { headers: { authorization: token } }
    )


    if(json.status===200){
      return true
    }else{
      return false
    }
  }

  return (
    <Provider
      value={{
        usuario,
        login,
        setUsuario,
        isAuth,
        validarAuth,
        usuarios,
        guardarRuta,
        consultarRutas,
        eliminarRuta,
        rutas,
        localizacionUsuarioFecha,
        localizacionUsuario,
        actualizarUsuario,
        crearUsuario

      }}
    >
      {children}
    </Provider>
  );
};

export { GlobalProvider, Consumer as GlobalConsumer, GlobalContext };
