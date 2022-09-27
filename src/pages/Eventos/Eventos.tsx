import { memo, useEffect } from 'react'

// eslint-disable-next-line import-helpers/order-imports
import { Col, Container, Row, Spinner } from 'react-bootstrap'

// import Config from 'Config'

import { useTranslation } from 'react-i18next'
import { MainStyled } from 'style/style'

import { useEvents } from 'context/EventsContext'

import Footer from 'components/Footer'
import Header from 'components/Header'
import ItemCard from 'components/ItemCard'
import TitleH1 from 'components/TitleH1'

import useTitle from 'hooks/useTitle'

import {
  AddressType,
  CategoryType,
  CollectionType,
} from 'types/CollectionTypes'

interface IEventsProviderProps {
  collection: CollectionType
}

const Comercio: React.FC<IEventsProviderProps> = () => {
  const { events, isLoading, error, fetchEvents } = useEvents()
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()

  useEffect(() => {
    setTitle(t('Eventos'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])
  useEffect(() => {
    fetchEvents()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      <Header />
      <MainStyled>
        <Container>
          <Row>
            <Col>
              <TitleH1 title="Eventos" />
            </Col>
          </Row>
          <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {isLoading && (
              <div className="d-flex justify-content-center">
                <Spinner animation="grow" variant="success" />
              </div>
            )}
            {!isLoading &&
              !error &&
              events.map(
                (collection: {
                  id: number
                  nome: string
                  capa: string | undefined
                  lat: number | null
                  lng: number | null
                  enderecos: AddressType[]
                  categorias: CategoryType[]
                }) => (
                  <Col key={collection.id} className="d-flex">
                    <ItemCard collection={collection} />
                  </Col>
                ),
              )}
            {!isLoading && !error && events.length === 0 && (
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
