import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Carousel.css';

export const Carousel = () => {
  return (
    <div className="carousel-container">
      {/* Кастомные стрелки */}
      <div className="custom-prev"></div>
      <div className="custom-next"></div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
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
          <div className="banner-slider__banner">
            {/* Основное содержимое слайда */}
            <div className="banner-slider__main-content">
              <div className="banner-slider__discount-container">
                <p className="banner-slider__discount-text">-50%</p>
              </div>

              <h2 className="banner-slider__title">Constitution day</h2>

              {/* Если нужны дополнительные картинки внутри баннера */}
              <div className="banner-slider__images">
                <img
                  className="banner-slider__image"
                  src="/books/img/hero/hero_small_images/1.jpg"
                  alt=""
                />
                <img
                  className="banner-slider__image"
                  src="/books/img/hero/hero_small_images/2.jpg"
                  alt=""
                />
                <img
                  className="banner-slider__image"
                  src="/books/img/hero/hero_small_images/3.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="banner-slider__banner">
            {/* Основное содержимое слайда */}
            <div className="banner-slider__main-content">
              <div className="banner-slider__discount-container">
                <p className="banner-slider__discount-text">-50%</p>
              </div>

              <h2 className="banner-slider__title">Constitution day</h2>

              {/* Если нужны дополнительные картинки внутри баннера */}
              <div className="banner-slider__images">
                <img
                  className="banner-slider__image"
                  src="/books/img/hero/hero_small_images/1.jpg"
                  alt=""
                />
                <img
                  className="banner-slider__image"
                  src="/books/img/hero/hero_small_images/2.jpg"
                  alt=""
                />
                <img
                  className="banner-slider__image"
                  src="/books/img/hero/hero_small_images/3.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="banner-slider__banner">
            {/* Основное содержимое слайда */}
            <div className="banner-slider__main-content">
              <div className="banner-slider__discount-container">
                <p className="banner-slider__discount-text">-50%</p>
              </div>

              <h2 className="banner-slider__title">Constitution day</h2>

              {/* Если нужны дополнительные картинки внутри баннера */}
              <div className="banner-slider__images">
                <img
                  className="banner-slider__image"
                  src="/books/img/hero/hero_small_images/1.jpg"
                  alt=""
                />
                <img
                  className="banner-slider__image"
                  src="/books/img/hero/hero_small_images/2.jpg"
                  alt=""
                />
                <img
                  className="banner-slider__image"
                  src="/books/img/hero/hero_small_images/3.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="banner-slider__dots"></div>
    </div>
  );
};
