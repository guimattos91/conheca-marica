import { memo } from 'react'

// eslint-disable-next-line import-helpers/order-imports
import GoogleMapReact from 'google-map-react'
import { Col } from 'react-bootstrap'
import { BsArrowLeft } from 'react-icons/bs'
import { MainStyled } from 'style/style'

import Config from 'Config'

import LoadingComponent from 'components/LoadingComponent'
import { StyledLink } from 'components/TitleH1/style'

import { AddressType, CategoryType, CollectionType } from 'types/CollectionType'

import MarkerMap from './MarkerMap'
import { BackDiv, DivMap, StyledH1 } from './style'

interface IMapComponentProps {
  category: CollectionType[]
  isloading: boolean
  error: string | null
  title: string
  categoryPage: string
}
interface ItemProps {
  id: number
  nome: string
  capa: string | undefined
  lat: number | null
  lng: number | null
  enderecos: AddressType[]
  categorias: CategoryType[]
}

const PageMapComponent: React.FC<IMapComponentProps> = ({
  category,
  isloading,
  error,
  title,
  categoryPage,
}) => {
  const defaultProps = {
    center: {
      lat: -22.910508771435765,
      lng: -42.81977648729461,
    },
    zoom: 11,
  }

  return (
    <MainStyled>
      <BackDiv className="p-3">
        <StyledLink to={categoryPage}>
          <div className="d-flex align-items-center">
            <BsArrowLeft color="#333" />
            <StyledH1 className="ps-2">{title}</StyledH1>
          </div>
        </StyledLink>
      </BackDiv>
      <DivMap style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: `${Config.services.google.mapsAPI.key}` }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          {isloading && (
            <Col className="d-flex justify-content-center">
              <LoadingComponent Loading={isloading} />
            </Col>
          )}
          {!isloading &&
            !error &&
            category.map((item: ItemProps) => (
              <MarkerMap
                key={item.id}
                item={item}
                lat={Number(item.lat)}
                lng={Number(item.lng)}
              />
            ))}
          {!isloading && !error && category.length === 0 && (
            <h2>Nenhum resultado encontrado</h2>
          )}
        </GoogleMapReact>
      </DivMap>
    </MainStyled>
  )
}

export default memo(PageMapComponent)
