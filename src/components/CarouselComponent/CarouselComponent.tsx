import { memo, useEffect } from 'react'

import Carousel from 'react-bootstrap/Carousel'

import { useBanner } from 'context/BannersContext'

const CarouselBanner: React.FC = () => {
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
            url: string
            status: boolean
          }) => (
            <Carousel.Item>
              <a href={banner.url} target="_blank" rel="noreferrer">
                <img
                  className="d-none d-md-block w-100"
                  src={banner.image_l}
                  alt={`Banner-${banner.id}/`}
                />
              </a>
              <a href={banner.url} target="_blank" rel="noreferrer">
                <img
                  className="d-block d-md-none w-100"
                  src={banner.image_s}
                  alt={`Banner-${banner.id}/`}
                />
              </a>
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
