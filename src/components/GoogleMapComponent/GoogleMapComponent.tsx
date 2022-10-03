import React, { memo } from 'react'

import GoogleMapReact from 'google-map-react'

import Config from 'Config'

import { usePoints } from 'context/PointsContext'

import { ItemType } from 'types/ItemType'

interface IGoogleMarkProps {
  item: ItemType
}
const GoogleMapComponent: React.FC<IGoogleMarkProps> = () => {
  const { point, isLoading, error, fetchPoint } = usePoints()

  const defaultProps = {
    center: {
      lat: point?.addresses[0].lat,
      lng: point?.addresses[0].lng,
    },
    zoom: 11,
  }

  return (
    {Array?.isArray(point.addresses) && point?.addresses?.length > 0 &&(
    <div style={{ height: 300, width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: `${Config.services.google.mapsAPI.key}` }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {/* <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" /> */}
      </GoogleMapReact>
      </div>
      )}
  )
}

export default memo(GoogleMapComponent)
