import { memo, useEffect } from 'react'

// eslint-disable-next-line import-helpers/order-imports
import { Col, Container, Row, Spinner } from 'react-bootstrap'

import { useTranslation } from 'react-i18next'
import { LinkStyled, MainStyled } from 'style/style'

import { useSpace } from 'context/SpacesContext'

import Footer from 'components/Footer'
import Header from 'components/Header'
import ItemCard from 'components/ItemCard'
import TitleH1 from 'components/TitleH1'

import { strToSlug } from 'helpers'

import useTitle from 'hooks/useTitle'

import { AddressType, CategoryType } from 'types/CollectionType'

import { ListStyle } from './style'

const EspacosParaEventos: React.FC = () => {
  const { spaces, categories, isLoading, error, fetchSpaces } = useSpace()
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()

  useEffect(() => {
    setTitle(t('Espaço para Eventos'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])
  useEffect(() => {
    fetchSpaces()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      <Header />
      <MainStyled>
        <Container>
          <Row>
            <Col>
              <TitleH1 title="Espaços para eventos" />
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
              <div className="text-center">
                <Spinner animation="border" variant="danger" />
              </div>
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
                    <ItemCard collection={collection} />
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
