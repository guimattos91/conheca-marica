import { memo, useEffect } from 'react'

// eslint-disable-next-line import-helpers/order-imports
import { Col, Row } from 'react-bootstrap'

import { AiOutlineGlobal } from 'react-icons/ai'
import {
  BsArrowLeft,
  BsCheckCircle,
  BsClock,
  BsTelephone,
  BsWhatsapp,
} from 'react-icons/bs'
import { MdOutlineEmail, MdOutlineLocationOn } from 'react-icons/md'
import SVG from 'react-inlinesvg'
import { Link, useParams } from 'react-router-dom'
import { MainStyled, TextDescription } from 'style/style'

import { usePoints } from 'context/PointsContext'

import AppsSmartphoneInternalPage from 'components/AppsSmartphoneInternalPage'
import CategoryPillsComponent from 'components/CategoryPillsComponent'
import Footer from 'components/Footer'
import GoogleMapComponent from 'components/GoogleMapComponent'
import Header from 'components/Header'
import LoadingComponent from 'components/LoadingComponent'
import SliderCarouselComponent from 'components/SliderCarouselComponent'
import TitleH2Intern from 'components/TitleH2Intern'

import useTitle from 'hooks/useTitle'

import {
  DivIcon,
  StyledContainer,
  StyledH1,
  StyledH2,
  StyledSmallText,
} from './style'

