import { memo, useState } from 'react'

import Offcanvas from 'react-bootstrap/Offcanvas'
import { BiMenu } from 'react-icons/bi'
import { BsHouseDoorFill } from 'react-icons/bs'
import { FaUmbrellaBeach, FaBed, FaStoreAlt } from 'react-icons/fa'
import { GiMicrophone } from 'react-icons/gi'
import { MdRestaurant, MdDateRange } from 'react-icons/md'
import { RiInformationLine } from 'react-icons/ri'

import { ButtonStyled, DivStripes, LinkStyled, OffCanvasStyled } from './style'

const MenuComponent: React.FC = () => {
  const [show, setShow] = useState(false)

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleClose = () => setShow(false)
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleShow = () => setShow(true)

  return (
    <>
      <ButtonStyled
        variant="outline-light"
        className="d-flex align-items-center"
        onClick={handleShow}
      >
        <BiMenu />
        <p className="d-none d-md-flex ps-2 m-0">Menu</p>
      </ButtonStyled>

      <OffCanvasStyled show={show} onHide={handleClose}>
        <Offcanvas.Header color="white" closeButton>
          <Offcanvas.Title color="white">Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="d-flex flex-column">
          <DivStripes>
            <LinkStyled to="/" className="d-flex align-items-center">
              <BsHouseDoorFill color="white" />
              <p className="ps-2 m-0">Home</p>
            </LinkStyled>
          </DivStripes>
          <LinkStyled to="/sobre" className="d-flex align-items-center">
            <RiInformationLine color="white" />
            <p className="ps-2 m-0">Sobre a cidade</p>
          </LinkStyled>
          <LinkStyled
            to="/pontos-turisticos"
            className="d-flex align-items-center"
          >
            <FaUmbrellaBeach color="white" />
            <p className="ps-2 m-0">Pontos Turísticos</p>
          </LinkStyled>
          <LinkStyled
            to="/hoteis-e-pousadas"
            className="d-flex align-items-center"
          >
            <FaBed color="white" />
            <p className="ps-2 m-0">Hotéis e Pousadas</p>
          </LinkStyled>
          <LinkStyled
            to="/bares-e-restaurantes"
            className="d-flex align-items-center"
          >
            <MdRestaurant color="white" />
            <p className="ps-2 m-0">Bares e Restaurantes</p>
          </LinkStyled>
          <LinkStyled
            to="/espacos-para-eventos"
            className="d-flex align-items-center"
          >
            <MdDateRange color="white" />
            <p className="ps-2 m-0">Espaços para Eventos</p>
          </LinkStyled>
          <LinkStyled to="/eventos" className="d-flex align-items-center">
            <GiMicrophone color="white" />
            <p className="ps-2 m-0">Eventos</p>
          </LinkStyled>
          <LinkStyled to="/comercios" className="d-flex align-items-center">
            <FaStoreAlt color="white" />
            <p className="ps-2 m-0">Comércio</p>
          </LinkStyled>
        </Offcanvas.Body>
      </OffCanvasStyled>
    </>
  )
}

export default memo(MenuComponent)
