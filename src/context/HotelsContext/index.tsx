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
  hotels: CollectionType[]
  hotel: ItemType | null
  categories: CategoryType[]
  error: string | null
  isLoading: boolean
  fetchHotel: (id: number) => Promise<void>
  fetchCategoryHotels: (id: number) => Promise<void>
  fetchHotels: () => Promise<void>
  searchHotels: (search: string) => Promise<void>
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
  const [categories, setCategories] = useState<CategoryType[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchHotels = useCallback(async () => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await Api.get('/hoteis-e-pousadas')
      setHotels(response.data.collection)
      setCategories(response.data.categorias)
    } catch {
      setError('Erro: Não achamos Nenhum Hotel ou Pousada')
    } finally {
      setIsLoading(false)
    }
  }, [])

  const searchHotels = useCallback(async (search: string) => {
    setIsLoading(true)
    setError(null)
    const params = {
      busca: search,
    }
    try {
      const response = await Api.get('/hoteis-e-pousadas/busca', { params })
      setHotels(response.data.collection)
    } catch {
      setError('Erro: Não achamos seus Pontos Turísticos')
    } finally {
      setIsLoading(false)
    }
  }, [])

  const fetchHotel = useCallback(async (id: number) => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await Api.get(`/hoteis-e-pousadas/${id}`)
      setHotel(response.data.item)
    } catch {
      setError('Erro: Não achamos Nenhum Hotel ou Pousada')
    } finally {
      setIsLoading(false)
    }
  }, [])
  const fetchCategoryHotels = useCallback(async (id: number) => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await Api.get(`/hoteis-e-pousadas/categorias/${id}`)
      setHotels(response.data.collection)
    } catch {
      setError('Erro: Não achamos Nenhum Hotel ou Pousada')
    } finally {
      setIsLoading(false)
    }
  }, [])

  return (
    <ReactContext.Provider
      value={useMemo(
        () => ({
          hotels,
          hotel,
          categories,
          isLoading,
          error,
          fetchHotel,
          fetchHotels,
          searchHotels,
          fetchCategoryHotels,
        }),
        [
          hotels,
          hotel,
          categories,
          isLoading,
          error,
          fetchHotels,
          fetchHotel,
          searchHotels,
          fetchCategoryHotels,
        ],
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
