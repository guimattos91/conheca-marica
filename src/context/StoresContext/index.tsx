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
  stores: CollectionType[]
  store: ItemType | null
  error: string | null
  isLoading: boolean
  fetchStore: (id: number) => Promise<void>
  fetchStores: () => Promise<void>
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
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchStores = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    // const params = {
    //   token: search?.length ? search : undefined,
    // }

    try {
      const response = await Api.get('/comercios')
      setStores(response.data.collection)
    } catch {
      setError('Erro: Não achamos Nenhum Store ou Pousada')
    } finally {
      setIsLoading(false)
    }
  }, [])

  const fetchStore = useCallback(async (id: number) => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await Api.get(`/comercios/${id}/`)
      setStore(response.data.item[0])
    } catch {
      setError('Erro: Não achamos Nenhum Store ou Pousada')
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
          store,
          stores,
          isLoading,
          error,
          fetchStore,
          fetchStores,
        }),
        [store, stores, isLoading, error, fetchStores, fetchStore],
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
