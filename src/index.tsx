import React, { Suspense } from 'react'

import ReactDOM from 'react-dom/client'

import { AboutProvider } from 'context/AboutContext'
import { BannerProvider } from 'context/BannersContext'
import { EventProvider } from 'context/EventsContext'
import { HotelsProvider } from 'context/HotelsContext'
import { PointsProvider } from 'context/PointsContext'
import { RestaurantsProvider } from 'context/RestaurantsContext'
import { SpaceProvider } from 'context/SpacesContext'
import { StoresProvider } from 'context/StoresContext'

import 'services/i18n'

import App from './App'

import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Suspense>
    <PointsProvider>
      <HotelsProvider>
        <RestaurantsProvider>
          <SpaceProvider>
            <StoresProvider>
              <EventProvider>
                <BannerProvider>
                  <AboutProvider>
                    <App />
                  </AboutProvider>
                </BannerProvider>
              </EventProvider>
            </StoresProvider>
          </SpaceProvider>
        </RestaurantsProvider>
      </HotelsProvider>
    </PointsProvider>
  </Suspense>,
)
