import React, { Suspense } from 'react'

import ReactDOM from 'react-dom/client'

import { BannerProvider } from 'context/BannersContext'
import { CollectionProvider } from 'context/CollectionContext'
import { EventProvider } from 'context/EventsContext'
import { HotelsProvider } from 'context/HotelsContext'
import { RestaurantsProvider } from 'context/RestaurantsContext'
import { SpaceProvider } from 'context/SpacesContext'
import { StoresProvider } from 'context/StoresContext'

import 'services/i18n'

import App from './App'

import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Suspense>
      <CollectionProvider>
        <HotelsProvider>
          <RestaurantsProvider>
            <SpaceProvider>
              <StoresProvider>
                <EventProvider>
                  <BannerProvider>
                    <App />
                  </BannerProvider>
                </EventProvider>
              </StoresProvider>
            </SpaceProvider>
          </RestaurantsProvider>
        </HotelsProvider>
      </CollectionProvider>
    </Suspense>
  </React.StrictMode>,
)
