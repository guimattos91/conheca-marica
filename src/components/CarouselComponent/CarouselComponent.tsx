import { memo, useEffect } from 'react'

import Carousel from 'react-bootstrap/Carousel'

import { useBanner } from 'context/BannersContext'

import { BannersType } from 'types/BannersType'

interface IBannersProviderProps {
  banner: BannersType
}

const CarouselBanner: React.FC<IBannersProviderProps> = () => {
  const { banners, isLoading, error, fetchBanners } = useBanner()
  useEffect(() => {
    fetchBanners()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [0])
  return (
    <Carousel>
      {!isLoading &&
        !error &&
        banners.map(
          (banner: {
            id: number
            image_l: string
            image_s: string
            url: string | null
            status: boolean
          }) => (
            <Carousel.Item>
              <img
                className="d-none d-md-block w-100"
                src={banner.image_l}
                alt={`Banner-${banner.id}/`}
              />
              <img
                className="d-block d-md-none w-100"
                src={banner.image_s}
                alt={`Banner-${banner.id}/`}
              />
            </Carousel.Item>
          ),
        )}
      {!isLoading && !error && banners.length === 0 && (
        <h2>Nenhum resultado encontrado</h2>
      )}
    </Carousel>
  )
}
export default memo(CarouselBanner)
