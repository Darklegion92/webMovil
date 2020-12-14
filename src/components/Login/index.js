import React, { useContext } from "react";
import { Layout, Button, Typography, Input, Form, Card, Image } from "antd";
import { GlobalContext } from "../../context/GlobalContext";
import { Redirect } from "react-router-dom";

const { Content } = Layout;
const { Title } = Typography;

function Login() {
  const { login } = useContext(GlobalContext);

  const onFinish = async (datos) => {
    await login(datos);
  };
  return (
    <Content
      style={{ backgroundColor: "white", margin: "auto", paddingTop: "50px" }}
    >
      <Card
        hoverable
        style={{ width: 280 }}
        cover={
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              paddingTop: "10px",
            }}
          >
            <Image src="logo192.png" width="150px" />
          </div>
        }
      >
        <Title level={3}>INGRESAR</Title>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            name="usuario"
            label="Usuario"
            rules={[
              { required: true, message: "Ususario no puede estar vacío" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="Contraseña"
            rules={[
              { required: true, message: "Contraseña no puede estar vacía" },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              INGRESAR
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Content>
  );
}

export default Login;
