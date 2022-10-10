import { memo, useEffect } from 'react'

// eslint-disable-next-line import-helpers/order-imports
import { Col, Container, Row, Spinner } from 'react-bootstrap'

// import Config from 'Config'

import { useTranslation } from 'react-i18next'
import { MainStyled } from 'style/style'

import { useHotels } from 'context/HotelsContext'

import Footer from 'components/Footer'
import Header from 'components/Header'
import ItemCard from 'components/ItemCard'
import TitleH1 from 'components/TitleH1'

import { strToSlug } from 'helpers'

import useTitle from 'hooks/useTitle'

import { AddressType, CategoryType } from 'types/CollectionType'

import { LinkStyled, ListStyle } from './style'

const Hotels: React.FC = () => {
  const { hotels, categories, isLoading, error, fetchHotels } = useHotels()
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()

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
          <Row>
            <Col>
              <TitleH1 title="Hotéis e Pousadas" />
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
                          to={`hoteis-e-pousadas/${category.id}/${strToSlug(
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
                    <ItemCard collection={collection} />
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
