import { memo } from 'react'

import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'

import Restaurante from 'pages/BareRestaurante'
import Restaurantes from 'pages/BaresRestaurantes'
import Comercio from 'pages/Comercio'
import Comercios from 'pages/Comercios'
import Espaco from 'pages/EspacoParaEvento'
import Espacos from 'pages/EspacosParaEventos'
import Evento from 'pages/Evento'
import Eventos from 'pages/Eventos'
import Home from 'pages/Home'
import Hoteis from 'pages/HoteisPousadas'
import HoteisCategoria from 'pages/HoteisPousadasCategoria'
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
        <Route path="/pontos-turisticos" element={<Pontos />} />
        <Route path="/pontos-turisticos/:id/:name" element={<Ponto />} />
        <Route path="/hoteis-e-pousadas" element={<Hoteis />} />
        <Route path="/hoteis-e-pousadas/:id/:name" element={<Hotel />} />
        <Route
          path="/hoteis-e-pousadas/categorias/:id/:name"
          element={<HoteisCategoria />}
        />
        <Route path="/bares-e-restaurantes" element={<Restaurantes />} />
        <Route
          path="/bares-e-restaurantes/:id/:name"
          element={<Restaurante />}
        />
        <Route path="/espacos-para-eventos" element={<Espacos />} />
        <Route path="/espacos-para-eventos/:id/:name" element={<Espaco />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/eventos/:id/:name" element={<Evento />} />
        <Route path="/comercios" element={<Comercios />} />
        <Route path="/comercios/:id/:name" element={<Comercio />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="*" element={<NotFound />} />
      </Switch>
    </BrowserRouter>
  )
}

export default memo(Routes)
