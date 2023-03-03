import { memo, useEffect } from 'react'

// eslint-disable-next-line import-helpers/order-imports
import { Col, Row } from 'react-bootstrap'

import { BsArrowLeft, BsKeyFill } from 'react-icons/bs'
import { FaBed, FaMugHot } from 'react-icons/fa'
import { GiKnifeFork } from 'react-icons/gi'
import { Link, useParams } from 'react-router-dom'
import { MainStyled } from 'style/style'

import { useHotels } from 'context/HotelsContext'

import AboutComponent from 'components/AboutComponent'
import AppsSmartphoneInternalPage from 'components/AppsSmartphoneInternalPage'
import CategoryPillsComponent from 'components/CategoryPillsComponent'
import Footer from 'components/Footer'
import GoogleMapComponent from 'components/GoogleMapComponent'
import Header from 'components/Header'
import LoadingComponent from 'components/LoadingComponent'
import PaymentComponent from 'components/PaymentComponent'
import RestrictComponent from 'components/RestrictComponent'
import SliderCarouselComponent from 'components/SliderCarouselComponent'
import StructureComponent from 'components/StructureComponent'
import TitleH2Intern from 'components/TitleH2Intern'

import useTitle from 'hooks/useTitle'

import { StyledContainer, StyledH1, StyledH2, StyledSmallText } from './style'

const HotelePousada: React.FC = () => {
  const { hotel, categories, isLoading, error, fetchHotel } = useHotels()
  const { id } = useParams()

  const setTitle = useTitle()
  useEffect(() => setTitle(`${hotel?.nome} | Hotéis e Pousadas`))

  useEffect(() => {
    if (id) fetchHotel(Number(id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchHotel, id])

  return (
    <>
      <Header />
      <MainStyled className="pb-5">
        <Col className="d-flex justify-content-center">
          <LoadingComponent Loading={isLoading} />
        </Col>

        {!isLoading && !error && hotel && (
          <>
            <Row className="g-0">
              <Col>
                <SliderCarouselComponent itemCategory={hotel} />
              </Col>
            </Row>
            <StyledContainer>
              <Row className="pt-5">
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
                    <CategoryPillsComponent
                      Loading={isLoading}
                      Error={error}
                      Categories={categories}
                    />
                    <p>{hotel.descricao_t}</p>
                  </div>
                  <AboutComponent category={hotel} />

                  <TitleH2Intern title="Comodidades" />
                  <div className="d-flex flex-column flex-md-row align-items-md-center">
                    {hotel.quartos && (
                      <div className="d-flex align-items-center">
                        <BsKeyFill color="#6ebd00" size={30} className="pe-2" />
                        <p className="pe-5 m-0">{hotel.quartos} Quartos</p>
                      </div>
                    )}
                    {hotel.leitos && (
                      <div className="d-flex align-items-center ps-0 ps-md-5 pt-3 pt-md-0">
                        <FaBed color="#6ebd00" size={30} className="pe-2" />
                        <p className="pe-5 m-0">{hotel.leitos} Leitos</p>
                      </div>
                    )}
                  </div>
                  <div className="d-flex flex-column flex-md-row align-items-md-center">
                    {hotel.cafe_manha && !hotel.cafe_hospedes && (
                      <div className="d-flex align-items-center">
                        <FaMugHot color="#6ebd00" size={30} className="pe-2" />
                        <div className="d-flex flex-column pt-3">
                          <StyledSmallText className="p-0 m-0">
                            Café da manhã
                          </StyledSmallText>
                          <p className="p-0 m-0">Apenas hóspedes</p>
                        </div>
                      </div>
                    )}
                    {hotel.cafe_hospedes && hotel.cafe_manha && (
                      <div className="d-flex align-items-center ps-0 ps-md-5 pt-3 pt-md-0">
                        <FaMugHot color="#6ebd00" size={30} className="pe-2" />
                        <div className="d-flex flex-column pt-3">
                          <StyledSmallText className="p-0 m-0">
                            Café da manhã
                          </StyledSmallText>
                          <p className="p-0 m-0">Aceita não-hóspedes</p>
                        </div>
                      </div>
                    )}
                    {hotel.almoco && !hotel.almoco_hospedes && (
                      <div className="d-flex align-items-center ps-0 ps-md-5 pt-3 pt-md-0">
                        <GiKnifeFork
                          color="#6ebd00"
                          size={30}
                          className="pe-2"
                        />
                        <div className="d-flex flex-column pt-3">
                          <StyledSmallText className="p-0 m-0">
                            Almoço
                          </StyledSmallText>
                          <p className="p-0 m-0">Apenas hóspedes</p>
                        </div>
                      </div>
                    )}
                    {hotel.almoco_hospedes && hotel.almoco_hospedes && (
                      <div className="d-flex align-items-center ps-0 ps-md-5 pt-3 pt-md-0">
                        <GiKnifeFork
                          color="#6ebd00"
                          size={30}
                          className="pe-2"
                        />
                        <div className="d-flex flex-column pt-3">
                          <StyledSmallText className="p-0 m-0">
                            Almoço
                          </StyledSmallText>
                          <p className="p-0 m-0">Aceita não-hóspedes</p>
                        </div>
                      </div>
                    )}
                    {hotel.jantar && !hotel.jantar_hospedes && (
                      <div className="d-flex align-items-center ps-0 ps-md-5 pt-3 pt-md-0">
                        <GiKnifeFork
                          color="#6ebd00"
                          size={30}
                          className="pe-2"
                        />
                        <div className="d-flex flex-column pt-3">
                          <StyledSmallText className="p-0 m-0">
                            Jantar
                          </StyledSmallText>
                          <p className="p-0 m-0">Apenas hóspedes</p>
                        </div>
                      </div>
                    )}
                    {hotel.jantar_hospedes && hotel.jantar && (
                      <div className="d-flex align-items-center ps-0 ps-md-5 pt-3 pt-md-0">
                        <GiKnifeFork
                          color="#6ebd00"
                          size={30}
                          className="pe-2"
                        />
                        <div className="d-flex flex-column pt-3">
                          <StyledSmallText className="p-0 m-0">
                            Jantar
                          </StyledSmallText>
                          <p className="p-0 m-0">Aceita não-hóspedes</p>
                        </div>
                      </div>
                    )}
                  </div>
                  <StructureComponent category={hotel} />
                  <RestrictComponent category={hotel} />
                  <PaymentComponent category={hotel} />
                </Col>
                <Col xs={12} lg={4}>
                  <StyledH2 className="pb-2">Localização</StyledH2>
                  <GoogleMapComponent
                    latitude={Number(hotel?.addresses[0].lat)}
                    longitude={Number(hotel?.addresses[0].lng)}
                  />
                  <AppsSmartphoneInternalPage />
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
