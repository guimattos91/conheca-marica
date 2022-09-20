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
  events: CollectionType[]
  event: ItemType | null
  error: string | null
  isLoading: boolean
  fetchEvent: (id: number) => Promise<void>
  fetchEvents: () => Promise<void>
}

interface IEventsProviderProps {
  children: React.ReactNode
}

export const ReactContext = createContext<IContextProps>({} as IContextProps)

export const EventProvider: React.FC<IEventsProviderProps> = ({ children }) => {
  const [events, setEvents] = useState<CollectionType[]>([])
  const [event, setEvent] = useState<ItemType | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchEvents = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    // const params = {
    //   token: search?.length ? search : undefined,
    // }

    try {
      const response = await Api.get('/eventos', {
        params: {
          fields: 'datahora_inicio',
          orderby: 'datahora_inicio',
          order: 'asc',
        },
      })
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
      const response = await Api.get(`/eventos/${id}/`)
      setEvent(response.data.item[0])
    } catch {
      setError('Erro: Não achamos Nenhum Event ou Pousada')
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
          events,
          event,
          isLoading,
          error,
          fetchEvent,
          fetchEvents,
        }),
        [events, event, isLoading, error, fetchEvent, fetchEvents],
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
