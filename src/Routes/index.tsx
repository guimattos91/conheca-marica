import { memo } from 'react'

import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'

import Restaurantes from 'pages/Bares-e-Restaurantes'
import Comercio from 'pages/Comercio'
import Espacos from 'pages/Espacos-Para-Eventos'
import Eventos from 'pages/Eventos'
import Home from 'pages/Home'
import Hoteis from 'pages/Hoteis-e-pousadas'
import NotFound from 'pages/NotFound'
import Pontos from 'pages/Pontos-turisticos'
import Sobre from 'pages/Sobre'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/pontos-turisticos" element={<Pontos />} />
        <Route path="/hoteis-e-pousadas" element={<Hoteis />} />
        <Route path="/bares-e-restaurantes" element={<Restaurantes />} />
        <Route path="/espacos-para-eventos" element={<Espacos />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/comercio" element={<Comercio />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="*" element={<NotFound />} />
      </Switch>
    </BrowserRouter>
  )
}

export default memo(Routes)
