import { memo, useEffect } from 'react'

import { useSpace } from 'context/SpacesContext'

import Footer from 'components/Footer'
import Header from 'components/Header'
import PageMapComponent from 'components/PageMapComponent'

import useTitle from 'hooks/useTitle'

const EventsSpacesMap: React.FC = () => {
  const { spaces, isLoading, error, fetchSpaces } = useSpace()
  const setTitle = useTitle()

  useEffect(() => {
    setTitle('Mapa | Espaços para Eventos')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    fetchSpaces()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Header />
      <PageMapComponent
        category={spaces}
        isloading={isLoading}
        error={error}
        title="Espaços para Eventos"
        categoryPage="/espacos-para-eventos"
      />
      <Footer />
    </>
  )
}

export default memo(EventsSpacesMap)
