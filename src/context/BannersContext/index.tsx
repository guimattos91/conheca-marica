import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

import Api from 'services/Api'

import { BannersType } from 'types/BannersType'

interface IContextProps {
  banners: BannersType[]
  banner: BannersType | null
  error: string | null
  isLoading: boolean
  fetchBanner: (id: number) => Promise<void>
  fetchBanners: () => Promise<void>
}

interface IBannersProviderProps {
  children: React.ReactNode
}

export const ReactContext = createContext<IContextProps>({} as IContextProps)

export const BannerProvider: React.FC<IBannersProviderProps> = ({
  children,
}) => {
  const [banners, setBanners] = useState<BannersType[]>([])
  const [banner, setBanner] = useState<BannersType | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchBanners = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    // const params = {
    //   token: search?.length ? search : undefined,
    // }

    try {
      const response = await Api.get('/banners')
      setBanners(response.data)
    } catch {
      setError('Erro: Não achamos Nenhum Banner')
    } finally {
      setIsLoading(false)
    }
  }, [])

  const fetchBanner = useCallback(async (id: number) => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await Api.get(`/espacos/${id}/`)
      setBanner(response.data.item[0])
    } catch {
      setError('Erro: Não achamos Nenhum Banner ou Pousada')
    } finally {
      setIsLoading(false)
    }
  }, [])

  //      <Link to={`/characters/${character.id}/${strToSlug(character.name)}`}>

  // UseEffects

  // useEffect(() => {
  //   setBanner(0)
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [0])

  return (
    <ReactContext.Provider
      value={useMemo(
        () => ({
          banners,
          banner,
          isLoading,
          error,
          fetchBanner,
          fetchBanners,
        }),
        [banner, banners, isLoading, error, fetchBanner, fetchBanners],
      )}
    >
      {children}
    </ReactContext.Provider>
  )
}

export const useBanner = (): IContextProps => {
  const context = useContext(ReactContext)

  if (!context) {
    // eslint-disable-next-line no-console
    console.error('usePoints must be within PointsProvider')
  }

  return context
}
