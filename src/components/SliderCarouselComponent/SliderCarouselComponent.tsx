import { memo } from 'react'

import { Ratio } from 'react-bootstrap'
// import { MdArrowForwardIos } from 'react-icons/md'
import Slider from 'react-slick'

import { ItemType } from 'types/ItemType'

import { RatioResponsive } from './style'

interface ISlideProps {
  itemCategory: ItemType
}

const SliderCarouselComponent: React.FC<ISlideProps> = ({ itemCategory }) => {
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
          dots: false,
        },
      },
    ],
  }
  const settingsSmall = {
    dots: false,
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
      {itemCategory.images.length >= 4 && (
        <>
          {/* <ArrowDivPrevious type="button" className="slick-arrow slick-prev">
            <MdArrowForwardIos size={50} />
          </ArrowDivPrevious> */}
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Slider {...settings}>
            {itemCategory.images.map((imagem) => (
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
          {/* <ArrowDiv>
            <MdArrowForwardIos />
          </ArrowDiv> */}
        </>
      )}
      {itemCategory.images.length < 4 && (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Slider {...settingsSmall}>
          <div className="d-flex justify-content-center">
            {itemCategory.images.map((imagem) => (
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
          </div>
        </Slider>
      )}
    </>
  )
}
export default memo(SliderCarouselComponent)
