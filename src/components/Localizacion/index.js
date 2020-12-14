import React, { useContext } from "react";
import { Layout, Col, Row, Form, Select, DatePicker, Button } from "antd";
import Map from "./Map";
import { GlobalContext } from "../../context/GlobalContext";

const { Content } = Layout;
const { RangePicker } = DatePicker;
const { Option } = Select;

function Localizacion() {
  const {
    usuarios,
    localizacionUsuarioFecha,
    localizacionUsuario,
  } = useContext(GlobalContext);

  const onFinish = (datos) => {
    localizacionUsuarioFecha(datos);
  };
  return (
    <Content style={{ backgroundColor: "white", paddingTop: "30px" }}>
      <Row gutter={16} justify="center" align="middle">
        <Col span={5}>
          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item
              name="usuario"
              label="Usuario"
              rules={[{ required: true, message: "Usuario Vacío" }]}
            >
              <Select defaultValue="Seleccione..." style={{ width: "270px" }}>
                {usuarios &&
                  usuarios.map((usuario) => {
                    return <Option key={usuario._id}>{usuario.usuario}</Option>;
                  })}
              </Select>
            </Form.Item>
            <Form.Item
              name="fechas"
              label="Fechas"
              rules={[{ required: true, message: "Fechas Erroneas" }]}
            >
              <RangePicker />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                CONSULTAR
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col span={17}>
          <Map localizacionUsuario={localizacionUsuario} />
        </Col>
      </Row>
    </Content>
  );
}

export default Localizacion;
