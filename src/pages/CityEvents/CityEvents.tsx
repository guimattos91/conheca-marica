import { memo, useCallback, useEffect, useState } from 'react'

// eslint-disable-next-line import-helpers/order-imports
import { Col, Container, Row, Spinner } from 'react-bootstrap'

// import Config from 'Config'

import { useTranslation } from 'react-i18next'
import { BsSearch } from 'react-icons/bs'
import { FaMapMarkedAlt } from 'react-icons/fa'
import { LinkStyled, MainStyled } from 'style/style'

import { useEvents } from 'context/EventsContext'

import Footer from 'components/Footer'
import Header from 'components/Header'
import ItemCard from 'components/ItemCard'
import TitleH1 from 'components/TitleH1'

import { strToSlug } from 'helpers'

import useTitle from 'hooks/useTitle'

import { AddressType, CategoryType } from 'types/CollectionType'

import {
  ButtonStyled,
  InputStyled,
  ListStyle,
  MapButton,
  SearchDiv,
} from './style'

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

  return (
    <>
      <Header />
      <MainStyled>
        <Container>
          <Row className="row-cols-1 row-cols-md-2 d-flex align-items-center py-2">
            <Col>
              <TitleH1 title="Eventos" />
            </Col>
            <Col className="d-flex align-items-end justify-content-end">
              <LinkStyled to="mapa">
                <MapButton className="d-flex  align-items-center px-3 me-2">
                  <FaMapMarkedAlt color="white" className="me-2" />
                  <p>Mapa</p>
                </MapButton>
              </LinkStyled>{' '}
              <SearchDiv className="d-flex  align-items-center px-3">
                <InputStyled
                  type="text"
                  placeholder="Buscar Espaços para Eventos"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <ButtonStyled type="button" onClick={handleSearch}>
                  <BsSearch />
                </ButtonStyled>
              </SearchDiv>
            </Col>
          </Row>
          <Row className="d-flex">
            <Col>
              <ListStyle className="d-flex flex-nowrap flex-md-wrap g-3 flex-grow-0 pb-3">
                {!isLoading &&
                  !error &&
                  categories.map(
                    (category: {
                      id: number
                      label: string
                      count?: number | undefined
                    }) => (
                      <li
                        key={category.id}
                        className="d-flex align-items-center"
                      >
                        <LinkStyled
                          to={`categorias/${category.id}/${strToSlug(
                            category.label,
                          )}`}
                        >
                          <p className="d-inline-flex w-100 p-0 m-0">
                            {category.label}
                          </p>
                        </LinkStyled>
                      </li>
                    ),
                  )}
              </ListStyle>
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
