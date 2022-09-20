import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

import Api from 'services/Api'

import { CollectionType } from 'types/CollectionTypes'
import { ItemType } from 'types/ItemTypes'

interface IContextProps {
  hotels: CollectionType[]
  hotel: ItemType | null
  error: string | null
  isLoading: boolean
  fetchHotel: (id: number) => Promise<void>
  fetchHotels: () => Promise<void>
}

interface IHotelsProviderProps {
  children: React.ReactNode
}

export const ReactContext = createContext<IContextProps>({} as IContextProps)

export const HotelsProvider: React.FC<IHotelsProviderProps> = ({
  children,
}) => {
  const [hotels, setHotels] = useState<CollectionType[]>([])
  const [hotel, setHotel] = useState<ItemType | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchHotels = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    // const params = {
    //   token: search?.length ? search : undefined,
    // }

    try {
      const response = await Api.get('/hoteis-e-pousadas')
      setHotels(response.data.collection)
    } catch {
      setError('Erro: Não achamos Nenhum Hotel ou Pousada')
    } finally {
      setIsLoading(false)
    }
  }, [])

  const fetchHotel = useCallback(async (id: number) => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await Api.get(`/hoteis-e-pousadas/${id}/`)
      setHotel(response.data.item[0])
    } catch {
      setError('Erro: Não achamos Nenhum Hotel ou Pousada')
    } finally {
      setIsLoading(false)
    }
  }, [])

  //      <Link to={`/characters/${character.id}/${strToSlug(character.name)}`}>

  // UseEffects

  // useEffect(() => {
  //   setPoint(0)
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  return (
    <ReactContext.Provider
      value={useMemo(
        () => ({
          hotels,
          hotel,
          isLoading,
          error,
          fetchHotel,
          fetchHotels,
        }),
        [hotels, hotel, isLoading, error, fetchHotels, fetchHotel],
      )}
    >
      {children}
    </ReactContext.Provider>
  )
}

export const useHotels = (): IContextProps => {
  const context = useContext(ReactContext)

  if (!context) {
    // eslint-disable-next-line no-console
    console.error('usePoints must be within PointsProvider')
  }

  return context
}
