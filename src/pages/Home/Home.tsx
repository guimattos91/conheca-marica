import { memo, useEffect } from 'react'

import { Col, Container, Row } from 'react-bootstrap'
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
  const setTitle = useTitle()

  useEffect(() => {
    setTitle('')
  }, [setTitle])

  return (
    <>
      <Header />
      <MainStyled className="p-0">
        <Row className="row-cols-1 g-0">
          <Col>
            <CarouselBanner />
          </Col>
        </Row>
        <Container>
          <Row className="row-cols-1 row-cols-md-3 g-3 py-5">
            <Col>
              <CategoryCard
                page="/pontos-turisticos"
                title="Pontos Turísticos"
                icon={FaUmbrellaBeach}
                target="_self"
                rel="noreferrer"
                description="Conheça nossas praias, lagoas, grutas e outros pontos turísticos"
                turnOn="on"
              />
            </Col>
            <Col>
              <CategoryCard
                page="hoteis-e-pousadas"
                title="Hotéis e Pousadas"
                icon={FaBed}
                target="_self"
                rel="noreferrer"
                description="Saiba onde se hospedar em Maricá"
                turnOn="on"
              />
            </Col>
            <Col>
              <CategoryCard
                page="bares-e-Restaurantes"
                title="Bares e Restaurantes"
                icon={MdRestaurant}
                target="_self"
                rel="noreferrer"
                description="Aprecie a gastronomia de Maricá"
                turnOn="on"
              />
            </Col>
            <Col>
              <CategoryCard
                page="comercios"
                title="Comércio Local"
                icon={FaStoreAlt}
                target="_self"
                rel="noreferrer"
                description="Veja onde fazer as suas compras"
                turnOn="on"
              />
            </Col>
            <Col>
              <CategoryCard
                page="espacos-para-eventos"
                title="Espaços para Eventos"
                icon={GiMicrophone}
                target="_self"
                rel="noreferrer"
                description="Locais para fazer suas festas ou reuniões"
                turnOn="on"
              />
            </Col>
            <Col>
              <CategoryCard
                page="eventos"
                title="Eventos"
                icon={MdDateRange}
                target="_self"
                rel="noreferrer"
                description="Confira o calendário de eventos da cidade"
                turnOn="on"
              />
            </Col>
            <Col>
              <CategoryCard
                page="/sobre"
                title="Sobre a cidade"
                icon={BsFillHouseFill}
                target="_self"
                rel="noreferrer"
                description="Conheça mais sobre Maricá"
                turnOn="on"
              />
            </Col>
            <Col>
              <CategoryCard
                page="https://contato.site/5d9bab8/marica-cvb3/paginaprincipal"
                title="Roteiros Turísticos"
                icon={FaRoute}
                target="_blank"
                rel="noreferrer"
                description="Conheça diversas trilhas ecológicas e de aventura, com variados níveis de dificuldade."
                turnOn="off"
              />
            </Col>
            <Col>
              <CategoryCard
                page="https://www.feirartemarica.com.br/"
                title="Artesanato"
                icon={GiSewingNeedle}
                target="_blank"
                rel="noreferrer"
                description="Conheça e compre as criações dos artesãos de Maricá/RJ"
                turnOn="off"
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
