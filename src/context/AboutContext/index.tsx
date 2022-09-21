import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

import Api from 'services/Api'

import { AboutType } from 'types/AboutType'

interface IContextProps {
  about: AboutType | undefined
  error: string | null
  isLoading: boolean
  fetchAbout: () => Promise<void>
}

interface IAboutsProviderProps {
  children: React.ReactNode
}

export const ReactContext = createContext<IContextProps>({} as IContextProps)

export const AboutProvider: React.FC<IAboutsProviderProps> = ({ children }) => {
  const [about, setAbout] = useState<AboutType>()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchAbout = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    // const params = {
    //   token: search?.length ? search : undefined,
    // }

    try {
      const response = await Api.get('/apps/get')
      setAbout(response.data)
    } catch {
      setError('Erro: Não achamos Nenhum About')
    } finally {
      setIsLoading(false)
    }
  }, [])

  //      <Link to={`/characters/${character.id}/${strToSlug(character.name)}`}>

  // UseEffects

  // useEffect(() => {
  //   setAbout(0)
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [0])

  return (
    <ReactContext.Provider
      value={useMemo(
        () => ({
          about,
          isLoading,
          error,
          fetchAbout,
        }),
        [about, isLoading, error, fetchAbout],
      )}
    >
      {children}
    </ReactContext.Provider>
  )
}

export const useAbout = (): IContextProps => {
  const context = useContext(ReactContext)

  if (!context) {
    // eslint-disable-next-line no-console
    console.error('useAbout must be within AboutProvider')
  }

  return context
}
