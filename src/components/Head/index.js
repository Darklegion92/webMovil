import React from "react";
import { Layout, Menu, Image } from "antd";
import { Link } from "react-router-dom";
import {
  CarOutlined,
  EnvironmentOutlined,
  UserSwitchOutlined,
  PieChartOutlined,
  MenuOutlined,
  UserOutlined,
  ExportOutlined,
} from "@ant-design/icons";

const { Header } = Layout;
const { SubMenu } = Menu;

function Head({ usuario }) {
  return (
    <Header style={{ padding: "0" }}>
      <Menu
        mode="horizontal"
        expandIcon={<MenuOutlined />}
        style={{
          margin: "auto",
          textAlign: "center",
          borderBottom: "solid 1px black",
          padding: "10px",
        }}
      >
        <Image width="70px" src="logo192.png" style={{ marginRight: "30px" }} />
        <Menu.Item icon={<CarOutlined />}>
          <Link to="/rutas">GESTION DE RUTAS</Link>
        </Menu.Item>
        <Menu.Item icon={<EnvironmentOutlined />}>
          <Link to="/localizacion">GEOLOCALIZACION</Link>
        </Menu.Item>
        <Menu.Item icon={<UserSwitchOutlined />}>
          <Link to="/usuarios">GESTION DE USUARIO</Link>
        </Menu.Item>
        <Menu.Item icon={<PieChartOutlined />}>
          <Link to="/informes">INFORMES</Link>
        </Menu.Item>
        <SubMenu
          style={{ textAlign: "right" }}
          icon={<UserOutlined />}
          title={usuario.nombre}
        >
          <Menu.Item icon={<ExportOutlined />}>
            <Link to="/login">Cerrar Sesión</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Header>
  );
}

export default Head;
