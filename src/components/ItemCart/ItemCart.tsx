import type { Book } from '../../types/Book';
import { BookStoreIcon, IconName } from '../BookStoreIcon';

import './ItemCart.scss';

type ItemCartProps = {
  book: Book;
};

export const ItemCart = ({ book }: ItemCartProps) => {
  return (
    <div className="item-cart">
      <div className="item-cart__top">
        <button
          className="item-cart__btn item-cart__btn--delete"
          type="button"
          aria-label="Remove from cart"
        >
          <BookStoreIcon iconName={IconName.Close} />
        </button>

        <img
          className="item-cart__img"
          alt={book.name}
          src={`/books/${book.images[0]}`}
        />
        <div className="item-cart__descr">
          <h3 className="item-cart__name">{book.name}</h3>
          <p className="item-cart__author">{book.author}</p>
        </div>
      </div>

      <div className="item-cart__bottom">
        <div>
          <button
            className="item-cart__btn item-cart__btn--minus"
            type="button"
            aria-label="Remove one item"
          >
            <BookStoreIcon iconName={IconName.Minus} />
          </button>
          <span className="item-cart__amount">1</span>
          <button
            className="item-cart__btn item-cart__btn--plus"
            type="button"
            aria-label="Add one item"
          >
            <BookStoreIcon iconName={IconName.Plus} />
          </button>
        </div>
        <span className="item-cart__price">
          &#36;{book.priceDiscount || book.priceRegular}
        </span>
      </div>
    </div>
  );
};
