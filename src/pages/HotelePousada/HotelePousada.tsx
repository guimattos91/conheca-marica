import { memo, useEffect } from 'react'

// eslint-disable-next-line import-helpers/order-imports
import { Col, Ratio, Row, Spinner } from 'react-bootstrap'

import { useTranslation } from 'react-i18next'
import { BsArrowLeft } from 'react-icons/bs'
import SVG from 'react-inlinesvg'
import { Link, useParams } from 'react-router-dom'
import Slider from 'react-slick'
import { MainStyled } from 'style/style'

import { useHotels } from 'context/HotelsContext'

import Footer from 'components/Footer'
import Header from 'components/Header'
import TitleH2Intern from 'components/TitleH2Intern'

import useTitle from 'hooks/useTitle'

import { ListStyle, StyledContainer, StyledH1, StyledSmallText } from './style'

const HotelePousada: React.FC = () => {
  const { hotel, isLoading, error, fetchHotel } = useHotels()
  const { id } = useParams()
  const { t, i18n } = useTranslation()
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

  useEffect(() => {
    setTitle(t(`${hotel?.nome}`))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])
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
                    {/* <img
                      key={imagem.id}
                      src={imagem.src}
                      alt={imagem.src}
                      className="w-100"
                    /> */}
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
                            <li key={category.id}>
                              <p className="d-inline-flex w-100">
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
                    <div className="d-flex flex-wrap">
                      {hotel.cafe_manha && <p>Café da manhã Apenas hóspedes</p>}
                    </div>
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
                    <TitleH2Intern title="restições" />
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
                    <TitleH2Intern title="Formas de Pagamento" />
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
