import { memo, useEffect } from 'react'

// eslint-disable-next-line import-helpers/order-imports
import { Col, Container, Row } from 'react-bootstrap'

// import Config from 'Config'

import { useTranslation } from 'react-i18next'

import AboutCard from 'components/AboutCard'
import Footer from 'components/Footer'
import Header from 'components/Header'

import useTitle from 'hooks/useTitle'

import { AboutType } from 'types/AboutType'

import { BannerContainer } from './styles'

interface IAboutsProviderProps {
  about: AboutType
}

const PontosTuristicos: React.FC<IAboutsProviderProps> = ({ about }) => {
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()

  useEffect(() => {
    setTitle(t('Sobre a cidade'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])
  return (
    <>
      <Header />
      <main>
        <BannerContainer />
        <div>
          <Container>
            <Row>
              <Col>
                <AboutCard about={about} />
              </Col>
            </Row>
          </Container>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default memo(PontosTuristicos)
