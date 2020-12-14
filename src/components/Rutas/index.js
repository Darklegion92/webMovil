import React, { useContext } from "react";
import { Layout } from "antd";
import Head from "./Head";
import Tabla from "./Tabla";
import { GlobalContext } from "../../context/GlobalContext";

const { Content } = Layout;
function Rutas() {
  const {
    usuarios,
    guardarRuta,
    consultarRutas,
    rutas,
    eliminarRuta,
  } = useContext(GlobalContext);

  return (
    <Content
      style={{
        padding: "50px",
        height: "100%",
        backgroundColor: "white",
      }}
    >
      <Head
        usuarios={usuarios}
        guardarRuta={guardarRuta}
        consultarRutas={consultarRutas}
      />
      <Tabla rutas={rutas} eliminarRuta={eliminarRuta} />
    </Content>
  );
}

export default Rutas;
