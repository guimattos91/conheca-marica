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
  restaurants: CollectionType[]
  restaurant: ItemType | null
  error: string | null
  isLoading: boolean
  fetchRestaurant: (id: number) => Promise<void>
  fetchRestaurants: () => Promise<void>
}

interface IRestaurantsProviderProps {
  children: React.ReactNode
}

export const ReactContext = createContext<IContextProps>({} as IContextProps)

export const RestaurantsProvider: React.FC<IRestaurantsProviderProps> = ({
  children,
}) => {
  const [restaurants, setRestaurants] = useState<CollectionType[]>([])
  const [restaurant, setRestaurant] = useState<ItemType | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchRestaurants = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    // const params = {
    //   token: search?.length ? search : undefined,
    // }

    try {
      const response = await Api.get('/restaurantes')
      setRestaurants(response.data.collection)
    } catch {
      setError('Erro: Não achamos Nenhum Bar ou restaurantes')
    } finally {
      setIsLoading(false)
    }
  }, [])

  const fetchRestaurant = useCallback(async (id: number) => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await Api.get(`/restaurantes/${id}/`)
      setRestaurant(response.data.item[0])
    } catch {
      setError('Erro: Não achamos Nenhum Bar ou restaurantes')
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
          restaurants,
          restaurant,
          isLoading,
          error,
          fetchRestaurant,
          fetchRestaurants,
        }),
        [
          restaurants,
          restaurant,
          isLoading,
          error,
          fetchRestaurants,
          fetchRestaurant,
        ],
      )}
    >
      {children}
    </ReactContext.Provider>
  )
}

export const useRestaurants = (): IContextProps => {
  const context = useContext(ReactContext)

  if (!context) {
    // eslint-disable-next-line no-console
    console.error('usePoints must be within PointsProvider')
  }

  return context
}
