import { memo, useCallback, useEffect, useState } from 'react'

// eslint-disable-next-line import-helpers/order-imports
import { Col, Container, Row } from 'react-bootstrap'

import { useTranslation } from 'react-i18next'
import { FaMapMarkedAlt } from 'react-icons/fa'
import { LinkStyled, MainStyled } from 'style/style'

import { useSpace } from 'context/SpacesContext'

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

const EspacosParaEventos: React.FC = () => {
  const { spaces, categories, isLoading, error, fetchSpaces, searchSpaces } =
    useSpace()
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()
  const [search, setSearch] = useState('')

  useEffect(() => {
    setTitle(t('Espaço para Eventos'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])
  useEffect(() => {
    fetchSpaces()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSearch = useCallback(
    () => searchSpaces(search),
    [searchSpaces, search],
  )

  return (
    <>
      <Header />
      <MainStyled>
        <Container>
          <Row className="row-cols-1 row-cols-md-2 d-flex align-items-center py-2">
            <Col>
              <TitleH1 title="Espaços para eventos" />
            </Col>
            <Col className="d-flex align-items-end justify-content-end">
              <LinkStyled to="mapa">
                <MapButton className="d-flex  align-items-center px-3 me-2">
                  <FaMapMarkedAlt color="white" className="me-2" />
                  <p>Mapa</p>
                </MapButton>
              </LinkStyled>{' '}
              <SearchComponent
                placeholderText="Buscar Espaços para Eventos"
                handleSearch={handleSearch}
                search={search}
                setSearch={setSearch}
              />
            </Col>
          </Row>
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

export default memo(EspacosParaEventos)
