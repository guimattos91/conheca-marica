import { memo, useCallback, useEffect, useState } from 'react'

// eslint-disable-next-line import-helpers/order-imports
import { Col, Container, Row, Spinner } from 'react-bootstrap'

import { useTranslation } from 'react-i18next'
import { BsSearch } from 'react-icons/bs'
import { MainStyled } from 'style/style'

import { usePoints } from 'context/CollectionContext'

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

import { ButtonStyled, InputStyled, SearchDiv } from './style'

interface IPointsProviderProps {
  collection: CollectionType
}

const PontosTuristicos: React.FC<IPointsProviderProps> = () => {
  const { points, isLoading, error, fetchPoints } = usePoints()
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()
  const [search, setSearch] = useState('')

  const handleSearch = useCallback(
    () => fetchPoints(search),
    [fetchPoints, search],
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
          <Row className="d-flex">
            <Col>
              <TitleH1 title="Pontos Turísticos" />
            </Col>
            <Col className="col-4 d-flex align-items-center">
              <SearchDiv className="d-flex justify-content-end align-items-center px-3">
                <InputStyled
                  type="text"
                  placeholder="Buscar Pontos Turísticos"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <ButtonStyled type="button" onClick={handleSearch}>
                  <BsSearch />
                </ButtonStyled>
              </SearchDiv>
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
                    <ItemCard collection={collection} />
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
