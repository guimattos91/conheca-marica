import { memo } from 'react'

import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'

import About from 'pages/About'
import CityEvent from 'pages/CityEvent'
import CityEvents from 'pages/CityEvents'
import CityEventsCategory from 'pages/CityEventsCategory'
import CityEventsMap from 'pages/CityEventsMap'
import EventSpace from 'pages/EventSpace'
import EventSpaces from 'pages/EventSpaces'
import EventSpacesCategory from 'pages/EventsSpacesCategory'
import EventSpacesMap from 'pages/EventsSpacesMap'
import Home from 'pages/Home'
import HotelAndInn from 'pages/HotelAndInn'
import HotelAndInnCategory from 'pages/HotelAndInnCategory'
import HotelsAndInns from 'pages/HotelsAndInns'
import HotelsAndInnsMap from 'pages/HotelsAndInnsMap'
import NotFound from 'pages/NotFound'
import Restaurant from 'pages/Restaurant'
import RestaurantCategory from 'pages/RestaurantCategory'
import Restaurants from 'pages/Restaurants'
import RestaurantsMap from 'pages/RestaurantsMap'
import Store from 'pages/Store'
import Stores from 'pages/Stores'
import StoresCategory from 'pages/StoresCategory'
import StoresMap from 'pages/StoresMap'
import TouristicPoint from 'pages/TouristicPoint'
import TouristicPoints from 'pages/TouristicPoints'
import TouristicPointsCategory from 'pages/TouristicPointsCategory'
import TouristicPointsMapa from 'pages/TouristicPointsMap'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />

        {/* categorias */}
        <Route path="/pontos-turisticos" element={<TouristicPoints />} />
        <Route path="/hoteis-e-pousadas" element={<HotelsAndInns />} />
        <Route path="/bares-e-restaurantes" element={<Restaurants />} />
        <Route path="/espacos-para-eventos" element={<EventSpaces />} />
        <Route path="/eventos" element={<CityEvents />} />
        <Route path="/comercios" element={<Stores />} />
        <Route path="/sobre" element={<About />} />

        {/* Mapas */}
        <Route
          path="/pontos-turisticos/mapa"
          element={<TouristicPointsMapa />}
        />
        <Route path="/comercios/mapa" element={<StoresMap />} />
        <Route path="/hoteis-e-pousadas/mapa" element={<HotelsAndInnsMap />} />
        <Route path="/bares-e-restaurantes/mapa" element={<RestaurantsMap />} />
        <Route path="/espacos-para-eventos/mapa" element={<EventSpacesMap />} />
        <Route path="/eventos/mapa" element={<CityEventsMap />} />

        {/* SubCategorias */}
        <Route
          path="/pontos-turisticos/categorias/:id/:name"
          element={<TouristicPointsCategory />}
        />
        <Route
          path="/hoteis-e-pousadas/categorias/:id/:name"
          element={<HotelAndInnCategory />}
        />
        <Route
          path="/bares-e-restaurantes/categorias/:id/:name"
          element={<RestaurantCategory />}
        />
        <Route
          path="/espacos-para-eventos/categorias/:id/:name"
          element={<EventSpacesCategory />}
        />
        <Route
          path="/eventos/categorias/:id/:name"
          element={<CityEventsCategory />}
        />
        <Route
          path="/comercios/categorias/:id/:name"
          element={<StoresCategory />}
        />

        {/* Páginas Internas */}
        <Route
          path="/pontos-turisticos/:id/:name"
          element={<TouristicPoint />}
        />
        <Route
          path="/bares-e-restaurantes/:id/:name"
          element={<Restaurant />}
        />
        <Route
          path="/espacos-para-eventos/:id/:name"
          element={<EventSpace />}
        />
        <Route path="/hoteis-e-pousadas/:id/:name" element={<HotelAndInn />} />
        <Route path="/eventos/:id/:name" element={<CityEvent />} />
        <Route path="/comercios/:id/:name" element={<Store />} />

        {/* Not Found */}
        <Route path="*" element={<NotFound />} />
      </Switch>
    </BrowserRouter>
  )
}

export default memo(Routes)
