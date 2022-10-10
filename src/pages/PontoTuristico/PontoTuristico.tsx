import { memo, useEffect } from 'react'

// eslint-disable-next-line import-helpers/order-imports
import { Col, Ratio, Row, Spinner } from 'react-bootstrap'

import { BsArrowLeft } from 'react-icons/bs'
import SVG from 'react-inlinesvg'
import { Link, useParams } from 'react-router-dom'
import Slider from 'react-slick'
import { MainStyled } from 'style/style'

import AppleStoreLogo from 'assets/AppleApp.png'
import GoogleStoreLogo from 'assets/GoogleApp.png'

import { usePoints } from 'context/PointsContext'

import Footer from 'components/Footer'
import GoogleMapComponent from 'components/GoogleMapComponent'
import Header from 'components/Header'
import TitleH2Intern from 'components/TitleH2Intern'

import useTitle from 'hooks/useTitle'

import {
  ListStyle,
  StyledContainer,
  StyledH1,
  StyledH2,
  StyledSmallText,
} from './style'

const PontoTuristico: React.FC = () => {
  const { point, isLoading, error, fetchPoint } = usePoints()
  const { id } = useParams()
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const setTitle = useTitle()
  useEffect(() => setTitle(`${point?.nome}`))

  useEffect(() => {
    if (id) fetchPoint(Number(id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchPoint, id])

  return (
    <>
      <Header />
      <MainStyled className="pb-5">
        {isLoading && (
          <div className="d-flex justify-content-center">
            <Spinner animation="grow" variant="success" />
          </div>
        )}
        {!isLoading && !error && point && (
          <>
            <Row className="d-flex row-cols-1 pb-5">
              {/* eslint-disable-next-line react/jsx-props-no-spreading */}
              <Slider {...settings}>
                {point.images.map((imagem) => (
                  <Col key={imagem.id}>
                    <Ratio
                      aspectRatio="1x1"
                      style={{
                        backgroundImage: `url(${imagem.src})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center center',
                      }}
                    >
                      <div />
                    </Ratio>
                  </Col>
                ))}
              </Slider>
            </Row>
            <StyledContainer>
              <Row>
                <Col key={point.id}>
                  <div className="d-flex align-items-center">
                    <Link to="/pontos-turisticos" className="pe-3">
                      <BsArrowLeft size={20} color="#333" />
                    </Link>
                    <div className="d-flex flex-column">
                      <StyledSmallText>Pontos</StyledSmallText>
                      <StyledH1>{point.nome}</StyledH1>
                    </div>
                  </div>
                  <div className="pt-3">
                    <ListStyle className="d-flex">
                      {!isLoading &&
                        !error &&
                        point.categorias.map(
                          (category: { id: number; label: string }) => (
                            <li
                              key={category.id}
                              className="d-flex align-items-center"
                            >
                              <p className="d-inline-flex w-100 p-0 m-0">
                                {category.label}
                              </p>
                            </li>
                          ),
                        )}
                    </ListStyle>
                    <p>{point.descricao_t}</p>
                  </div>
                  <div>
                    <TitleH2Intern title="Sobre" />
                    {!isLoading &&
                      !error &&
                      point.addresses.map(
                        (address: { id: number; label: string }) => (
                          <p key={address.id} className="d-inline-flex w-100">
                            {address.label}
                          </p>
                        ),
                      )}
                  </div>
                  <div>
                    {point.dicas_t && (
                      <>
                        <TitleH2Intern title="Dicas" />
                        <div className="d-flex flex-wrap">
                          <p>{point.dicas_t}</p>
                        </div>
                      </>
                    )}
                  </div>
                  {point.viajantes && (
                    <div>
                      <TitleH2Intern title="Tipos de Viajantes" />
                      <div className="d-flex flex-wrap">
                        {!isLoading &&
                          !error &&
                          point.viajantes.map(
                            (traveller: { label: string }) => (
                              <div className="d-flex align-items-center pe-4 py-4">
                                <p
                                  key={traveller.label}
                                  className="d-inline-flex ps-2 m-0"
                                >
                                  {traveller.label}
                                </p>
                              </div>
                            ),
                          )}
                      </div>
                    </div>
                  )}
                  {point.estruturas && (
                    <>
                      <TitleH2Intern title="Estruturas" />
                      <div className="d-flex flex-wrap">
                        {!isLoading &&
                          !error &&
                          point.estruturas.map(
                            (structure: { icone: string; label: string }) => (
                              <div className="d-flex align-items-center pe-4 py-4">
                                <SVG
                                  src={structure.icone}
                                  width={30}
                                  fill="#6ebd00"
                                  color="#6ebd00"
                                  height="auto"
                                  title={structure.label}
                                />
                                <p
                                  key={structure.label}
                                  className="d-inline-flex ps-2 m-0"
                                >
                                  {structure.label}
                                </p>
                              </div>
                            ),
                          )}
                      </div>
                    </>
                  )}
                  {point.restricoes && (
                    <div>
                      <TitleH2Intern title="Restrições" />
                      <div className="d-flex flex-wrap">
                        {!isLoading &&
                          !error &&
                          point.restricoes.map(
                            (restriction: { icone: string; label: string }) => (
                              <div className="d-flex align-items-center pe-4 py-4">
                                <SVG
                                  src={restriction.icone}
                                  width={30}
                                  fill="#6ebd00"
                                  height="auto"
                                  title={restriction.label}
                                />
                                <p
                                  key={restriction.label}
                                  className="d-inline-flex ps-2 m-0"
                                >
                                  {restriction.label}
                                </p>
                              </div>
                            ),
                          )}
                      </div>
                    </div>
                  )}
                  {point.formas_pagamento?.length >= 1 && (
                    <div>
                      <TitleH2Intern title="Formas de Pagamento" />
                      <div className="d-flex flex-wrap">
                        {!isLoading &&
                          !error &&
                          point.formas_pagamento.map(
                            (payment: { icone: string; label: string }) => (
                              <div className="d-flex align-items-center pe-4 py-4">
                                <SVG
                                  src={payment.icone}
                                  width={30}
                                  fill="#6ebd00"
                                  height="auto"
                                  title={payment.label}
                                />
                                <p
                                  key={payment.label}
                                  className="d-inline-flex ps-2 m-0"
                                >
                                  {payment.label}
                                </p>
                              </div>
                            ),
                          )}
                      </div>
                    </div>
                  )}
                </Col>
                <Col className="col-4">
                  <StyledH2>Localização</StyledH2>
                  <GoogleMapComponent
                    latitude={Number(point?.addresses[0].lat)}
                    longitude={Number(point?.addresses[0].lng)}
                  />
                  <StyledH2 className="pt-5">Conheça nosso app</StyledH2>
                  <div className="d-flex pt-2">
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
              </Row>
            </StyledContainer>
          </>
        )}
      </MainStyled>
      <Footer />
    </>
  )
}

export default memo(PontoTuristico)
