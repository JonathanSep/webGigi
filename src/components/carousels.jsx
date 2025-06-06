import Carousel from "react-bootstrap/Carousel";
import prod1 from "../assets/prod1.jpg";
import prod2 from "../assets/prod2.jpg";
import prod3 from "../assets/prod3.jpg";

export function Carruseles() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={prod1} alt="Producto 1" className="carousels__img" />
        <Carousel.Caption>
          <h3>Florales en azul cielo</h3>
          <p>
            Diseños delicados con flores y detalles dorados, ideales para un
            look artesanal y vibrante.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src={prod2} alt="Producto 2" className="carousels__img" />
        <Carousel.Caption>
          <h3>Colores que inspiran</h3>
          <p>
            Formas geométricas y corazones en tonos pastel para combinar con tu
            estilo más tierno.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src={prod3} alt="Producto 3" className="carousels__img" />
        <Carousel.Caption>
          <h3>Mix floral multicolor</h3>
          <p>
            Una explosión de color y creatividad: piezas únicas para destacar en
            cualquier ocasión.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
