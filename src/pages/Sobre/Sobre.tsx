import { memo } from 'react'

// eslint-disable-next-line import-helpers/order-imports
import { Col, Container, Row } from 'react-bootstrap'

// import Config from 'Config'

import { MainStyled } from 'style/style'

import Footer from 'components/Footer'
import Header from 'components/Header'

import { CollectionType } from 'types/CollectionTypes'

import { BannerContainer } from './styles'

interface IPointsProviderProps {
  collection: CollectionType
}

const PontosTuristicos: React.FC<IPointsProviderProps> = () => {
  return (
    <>
      <Header />
      <MainStyled>
        <BannerContainer />
        <Container>
          <Row>
            <Col>
              <p> ''</p>
            </Col>
          </Row>
        </Container>
      </MainStyled>
      <Footer />
    </>
  )
}

export default memo(PontosTuristicos)
