import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function Tarjeta({ imagen, titulo, texto, boton }) {
  return (
    <Card className="cards__img--producto">
      <div className="cards__img--producto_div">
        <Card.Img
          variant="top"
          src={imagen}
          className="cards__img--producto_img"
        />
      </div>
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>
          {texto}
        </Card.Text>
        <Button variant="primary">{boton}</Button>
      </Card.Body>
    </Card>
  );
}

