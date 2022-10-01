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
  stores: CollectionType[]
  store: ItemType | null
  categories: CategoryType[]
  error: string | null
  isLoading: boolean
  fetchStore: (id: number) => Promise<void>
  fetchStores: () => Promise<void>
  searchStores: (search: string) => Promise<void>
}

interface IStoresProviderProps {
  children: React.ReactNode
}

export const ReactContext = createContext<IContextProps>({} as IContextProps)

export const StoresProvider: React.FC<IStoresProviderProps> = ({
  children,
}) => {
  const [stores, setStores] = useState<CollectionType[]>([])
  const [store, setStore] = useState<ItemType | null>(null)
  const [categories, setCategories] = useState<CategoryType[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchStores = useCallback(async () => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await Api.get('/comercios')
      setStores(response.data.collection)
      setCategories(response.data.categorias)
    } catch {
      setError('Erro: Não achamos Nenhum Store ou Pousada')
    } finally {
      setIsLoading(false)
    }
  }, [])
  const searchStores = useCallback(async (search: string) => {
    setIsLoading(true)
    setError(null)
    const params = {
      busca: search,
    }
    try {
      const response = await Api.get('/pontos/busca', { params })
      setStores(response.data.collection)
    } catch {
      setError('Erro: Não achamos seus Pontos Turísticos')
    } finally {
      setIsLoading(false)
    }
  }, [])

  const fetchStore = useCallback(async (id: number) => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await Api.get(`/comercios/${id}`)
      setStore(response.data.item)
    } catch {
      setError('Erro: Não achamos Nenhum Store ou Pousada')
    } finally {
      setIsLoading(false)
    }
  }, [])

  return (
    <ReactContext.Provider
      value={useMemo(
        () => ({
          store,
          stores,
          categories,
          isLoading,
          error,
          fetchStore,
          fetchStores,
          searchStores,
        }),
        [
          store,
          stores,
          categories,
          isLoading,
          error,
          fetchStores,
          fetchStore,
          searchStores,
        ],
      )}
    >
      {children}
    </ReactContext.Provider>
  )
}

export const useStores = (): IContextProps => {
  const context = useContext(ReactContext)

  if (!context) {
    // eslint-disable-next-line no-console
    console.error('usePoints must be within PointsProvider')
  }

  return context
}
