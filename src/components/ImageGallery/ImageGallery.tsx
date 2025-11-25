import { useEffect, useState } from 'react';
import type { GeneralBook } from '../../types/GeneralBook';
import './ImageGallery.scss';
import classNames from 'classnames';

type ImageGalleryProps = {
  images: string[];
  book: GeneralBook;
};

export const ImageGallery = ({ images, book }: ImageGalleryProps) => {
  const [activeImg, setActiveImg] = useState(images[0]);

  useEffect(() => {
    setActiveImg(images[0]);
  }, [images]);

  return (
    <div className="book__images">
      <img
        src={`${import.meta.env.BASE_URL}/books/${activeImg}`}
        alt={book.name}
        className="book__main-img"
      />
      <div className="book__img-thumb">
        {images.map((img, index) => (
          <img
            key={index}
            src={`${import.meta.env.BASE_URL}/books/${img}`}
            alt="preview"
            className={classNames('book__secondary-img', {
              active: img === activeImg,
            })}
            onClick={() => setActiveImg(img)}
          />
        ))}
      </div>
    </div>
  );
};
