import { memo, useEffect } from 'react'

// eslint-disable-next-line import-helpers/order-imports
import { Col, Container, Row } from 'react-bootstrap'

// import Config from 'Config'

import { useTranslation } from 'react-i18next'
import { MainStyled } from 'style/style'

import AboutCard from 'components/AboutCard'
import Footer from 'components/Footer'
import Header from 'components/Header'

import useTitle from 'hooks/useTitle'

import { BannerContainer } from './styles'

const PontosTuristicos: React.FC = () => {
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()

  useEffect(() => {
    setTitle(t('Sobre a cidade'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])
  return (
    <>
      <Header />
      <MainStyled>
        <BannerContainer />
        <div>
          <Container>
            <Row>
              <Col>
                <AboutCard />
              </Col>
            </Row>
          </Container>
        </div>
      </MainStyled>
      <Footer />
    </>
  )
}

export default memo(PontosTuristicos)
