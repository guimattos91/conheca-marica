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
  spaces: CollectionType[]
  space: ItemType | null
  error: string | null
  isLoading: boolean
  fetchSpace: (id: number) => Promise<void>
  fetchSpaces: () => Promise<void>
}

interface ISpacesProviderProps {
  children: React.ReactNode
}

export const ReactContext = createContext<IContextProps>({} as IContextProps)

export const SpaceProvider: React.FC<ISpacesProviderProps> = ({ children }) => {
  const [spaces, setSpaces] = useState<CollectionType[]>([])
  const [space, setSpace] = useState<ItemType | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchSpaces = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    // const params = {
    //   token: search?.length ? search : undefined,
    // }

    try {
      const response = await Api.get('/espacos')
      setSpaces(response.data.collection)
    } catch {
      setError('Erro: Não achamos Nenhum Space ou Pousada')
    } finally {
      setIsLoading(false)
    }
  }, [])

  const fetchSpace = useCallback(async (id: number) => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await Api.get(`/espacos/${id}/`)
      setSpace(response.data.item[0])
    } catch {
      setError('Erro: Não achamos Nenhum Space ou Pousada')
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
          spaces,
          space,
          isLoading,
          error,
          fetchSpace,
          fetchSpaces,
        }),
        [spaces, space, isLoading, error, fetchSpace, fetchSpaces],
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
