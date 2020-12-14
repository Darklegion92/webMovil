import React, { useRef } from "react";
import {
  Row,
  Col,
  Form,
  Typography,
  Input,
  Select,
  Button,
  Space,
  Divider,
  message,
} from "antd";

import { SearchOutlined } from "@ant-design/icons";

const { Title } = Typography;
const { Option } = Select;

function Head({ usuarios, guardarRuta, consultarRutas }) {
  const refDocumento = useRef(null);
  const onFinish = (datos) => {
    console.log(datos);
    if (datos.documento) {
      guardarRuta(datos);
      refDocumento.current.select();
    } else {
      consultarRutas(datos.usuario);
    }
  };

  return (
    <Row gutter={16} justify="center">
      <Col span={14}>
        <Title level={4}>AGREGAR RUTA</Title>
        <Form layout="vertical" name="add" onFinish={onFinish}>
          <Space>
            <Form.Item
              name="usuario"
              label="Usuario"
              style={{ width: "150px" }}
              rules={[{ required: true, message: "Seleccione Usuario" }]}
            >
              <Select defaultValue="Seleccione...">
                {usuarios &&
                  usuarios.map((usuario) => {
                    return <Option key={usuario._id}>{usuario.usuario}</Option>;
                  })}
              </Select>
            </Form.Item>
            <Form.Item
              name="diasemana"
              label="Día Semana"
              style={{ width: "150px" }}
              rules={[{ required: true, message: "Seleccione Día" }]}
            >
              <Select defaultValue="Seleccione...">
                <Option key={0}>Domingo</Option>
                <Option key={1}>Lunes</Option>
                <Option key={2}>Martes</Option>
                <Option key={3}>Miercoles</Option>
                <Option key={4}>Jueves</Option>
                <Option key={5}>Viernes</Option>
                <Option key={6}>Sabado</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="documento"
              label="Documento"
              rules={[{ required: true, message: "Seleccione Documento" }]}
            >
              <Input ref={refDocumento} />
            </Form.Item>
            <Form.Item label=" ">
              <Button type="primary" htmlType="submit">
                AGREGAR
              </Button>
            </Form.Item>
          </Space>
        </Form>
      </Col>
      <Divider type="vertical" />
      <Col span={5}>
        <Title level={4}>BUSCAR RUTA</Title>
        <Form layout="vertical" name="buscar" onFinish={onFinish}>
          <Space>
            <Row>
              <Col>
                <Form.Item name="usuario" label="Usuario">
                  <Select
                    defaultValue="Seleccione..."
                    style={{ width: "150px" }}
                  >
                    {usuarios &&
                      usuarios.map((usuario) => {
                        return (
                          <Option key={usuario._id}>{usuario.usuario}</Option>
                        );
                      })}
                  </Select>
                </Form.Item>
              </Col>
              <Col>
                <Form.Item label=" ">
                  <Button
                    type="primary"
                    htmlType="submit"
                    icon={<SearchOutlined />}
                  />
                </Form.Item>
              </Col>
            </Row>
          </Space>
        </Form>
      </Col>
    </Row>
  );
}

export default Head;
