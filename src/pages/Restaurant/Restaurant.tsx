import { memo, useEffect } from 'react'

// eslint-disable-next-line import-helpers/order-imports
import { Col, Row } from 'react-bootstrap'

import { BsArrowLeft, BsCheckCircle } from 'react-icons/bs'
import { FaMotorcycle } from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'
import { MainStyled, TextDescription } from 'style/style'

import { useRestaurants } from 'context/RestaurantsContext'

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

import {
  DeliverySpan,
  StyledContainer,
  StyledH1,
  StyledH2,
  StyledSmallText,
} from './style'

const BareRestaurante: React.FC = () => {
  const { restaurant, categories, isLoading, error, fetchRestaurant } =
    useRestaurants()
  const { id } = useParams()

  const setTitle = useTitle()
  useEffect(() => setTitle(`${restaurant?.nome} | Bares e Restaurantes`))

  useEffect(() => {
    if (id) fetchRestaurant(Number(id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchRestaurant, id])

  return (
    <>
      <Header />
      <MainStyled className="pb-5">
        {isLoading && (
          <Col className="d-flex justify-content-center">
            <LoadingComponent Loading={isLoading} />
          </Col>
        )}
        {!isLoading && !error && restaurant && (
          <>
            <SliderCarouselComponent itemCategory={restaurant} />
            <StyledContainer>
              <Row className="pt-5">
                <Col key={restaurant.id}>
                  <div className="d-flex align-items-center">
                    <Link to="/bares-e-restaurantes" className="pe-3">
                      <BsArrowLeft size={20} color="#333" />
                    </Link>
                    <div className="d-flex flex-column">
                      <StyledSmallText>Bares e Restaurantes</StyledSmallText>
                      <StyledH1>{restaurant.nome}</StyledH1>
                    </div>
                  </div>
                  <div className="pt-3">
                    <CategoryPillsComponent
                      Loading={isLoading}
                      Error={error}
                      Categories={categories}
                    />
                    {restaurant?.is_delivery === 1 && (
                      <DeliverySpan>
                        <FaMotorcycle size={20} className="me-2" />
                        Delivery
                      </DeliverySpan>
                    )}

                    <TextDescription>{restaurant.descricao_t}</TextDescription>
                  </div>
                  <AboutComponent category={restaurant} />
                  {restaurant?.refeicoes?.length >= 1 && (
                    <div>
                      <TitleH2Intern title="Refeições" />
                      <div className="d-flex flex-wrap">
                        {restaurant.refeicoes.map((meal: { label: string }) => (
                          <div className="d-flex align-items-center pe-4 pb-4">
                            <BsCheckCircle
                              color="#6ebd00"
                              size={20}
                              className="me-2"
                            />
                            <p key={meal.label} className="d-inline-flex m-0">
                              {meal.label}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {restaurant?.cozinhas?.length >= 1 && (
                    <div>
                      <TitleH2Intern title="Cozinhas" />
                      <div className="d-flex flex-wrap">
                        {restaurant.cozinhas.map((cook: { label: string }) => (
                          <div className="d-flex align-items-center pe-4 pb-4">
                            <BsCheckCircle
                              color="#6ebd00"
                              size={20}
                              className="me-2"
                            />
                            <p key={cook.label} className="d-inline-flex m-0">
                              {cook.label}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  <StructureComponent category={restaurant} />
                  <RestrictComponent category={restaurant} />
                  <PaymentComponent category={restaurant} />
                </Col>
                <Col xs={12} lg={4}>
                  <StyledH2 className="pb-2">Localização</StyledH2>
                  <GoogleMapComponent
                    latitude={Number(restaurant?.addresses[0].lat)}
                    longitude={Number(restaurant?.addresses[0].lng)}
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

export default memo(BareRestaurante)
