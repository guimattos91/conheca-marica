import { memo } from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import AppleStoreLogo from 'assets/AppleApp.png'
import GoogleStoreLogo from 'assets/GoogleApp.png'
import MockupFone from 'assets/mockupfone.png'

import { StyleBackgrounDiv, StyleText, StyleTitle } from './style'

const AppsSmartphone: React.FC = () => (
  <StyleBackgrounDiv>
    <Container>
      <Row className="row-cols-1 row-cols-xl-2 d-flex justify-content-between pb-5">
        <Col className="ps-4 pt-3">
          <div className="d-flex flex-column justify-content-center pt-3">
            <StyleTitle>Conheça nosso aplicativo</StyleTitle>
            <StyleText>
              Tenha o Guia Oficial de Turismo de Maricá a qualquer momento, na
              palma das suas mãos!
            </StyleText>
          </div>
          <div className="d-flex pt-4">
            <Link to="https://apps.apple.com/br/app/maric%C3%A1-oficial/id1493299199">
              <img
                src={AppleStoreLogo}
                alt="Logo-Turismo"
                width="auto"
                className="pe-3 img-fluid"
              />
            </Link>
            <Link to="https://play.google.com/store/apps/details?id=com.marica2030.app">
              <img
                src={GoogleStoreLogo}
                alt="Logo-Turismo"
                width="auto"
                className="img-fluid"
              />
            </Link>
          </div>
        </Col>
        <Col className="pe-4 pt-3">
          <div className="d-flex justify-content-end pt-3">
            <img
              src={MockupFone}
              alt="Logo-Turismo"
              width="auto"
              className="img-fluid"
            />
          </div>
        </Col>
      </Row>
    </Container>
  </StyleBackgrounDiv>
)

export default memo(AppsSmartphone)
