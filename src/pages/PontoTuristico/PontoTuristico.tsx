import { memo, useEffect } from 'react'

// eslint-disable-next-line import-helpers/order-imports
import { Col, Container, Row, Spinner } from 'react-bootstrap'

import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { MainStyled } from 'style/style'

import { usePoints } from 'context/CollectionContext'

import Footer from 'components/Footer'
import Header from 'components/Header'

import useTitle from 'hooks/useTitle'

const PontoTuristico: React.FC = () => {
  const { point, isLoading, error, fetchPoint } = usePoints()
  const { id } = useParams()

  const { t, i18n } = useTranslation()
  const setTitle = useTitle()

  useEffect(() => {
    setTitle(t(`${point?.nome}`))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])
  useEffect(() => {
    if (id) fetchPoint(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchPoint, id])
  return (
    <>
      <Header />
      <MainStyled>
        {isLoading && (
          <div className="d-flex justify-content-center">
            <Spinner animation="grow" variant="success" />
          </div>
        )}
        {!isLoading && !error && point && (
          <Container>
            <Row>
              <Col key={point.id}>
                <p>{point.nome}</p>
              </Col>
            </Row>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div>
                <p>OIOIOIOI</p>
              </div>
            </Row>
          </Container>
        )}
      </MainStyled>
      <Footer />
    </>
  )
}

export default memo(PontoTuristico)
