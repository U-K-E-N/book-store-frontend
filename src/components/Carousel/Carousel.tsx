import { type FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Carousel.scss';

export const Carousel: FC = () => {
  return (
    <div className="carousel-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          nextEl: '.carousel-next',
          prevEl: '.carousel-prev',
        }}
        pagination={{
          el: '.banner-slider__dots',
          clickable: true,
        }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="banner-slider"
      >
        <SwiperSlide>
          <div className="banner-slider__banner banner-slider__banner--first">
            <div className="banner-slider__main-content"></div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="banner-slider__banner banner-slider__banner--second">
            <div className="banner-slider__main-content"></div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="banner-slider__banner banner-slider__banner--third">
            <div className="banner-slider__main-content"></div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="carousel-prev"></div>
      <div className="carousel-next"></div>

      <div className="banner-slider__dots" />
    </div>
  );
};
