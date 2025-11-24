import { ItemCart } from '../../components/ItemCart';
import './Cart.scss';
import { NavLink } from 'react-router-dom';
import { BookStoreIcon, IconName } from '../../components/BookStoreIcon';
import { useStore } from '../../hooks/useStore';

export const Cart = () => {
  const { cart } = useStore();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const totalPrice = () =>
    cart
      .reduce(
        (sum, item) =>
          sum +
          (item.book.priceDiscount || item.book.priceRegular) * item.quantity,
        0,
      )
      .toFixed(2);

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
            {cart.map((item) => (
              <li
                className="cart__item"
                key={item.book.id}
              >
                <ItemCart
                  book={item.book}
                  quantity={item.quantity}
                />
              </li>
            ))}
          </ul>

          <div className="cart__summary summary">
            <h3 className="summary__title">&#36;{totalPrice()}</h3>
            <p className="summary__subtitle">Total for {totalItems} items</p>
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
