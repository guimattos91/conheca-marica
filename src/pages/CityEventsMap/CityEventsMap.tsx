import { memo, useEffect } from 'react'

import { useEvents } from 'context/EventsContext'

import Footer from 'components/Footer'
import Header from 'components/Header'
import PageMapComponent from 'components/PageMapComponent'

import useTitle from 'hooks/useTitle'

const EventsSpacesMap: React.FC = () => {
  const { events, isLoading, error, fetchEvents } = useEvents()
  const setTitle = useTitle()

  useEffect(() => {
    setTitle('Mapa | Eventos')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    fetchEvents()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Header />
      <PageMapComponent
        category={events}
        isloading={isLoading}
        error={error}
        title="Eventos"
        categoryPage="/eventos"
      />
      <Footer />
    </>
  )
}

export default memo(EventsSpacesMap)
