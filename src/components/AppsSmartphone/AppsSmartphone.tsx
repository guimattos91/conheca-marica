import { memo } from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import AppleStoreLogo from 'assets/AppleApp.png'
import GoogleStoreLogo from 'assets/GoogleApp.png'
import MockupFone from 'assets/mockupfone.png'

import {
  StyleBackgrounDiv,
  StyleDetailDiv,
  StyleText,
  StyleTitle,
} from './style'

const AppsSmartphone: React.FC = () => (
  <StyleBackgrounDiv className="py-5">
    <StyleDetailDiv className="d-none d-md-flex" />
    <Container className="d-flex justify-content-between">
      <Row style={{ zIndex: 1 }} className="row-cols-1 row-cols-md-2">
        <Col xs={12} md={7}>
          <div className="d-flex flex-column justify-content-center">
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
        <Col xs={12} md={5} className="text-center text-lg-end pt-4">
          <img src={MockupFone} alt="Logo-Turismo" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  </StyleBackgrounDiv>
)

export default memo(AppsSmartphone)
