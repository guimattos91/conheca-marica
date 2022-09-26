import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

import Api from 'services/Api'

import { CollectionType } from 'types/CollectionTypes'
import { ItemType } from 'types/ItemTypes'

interface IContextProps {
  points: CollectionType[]
  point: ItemType | undefined
  error: string | null
  isLoading: boolean
  fetchPoint: (id: number, name: string) => Promise<void>
  fetchPoints: (search?: string) => Promise<void>
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
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchPoints = useCallback(async (search?: string) => {
    setIsLoading(true)
    setError(null)

    const params = {
      buscar: search?.length ? search : undefined,
    }

    try {
      const response = await Api.get('/pontos', { params })
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

  // useEffect(() => {
  //   fetchPoint(1)
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [1])

  return (
    <ReactContext.Provider
      value={useMemo(
        () => ({
          points,
          point,
          isLoading,
          error,
          fetchPoint,
          fetchPoints,
        }),
        [points, point, isLoading, error, fetchPoints, fetchPoint],
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
