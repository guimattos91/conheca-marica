import { memo, useEffect } from 'react'

// eslint-disable-next-line import-helpers/order-imports
import { Col, Ratio, Row, Spinner } from 'react-bootstrap'

import { AiOutlineGlobal } from 'react-icons/ai'
import {
  BsArrowLeft,
  BsCheckCircle,
  BsClock,
  BsTelephone,
  BsWhatsapp,
} from 'react-icons/bs'
import { MdOutlineEmail, MdOutlineLocationOn } from 'react-icons/md'
import SVG from 'react-inlinesvg'
import { Link, useParams } from 'react-router-dom'
import Slider from 'react-slick'
import { LinkStyled, MainStyled, TextDescription } from 'style/style'

import AppleStoreLogo from 'assets/AppleApp.png'
import GoogleStoreLogo from 'assets/GoogleApp.png'

import { usePoints } from 'context/PointsContext'

import Footer from 'components/Footer'
import GoogleMapComponent from 'components/GoogleMapComponent'
import Header from 'components/Header'
import TitleH2Intern from 'components/TitleH2Intern'

import { strToSlug } from 'helpers'

import useTitle from 'hooks/useTitle'

import {
  DivIcon,
  ListStyle,
  RatioResponsive,
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
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    arrows: false,
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
  const settingsSmall = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 0,
    arrows: true,
    responsive: [
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 0,
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
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Slider {...settings}>
              {point.images.length >= 4 &&
                point.images.map((imagem) => (
                  <div key={imagem.id}>
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
                  </div>
                ))}
            </Slider>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Slider {...settingsSmall}>
              <div className="d-flex justify-content-center">
                {point.images.length < 4 &&
                  point.images.map((imagem) => (
                    <RatioResponsive
                      aspectRatio="1x1"
                      style={{
                        backgroundImage: `url(${imagem.src})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center center',
                      }}
                      key={imagem.id}
                    >
                      <div />
                    </RatioResponsive>
                  ))}
              </div>
            </Slider>
            <StyledContainer>
              <Row className="pt-5">
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
                              <LinkStyled
                                to={`/pontos-turisticos/categorias/${
                                  category.id
                                }/${strToSlug(category.label)}`}
                              >
                                <p className="d-inline-flex w-100 p-0 m-0">
                                  {category.label}
                                </p>
                              </LinkStyled>
                            </li>
                          ),
                        )}
                    </ListStyle>
                    <TextDescription>{point.descricao_t}</TextDescription>
                  </div>
                  <div>
                    <TitleH2Intern title="Sobre" />
                    {point.addresses.map(
                      (address: { id: number; label: string }) => (
                        <div
                          className="d-flex align-items-center pb-4"
                          key={address.id}
                        >
                          <MdOutlineLocationOn
                            color="#6ebd00"
                            size={36}
                            className="pe-2"
                          />
                          <p className="m-0">{address.label}</p>
                        </div>
                      ),
                    )}
                    {point.phones.map(
                      (phone: {
                        id: number
                        number: string
                        nome: string
                        whatsapp: boolean
                      }) => (
                        <div
                          className="d-flex align-items-center pb-3"
                          key={phone.id}
                        >
                          {phone.whatsapp && (
                            <BsWhatsapp
                              color="#6ebd00"
                              size={30}
                              className="pe-2"
                            />
                          )}
                          {!phone.whatsapp && (
                            <BsTelephone
                              color="#6ebd00"
                              size={30}
                              className="pe-2"
                            />
                          )}
                          <div className="d-flex flex-column">
                            <StyledSmallText className="m-0 ">
                              {phone.nome}
                            </StyledSmallText>
                            <p className="m-0">{phone.number}</p>
                          </div>
                        </div>
                      ),
                    )}
                    {point.email && (
                      <div className="d-flex align-items-center pb-3">
                        <MdOutlineEmail
                          color="#6ebd00"
                          size={30}
                          className="pe-2"
                        />
                        <a href={`mailto:${point.email}`}>{point.email}</a>
                      </div>
                    )}
                    {point.site && (
                      <div className="d-flex align-items-center pb-3">
                        <AiOutlineGlobal
                          color="#6ebd00"
                          size={30}
                          className="pe-2"
                        />
                        <a href={point.site}>{point.site}</a>
                      </div>
                    )}
                    {point.redes.map(
                      (network: {
                        icone: string
                        nome: string
                        user: string
                        url: string
                      }) => (
                        <DivIcon
                          key={network.nome}
                          className="d-flex align-items-center pb-3"
                        >
                          <i className={network.icone} />
                          <a href={network.url}>{network.user}</a>
                        </DivIcon>
                      ),
                    )}
                    {point?.horario_funcionamento?.length >= 1 && (
                      <div className="d-flex align-items-start">
                        <BsClock color="#6ebd00" size={20} className="me-4" />
                        <table>
                          <tbody>
                            {point.horario_funcionamento.map(
                              (workinghours: {
                                label: string
                                horario: { abre: string; fecha: string }
                                is24: boolean
                              }) => (
                                <tr>
                                  <td
                                    className="fw-bold pe-5"
                                    key={workinghours.label}
                                  >
                                    {workinghours.label}
                                  </td>
                                  <td>
                                    {workinghours.horario.abre} às
                                    {workinghours.horario.fecha}
                                  </td>
                                </tr>
                              ),
                            )}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                  {point.dicas_t && (
                    <>
                      <TitleH2Intern title="Dicas" />
                      <div className="d-flex flex-wrap">
                        <p>{point.dicas_t}</p>
                      </div>
                    </>
                  )}
                  {point?.viajantes?.length >= 1 && (
                    <>
                      <TitleH2Intern title="Tipos de Viajantes" />
                      <div className="d-flex flex-wrap">
                        {!isLoading &&
                          !error &&
                          point.viajantes.map(
                            (traveller: { label: string }) => (
                              <div className="d-flex align-items-center pe-4 pb-4">
                                <BsCheckCircle
                                  color="#6ebd00"
                                  size={30}
                                  className="pe-2"
                                />
                                <p
                                  key={traveller.label}
                                  className="d-inline-flex m-0"
                                >
                                  {traveller.label}
                                </p>
                              </div>
                            ),
                          )}
                      </div>
                    </>
                  )}
                  {point?.estruturas?.length >= 1 && (
                    <>
                      <TitleH2Intern title="Estruturas" />
                      <div className="d-flex flex-wrap">
                        {!isLoading &&
                          !error &&
                          point.estruturas.map(
                            (structure: { icone: string; label: string }) => (
                              <div className="d-flex align-items-center pe-4 pb-4">
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
                              <div className="d-flex align-items-center pe-4 pb-4">
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
                                <BsCheckCircle color="#6ebd00" size={30} />
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
                <Col xs={12} lg={4}>
                  <StyledH2 className="pb-2">Localização</StyledH2>
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
