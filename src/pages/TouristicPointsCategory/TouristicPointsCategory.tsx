import { memo, useCallback, useEffect, useState } from 'react'

// eslint-disable-next-line import-helpers/order-imports
import { Col, Container, Row } from 'react-bootstrap'

// import Config from 'Config'

import { useTranslation } from 'react-i18next'
import { BsArrowLeft } from 'react-icons/bs'
import { FaMapMarkedAlt } from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'
import { LinkStyled, MainStyled } from 'style/style'

import { usePoints } from 'context/PointsContext'

import Footer from 'components/Footer'
import Header from 'components/Header'
import ItemCard from 'components/ItemCard'
import LoadingComponent from 'components/LoadingComponent'
import SearchComponent from 'components/SearchComponent'

import useTitle from 'hooks/useTitle'

import { MapButton } from 'pages/TouristicPoints/style'

import { AddressType, CategoryType } from 'types/CollectionType'

import { StyledH1, StyledSmallText } from './style'

const TouristicPointsCategory: React.FC = () => {
  const {
    points,
    categories,
    isLoading,
    error,
    fetchCategoryPoints,
    fetchAllCategoryPoints,
    searchPoints,
  } = usePoints()
  const { t, i18n } = useTranslation()
  const { id } = useParams()
  // const { name } = useParams()
  const [search, setSearch] = useState('')

  const setTitle = useTitle()

  const handleSearch = useCallback(
    () => searchPoints(search),
    [searchPoints, search],
  )
  const clearSearch = useCallback(() => {
    setSearch(' ')
  }, [])
  useEffect(() => {
    setTitle(t('Hotéis e Pousadas'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])

  useEffect(() => {
    if (id) fetchCategoryPoints(Number(id))
    fetchAllCategoryPoints()
  }, [fetchCategoryPoints, id, fetchAllCategoryPoints])

  const pointNomalized = categories.find((point) => point.id === Number(id))

  // const handleId = useCallback(
  //   () => points.find,
  //   [searchPoints, search],
  // )

  return (
    <>
      <Header />
      <MainStyled>
        <Container>
          <Row className="py-3">
            <Col xs={12} md={6}>
              <div className="d-flex align-items-center mb-4 mb-md-0">
                <Link to="/pontos-turisticos" className="pe-3">
                  <BsArrowLeft size={20} color="#333" />
                </Link>
                <div className="d-flex flex-column">
                  <StyledSmallText>Pontos Turísticos</StyledSmallText>
                  <StyledH1>{pointNomalized?.label}</StyledH1>
                </div>
              </div>
            </Col>
            <Col
              xs={12}
              md={6}
              className="d-flex align-items-center justify-content-end"
            >
              <LinkStyled to="/pontos-turisticos/mapa">
                <MapButton className="d-flex  align-items-center px-3 me-2">
                  <FaMapMarkedAlt color="white" className="me-2" />
                  <p>Mapa</p>
                </MapButton>
              </LinkStyled>
              <SearchComponent
                placeholderText="Buscar Pontos Turísticos"
                handleSearch={handleSearch}
                clearSearch={clearSearch}
                search={search}
                setSearch={setSearch}
              />
            </Col>
          </Row>
          <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 py-5">
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

export default memo(TouristicPointsCategory)
