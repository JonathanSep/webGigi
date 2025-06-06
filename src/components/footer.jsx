import { FaInstagram, FaEnvelope, FaFacebookF  } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__brand">Gigi Accesorios</p>
        <p className="footer__tagline">Hecho a mano con amor y dedicación.</p>
        <div className="footer__socials">
          <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram size={20} /></a>
          <a href="mailto:contacto@gigiaccesorios.cl"><FaEnvelope size={20} /></a>
          <a href="#"><FaFacebookF  size={20} /></a>
        </div>
        <p className="footer__copyright">
          © {new Date().getFullYear()} Gigi Accesorios. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
