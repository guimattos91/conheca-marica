import { memo, useEffect } from 'react'

import { Col, Container, Row } from 'react-bootstrap'
// eslint-disable-next-line import-helpers/order-imports
import { useTranslation } from 'react-i18next'

import { BsFillHouseFill } from 'react-icons/bs'
import { FaUmbrellaBeach, FaBed, FaStoreAlt, FaRoute } from 'react-icons/fa'
import { GiMicrophone, GiSewingNeedle } from 'react-icons/gi'
import { MdRestaurant, MdDateRange } from 'react-icons/md'
import { MainStyled } from 'style/style'

import AppsSmartphone from 'components/AppsSmartphone'
import CarouselBanner from 'components/CarouselComponent'
import CategoryCard from 'components/CategoryCard'
import Footer from 'components/Footer'
import Header from 'components/Header'

import useTitle from 'hooks/useTitle'

const Home: React.FC = () => {
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()

  useEffect(() => {
    setTitle(t('home.head-title'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])

  return (
    <>
      <Header />
      <MainStyled>
        <Row className="row-cols-1">
          <Col>
            <CarouselBanner />
          </Col>
        </Row>
        <Container>
          <Row className="row-cols-1 row-cols-md-3 g-3 p-5">
            <Col>
              <CategoryCard
                page="/pontos-turisticos"
                title="Pontos Turísticos"
                icon={FaUmbrellaBeach}
                description="Conheça nossas praias, lagoas, grutas e outros pontos turísticos"
              />
            </Col>
            <Col>
              <CategoryCard
                page="hoteis-e-pousadas"
                title="Hotéis e Pousadas"
                icon={FaBed}
                description="Saiba onde se hospedar em Maricá"
              />
            </Col>
            <Col>
              <CategoryCard
                page="bares-e-Restaurantes"
                title="Bares e Restaurantes"
                icon={MdRestaurant}
                description="Aprecie a gastronomia de Maricá"
              />
            </Col>
            <Col>
              <CategoryCard
                page="Comercio"
                title="Comércio Local"
                icon={FaStoreAlt}
                description="Veja onde fazer as suas compras"
              />
            </Col>
            <Col>
              <CategoryCard
                page="espacos-para-eventos"
                title="Espaços para Eventos"
                icon={GiMicrophone}
                description="Locais para fazer suas festas ou reuniões"
              />
            </Col>
            <Col>
              <CategoryCard
                page="eventos"
                title="Eventos"
                icon={MdDateRange}
                description="Confira o calendário de eventos da cidade"
              />
            </Col>
            <Col>
              <CategoryCard
                page="/sobre"
                title="Sobre a cidade"
                icon={BsFillHouseFill}
                description="Conheça mais sobre Maricá"
              />
            </Col>
            <Col>
              <CategoryCard
                page="https://contato.site/5d9bab8/marica-cvb3/paginaprincipal"
                title="Roteiros Turísticos"
                icon={FaRoute}
                description="Conheça diversas trilhas ecológicas e de aventura, com variados níveis de dificuldade."
              />
            </Col>
            <Col>
              <CategoryCard
                page="https://www.feirartemarica.com.br/"
                title="Artesanato"
                icon={GiSewingNeedle}
                description="Conheça e compre as criações dos artesãos de Maricá/RJ"
              />
            </Col>
          </Row>
        </Container>
        <AppsSmartphone />
      </MainStyled>
      <Footer />
    </>
  )
}

export default memo(Home)
