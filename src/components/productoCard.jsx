import { useState } from 'react';
import { Modal } from 'react-bootstrap';

export function ProductoCard({ imagen, titulo, precio }) {
  const [show, setShow] = useState(false);

  const handleOpen = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <div className="producto-card" onClick={handleOpen}>
        <img src={imagen} alt={titulo} className="producto-card__img" />
        <div className="producto-card__info">
          <h3>{titulo}</h3>
          <p className="producto-card__precio">{precio}</p>
        </div>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdropClassName="modal-blur-background"
        dialogClassName="modal-fullwidth-centered"
        centered
      >
        <Modal.Body className="p-0" onClick={handleClose}>
          <img
            src={imagen}
            alt={titulo}
            className="modal-image"
          />
        </Modal.Body>
      </Modal>
    </>
  );
}
