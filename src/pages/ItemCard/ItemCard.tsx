import { ProductList } from '../../components/ProductList';
import audioBooks from '../../../public/books/audiobook.json';
import kindleBooks from '../../../public/books/kindle.json';
import paperBooks from '../../../public/books/paperback.json';
import { AddToCartButton, FavoriteButton } from '../../components/Buttons';
import './ItemCard.scss';

const books = [...audioBooks, ...kindleBooks, ...paperBooks];

export const ItemCard = () => {
  return (
    <div className="book">
      <div className="container">
        <h1 className="book__title">book.name</h1>
        <p className="book__author">author</p>
        <div className="book__card">
          <img
            src="../../../public/books/img/paperback/harry-potter-1/uk/00.webp"
            alt="Book Preview"
            className="book__main-img"
          />
          <div className="book__img-thumb">
            <img
              src="../../../public/books/img/paperback/harry-potter-1/uk/01.webp"
              alt="book Preview"
              className="book__secondary-img"
            />
            <img
              src="../../../public/books/img/paperback/harry-potter-1/uk/02.webp"
              alt="book Preview"
              className="book__secondary-img"
            />
            <img
              src="../../../public/books/img/paperback/harry-potter-1/uk/03.webp"
              alt="book Preview"
              className="book__secondary-img"
            />
            <img
              src="../../../public/books/img/paperback/harry-potter-1/uk/04.webp"
              alt="book Preview"
              className="book__secondary-img"
            />
          </div>

          <div className="book__price-block">
            <div className="book__category">
              <label className="book__label">Category</label>
              <span className="book__category-value">
                Fantasy/Children&apos;s literature
              </span>
            </div>

            <div className="book__language">
              <label className="book__label">Select language</label>
              <div className="book__lang-buttons">
                <button className="book__lang-btn">UA</button>
                <button className="book__lang-btn active">ENG</button>
              </div>
            </div>
            <span className="book__price">10$</span>
            <span className="book__old-price">13$</span>
            <div className="book__cart-buttons">
              <AddToCartButton
                selected={false}
                onSelect={() => {}}
              />
              <FavoriteButton
                selected={false}
                onSelect={() => {}}
              />
            </div>
            <ul className="book__description-list">
              <li>
                Autor: <strong>author</strong>
              </li>
              <li>
                Cover type: <strong>Hardcover</strong>
              </li>
              <li>
                Number of pages: <strong>numberOfPages</strong>
              </li>
              <li>
                Year of publication: <strong>publicationYear</strong>
              </li>
            </ul>
          </div>
        </div>

        <div className="book__about">
          <h2 className="book__about-title">About</h2>
          <p>
            Гаррі Поттер — сирота й живе із Дурслями... Новий друг передає
            Поттеру листа-запрошення до школи магії Гоґвортс. Проте скоро Гаррі
            розкриває страшну правду про смерть своїх батьків і загрозу, що
            нависла над чарівним світом. Разом із друзями він рішуче бореться зі
            злом.
          </p>
        </div>
        <div className="book__characteristics">
          <h2 className="book__characteristics-title">Characteristics</h2>
          <ul className="book__description-list">
            <li>
              Author:<strong>autor</strong>
            </li>
            <li>
              Cover type:<strong>Hardcover</strong>
            </li>
            <li>
              Number of pages:<strong>numberOfPages</strong>
            </li>
            <li>
              Year of publication:<strong>publicationYear</strong>
            </li>
            <li>
              Format: <strong>format</strong>
            </li>
            <li>
              Language: <strong>lang</strong>
            </li>
            <li>
              Illustrations: <strong>illustrations</strong>
            </li>
          </ul>
        </div>
        <ProductList
          title="You may also like"
          books={books}
        />
      </div>
    </div>
  );
};
