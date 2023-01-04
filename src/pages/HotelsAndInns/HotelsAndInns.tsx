import { memo, useCallback, useEffect, useState } from 'react'

// eslint-disable-next-line import-helpers/order-imports
import { Col, Container, Row } from 'react-bootstrap'

// import Config from 'Config'

import { useTranslation } from 'react-i18next'
import { FaMapMarkedAlt } from 'react-icons/fa'
import { MainStyled } from 'style/style'

import { useHotels } from 'context/HotelsContext'

import CategoryPillsComponent from 'components/CategoryPillsComponent'
import Footer from 'components/Footer'
import Header from 'components/Header'
import ItemCard from 'components/ItemCard'
import LoadingComponent from 'components/LoadingComponent'
import SearchComponent from 'components/SearchComponent'
import TitleH1 from 'components/TitleH1'

import useTitle from 'hooks/useTitle'

import { AddressType, CategoryType } from 'types/CollectionType'

import { LinkStyled, MapButton } from './style'

const Hotels: React.FC = () => {
  const { hotels, categories, isLoading, error, fetchHotels, searchHotels } =
    useHotels()
  const { t, i18n } = useTranslation()
  const [search, setSearch] = useState('')

  const setTitle = useTitle()
  const handleSearch = useCallback(
    () => searchHotels(search),
    [searchHotels, search],
  )
  const clearSearch = useCallback(() => {
    setSearch(' ')
  }, [])

  useEffect(() => {
    setTitle(t('Hotéis e Pousadas'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])
  useEffect(() => {
    fetchHotels()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Header />
      <MainStyled>
        <Container>
          <Row className="row-cols-1 row-cols-md-2 d-flex align-items-center py-2">
            <Col>
              <TitleH1 title="Hotéis e Pousadas" />
            </Col>
            <Col className="d-flex align-items-end justify-content-end">
              <LinkStyled to="mapa">
                <MapButton className="d-flex  align-items-center px-3 me-2">
                  <FaMapMarkedAlt color="white" className="me-2" />
                  <p>Mapa</p>
                </MapButton>
              </LinkStyled>
              <SearchComponent
                placeholderText="Buscar Hotéis e Pousadas"
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
          <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3">
            {!isLoading &&
              !error &&
              hotels.map(
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
                    <ItemCard
                      collection={collection}
                      linkcategory="hoteis-e-pousadas"
                    />
                  </Col>
                ),
              )}
            {!isLoading && !error && hotels.length === 0 && (
              <h2>Nenhum resultado encontrado</h2>
            )}
          </Row>
        </Container>
      </MainStyled>
      <Footer />
    </>
  )
}

export default memo(Hotels)
