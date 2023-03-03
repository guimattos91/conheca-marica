import { memo, useEffect } from 'react'

// eslint-disable-next-line import-helpers/order-imports
import { Col, Row } from 'react-bootstrap'

import { BsArrowLeft, BsCheckCircle } from 'react-icons/bs'
import { Link, useParams } from 'react-router-dom'
import { MainStyled, TextDescription } from 'style/style'

import { usePoints } from 'context/PointsContext'

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

const PontoTuristico: React.FC = () => {
  const { point, categories, isLoading, error, fetchPoint } = usePoints()
  const { id } = useParams()

  const setTitle = useTitle()
  useEffect(() => setTitle(`${point?.nome} | Pontos Turísticos`))

  useEffect(() => {
    if (id) fetchPoint(Number(id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchPoint, id])

  return (
    <>
      <Header />
      <MainStyled className="pb-5">
        <Col className="d-flex justify-content-center">
          <LoadingComponent Loading={isLoading} />
        </Col>
        {!isLoading && !error && point && (
          <>
            <SliderCarouselComponent itemCategory={point} />
            <StyledContainer>
              <Row className="pt-5">
                <Col key={point.id}>
                  <div className="d-flex align-items-center">
                    <Link to="/pontos-turisticos" className="pe-3">
                      <BsArrowLeft size={20} color="#333" />
                    </Link>
                    <div className="d-flex flex-column">
                      <StyledSmallText>Pontos Turísticos</StyledSmallText>
                      <StyledH1>{point.nome}</StyledH1>
                    </div>
                  </div>
                  <div className="pt-3">
                    <CategoryPillsComponent
                      Loading={isLoading}
                      Error={error}
                      Categories={categories}
                    />
                    <TextDescription>{point.descricao_t}</TextDescription>
                  </div>
                  <AboutComponent category={point} />

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
                                  size={20}
                                  className="me-2"
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
                  <StructureComponent category={point} />
                  <RestrictComponent category={point} />
                  <PaymentComponent category={point} />
                </Col>
                <Col xs={12} lg={4}>
                  <StyledH2 className="pb-2">Localização</StyledH2>
                  <GoogleMapComponent
                    latitude={Number(point?.addresses[0].lat)}
                    longitude={Number(point?.addresses[0].lng)}
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

export default memo(PontoTuristico)
