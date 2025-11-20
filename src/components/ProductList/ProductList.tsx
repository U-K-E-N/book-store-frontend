import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import './ProductList.scss';

import { BookStoreIcon, IconName } from '../BookStoreIcon';
import type { Book } from '../../types/Book';

type ProductListProps = {
  title: string;
  books: Book[];
};

export const ProductList = ({ title, books }: ProductListProps) => {
  return (
    <section className="section product-list">
      <div className="container">
        <div className="product-list__header">
          <h2 className="product-list__title">{title}</h2>
          <div className="custom-buttons">
            <button className="custom-prev">
              <BookStoreIcon iconName={IconName.ArrowLeft} />
            </button>
            <button className="custom-next">
              <BookStoreIcon iconName={IconName.ArrowRight} />
            </button>
          </div>
        </div>
        <div className="product-swiper-wrapper">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: '.custom-next',
              prevEl: '.custom-prev',
            }}
            spaceBetween={16}
            slidesPerView="auto"
            slidesPerGroup={1}
            grabCursor={true}
            breakpoints={{
              640: {
                slidesPerGroup: 2,
              },
              1200: {
                slidesPerView: 4,
                slidesPerGroup: 4,
              },
            }}
            className="product-swiper"
          >
            {books.map((book) => (
              <SwiperSlide
                key={book.id}
                className="swiper-item"
              >
                {book.name}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
