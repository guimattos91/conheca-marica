import { memo, useEffect } from 'react'

// eslint-disable-next-line import-helpers/order-imports
import GoogleMapReact from 'google-map-react'
import { Spinner } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { BsArrowLeft } from 'react-icons/bs'
import { MainStyled } from 'style/style'

import Config from 'Config'

import { useSpace } from 'context/SpacesContext'

import Footer from 'components/Footer'
import Header from 'components/Header'
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
  const { spaces, isLoading, error, fetchSpaces } = useSpace()
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
    setTitle(t('Pontos Turísticos'))
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
              <div className="d-flex justify-content-center">
                <Spinner animation="grow" variant="success" />
              </div>
            )}
            {!isLoading &&
              !error &&
              spaces.map(
                (space: {
                  id: number
                  nome: string
                  capa: string | undefined
                  lat: number | null
                  lng: number | null
                  enderecos: AddressType[]
                  categorias: CategoryType[]
                }) => (
                  <MapMarker lat={Number(space.lat)} lng={Number(space.lng)} />
                ),
              )}
            {!isLoading && !error && spaces.length === 0 && (
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
