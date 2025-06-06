import { Container, Row, Col } from 'react-bootstrap';
import imagen from '../assets/taller.png';

export default function Negocio() {
  return (
    <Container className="py-5 negocio-container">
      <Row className="mb-4">
        <Col>
          <h2 className="text-center">Sobre Gigi Accesorios</h2>
          <p className="text-center fst-italic">
            Un espacio donde la creatividad se transforma en accesorios únicos hechos a mano con amor y dedicación.
          </p>
        </Col>
      </Row>

      <Row className="align-items-center mb-5">
        <Col md={6}>
          <img src={imagen} alt="Taller Gigi" className="img-fluid rounded shadow" />
        </Col>
        <Col md={6}>
          <h4>¿Quiénes somos?</h4>
          <p>
            Gigi Accesorios nace de la pasión por crear con las manos, rescatando la belleza en lo simple. Cada pieza es diseñada
            artesanalmente, cuidando cada detalle para ofrecer un producto que refleje identidad, cariño y estilo propio.
          </p>
          <p>
            Trabajamos con arcilla polimérica y materiales livianos, buscando siempre comodidad, originalidad y diseño atemporal.
          </p>
        </Col>
      </Row>

      <Row>
        <Col>
          <h4 className="text-center">Nuestros valores</h4>
          <ul className="text-center list-unstyled">
            <li>💖 Hecho a mano con amor</li>
            <li>🎨 Diseño exclusivo y artístico</li>
            <li>🌿 Producción consciente</li>
            <li>📦 Atención personalizada</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
