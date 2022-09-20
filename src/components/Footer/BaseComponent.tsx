import { memo } from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs'
import { Link } from 'react-router-dom'

import LogoTurismo from 'assets/logo-footer-marica.png'
import LogoMaricaProtege from 'assets/marica-protege-logo.png'

import { StyledA, StyleFooter } from './style'

const Footer: React.FC = () => (
  <StyleFooter>
    <Container>
      <Row className="row-cols-1 row-cols-xl-2 d-flex align-items-center pb-5">
        <Col className="pt-3">
          <div className="d-flex flex-column justify-content-center justify-content-xl-start align-items-center align-items-xl-start">
            <div className="d-flex align-items-center pt-3">
              <StyledA
                href="https://web.facebook.com/prefeiturademarica"
                className="d-flex align-items-center"
              >
                <BsFacebook className="me-2" />
                <p className="d-none d-md-flex m-0">Facebook</p>
              </StyledA>

              <StyledA
                href="https://www.instagram.com/prefeiturademarica"
                className="d-flex align-items-center"
              >
                <BsInstagram className="mx-2" />
                <p className="d-none d-md-flex m-0">Instagram</p>
              </StyledA>

              <StyledA
                href="https://twitter.com/MaricaRJ"
                className="d-flex align-items-center"
              >
                <BsTwitter className="mx-2" />
                <p className="d-none d-md-flex m-0">Twitter</p>
              </StyledA>

              <StyledA
                href="https://www.youtube.com/user/prefeiturademarica1"
                className="d-flex align-items-center"
              >
                <BsYoutube className="mx-2" />
                <p className="d-none d-md-flex m-0">Youtube</p>
              </StyledA>
            </div>
            <div className="pt-2">
              <StyledA
                className="text-decoration-underline"
                href="https://app.marica2030.com.br/login"
              >
                Área do comerciante
              </StyledA>
            </div>
          </div>
        </Col>
        <Col className="pt-3">
          <div className="d-flex flex-column flex-md-row justify-content-center justify-content-xl-end align-items-center">
            <div className="d-block pe-md-3 pt-3">
              <img
                src={LogoMaricaProtege}
                alt="Marica-Protege"
                width="115px"
                className="d-flex align-items-center justify-content-center img-fluid"
              />
            </div>
            <div className="d-block pe-md-3 pt-3">
              <StyledA
                className="text-decoration-underline"
                href="https://www.conhecamarica.com.br/static/media/guia-gastronomico.f9556598.pdf"
              >
                Manual Gastronomia
              </StyledA>
              <StyledA
                className="d-flex flex-nowrap text-decoration-underline"
                href="https://www.conhecamarica.com.br/static/media/guia-hospedagem.2046547a.pdf"
              >
                Manual Hospedagem
              </StyledA>
            </div>
            <div className="pt-3">
              <Link to="/">
                <img
                  src={LogoTurismo}
                  alt="Logo-Turismo"
                  width="auto"
                  className="d-flex align-items-center justify-content-center img-fluid"
                />
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </StyleFooter>
)

export default memo(Footer)
