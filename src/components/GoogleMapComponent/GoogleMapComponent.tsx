import React, { memo } from 'react'

import GoogleMapReact from 'google-map-react'

import Config from 'Config'

import { FaMapMarkerStyled } from './style'

interface IGoogleMarkProps {
  latitude: number
  longitude: number
}

interface IMapMarkerProps {
  lat: number
  lng: number
}

const MapMarker: React.FC<IMapMarkerProps> = () => (
  <FaMapMarkerStyled color="red" size={24} />
)

const GoogleMapComponent: React.FC<IGoogleMarkProps> = ({
  latitude,
  longitude,
}) => {
  const defaultProps = {
    center: {
      lat: latitude,
      lng: longitude,
    },
    zoom: 15,
  }

  return (
    <div style={{ height: 300, width: '100%', background: 'red' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: `${Config.services.google.mapsAPI.key}` }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <MapMarker lat={Number(latitude)} lng={Number(longitude)} />
      </GoogleMapReact>
    </div>
  )
}

export default memo(GoogleMapComponent)
