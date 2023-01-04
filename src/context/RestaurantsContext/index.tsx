import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

import Api from 'services/Api'

import { CategoryType } from 'types/CategoryType'
import { CollectionType } from 'types/CollectionType'
import { ItemType } from 'types/ItemType'

interface IContextProps {
  restaurants: CollectionType[]
  restaurant: ItemType | null
  categories: CategoryType[]
  error: string | null
  isLoading: boolean
  fetchRestaurant: (id: number) => Promise<void>
  fetchCategoryRestaurants: (id: number) => Promise<void>
  fetchAllCategoryRestaurants: () => Promise<void>
  fetchRestaurants: () => Promise<void>
  searchRestaurants: (search: string) => Promise<void>
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
  const [categories, setCategories] = useState<CategoryType[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchRestaurants = useCallback(async () => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await Api.get('/restaurantes')
      setRestaurants(response.data.collection)
      setCategories(response.data.categorias)
    } catch {
      setError('Erro: Não achamos Nenhum Bar ou Restaurante')
    } finally {
      setIsLoading(false)
    }
  }, [])

  const searchRestaurants = useCallback(async (search: string) => {
    setIsLoading(true)
    setError(null)
    const params = {
      busca: search,
    }
    try {
      const response = await Api.get('/restaurantes/busca', { params })
      setRestaurants(response.data.collection)
    } catch {
      setError('Erro: Não achamos Nenhum Bar ou Restaurante')
    } finally {
      setIsLoading(false)
    }
  }, [])

  const fetchRestaurant = useCallback(async (id: number) => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await Api.get(`/restaurantes/${id}/`)
      setRestaurant(response.data.item)
    } catch {
      setError('Erro: Não achamos Nenhum Bar ou Restaurante')
    } finally {
      setIsLoading(false)
    }
  }, [])

  const fetchCategoryRestaurants = useCallback(async (id: number) => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await Api.get(`/restaurantes/categorias/${id}/`)
      setRestaurants(response.data.collection)
    } catch {
      setError('Erro: Não achamos Nenhum Bar ou Restaurante')
    } finally {
      setIsLoading(false)
    }
  }, [])

  const fetchAllCategoryRestaurants = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await Api.get(`/restaurantes/categorias/`)
      setCategories(response.data.categorias)
    } catch {
      setError('Erro: Não achamos Nenhum Bar ou Restaurante')
    } finally {
      setIsLoading(false)
    }
  }, [])

  return (
    <ReactContext.Provider
      value={useMemo(
        () => ({
          restaurants,
          restaurant,
          categories,
          isLoading,
          error,
          fetchRestaurant,
          fetchRestaurants,
          fetchAllCategoryRestaurants,
          fetchCategoryRestaurants,
          searchRestaurants,
        }),
        [
          restaurants,
          restaurant,
          categories,
          isLoading,
          error,
          fetchRestaurants,
          fetchRestaurant,
          fetchAllCategoryRestaurants,
          fetchCategoryRestaurants,
          searchRestaurants,
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
