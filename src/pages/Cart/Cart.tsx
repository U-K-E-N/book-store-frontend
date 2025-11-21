import { ItemCart } from '../../components/ItemCart';

import './Cart.scss';

import audioBooks from '../../../public/books/audiobook.json';
import kindleBooks from '../../../public/books/kindle.json';
import paperBooks from '../../../public/books/paperback.json';
import { NavLink } from 'react-router-dom';
import { BookStoreIcon, IconName } from '../../components/BookStoreIcon';

export const Cart = () => {
  const filteredAudioBooks = audioBooks
    .filter((book) => book.publicationYear > 2020)
    .filter((book) => book.lang === 'en');

  const filteredKindleBooks = kindleBooks
    .filter((book) => book.publicationYear > 2020)
    .filter((book) => book.lang === 'en');

  const filteredPaperBooks = paperBooks
    .filter((book) => book.publicationYear > 2020)
    .filter((book) => book.lang === 'en');

  const books = [
    ...filteredAudioBooks,
    ...filteredKindleBooks,
    ...filteredPaperBooks,
  ];

  const totalPrice = () =>
    books.reduce(
      (sum, book) => sum + (book.priceDiscount || book.priceRegular),
      0,
    );

  return (
    <section className="section cart">
      <div className="container cart__container">
        <NavLink
          className="cart__back"
          to="/"
        >
          <BookStoreIcon iconName={IconName.ArrowLeft} />
          <span className="cart__back-text">Back</span>
        </NavLink>

        <h2 className="cart__title">Cart</h2>

        <div className="cart__content">
          <ul className="cart__list">
            {books.map((book) => (
              <li
                className="cart__item"
                key={book.id}
              >
                <ItemCart book={book} />
              </li>
            ))}
          </ul>

          <div className="cart__summary summary">
            <h3 className="summary__title">&#36;{totalPrice()}</h3>
            <p className="summary__subtitle">Total for {books.length} items</p>
            <button
              className="summary__btn"
              type="button"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
