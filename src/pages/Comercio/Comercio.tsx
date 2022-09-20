import { memo, useEffect } from 'react'

// eslint-disable-next-line import-helpers/order-imports
import { Col, Container, Row, Spinner } from 'react-bootstrap'

// import Config from 'Config'

import { MainStyled } from 'style/style'

import { useStores } from 'context/StoresContext'

import Footer from 'components/Footer'
import Header from 'components/Header'
import ItemCard from 'components/ItemCard'
import TitleH1 from 'components/TitleH1'

import { CollectionType } from 'types/CollectionTypes'

interface IStoresProviderProps {
  collection: CollectionType
}

const Comercio: React.FC<IStoresProviderProps> = () => {
  const { stores, isLoading, error, fetchStores } = useStores()

  useEffect(() => {
    fetchStores()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      <Header />
      <MainStyled>
        <Container>
          <Row>
            <Col>
              <TitleH1 title="Comércio" />
            </Col>
          </Row>
          <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {isLoading && (
              <div className="text-center">
                <Spinner animation="border" variant="danger" />
              </div>
            )}
            {!isLoading &&
              !error &&
              stores.map(
                (collection: {
                  id: number
                  nome: string | null
                  capa: string | undefined
                  lat: number | null
                  lng: number | null
                }) => (
                  <Col key={collection.id} className="d-flex">
                    <ItemCard collection={collection} />
                  </Col>
                ),
              )}
            {!isLoading && !error && stores.length === 0 && (
              <h2>Nenhum resultado encontrado</h2>
            )}
          </Row>
        </Container>
      </MainStyled>
      <Footer />
    </>
  )
}

export default memo(Comercio)
