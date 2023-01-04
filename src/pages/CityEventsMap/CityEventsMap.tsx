import { memo, useEffect } from 'react'

// eslint-disable-next-line import-helpers/order-imports
import GoogleMapReact from 'google-map-react'
import { Col } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { BsArrowLeft } from 'react-icons/bs'
import { MainStyled } from 'style/style'

import Config from 'Config'

import { useEvents } from 'context/EventsContext'

import Footer from 'components/Footer'
import Header from 'components/Header'
import LoadingComponent from 'components/LoadingComponent'
import { StyledLink } from 'components/TitleH1/style'

import useTitle from 'hooks/useTitle'

import { AddressType, CategoryType } from 'types/CollectionType'

import { BackDiv, DivMap, FaMapMarkerStyled, StyledH1 } from './style'

interface IMapMarkerProps {
  lat: number
  lng: number
}

const MapMarker: React.FC<IMapMarkerProps> = () => (
  <FaMapMarkerStyled color="red" size={24} />
)
const EventsSpacesMap: React.FC = () => {
  const { events, isLoading, error, fetchEvents } = useEvents()
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()
  const defaultProps = {
    center: {
      lat: -22.910508771435765,
      lng: -42.81977648729461,
    },
    zoom: 11,
  }
  useEffect(() => {
    setTitle(t('Eventos | Mapa'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])

  useEffect(() => {
    fetchEvents()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Header />
      <MainStyled>
        <BackDiv className="p-3">
          <StyledLink to="/hoteis-e-pousadas">
            <div className="d-flex align-items-center">
              <BsArrowLeft color="#333" />
              <StyledH1 className="ps-2">Hotéis e Pousadas</StyledH1>
            </div>
          </StyledLink>
        </BackDiv>
        <DivMap style={{ height: '100%', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: `${Config.services.google.mapsAPI.key}` }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            {isLoading && (
              <Col className="d-flex justify-content-center">
                <LoadingComponent Loading={isLoading} />
              </Col>
            )}
            {!isLoading &&
              !error &&
              events.map(
                (event: {
                  id: number
                  nome: string
                  capa: string | undefined
                  lat: number | null
                  lng: number | null
                  enderecos: AddressType[]
                  categorias: CategoryType[]
                }) => (
                  <MapMarker lat={Number(event.lat)} lng={Number(event.lng)} />
                ),
              )}
            {!isLoading && !error && events.length === 0 && (
              <h2>Nenhum resultado encontrado</h2>
            )}
          </GoogleMapReact>
        </DivMap>
      </MainStyled>
      <Footer />
    </>
  )
}

export default memo(EventsSpacesMap)
