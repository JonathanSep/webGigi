import { Container } from "react-bootstrap";
import { ProductoCard } from './productoCard';
import prod1 from '../assets/prod1.jpg';
import prod2 from '../assets/prod2.jpg';
import prod3 from '../assets/prod3.jpg';
import prod4 from '../assets/prod4.jpg';
import prod5 from '../assets/prod5.jpg';
import prod6 from '../assets/prod6.jpg';
import prod7 from '../assets/prod7.jpg';
import prod8 from '../assets/prod8.jpg';

function Catalogo() {  
  return (
    <Container>
      <h1>Catalogo</h1>

      <div className="catalogo-grid">
        <ProductoCard titulo="Aros Elipse" precio="$4.500" imagen={prod1} />
        <ProductoCard titulo="Aros Flor" precio="$5.000" imagen={prod2} />      
        <ProductoCard titulo="Aros Flor" precio="$5.000" imagen={prod3} />      
        <ProductoCard titulo="Aros Flor" precio="$5.000" imagen={prod4} />      
        <ProductoCard titulo="Aros Flor" precio="$5.000" imagen={prod5} />      
        <ProductoCard titulo="Aros Flor" precio="$5.000" imagen={prod6} />      
        <ProductoCard titulo="Aros Flor" precio="$5.000" imagen={prod7} />      
        <ProductoCard titulo="Aros Flor" precio="$5.000" imagen={prod8} />      
      </div>
    </Container>    
  );
}

export default Catalogo;