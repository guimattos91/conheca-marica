import { memo, useCallback, useRef, useState } from 'react'

import { IoIosPin } from 'react-icons/io'

import MapItemCard from 'components/MapItemCard'

import { useOnClickOutside } from 'hooks/useClickOutside'

import { AddressType, CategoryType } from 'types/CollectionType'

import { ButtonStyled } from './style'

interface ItemProps {
  id: number
  nome: string
  capa: string | undefined
  lat: number | null
  lng: number | null
  enderecos: AddressType[]
  categorias: CategoryType[]
}

interface IMapMarkerProps {
  lat: number
  lng: number
  item: ItemProps
}

const MarkerMap: React.FC<IMapMarkerProps> = ({ item }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [showCard, setShowCard] = useState(false)
  useOnClickOutside(ref, () => setShowCard(false))

  const toggleShowCard = useCallback(() => {
    setShowCard((prev) => !prev)
  }, [setShowCard])

  return (
    <div ref={ref}>
      {showCard && (
        <MapItemCard collection={item} linkcategory="hoteis-e-pousadas" />
      )}
      <ButtonStyled type="button" onClick={toggleShowCard}>
        <IoIosPin color="red" size={24} />
      </ButtonStyled>
    </div>
  )
}

export default memo(MarkerMap)
