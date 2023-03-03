import { memo, useEffect } from 'react'

// eslint-disable-next-line import-helpers/order-imports
import { Col, Row } from 'react-bootstrap'

import { BsArrowLeft, BsCheckCircle, BsFillHouseDoorFill } from 'react-icons/bs'
import { Link, useParams } from 'react-router-dom'
import { MainStyled, TextDescription } from 'style/style'

import { useSpace } from 'context/SpacesContext'

import AboutComponent from 'components/AboutComponent'
import AppsSmartphoneInternalPage from 'components/AppsSmartphoneInternalPage'
import CategoryPillsComponent from 'components/CategoryPillsComponent'
import Footer from 'components/Footer'
import GoogleMapComponent from 'components/GoogleMapComponent'
import Header from 'components/Header'
import LoadingComponent from 'components/LoadingComponent'
import PaymentComponent from 'components/PaymentComponent'
import RestrictComponent from 'components/RestrictComponent'
import SliderCarouselComponent from 'components/SliderCarouselComponent'
import StructureComponent from 'components/StructureComponent'
import TitleH2Intern from 'components/TitleH2Intern'

import useTitle from 'hooks/useTitle'

import {
  StyledContainer,
  StyledH1,
  StyledH2,
  StyledH3,
  StyledSmallText,
} from './style'

const EspacoParaEvento: React.FC = () => {
  const { space, categories, isLoading, error, fetchSpace } = useSpace()
  const { id } = useParams()

  const setTitle = useTitle()
  useEffect(() => setTitle(`${space?.nome} | Espaços para Eventos`))

  useEffect(() => {
    if (id) fetchSpace(Number(id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchSpace, id])

  return (
    <>
      <Header />
      <MainStyled className="pb-5">
        {isLoading && (
          <Col className="d-flex justify-content-center">
            <LoadingComponent Loading={isLoading} />
          </Col>
        )}
        {!isLoading && !error && space && (
          <>
            <SliderCarouselComponent itemCategory={space} />

            <StyledContainer>
              <Row className="pt-5">
                <Col key={space.id}>
                  <div className="d-flex align-items-center">
                    <Link to="/espacos-para-eventos" className="pe-3">
                      <BsArrowLeft size={20} color="#333" />
                    </Link>
                    <div className="d-flex flex-column">
                      <StyledSmallText>Espaços para Eventos</StyledSmallText>
                      <StyledH1>{space.nome}</StyledH1>
                    </div>
                  </div>
                  <div className="pt-3">
                    <CategoryPillsComponent
                      Loading={isLoading}
                      Error={error}
                      Categories={categories}
                    />
                    <TextDescription>{space.descricao_t}</TextDescription>
                  </div>
                  <AboutComponent category={space} />

                  {space?.espacos?.length >= 1 && (
                    <div>
                      <TitleH2Intern title="Espaços" />
                      <div className="d-flex flex-wrap">
                        {space.espacos.map(
                          (spaceinfo: {
                            id: number
                            nome: string
                            descricao: string
                            area: number
                            pe_direito: number
                            medidas: string
                            capacidade: number
                            ordem: number
                          }) => (
                            <div
                              className="d-flex align-items-start pe-4 pb-4"
                              key={spaceinfo.id}
                            >
                              <BsFillHouseDoorFill
                                color="#6ebd00"
                                size={20}
                                className="me-3"
                              />
                              <div className="d-flex flex-column">
                                <StyledH3 className="d-inline-flex">
                                  {spaceinfo?.nome}
                                </StyledH3>
                                <StyledSmallText className="d-inline-flex pb-2 fst-italic">
                                  {spaceinfo?.descricao}
                                </StyledSmallText>
                                <StyledSmallText className="d-inline-flex">
                                  Área: {spaceinfo?.area}m²
                                </StyledSmallText>
                                <StyledSmallText className="d-inline-flex">
                                  Pé direito: {spaceinfo?.pe_direito}m
                                </StyledSmallText>
                                <StyledSmallText className="d-inline-flex">
                                  Medidas: {spaceinfo?.medidas}
                                </StyledSmallText>
                                <StyledSmallText className="d-inline-flex">
                                  Capacidade: {spaceinfo?.capacidade} pessoas
                                </StyledSmallText>
                              </div>
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  )}
                  {space?.equipamentos?.length >= 1 && (
                    <div>
                      <TitleH2Intern title="Equipamentos" />
                      <div className="d-flex flex-wrap">
                        {space.equipamentos.map(
                          (equipament: { id: number; label: string }) => (
                            <div
                              className="d-flex align-items-center pe-4 pb-4"
                              key={equipament.id}
                            >
                              <BsCheckCircle color="#6ebd00" size={20} />
                              <p className="d-inline-flex ps-2 m-0">
                                {equipament.label}
                              </p>
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  )}
                  <StructureComponent category={space} />
                  <RestrictComponent category={space} />
                  <PaymentComponent category={space} />
                </Col>
                <Col xs={12} lg={4}>
                  <StyledH2 className="pb-2">Localização</StyledH2>
                  <GoogleMapComponent
                    latitude={Number(space?.addresses[0].lat)}
                    longitude={Number(space?.addresses[0].lng)}
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
