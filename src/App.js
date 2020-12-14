import React, { useContext, useEffect } from "react";
import { Layout } from "antd";
import "./App.less";
import Head from "./components/Head";
import Foot from "./components/Foot";
import PrivateRoutes from "./routes/private.routes";
import PublicRoutes from "./routes/public.routes";
import { GlobalContext } from "./context/GlobalContext";

const App = (props) => {
  const { usuario, isAuth, validarAuth } = useContext(GlobalContext);
  useEffect(() => {
    validarAuth();
  }, []);
  return (
    <Layout style={{ backgroundColor: "white" }}>
      {isAuth && <Head usuario={usuario} />}
      <PrivateRoutes props={props} />
      <PublicRoutes />
      <Foot />
    </Layout>
  );
};

export default App;
