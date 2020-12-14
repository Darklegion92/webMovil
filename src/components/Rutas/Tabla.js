import React from 'react'
import { Table } from 'antd'

const columns = [
  {
    title: 'Documento',
    dataIndex: 'documento',
    key: 'documento'
  },
  {
    title: 'Nombre',
    dataIndex: 'Nombre',
    key: 'nombre'
  },
  {
    title: 'Usuario',
    dataIndex: 'usuario',
    key: 'usuario'
  },
  {
    title: 'Dia Semana',
    dataIndex: 'dia',
    key: 'dia'
  }
]
function Tabla () {
  return <Table columns={columns} />
}

export default Tabla
