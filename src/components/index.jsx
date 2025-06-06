import { Outlet, Link, useLocation  } from 'react-router-dom';
import { Container, Breadcrumb, Col } from "react-bootstrap";
import { Footer } from './footer';

function Index() {  
  const location = useLocation();
  const currentPath = location.pathname;
  
  return (
    <div className="home__div-container">
      <div className="home__div--principal">
        <Container>
          <div className="header-logo mx-auto"></div>

          <Breadcrumb>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/home' }} active={currentPath === '/home' || currentPath === '/'}>
              Inicio
            </Breadcrumb.Item>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/catalogo' }} active={currentPath === '/catalogo'}>
              Catálogo
            </Breadcrumb.Item>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/negocio' }} active={currentPath === '/negocio'}>
              Sobre Nosotros
            </Breadcrumb.Item>
          </Breadcrumb>

          <hr />
        </Container>

        <main className="main-content">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default Index;