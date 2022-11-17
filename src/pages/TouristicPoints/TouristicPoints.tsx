import { memo, useCallback, useEffect, useState } from 'react'

// eslint-disable-next-line import-helpers/order-imports
import { Col, Container, Row } from 'react-bootstrap'

import { useTranslation } from 'react-i18next'
import { BsSearch } from 'react-icons/bs'
import { FaMapMarkedAlt } from 'react-icons/fa'
import { LinkStyled, MainStyled } from 'style/style'

import { usePoints } from 'context/PointsContext'

import CategoryPillsComponent from 'components/CategoryPillsComponent'
import Footer from 'components/Footer'
import Header from 'components/Header'
import ItemCard from 'components/ItemCard'
import LoadingComponent from 'components/LoadingComponent'
import TitleH1 from 'components/TitleH1'

import useTitle from 'hooks/useTitle'

import { AddressType, CategoryType } from 'types/CollectionType'

import { ButtonStyled, InputStyled, MapButton, SearchDiv } from './style'

const PontosTuristicos: React.FC = () => {
  const { points, categories, isLoading, error, fetchPoints, searchPoints } =
    usePoints()
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()
  const [search, setSearch] = useState('')

  const handleSearch = useCallback(
    () => searchPoints(search),
    [searchPoints, search],
  )

  useEffect(() => {
    setTitle(t('Pontos Turísticos'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])

  useEffect(() => {
    fetchPoints()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      <Header />
      <MainStyled>
        <Container>
          <Row className="row-cols-1 row-cols-md-2 d-flex align-items-center py-2">
            <Col>
              <TitleH1 title="Pontos Turísticos" />
            </Col>
            <Col className="d-flex align-items-end justify-content-end">
              <LinkStyled to="mapa">
                <MapButton className="d-flex  align-items-center px-3 me-2">
                  <FaMapMarkedAlt color="white" className="me-2" />
                  <p>Mapa</p>
                </MapButton>
              </LinkStyled>
              <SearchDiv className="d-flex align-items-center px-3">
                <InputStyled
                  type="text"
                  placeholder="Buscar pontos turísticos"
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
              <CategoryPillsComponent
                Loading={isLoading}
                Error={error}
                Categories={categories}
              />
            </Col>
          </Row>
          <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {isLoading && (
              <Col className="d-flex justify-content-center">
                <LoadingComponent Loading={isLoading} />
              </Col>
            )}
            {!isLoading &&
              !error &&
              points.map(
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
                      linkcategory="pontos-turisticos"
                    />
                  </Col>
                ),
              )}
            {!isLoading && !error && points.length === 0 && (
              <h2>Nenhum resultado encontrado</h2>
            )}
          </Row>
        </Container>
      </MainStyled>
      <Footer />
    </>
  )
}

export default memo(PontosTuristicos)
