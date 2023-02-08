import React, { memo, useEffect } from 'react'

import { usePoints } from 'context/PointsContext'

import Footer from 'components/Footer'
import Header from 'components/Header'
import PageMapComponent from 'components/PageMapComponent'

import useTitle from 'hooks/useTitle'

const TouristicPointsMap: React.FC = () => {
  const { points, isLoading, error, fetchPoints } = usePoints()
  const setTitle = useTitle()

  useEffect(() => {
    setTitle('Mapa | Pontos Turísticos')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    fetchPoints()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Header />
      <PageMapComponent
        category={points}
        isloading={isLoading}
        error={error}
        title="Pontos Turísticos"
      />
      <Footer />
    </>
  )
}

export default memo(TouristicPointsMap)