const PontoTuristico: React.FC = () => {
  const { point, categories, isLoading, error, fetchPoint } = usePoints()
  const { id } = useParams()

  const setTitle = useTitle()
  useEffect(() => setTitle(`${point?.nome} | Pontos Turísticos`))

  useEffect(() => {
    if (id) fetchPoint(Number(id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchPoint, id])

  return (
    <>
      <Header />
      <MainStyled className="pb-5">
        {isLoading && (
          <Col className="d-flex justify-content-center">
            <LoadingComponent Loading={isLoading} />
          </Col>
        )}
        {!isLoading && !error && point && (
          <>
            <SliderCarouselComponent itemCategory={point} />
            <StyledContainer>
              <Row className="pt-5">
                <Col key={point.id}>
                  <div className="d-flex align-items-center">
                    <Link to="/pontos-turisticos" className="pe-3">
                      <BsArrowLeft size={20} color="#333" />
                    </Link>
                    <div className="d-flex flex-column">
                      <StyledSmallText>Pontos Turísticos</StyledSmallText>
                      <StyledH1>{point.nome}</StyledH1>
                    </div>
                  </div>
                  <div className="pt-3">
                    <CategoryPillsComponent
                      Loading={isLoading}
                      Error={error}
                      Categories={categories}
                    />
                    <TextDescription>{point.descricao_t}</TextDescription>
                  </div>
                  <div>
                    <TitleH2Intern title="Sobre" />
                    {point.addresses.map(
                      (address: { id: number; label: string }) => (
                        <div
                          className="d-flex align-items-center pb-4"
                          key={address.id}
                        >
                          <MdOutlineLocationOn
                            color="#6ebd00"
                            size={36}
                            className="pe-2"
                          />
                          <p className="m-0">{address.label}</p>
                        </div>
                      ),
                    )}
                    {point.phones.map(
                      (phone: {
                        id: number
                        number: string
                        nome: string
                        whatsapp: boolean
                      }) => (
                        <div
                          className="d-flex align-items-center pb-3"
                          key={phone.id}
                        >
                          {phone.whatsapp && (
                            <BsWhatsapp
                              color="#6ebd00"
                              size={30}
                              className="pe-2"
                            />
                          )}
                          {!phone.whatsapp && (
                            <BsTelephone
                              color="#6ebd00"
                              size={30}
                              className="pe-2"
                            />
                          )}
                          <div className="d-flex flex-column">
                            <StyledSmallText className="m-0 ">
                              {phone.nome}
                            </StyledSmallText>
                            <p className="m-0">{phone.number}</p>
                          </div>
                        </div>
                      ),
                    )}
                    {point.email && (
                      <div className="d-flex align-items-center pb-3">
                        <MdOutlineEmail
                          color="#6ebd00"
                          size={30}
                          className="pe-2"
                        />
                        <a href={`mailto:${point.email}`}>{point.email}</a>
                      </div>
                    )}
                    {point.site && (
                      <div className="d-flex align-items-center pb-3">
                        <AiOutlineGlobal
                          color="#6ebd00"
                          size={30}
                          className="pe-2"
                        />
                        <a href={point.site}>{point.site}</a>
                      </div>
                    )}
                    {point.redes.map(
                      (network: {
                        icone: string
                        nome: string
                        user: string
                        url: string
                      }) => (
                        <DivIcon
                          key={network.nome}
                          className="d-flex align-items-center pb-3"
                        >
                          <i className={network.icone} />
                          <a href={network.url}>{network.user}</a>
                        </DivIcon>
                      ),
                    )}
                    {point?.horario_funcionamento?.length >= 1 && (
                      <div className="d-flex align-items-start">
                        <BsClock color="#6ebd00" size={20} className="me-4" />
                        <table>
                          <tbody>
                            {point.horario_funcionamento.map(
                              (workinghours: {
                                label: string
                                horario: { abre: string; fecha: string }
                                is24: boolean
                              }) => (
                                <tr>
                                  <td
                                    className="fw-bold pe-5"
                                    key={workinghours.label}
                                  >
                                    {workinghours.label}
                                  </td>
                                  <td>
                                    {workinghours.horario.abre} às
                                    {workinghours.horario.fecha}
                                  </td>
                                </tr>
                              ),
                            )}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                  {point.dicas_t && (
                    <>
                      <TitleH2Intern title="Dicas" />
                      <div className="d-flex flex-wrap">
                        <p>{point.dicas_t}</p>
                      </div>
                    </>
                  )}
                  {point?.viajantes?.length >= 1 && (
                    <>
                      <TitleH2Intern title="Tipos de Viajantes" />
                      <div className="d-flex flex-wrap">
                        {!isLoading &&
                          !error &&
                          point.viajantes.map(
                            (traveller: { label: string }) => (
                              <div className="d-flex align-items-center pe-4 pb-4">
                                <BsCheckCircle
                                  color="#6ebd00"
                                  size={20}
                                  className="me-2"
                                />
                                <p
                                  key={traveller.label}
                                  className="d-inline-flex m-0"
                                >
                                  {traveller.label}
                                </p>
                              </div>
                            ),
                          )}
                      </div>
                    </>
                  )}
                  {point?.estruturas?.length >= 1 && (
                    <>
                      <TitleH2Intern title="Estruturas" />
                      <div className="d-flex flex-wrap">
                        {!isLoading &&
                          !error &&
                          point.estruturas.map(
                            (structure: { icone: string; label: string }) => (
                              <div className="d-flex align-items-center pe-4 pb-4">
                                <SVG
                                  src={structure.icone}
                                  width={30}
                                  fill="#6ebd00"
                                  color="#6ebd00"
                                  height="auto"
                                  title={structure.label}
                                />
                                <p
                                  key={structure.label}
                                  className="d-inline-flex ps-2 m-0"
                                >
                                  {structure.label}
                                </p>
                              </div>
                            ),
                          )}
                      </div>
                    </>
                  )}
                  {point.restricoes?.length >= 1 && (
                    <div>
                      <TitleH2Intern title="Restrições" />
                      <div className="d-flex flex-wrap">
                        {!isLoading &&
                          !error &&
                          point.restricoes.map(
                            (restriction: { icone: string; label: string }) => (
                              <div className="d-flex align-items-center pe-4 pb-4">
                                <SVG
                                  src={restriction.icone}
                                  width={30}
                                  fill="#6ebd00"
                                  height="auto"
                                  title={restriction.label}
                                />
                                <p
                                  key={restriction.label}
                                  className="d-inline-flex ps-2 m-0"
                                >
                                  {restriction.label}
                                </p>
                              </div>
                            ),
                          )}
                      </div>
                    </div>
                  )}
                  {point.formas_pagamento?.length >= 1 && (
                    <div>
                      <TitleH2Intern title="Formas de Pagamento" />
                      <div className="d-flex flex-wrap">
                        {!isLoading &&
                          !error &&
                          point.formas_pagamento.map(
                            (payment: { icone: string; label: string }) => (
                              <div className="d-flex align-items-center pe-4 py-4">
                                <BsCheckCircle color="#6ebd00" size={20} />
                                <p
                                  key={payment.label}
                                  className="d-inline-flex ps-2 m-0"
                                >
                                  {payment.label}
                                </p>
                              </div>
                            ),
                          )}
                      </div>
                    </div>
                  )}
                </Col>
                <Col xs={12} lg={4}>
                  <StyledH2 className="pb-2">Localização</StyledH2>
                  <GoogleMapComponent
                    latitude={Number(point?.addresses[0].lat)}
                    longitude={Number(point?.addresses[0].lng)}
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

export default memo(PontoTuristico)
