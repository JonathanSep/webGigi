import { Container, Row, Col } from "react-bootstrap";
import { Carruseles } from "./carousels";
import { Tarjeta } from "./cards";
import { Separador } from "./separador";
import prod1 from "../assets/prod5.jpg";
import prod2 from "../assets/prod6.jpg";
import prod3 from "../assets/prod7.jpg";

function Home() {
  return (
    <Container>
      <h1>Home</h1>
      <Carruseles />
      <Separador />
      <Row className="justify-content-center g-4">
        <Col xs={12} sm={12} md={6} lg={4} className="d-flex justify-content-center">
          <Tarjeta
            imagen={prod1}
            titulo={"Aros Gigi - Modelo Elipse"}
            texto={
              "Diseño moderno y artesanal, elaborados a mano con arcilla polimérica. Livianos, únicos y elegantes para cualquier ocasión."
            }
            boton={"Ver detalles"}
          />
        </Col>
        <Col xs={12} sm={12} md={6} lg={4} className="d-flex justify-content-center">
          <Tarjeta
            imagen={prod2}
            titulo={"Aros Gigi - Colección Flor"}
            texto={
              "Inspirados en la naturaleza, estos aros combinan delicadeza y estilo. Ideales para realzar tu look con un toque artesanal."
            }
            boton={"Descubrir más"}
          />
        </Col>
        <Col xs={12} sm={12} md={6} lg={4} className="d-flex justify-content-center">
          <Tarjeta
            imagen={prod3}
            titulo={"Aros Gigi - Gota Abstracta"}
            texto={
              "Una pieza exclusiva con forma orgánica. Hechos a mano con materiales de alta calidad para destacar tu personalidad."
            }
            boton={"Explorar diseño"}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
