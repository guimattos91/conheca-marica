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
  events: CollectionType[]
  event: ItemType | null
  categories: CategoryType[]
  error: string | null
  isLoading: boolean
  fetchEvent: (id: number) => Promise<void>
  fetchEvents: () => Promise<void>
  searchEvents: (search: string) => Promise<void>
}

interface IEventsProviderProps {
  children: React.ReactNode
}

export const ReactContext = createContext<IContextProps>({} as IContextProps)

export const EventProvider: React.FC<IEventsProviderProps> = ({ children }) => {
  const [events, setEvents] = useState<CollectionType[]>([])
  const [event, setEvent] = useState<ItemType | null>(null)
  const [categories, setCategories] = useState<CategoryType[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchEvents = useCallback(async () => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await Api.get('/eventos', {
        params: {
          fields: 'datahora_inicio',
          orderby: 'datahora_inicio',
          order: 'asc',
        },
      })
      setEvents(response.data.collection)
      setCategories(response.data.categorias)
    } catch {
      setError('Erro: Não achamos Nenhum Event ou Pousada')
    } finally {
      setIsLoading(false)
    }
  }, [])

  const searchEvents = useCallback(async (search: string) => {
    setIsLoading(true)
    setError(null)
    const params = {
      busca: search,
    }
    try {
      const response = await Api.get('/espacos/busca', { params })
      setEvents(response.data.collection)
    } catch {
      setError('Erro: Não achamos Nenhum Event ou Pousada')
    } finally {
      setIsLoading(false)
    }
  }, [])

  const fetchEvent = useCallback(async (id: number) => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await Api.get(`/eventos/${id}`)
      setEvent(response.data.item)
    } catch {
      setError('Erro: Não achamos Nenhum Event ou Pousada')
    } finally {
      setIsLoading(false)
    }
  }, [])

  return (
    <ReactContext.Provider
      value={useMemo(
        () => ({
          events,
          event,
          categories,
          isLoading,
          error,
          fetchEvent,
          fetchEvents,
          searchEvents,
        }),
        [
          events,
          event,
          categories,
          isLoading,
          error,
          fetchEvent,
          fetchEvents,
          searchEvents,
        ],
      )}
    >
      {children}
    </ReactContext.Provider>
  )
}

export const useEvents = (): IContextProps => {
  const context = useContext(ReactContext)

  if (!context) {
    // eslint-disable-next-line no-console
    console.error('usePoints must be within PointsProvider')
  }

  return context
}
