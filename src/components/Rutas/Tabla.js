import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "Documento",
    dataIndex: "documento",
    key: "documento",
  },
  {
    title: "Nombre",
    dataIndex: "nombre",
    key: "nombre",
  },
  {
    title: "Dia Semana",
    dataIndex: "diaSemana",
    key: "diaSemana",
  },
];
function Tabla({ rutas, eliminarRuta }) {
  return (
    <Table
      columns={columns}
      dataSource={rutas}
      pagination={{ position: ["bottomCenter"], defaultPageSize: 4 }}
      onRow={(record, rowIndex) => {
        return {
          onDoubleClick: (event) => {
            eliminarRuta(record._id, record.idUsuario);
          }, // click row
        };
      }}
    />
  );
}

export default Tabla;
