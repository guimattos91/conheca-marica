import { memo, useState } from 'react'

import Offcanvas from 'react-bootstrap/Offcanvas'
import { AiOutlineClose } from 'react-icons/ai'
import { BiMenu } from 'react-icons/bi'
import { BsHouseDoorFill } from 'react-icons/bs'
import { FaUmbrellaBeach, FaBed, FaStoreAlt, FaRoute } from 'react-icons/fa'
import { GiMicrophone, GiSewingNeedle } from 'react-icons/gi'
import { MdRestaurant, MdDateRange } from 'react-icons/md'
import { RiInformationLine } from 'react-icons/ri'

import {
  AStyled,
  ButtonStyled,
  DivStripes,
  LinkStyled,
  OffCanvasStyled,
} from './style'

const MenuComponent: React.FC = () => {
  const [show, setShow] = useState(false)

  const handleClose = (): void => setShow(false)

  const handleShow = (): void => setShow(true)

  return (
    <>
      <ButtonStyled
        variant="link"
        className="d-flex align-items-center text-white"
        onClick={handleShow}
      >
        <BiMenu size={28} />
        <span className="d-none d-md-inline">Menu</span>
      </ButtonStyled>

      <OffCanvasStyled
        show={show}
        onHide={handleClose}
        style={{ width: '250px' }}
      >
        <Offcanvas.Header className="d-flex m-0 p-0 justify-content-end">
          <ButtonStyled
            variant="link"
            className="d-flex align-items-center text-white mt-3"
            onClick={handleClose}
          >
            <AiOutlineClose size={18} />
          </ButtonStyled>
        </Offcanvas.Header>
        <Offcanvas.Body className="d-flex flex-column">
          <DivStripes className="pt-3">
            <LinkStyled to="/" className="d-flex align-items-center">
              <BsHouseDoorFill color="white" />
              <p className="ps-2 m-0">Inicial</p>
            </LinkStyled>
          </DivStripes>

          <DivStripes>
            <LinkStyled to="/sobre" className="d-flex align-items-center">
              <RiInformationLine color="white" />
              <p className="ps-2 m-0">Sobre a cidade</p>
            </LinkStyled>
          </DivStripes>

          <DivStripes>
            <LinkStyled
              to="/pontos-turisticos"
              className="d-flex align-items-center"
            >
              <FaUmbrellaBeach color="white" />
              <p className="ps-2 m-0">Pontos Turísticos</p>
            </LinkStyled>
          </DivStripes>

          <DivStripes>
            <LinkStyled
              to="/hoteis-e-pousadas"
              className="d-flex align-items-center"
            >
              <FaBed color="white" />
              <p className="ps-2 m-0">Hotéis e Pousadas</p>
            </LinkStyled>
          </DivStripes>

          <DivStripes>
            <LinkStyled
              to="/bares-e-restaurantes"
              className="d-flex align-items-center"
            >
              <MdRestaurant color="white" />
              <p className="ps-2 m-0">Bares e Restaurantes</p>
            </LinkStyled>
          </DivStripes>

          <DivStripes>
            <LinkStyled to="/comercios" className="d-flex align-items-center">
              <FaStoreAlt color="white" />
              <p className="ps-2 m-0">Comércio Local</p>
            </LinkStyled>
          </DivStripes>

          <DivStripes>
            <LinkStyled
              to="/espacos-para-eventos"
              className="d-flex align-items-center"
            >
              <MdDateRange color="white" />
              <p className="ps-2 m-0">Espaços para Eventos</p>
            </LinkStyled>
          </DivStripes>

          <DivStripes>
            <LinkStyled to="/eventos" className="d-flex align-items-center">
              <GiMicrophone color="white" />
              <p className="ps-2 m-0">Eventos</p>
            </LinkStyled>
          </DivStripes>

          <DivStripes>
            <AStyled
              href="https://contato.site/5d9bab8/marica-cvb3/paginaprincipal"
              target="_blank"
              rel="noreferrer"
              className="d-flex align-items-center"
            >
              <FaRoute color="white" />
              <p className="ps-2 m-0">Roteiros Turísticos</p>
            </AStyled>
          </DivStripes>

          <DivStripes>
            <AStyled
              href="https://www.feirartemarica.com.br/"
              target="_blank"
              rel="noreferrer"
              className="d-flex align-items-center"
            >
              <GiSewingNeedle color="white" />
              <p className="ps-2 m-0">Artesanatos</p>
            </AStyled>
          </DivStripes>
        </Offcanvas.Body>
      </OffCanvasStyled>
    </>
  )
}

export default memo(MenuComponent)
