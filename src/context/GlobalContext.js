import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { message } from 'antd'
import axios from 'axios'

const GlobalContext = React.createContext({})
const { Provider, Consumer } = GlobalContext

const GlobalProvider = ({ children }) => {
  const URL = 'http://localhost:8085'
  const [usuario, setUsuario] = useState()
  const History = useHistory(null)
  const login = async datos => {
    try {
      const json = await axios.post(URL + '/usuario/login', datos)

      if (json.status === 200) {
        message.success('Bienvenido')
        localStorage.setItem('Token', json.data.autorization_key)
        setUsuario(json.data)
        History.push('/')
      } else {
        message.warn('Usuario o Contraseña Erroneos')
      }
    } catch (error) {
      console.log(error)
      // message.error(error)
    }
  }

  return <Provider value={{ usuario, login }}>{children}</Provider>
}

export { GlobalProvider, Consumer as GlobalConsumer, GlobalContext }
