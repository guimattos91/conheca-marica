import { memo } from 'react'

import { Ratio } from 'react-bootstrap'
import Slider from 'react-slick'

import { ItemType } from 'types/ItemType'

import { RatioResponsive } from './style'

interface ISliderComponentProps {
  CategoryName: ItemType
}

const SliderComponent: React.FC<ISliderComponentProps> = ({ CategoryName }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  const settingsSmall = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 0,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  }
  return (
    <>
      {CategoryName.images.length < 4 && (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Slider {...settings}>
          {CategoryName.images.map((imagem) => (
            <div key={imagem.id}>
              <Ratio
                aspectRatio="1x1"
                style={{
                  backgroundImage: `url(${imagem.src})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center center',
                }}
              >
                <div />
              </Ratio>
            </div>
          ))}
        </Slider>
      )}
      {CategoryName.images.length < 4 && (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Slider {...settingsSmall}>
          {CategoryName.images.map((imagem) => (
            <RatioResponsive
              aspectRatio="1x1"
              style={{
                backgroundImage: `url(${imagem.src})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
              }}
              key={imagem.id}
            >
              <div />
            </RatioResponsive>
          ))}
        </Slider>
      )}
    </>
  )
}

export default memo(SliderComponent)
