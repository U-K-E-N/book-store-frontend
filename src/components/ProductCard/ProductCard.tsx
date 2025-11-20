import './ProductCard.scss';
import type { Book } from '../../types/Book';
import { BookStoreIcon, IconName } from '../BookStoreIcon';
import { AddToCartButton, FavoriteButton } from '../Buttons';

type ProductCardProps = {
  book: Book;
};

export const ProductCard = ({ book }: ProductCardProps) => {
  return (
    <div className="productCard">
      {'listeningLength' in book && (
        <div className="productCard__audioImg">
          <BookStoreIcon iconName={IconName.Headphones} />
        </div>
      )}

      <div className="productCard__imageWrapper">
        <img
          src={`/books/${book.images[0]}`}
          alt={book.name}
          className="productCard__image"
        />
      </div>

      <div className="productCard__content">
        <h3 className="productCard__name">{book.name}</h3>
        <p className="productCard__author">{book.author}</p>

        <div className="productCard__prices">
          <span className="productCard__price">₴{book.priceRegular}</span>
          {book.priceDiscount && (
            <span className="productCard__oldPrice">₴{book.priceDiscount}</span>
          )}
        </div>

        <div className="productCard__stock">
          <BookStoreIcon iconName={IconName.Car} />
          <span className="productCard__stock-text">In stock</span>
          {/* {inStock ? 'In stock' : 'Out of stock'} */}
        </div>

        <div className="productCard__actions">
          <AddToCartButton
            selected={false}
            onSelect={() => {}}
          />
          <FavoriteButton
            selected={false}
            onSelect={() => {}}
          />
        </div>
      </div>
    </div>
  );
};
