import { memo, useEffect } from 'react'

// eslint-disable-next-line import-helpers/order-imports
import { Col, Row } from 'react-bootstrap'

import { BsArrowLeft } from 'react-icons/bs'
import { Link, useParams } from 'react-router-dom'
import { MainStyled, TextDescription } from 'style/style'

import { useStores } from 'context/StoresContext'

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

import useTitle from 'hooks/useTitle'

import { StyledContainer, StyledH1, StyledH2, StyledSmallText } from './style'

const Comercio: React.FC = () => {
  const { store, categories, isLoading, error, fetchStore } = useStores()
  const { id } = useParams()

  const setTitle = useTitle()
  useEffect(() => setTitle(`${store?.nome} | Comércio Local`))

  useEffect(() => {
    if (id) fetchStore(Number(id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchStore, id])

  return (
    <>
      <Header />
      <MainStyled className="pb-5">
        {isLoading && (
          <Col className="d-flex justify-content-center">
            <LoadingComponent Loading={isLoading} />
          </Col>
        )}
        {!isLoading && !error && store && (
          <>
            <SliderCarouselComponent itemCategory={store} />
            <StyledContainer>
              <Row className="pt-5">
                <Col key={store.id}>
                  <div className="d-flex align-items-center">
                    <Link to="/comercios" className="pe-3">
                      <BsArrowLeft size={20} color="#333" />
                    </Link>
                    <div className="d-flex flex-column">
                      <StyledSmallText>Comércio Local</StyledSmallText>
                      <StyledH1>{store.nome}</StyledH1>
                    </div>
                  </div>
                  <div className="pt-3">
                    <CategoryPillsComponent
                      Loading={isLoading}
                      Error={error}
                      Categories={categories}
                    />
                    <TextDescription>{store.descricao_t}</TextDescription>
                  </div>
                  <AboutComponent category={store} />

                  <StructureComponent category={store} />
                  <RestrictComponent category={store} />
                  <PaymentComponent category={store} />
                </Col>
                <Col xs={12} lg={4}>
                  <StyledH2 className="pb-2">Localização</StyledH2>
                  <GoogleMapComponent
                    latitude={Number(store?.addresses[0].lat)}
                    longitude={Number(store?.addresses[0].lng)}
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

export default memo(Comercio)
