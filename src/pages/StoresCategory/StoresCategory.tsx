import { memo, useCallback, useEffect, useState } from 'react'

// eslint-disable-next-line import-helpers/order-imports
import { Col, Container, Row } from 'react-bootstrap'

// import Config from 'Config'

import { useTranslation } from 'react-i18next'
import { BsArrowLeft, BsSearch } from 'react-icons/bs'
import { Link, useParams } from 'react-router-dom'
import { MainStyled } from 'style/style'

import { useStores } from 'context/StoresContext'

import Footer from 'components/Footer'
import Header from 'components/Header'
import ItemCard from 'components/ItemCard'
import LoadingComponent from 'components/LoadingComponent'

import useTitle from 'hooks/useTitle'

import { AddressType, CategoryType } from 'types/CollectionType'

import {
  ButtonStyled,
  InputStyled,
  SearchDiv,
  StyledH1,
  StyledSmallText,
} from './style'

const StoresCategory: React.FC = () => {
  const {
    stores,
    categories,
    isLoading,
    error,
    fetchCategoryStores,
    fetchAllCategoryStores,
    searchStores,
  } = useStores()
  const { t, i18n } = useTranslation()
  const { id } = useParams()
  const [search, setSearch] = useState('')

  const setTitle = useTitle()
  const handleSearch = useCallback(
    () => searchStores(search),
    [searchStores, search],
  )

  useEffect(() => {
    setTitle(t('Hotéis e Pousadas'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])

  useEffect(() => {
    if (id) fetchCategoryStores(Number(id))
    fetchAllCategoryStores()
  }, [fetchCategoryStores, fetchAllCategoryStores, id])

  const storeNomalized = categories.find((store) => store.id === Number(id))

  return (
    <>
      <Header />
      <MainStyled>
        <Container>
          <Row className="py-3">
            <Col>
              <div className="d-flex align-items-center">
                <Link to="/comercios" className="pe-3">
                  <BsArrowLeft size={20} color="#333" />
                </Link>
                <div className="d-flex flex-column">
                  <StyledSmallText>Comércio</StyledSmallText>
                  <StyledH1>{storeNomalized?.label}</StyledH1>
                </div>
              </div>
            </Col>
            <Col className="d-flex align-items-end justify-content-end pb-3">
              <SearchDiv className="d-flex  align-items-center px-3">
                <InputStyled
                  type="text"
                  placeholder="Buscar Hotéis e Pousadas"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <ButtonStyled type="button" onClick={handleSearch}>
                  <BsSearch />
                </ButtonStyled>
              </SearchDiv>
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
              stores.map(
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
                      linkcategory="comercios"
                    />
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

export default memo(StoresCategory)
