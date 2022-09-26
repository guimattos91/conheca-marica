import React, { memo } from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs'
import { Link } from 'react-router-dom'

import LogoMobile from 'assets/logo-marica-mobile.png'
import Logo from 'assets/logo-marica.png'

import MenuComponent from 'components/MenuComponent'

import { StyledA, StyleHeader } from './style'

const Header: React.FC = () => (
  <StyleHeader>
    <Container>
      <Row className="d-flex align-items-center justify-content-md-between py-3">
        <Col className="d-flex align-items-center ">
          <MenuComponent />
        </Col>
        <Col>
          <Link to="/">
            <img
              src={Logo}
              alt="Logo - Conheça Maricá"
              width="auto"
              className="d-none d-md-flex align-items-center justify-content-center img-fluid"
            />
            <img
              src={LogoMobile}
              alt="Logo Mobile- Conheça Maricá"
              width="auto"
              className="d-flex text-center justify-content-center d-md-none img-fluid"
            />
          </Link>
        </Col>
        <Col className="d-none d-md-flex align-items-center justify-content-end">
          <div className="pt-3">
            <StyledA href="https://web.facebook.com/prefeiturademarica">
              <BsFacebook className="mx-2" />
            </StyledA>
            <StyledA href="https://www.instagram.com/prefeiturademarica">
              <BsInstagram />
            </StyledA>
            <StyledA href="https://twitter.com/MaricaRJ">
              <BsTwitter className="mx-2" />
            </StyledA>
            <StyledA href="https://www.youtube.com/user/prefeiturademarica1">
              <BsYoutube />
            </StyledA>
          </div>
        </Col>
      </Row>
    </Container>
  </StyleHeader>
)

export default memo(Header)
