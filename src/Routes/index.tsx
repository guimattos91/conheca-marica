import { memo } from 'react'

import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'

import About from 'pages/About'
import CityEvent from 'pages/CityEvent'
import CityEvents from 'pages/CityEvents'
import EventSpace from 'pages/EventSpace'
import EventSpaces from 'pages/EventSpaces'
import Home from 'pages/Home'
import HotelAndInn from 'pages/HotelAndInn'
import HotelAndInnCategory from 'pages/HotelAndInnCategory'
import HotelsAndInns from 'pages/HotelsAndInns'
import NotFound from 'pages/NotFound'
import Restaurant from 'pages/Restaurant'
import Restaurants from 'pages/Restaurants'
import Store from 'pages/Store'
import Stores from 'pages/Stores'
import TouristicPoint from 'pages/TouristicPoint'
import TouristicPoints from 'pages/TouristicPoints'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/pontos-turisticos" element={<TouristicPoints />} />
        <Route
          path="/pontos-turisticos/:id/:name"
          element={<TouristicPoint />}
        />
        <Route path="/hoteis-e-pousadas" element={<HotelsAndInns />} />
        <Route path="/hoteis-e-pousadas/:id/:name" element={<HotelAndInn />} />
        <Route
          path="/hoteis-e-pousadas/categorias/:id/:name"
          element={<HotelAndInnCategory />}
        />
        <Route path="/bares-e-restaurantes" element={<Restaurants />} />
        <Route
          path="/bares-e-restaurantes/:id/:name"
          element={<Restaurant />}
        />
        <Route path="/espacos-para-eventos" element={<EventSpaces />} />
        <Route
          path="/espacos-para-eventos/:id/:name"
          element={<EventSpace />}
        />
        <Route path="/eventos" element={<CityEvents />} />
        <Route path="/eventos/:id/:name" element={<CityEvent />} />
        <Route path="/comercios" element={<Stores />} />
        <Route path="/comercios/:id/:name" element={<Store />} />
        <Route path="/sobre" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Switch>
    </BrowserRouter>
  )
}

export default memo(Routes)
