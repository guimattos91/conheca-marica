import { memo, useEffect } from 'react'

// eslint-disable-next-line import-helpers/order-imports
import { Col, Ratio, Row, Spinner } from 'react-bootstrap'

import { BsArrowLeft, BsKeyFill } from 'react-icons/bs'
import { FaBed, FaMugHot } from 'react-icons/fa'
import { GiKnifeFork } from 'react-icons/gi'
import SVG from 'react-inlinesvg'
import { Link, useParams } from 'react-router-dom'
import Slider from 'react-slick'
import { MainStyled } from 'style/style'

import AppleStoreLogo from 'assets/AppleApp.png'
import GoogleStoreLogo from 'assets/GoogleApp.png'

import { useHotels } from 'context/HotelsContext'

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

const HotelePousada: React.FC = () => {
  const { hotel, isLoading, error, fetchHotel } = useHotels()
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
  useEffect(() => setTitle(`${hotel?.nome}`))

  useEffect(() => {
    if (id) fetchHotel(Number(id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchHotel, id])

  return (
    <>
      <Header />
      <MainStyled className="pb-5">
        {isLoading && (
          <div className="d-flex justify-content-center">
            <Spinner animation="grow" variant="success" />
          </div>
        )}
        {!isLoading && !error && hotel && (
          <>
            <Row className="d-flex row-cols-1 pb-5">
              {/* eslint-disable-next-line react/jsx-props-no-spreading */}
              <Slider {...settings}>
                {hotel.images.map((imagem) => (
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
                <Col key={hotel.id}>
                  <div className="d-flex align-items-center">
                    <Link to="/hoteis-e-pousadas" className="pe-3">
                      <BsArrowLeft size={20} color="#333" />
                    </Link>
                    <div className="d-flex flex-column">
                      <StyledSmallText>Hotéis e Pousadas</StyledSmallText>
                      <StyledH1>{hotel.nome}</StyledH1>
                    </div>
                  </div>
                  <div className="pt-3">
                    <ListStyle className="d-flex">
                      {!isLoading &&
                        !error &&
                        hotel.categorias.map(
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
                    <p>{hotel.descricao_t}</p>
                  </div>
                  <div>
                    <TitleH2Intern title="Sobre" />
                    {!isLoading &&
                      !error &&
                      hotel.addresses.map(
                        (address: { id: number; label: string }) => (
                          <p key={address.id} className="d-inline-flex w-100">
                            {address.label}
                          </p>
                        ),
                      )}
                  </div>
                  <div>
                    <TitleH2Intern title="Comodidades" />
                    <div className="d-flex align-items-center">
                      {hotel.quartos && (
                        <div className="d-flex align-items-center">
                          <BsKeyFill
                            color="#6ebd00"
                            size={30}
                            className="pe-2"
                          />
                          <p className="pe-5 m-0">{hotel.quartos} Quartos</p>
                        </div>
                      )}
                      {hotel.leitos && (
                        <div className="d-flex align-items-center ps-5">
                          <FaBed color="#6ebd00" size={30} className="pe-2" />
                          <p className="pe-5 m-0">{hotel.leitos} Leitos</p>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    {hotel.cafe_manha && !hotel.cafe_hospedes && (
                      <div className="d-flex align-items-center">
                        <FaMugHot color="#6ebd00" size={30} className="pe-2" />
                        <div className="d-flex flex-column pt-3">
                          <p className="p-0 m-0">Café da manhã</p>
                          <p className="p-0 m-0">Apenas hóspedes</p>
                        </div>
                      </div>
                    )}
                    {hotel.cafe_hospedes && hotel.cafe_manha && (
                      <div className="d-flex align-items-center">
                        <FaMugHot color="#6ebd00" size={30} className="pe-2" />
                        <div className="d-flex flex-column pt-3">
                          <p className="p-0 m-0">Café da manhã</p>
                          <p className="p-0 m-0">Aceita não-hóspedes</p>
                        </div>
                      </div>
                    )}
                    {hotel.almoco && !hotel.almoco_hospedes && (
                      <div className="d-flex align-items-center ps-5">
                        <GiKnifeFork
                          color="#6ebd00"
                          size={30}
                          className="pe-2"
                        />
                        <div className="d-flex flex-column pt-3">
                          <p className="p-0 m-0">Almoço</p>
                          <p className="p-0 m-0">Apenas hóspedes</p>
                        </div>
                      </div>
                    )}
                    {hotel.almoco_hospedes && hotel.almoco_hospedes && (
                      <div className="d-flex align-items-center ps-5">
                        <GiKnifeFork
                          color="#6ebd00"
                          size={30}
                          className="pe-2"
                        />
                        <div className="d-flex flex-column pt-3">
                          <p className="p-0 m-0">Almoço</p>
                          <p className="p-0 m-0">Aceita não-hóspedes</p>
                        </div>
                      </div>
                    )}
                    {hotel.jantar && !hotel.jantar_hospedes && (
                      <div className="d-flex align-items-center ps-5">
                        <GiKnifeFork
                          color="#6ebd00"
                          size={30}
                          className="pe-2"
                        />
                        <div className="d-flex flex-column pt-3">
                          <p className="p-0 m-0">Jantar</p>
                          <p className="p-0 m-0">Apenas hóspedes</p>
                        </div>
                      </div>
                    )}
                    {hotel.jantar_hospedes && hotel.jantar && (
                      <div className="d-flex align-items-center ps-5">
                        <GiKnifeFork
                          color="#6ebd00"
                          size={30}
                          className="pe-2"
                        />
                        <div className="d-flex flex-column pt-3">
                          <p className="p-0 m-0">Jantar</p>
                          <p className="p-0 m-0">Aceita não-hóspedes</p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div>
                    <TitleH2Intern title="Estruturas" />
                    <div className="d-flex flex-wrap">
                      {!isLoading &&
                        !error &&
                        hotel.estruturas.map(
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
                  </div>
                  <div>
                    {hotel?.restricoes?.length >= 1 && (
                      <TitleH2Intern title="Restrições" />
                    )}
                    <div className="d-flex flex-wrap">
                      {!isLoading &&
                        !error &&
                        hotel.restricoes.map(
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
                  <div>
                    {hotel?.formas_pagamento?.length >= 1 && (
                      <TitleH2Intern title="Formas de Pagamento" />
                    )}
                    <div className="d-flex flex-wrap">
                      {!isLoading &&
                        !error &&
                        hotel.formas_pagamento.map(
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
                </Col>
                <Col className="col-4">
                  <StyledH2>Localização</StyledH2>
                  <GoogleMapComponent
                    latitude={Number(hotel?.addresses[0].lat)}
                    longitude={Number(hotel?.addresses[0].lng)}
                  />
                  <StyledH2>Conheça nosso app</StyledH2>
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
              </Row>
            </StyledContainer>
          </>
        )}
      </MainStyled>
      <Footer />
    </>
  )
}

export default memo(HotelePousada)
