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
  spaces: CollectionType[]
  space: ItemType | null
  categories: CategoryType[]
  error: string | null
  isLoading: boolean
  fetchSpace: (id: number) => Promise<void>
  fetchSpaces: () => Promise<void>
  fetchCategorySpaces: (id: number) => Promise<void>
  fetchAllCategorySpaces: () => Promise<void>
  searchSpaces: (search: string) => Promise<void>
}

interface ISpacesProviderProps {
  children: React.ReactNode
}

export const ReactContext = createContext<IContextProps>({} as IContextProps)

export const SpaceProvider: React.FC<ISpacesProviderProps> = ({ children }) => {
  const [spaces, setSpaces] = useState<CollectionType[]>([])
  const [space, setSpace] = useState<ItemType | null>(null)
  const [categories, setCategories] = useState<CategoryType[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchSpaces = useCallback(async () => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await Api.get('/espacos')
      setSpaces(response.data.collection)
      setCategories(response.data.categorias)
    } catch {
      setError('Erro: Não achamos Nenhum Space ou Pousada')
    } finally {
      setIsLoading(false)
    }
  }, [])

  const searchSpaces = useCallback(async (search: string) => {
    setIsLoading(true)
    setError(null)
    const params = {
      busca: search,
    }
    try {
      const response = await Api.get('/espacos/busca', { params })
      setSpaces(response.data.collection)
    } catch {
      setError('Erro: Não achamos seus Pontos Turísticos')
    } finally {
      setIsLoading(false)
    }
  }, [])

  const fetchSpace = useCallback(async (id: number) => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await Api.get(`/espacos/${id}`)
      setSpace(response.data.item)
    } catch {
      setError('Erro: Não achamos Nenhum Space ou Pousada')
    } finally {
      setIsLoading(false)
    }
  }, [])

  const fetchCategorySpaces = useCallback(async (id: number) => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await Api.get(`/espacos/categorias/${id}`)
      setSpace(response.data.item)
    } catch {
      setError('Erro: Não achamos Nenhum Space ou Pousada')
    } finally {
      setIsLoading(false)
    }
  }, [])

  const fetchAllCategorySpaces = useCallback(async () => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await Api.get(`/espacos/categorias/`)
      setCategories(response.data.categorias)
    } catch {
      setError('Erro: Não achamos Nenhum Space ou Pousada')
    } finally {
      setIsLoading(false)
    }
  }, [])

  return (
    <ReactContext.Provider
      value={useMemo(
        () => ({
          spaces,
          space,
          categories,
          isLoading,
          error,
          fetchSpace,
          fetchSpaces,
          fetchCategorySpaces,
          fetchAllCategorySpaces,
          searchSpaces,
        }),
        [
          spaces,
          space,
          categories,
          isLoading,
          error,
          fetchSpace,
          fetchSpaces,
          fetchCategorySpaces,
          fetchAllCategorySpaces,
          searchSpaces,
        ],
      )}
    >
      {children}
    </ReactContext.Provider>
  )
}

export const useSpace = (): IContextProps => {
  const context = useContext(ReactContext)

  if (!context) {
    // eslint-disable-next-line no-console
    console.error('usePoints must be within PointsProvider')
  }

  return context
}
