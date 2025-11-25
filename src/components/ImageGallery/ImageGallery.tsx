import { useState } from 'react';
import type { GeneralBook } from '../../types/GeneralBook';
import './ImageGallery.scss';

type ImageGalleryProps = {
  images: string[];
  book: GeneralBook;
};

export const ImageGallery = ({ images, book }: ImageGalleryProps) => {
  const [activeImg, setActiveImg] = useState(images[0]);

  return (
    <div>
      <img
        src={`/books/${activeImg}`}
        alt={book.name}
        className="book__main-img"
      />
      <div className="book__img-thumb">
        {images.map((img, index) => (
          <img
            key={index}
            src={`/books/${img}`}
            alt="preview"
            className="book__secondary-img"
            onClick={() => setActiveImg(img)}
          />
        ))}
      </div>
    </div>
  );
};
