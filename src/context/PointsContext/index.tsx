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
  points: CollectionType[]
  point: ItemType | undefined
  categories: CategoryType[]
  error: string | null
  isLoading: boolean
  fetchPoint: (id: number) => Promise<void>
  fetchPoints: () => Promise<void>
  searchPoints: (search: string) => Promise<void>
}

interface IPointsProviderProps {
  children: React.ReactNode
}

export const ReactContext = createContext<IContextProps>({} as IContextProps)

export const PointsProvider: React.FC<IPointsProviderProps> = ({
  children,
}) => {
  const [points, setPoints] = useState<CollectionType[]>([])
  const [point, setPoint] = useState<ItemType | undefined>()
  const [categories, setCategories] = useState<CategoryType[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchPoints = useCallback(async () => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await Api.get('/pontos')
      setPoints(response.data.collection)
      setCategories(response.data.categorias)
    } catch {
      setError('Erro: Não achamos seus Pontos Turísticos')
    } finally {
      setIsLoading(false)
    }
  }, [])

  const searchPoints = useCallback(async (search: string) => {
    setIsLoading(true)
    setError(null)
    const params = {
      busca: search,
    }
    try {
      const response = await Api.get('/pontos/busca', { params })
      setPoints(response.data.collection)
    } catch {
      setError('Erro: Não achamos seus Pontos Turísticos')
    } finally {
      setIsLoading(false)
    }
  }, [])

  const fetchPoint = useCallback(async (id: number) => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await Api.get(`/pontos/${id}`)
      setPoint(response.data.item)
    } catch {
      setError('Erro: Ponto não encontrado')
    } finally {
      setIsLoading(false)
    }
  }, [])

  return (
    <ReactContext.Provider
      value={useMemo(
        () => ({
          points,
          point,
          categories,
          isLoading,
          error,
          fetchPoint,
          fetchPoints,
          searchPoints,
        }),
        [
          points,
          point,
          isLoading,
          error,
          categories,
          fetchPoints,
          fetchPoint,
          searchPoints,
        ],
      )}
    >
      {children}
    </ReactContext.Provider>
  )
}

export const usePoints = (): IContextProps => {
  const context = useContext(ReactContext)

  if (!context) {
    // eslint-disable-next-line no-console
    console.error('usePoints must be within PointsProvider')
  }

  return context
}
