import { memo, useEffect } from 'react'

import { useStores } from 'context/StoresContext'

import Footer from 'components/Footer'
import Header from 'components/Header'
import PageMapComponent from 'components/PageMapComponent'

import useTitle from 'hooks/useTitle'

const StoresMap: React.FC = () => {
  const { stores, isLoading, error, fetchStores } = useStores()
  const setTitle = useTitle()

  useEffect(() => {
    setTitle('Mapa | Comércio Local')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    fetchStores()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Header />
      <PageMapComponent
        category={stores}
        isloading={isLoading}
        error={error}
        title="Comércio Local"
        categoryPage="/comercios"
      />
      <Footer />
    </>
  )
}

export default memo(StoresMap)
