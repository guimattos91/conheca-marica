import { memo, useEffect } from 'react'

// eslint-disable-next-line import-helpers/order-imports
import { Col, Container, Row, Spinner } from 'react-bootstrap'

import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { MainStyled } from 'style/style'

import { useHotels } from 'context/HotelsContext'

import Footer from 'components/Footer'
import Header from 'components/Header'

import useTitle from 'hooks/useTitle'

const HotelePousada: React.FC = () => {
  const { hotel, isLoading, error, fetchHotel } = useHotels()
  const { id } = useParams()

  const { t, i18n } = useTranslation()
  const setTitle = useTitle()

  useEffect(() => {
    setTitle(t(`${hotel?.nome}`))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])
  useEffect(() => {
    if (id) fetchHotel(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchHotel, id])
  return (
    <>
      <Header />
      <MainStyled>
        {isLoading && (
          <div className="d-flex justify-content-center">
            <Spinner animation="grow" variant="success" />
          </div>
        )}
        {!isLoading && !error && hotel && (
          <>
            <Row className="d-flex">
              {hotel.images.map((imagem) => (
                <Col key={hotel.id}>
                  <img
                    key={imagem.id}
                    src={imagem.src}
                    alt={imagem.src}
                    className="h-100"
                  />
                </Col>
              ))}
            </Row>
            <Container>
              <Row>
                <Col key={hotel.id}>
                  <h2>{hotel.nome}</h2>
                </Col>
              </Row>
              <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div>
                  <p>{hotel.descricao_t}</p>
                </div>
              </Row>
            </Container>
          </>
        )}
      </MainStyled>
      <Footer />
    </>
  )
}

export default memo(HotelePousada)
