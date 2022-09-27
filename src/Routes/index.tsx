import { memo } from 'react'

import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'

import Restaurantes from 'pages/BaresRestaurantes'
import Comercio from 'pages/Comercio'
import Espacos from 'pages/EspacosParaEventos'
import Eventos from 'pages/Eventos'
import Home from 'pages/Home'
import Hoteis from 'pages/HoteisPousadas'
import Hotel from 'pages/HotelePousada'
import NotFound from 'pages/NotFound'
import Pontos from 'pages/PontosTuristicos'
import Ponto from 'pages/PontoTuristico'
import Sobre from 'pages/Sobre'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route
          path="/pontos-turisticos"
          element={
            <Pontos
              collection={{
                id: 0,
                nome: null,
                capa: undefined,
                lat: null,
                lng: null,
                enderecos: [],
                categorias: [],
              }}
            />
          }
        />
        <Route path="/pontos-turisticos" element={<Pontos />} />
        <Route path="/hoteis-e-pousadas" element={<Hoteis />} />
        <Route path="/bares-e-restaurantes" element={<Restaurantes />} />
        <Route path="/espacos-para-eventos" element={<Espacos />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/comercio" element={<Comercio />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/pontos-turisticos/:id/:name" element={<Ponto />} />
        <Route path="/hoteis-e-pousadas/:id/:name" element={<Hotel />} />
      </Switch>
    </BrowserRouter>
  )
}

export default memo(Routes)
