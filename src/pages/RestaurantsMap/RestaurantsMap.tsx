import { memo, useEffect } from 'react'

import { useRestaurants } from 'context/RestaurantsContext'

import Footer from 'components/Footer'
import Header from 'components/Header'
import PageMapComponent from 'components/PageMapComponent'

import useTitle from 'hooks/useTitle'

const RestaurantsMap: React.FC = () => {
  const { restaurants, isLoading, error, fetchRestaurants } = useRestaurants()
  const setTitle = useTitle()

  useEffect(() => {
    setTitle('Mapa | Bares e Restaurantes')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    fetchRestaurants()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Header />
      <PageMapComponent
        category={restaurants}
        isloading={isLoading}
        error={error}
        title="Bares e Restaurantes"
      />
      <Footer />
    </>
  )
}

export default memo(RestaurantsMap)
