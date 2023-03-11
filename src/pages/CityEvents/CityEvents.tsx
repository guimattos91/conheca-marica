import { memo, useCallback, useEffect, useState } from 'react'

// eslint-disable-next-line import-helpers/order-imports
import { Col, Container, Row } from 'react-bootstrap'

// import Config from 'Config'

import { useTranslation } from 'react-i18next'
import { FaMapMarkedAlt } from 'react-icons/fa'
import { LinkStyled, MainStyled } from 'style/style'

import { useEvents } from 'context/EventsContext'

import CategoryPillsComponent from 'components/CategoryPillsComponent'
import Footer from 'components/Footer'
import Header from 'components/Header'
import ItemCard from 'components/ItemCard'
import LoadingComponent from 'components/LoadingComponent'
import SearchComponent from 'components/SearchComponent'
import TitleH1 from 'components/TitleH1'

import useTitle from 'hooks/useTitle'

import { AddressType, CategoryType } from 'types/CollectionType'

import { MapButton } from './style'

const Comercio: React.FC = () => {
  const { events, categories, isLoading, error, fetchEvents, searchEvents } =
    useEvents()
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()
  const [search, setSearch] = useState('')

  useEffect(() => {
    setTitle(t('Eventos'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])
  useEffect(() => {
    fetchEvents()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const handleSearch = useCallback(
    () => searchEvents(search),
    [searchEvents, search],
  )
  const clearSearch = useCallback(() => {
    setSearch(' ')
  }, [])

  return (
    <>
      <Header />
      <MainStyled>
        <Container>
          <Row className="row-cols-1 row-cols-md-2 d-flex align-items-center py-2">
            <Col>
              <TitleH1 title="Eventos" />
            </Col>
            <Col className="d-flex align-items-center justify-content-end">
              <LinkStyled to="/eventos/mapa">
                <MapButton className="d-flex  align-items-center px-3 me-2">
                  <FaMapMarkedAlt color="white" className="me-2" />
                  <p>Mapa</p>
                </MapButton>
              </LinkStyled>
              <SearchComponent
                placeholderText="Buscar Eventos"
                handleSearch={handleSearch}
                clearSearch={clearSearch}
                search={search}
                setSearch={setSearch}
              />
            </Col>
          </Row>
          {isLoading && (
            <Col className="d-flex justify-content-center">
              <LoadingComponent Loading={isLoading} />
            </Col>
          )}
          <Row className="d-flex">
            <Col>
              <CategoryPillsComponent
                Loading={isLoading}
                Error={error}
                Categories={categories}
              />
            </Col>
          </Row>

          <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 pb-5">
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
                    <ItemCard collection={collection} linkcategory="eventos" />
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
