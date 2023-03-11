import { memo, useCallback, useEffect, useState } from 'react'

// eslint-disable-next-line import-helpers/order-imports
import { Col, Container, Row } from 'react-bootstrap'

// import Config from 'Config'

import { useTranslation } from 'react-i18next'
import { BsArrowLeft } from 'react-icons/bs'
import { FaMapMarkedAlt } from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'
import { MainStyled } from 'style/style'

import { useSpace } from 'context/SpacesContext'

import Footer from 'components/Footer'
import Header from 'components/Header'
import ItemCard from 'components/ItemCard'
import LoadingComponent from 'components/LoadingComponent'
import SearchComponent from 'components/SearchComponent'

import useTitle from 'hooks/useTitle'

import { MapButton } from 'pages/EventSpaces/style'

import { AddressType, CategoryType } from 'types/CollectionType'

import { LinkStyled, StyledH1, StyledSmallText } from './style'

const EventsSpacesCategory: React.FC = () => {
  const {
    spaces,
    categories,
    isLoading,
    error,
    fetchCategorySpaces,
    fetchAllCategorySpaces,
    searchSpaces,
  } = useSpace()
  const { t, i18n } = useTranslation()
  const { id } = useParams()
  const [search, setSearch] = useState('')

  const setTitle = useTitle()

  const handleSearch = useCallback(
    () => searchSpaces(search),
    [searchSpaces, search],
  )
  const clearSearch = useCallback(() => {
    setSearch(' ')
  }, [])

  useEffect(() => {
    setTitle(t('Comércio Local'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])

  useEffect(() => {
    if (id) fetchCategorySpaces(Number(id))
    fetchAllCategorySpaces()
  }, [fetchCategorySpaces, fetchAllCategorySpaces, id])

  const spaceNomalized = categories.find((space) => space.id === Number(id))

  return (
    <>
      <Header />
      <MainStyled>
        <Container>
          <Row className="py-3">
            <Col xs={12} md={6}>
              <div className="d-flex align-items-center mb-4 mb-md-0">
                <Link to="/espacos-para-eventos" className="pe-3">
                  <BsArrowLeft size={20} color="#333" />
                </Link>
                <div className="d-flex flex-column">
                  <StyledSmallText>Espaços para Evento</StyledSmallText>
                  <StyledH1>{spaceNomalized?.label}</StyledH1>
                </div>
              </div>
            </Col>
            <Col
              xs={12}
              md={6}
              className="d-flex align-items-center justify-content-end"
            >
              <LinkStyled to="/espacos-para-eventos/mapa">
                <MapButton className="d-flex  align-items-center px-3 me-2">
                  <FaMapMarkedAlt color="white" className="me-2" />
                  <p>Mapa</p>
                </MapButton>
              </LinkStyled>
              <SearchComponent
                placeholderText="Buscar Espaços para Eventos"
                handleSearch={handleSearch}
                clearSearch={clearSearch}
                search={search}
                setSearch={setSearch}
              />
            </Col>
          </Row>
          <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 pb-5">
            {isLoading && (
              <Col className="d-flex justify-content-center">
                <LoadingComponent Loading={isLoading} />
              </Col>
            )}
            {!isLoading &&
              !error &&
              spaces.map(
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
                      linkcategory="espacos-para-eventos"
                    />
                  </Col>
                ),
              )}
            {!isLoading && !error && spaces.length === 0 && (
              <h2>Nenhum resultado encontrado</h2>
            )}
          </Row>
        </Container>
      </MainStyled>
      <Footer />
    </>
  )
}

export default memo(EventsSpacesCategory)
