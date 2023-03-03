import { memo, useEffect, useRef, useState } from 'react'

import { Ratio } from 'react-bootstrap'
// import { MdArrowForwardIos } from 'react-icons/md'
// import { MdArrowForwardIos } from 'react-icons/md'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import Slider, { Settings } from 'react-slick'

import { ItemType } from 'types/ItemType'

import { ArrowDiv, ArrowDivPrevious, RatioResponsive } from './style'

interface ISlideProps {
  itemCategory: ItemType
}

const NewSliderCarouselComponent: React.FC<ISlideProps> = ({
  itemCategory,
}) => {
  const customeSlider = useRef<Slider>(null)

  const [sliderSettings, setSliderSettings] = useState<Settings>({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  })

  useEffect(() => {
    setSliderSettings({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 3,
      arrows: false,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
          },
        },
      ],
    })
  }, [])

  const gotoNext = (): void => {
    if (customeSlider.current) {
      customeSlider.current.slickNext()
    }
  }

  const gotoPrev = (): void => {
    if (customeSlider.current) {
      customeSlider.current.slickPrev()
    }
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
          <ArrowDivPrevious
            type="button"
            className="d-none d-lg-inline-block"
            onClick={gotoPrev}
          >
            <MdKeyboardArrowLeft size={50} />
          </ArrowDivPrevious>
          <ArrowDiv
            type="button"
            className="d-none d-lg-inline-block"
            onClick={gotoNext}
          >
            <MdKeyboardArrowRight size={50} />
          </ArrowDiv>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Slider {...sliderSettings} ref={customeSlider}>
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
        </>
      )}
      {itemCategory.images.length < 4 && (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Slider {...settingsSmall}>
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
      )}
    </>
  )
}
export default memo(NewSliderCarouselComponent)
