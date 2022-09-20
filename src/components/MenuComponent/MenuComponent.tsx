import { memo, useState } from 'react'

import { Button } from 'react-bootstrap'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { BiMenu } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const AppsSmartphone: React.FC = () => {
  const [show, setShow] = useState(false)

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleClose = () => setShow(false)
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleShow = () => setShow(true)

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <BiMenu className="d-flex align-items-center" />
        <p className="d-none d-md-flex align-items-center m-0">Menu</p>
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Link to="/"> oi </Link>
        <Link to="/pontos-turisticos" /> oi </Link>
        <Link to="/hoteis-e-pousadas"  />oi </Link>
        <Link to="/bares-e-restaurantes" />oi </Link>
        <Link to="/espacos-para-eventos" />oi </Link>
        <Link to="/eventos"  />oi </Link>
        <Link to="/comercio" />oi </Link>
        <Link to="/sobre" />oi </Link>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default memo(AppsSmartphone)
