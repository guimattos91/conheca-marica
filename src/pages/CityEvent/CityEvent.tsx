import { memo, useEffect } from 'react'

// eslint-disable-next-line import-helpers/order-imports
import { Col, Row } from 'react-bootstrap'

import { BsArrowLeft } from 'react-icons/bs'
import { FaRegMoneyBillAlt } from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'
import { MainStyled, TextDescription } from 'style/style'

import { useEvents } from 'context/EventsContext'

import AboutComponent from 'components/AboutComponent'
import AppsSmartphoneInternalPage from 'components/AppsSmartphoneInternalPage'
import Footer from 'components/Footer'
import GoogleMapComponent from 'components/GoogleMapComponent'
import Header from 'components/Header'
import LoadingComponent from 'components/LoadingComponent'
import PaymentComponent from 'components/PaymentComponent'
import RestrictComponent from 'components/RestrictComponent'
import SliderCarouselComponent from 'components/SliderCarouselComponent'
import StructureComponent from 'components/StructureComponent'
import SubCategoryComponent from 'components/SubCategoryComponent'
import TitleH2Intern from 'components/TitleH2Intern'

import { getDay, GetHour, getMonth, NormalizeDate } from 'helpers'

import useTitle from 'hooks/useTitle'

import {
  DataDiv,
  StyledContainer,
  StyledH1,
  StyledH2,
  StyledSmallText,
} from './style'

const EspacoParaEvento: React.FC = () => {
  const { event, isLoading, error, fetchEvent } = useEvents()
  const { id } = useParams()

  const setTitle = useTitle()
  useEffect(() => setTitle(`${event?.nome} | Eventos`))

  useEffect(() => {
    window.scrollTo(0, 0)

    if (id) fetchEvent(Number(id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchEvent, id])

  return (
    <>
      <Header />
      <MainStyled className="pb-5">
        {isLoading && (
          <Col className="d-flex justify-content-center">
            <LoadingComponent Loading={isLoading} />
          </Col>
        )}
        {!isLoading && !error && event && (
          <>
            <SliderCarouselComponent itemCategory={event} />

            <StyledContainer>
              <Row className="mt-4">
                <Col key={event.id}>
                  <div className="d-flex align-items-center">
                    <Link to="/eventos" className="pe-3">
                      <BsArrowLeft size={20} color="#333" />
                    </Link>
                    <div className="d-flex flex-column">
                      <StyledSmallText>Eventos</StyledSmallText>
                      <StyledH1>{event.nome}</StyledH1>
                    </div>
                  </div>
                  <div className="pt-3">
                    <SubCategoryComponent
                      loading={isLoading}
                      error={error}
                      categories={event}
                      categoryName="eventos"
                    />
                  </div>
                  <div className="d-flex">
                    <DataDiv>
                      <p style={{ color: 'red' }}>
                        {getMonth(String(event.datahora_inicio_f))}
                      </p>
                      <p>{getDay(String(event.datahora_inicio_f))}</p>
                    </DataDiv>
                    <div>
                      <p className="p-0 m-0">
                        De: {NormalizeDate(String(event.datahora_inicio_f))}, às{' '}
                        {GetHour(String(event.datahora_inicio_f))}h
                      </p>
                      <p className="p-0 m-0">
                        Até: {NormalizeDate(String(event.datahora_fim_f))}, às{' '}
                        {GetHour(String(event.datahora_fim_f))}h
                      </p>
                    </div>
                  </div>
                  <TextDescription>{event.descricao_t}</TextDescription>
                  <AboutComponent category={event} />

                  <StructureComponent category={event} />
                  <RestrictComponent category={event} />
                  {event?.gratuito === 1 && (
                    <div className="mb-3">
                      <TitleH2Intern title="Valor da Entrada" />
                      <div className="d-flex align-items-center">
                        <FaRegMoneyBillAlt
                          size={30}
                          className="me-2"
                          color="#6ebd00"
                        />
                        <p className="m-0">Gratuita</p>
                      </div>
                    </div>
                  )}
                  <PaymentComponent category={event} />
                </Col>
                <Col xs={12} xl={4}>
                  <StyledH2>Localização</StyledH2>
                  <GoogleMapComponent
                    latitude={Number(event?.addresses[0].lat)}
                    longitude={Number(event?.addresses[0].lng)}
                  />
                  <AppsSmartphoneInternalPage />
                </Col>
              </Row>
            </StyledContainer>
          </>
        )}
      </MainStyled>
      <Footer />
    </>
  )
}

export default memo(EspacoParaEvento)
