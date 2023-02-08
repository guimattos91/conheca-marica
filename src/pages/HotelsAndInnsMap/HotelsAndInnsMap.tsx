import { memo, useEffect } from 'react'

import { useHotels } from 'context/HotelsContext'

import Footer from 'components/Footer'
import Header from 'components/Header'
import PageMapComponent from 'components/PageMapComponent'

import useTitle from 'hooks/useTitle'

const HotelsAndInnsMap: React.FC = () => {
  const { hotels, isLoading, error, fetchHotels } = useHotels()
  const setTitle = useTitle()

  useEffect(() => {
    setTitle('Mapa | Hotéis e Pousadas')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    fetchHotels()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Header />
      <PageMapComponent
        category={hotels}
        isloading={isLoading}
        error={error}
        title="Hotéis e Pousadas"
      />
      <Footer />
    </>
  )
}

export default memo(HotelsAndInnsMap)
