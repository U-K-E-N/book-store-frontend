import { AddToCartButton, FavoriteButton } from '../../components/Buttons';
import { useStore } from '../../hooks/useStore';
import './ItemCard.scss';
import { useParams } from 'react-router-dom';
import { ProductList } from '../../components/ProductList';
import { useFetchAllBooks } from '../../hooks/useFetchAllBooks';
import { Loader } from '../../components/Loader';
import { ImageGallery } from '../../components/ImageGallery';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';

export const ItemCard = () => {
  const { data, loading, error } = useFetchAllBooks();
  const { cart, favourites, addToCart, addToFavourites, removeFromFavourites } =
    useStore();
  const { slug } = useParams();

  const book = data.find((b) => b.slug === slug);

  if (!book) {
    return <p>Book not found</p>;
  }

  const images = Array.isArray(book.images) ? book.images : [book.images];

  const normalizeCategory = book.category
    .map((cat) => cat.charAt(0).toUpperCase() + cat.slice(1))
    .join(' / ');

  const inCart = cart.some((item) => item.book.id === book.id);
  const inFav = favourites.some((item) => item.id === book.id);

  const recommended = data.filter(
    (item) =>
      item.id !== book.id &&
      item.category.some((cat) => book.category.includes(cat)),
  );

  const characteristics = [
    { label: 'Author', value: book.author },
    { label: 'Cover type', value: book.coverType },
    { label: 'Number of pages', value: book.numberOfPages },
    { label: 'Year of publication', value: book.publicationYear },
    { label: 'Format', value: book.format },
    { label: 'Language', value: book.lang },
    {
      label: 'Illustrations',
      value: book.illustrations ? 'Illustrations' : 'No Illustrations',
    },
  ];

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>Error loading book.</p>;
  }

  return (
    <>
      <div className="book">
        <div className="container book__container">
          <Breadcrumbs book={book} />

          <h1 className="book__title">{book.name}</h1>
          <p className="book__author">{book.author}</p>
          <div className="book__card">
            <ImageGallery
              images={images}
              book={book}
            />

            <div className="book__price-block">
              <div className="book__category">
                <div className="book__label">Category</div>

                <span className="book__category-value">
                  {normalizeCategory}
                </span>
              </div>

              <div className="book__language">
                <div className="book__label">Select language</div>
                <div className="book__lang-buttons">
                  <button className="book__lang-btn">UA</button>
                  <button className="book__lang-btn active">ENG</button>
                </div>
              </div>

              <div className="book__prices">
                <span className="book__price">
                  &#36;{book.priceDiscount || book.priceRegular}
                </span>
                {book.priceDiscount && (
                  <span className="book__old-price">
                    &#36;{book.priceRegular}
                  </span>
                )}
              </div>

              <div className="book__cart-buttons">
                <AddToCartButton
                  selected={inCart}
                  onSelect={() => addToCart(book)}
                />
                <FavoriteButton
                  selected={inFav}
                  onSelect={() =>
                    inFav ?
                      removeFromFavourites(book.id)
                    : addToFavourites(book)
                  }
                />
              </div>
              <ul className="book__descr-list book__descr-list--top">
                <li className="book__descr-item">
                  <span className="book__descr--left">Author</span>
                  <span className="book__descr--right">{book.author}</span>
                </li>
                {book.coverType !== null && (
                  <li className="book__descr-item">
                    <span className="book__descr--left">Cover type</span>
                    <span className="book__descr--right">{book.coverType}</span>
                  </li>
                )}

                {'numberOfPages' in book && book.numberOfPages !== null && (
                  <li className="book__descr-item">
                    <span className="book__descr--left">Number of pages</span>
                    <span className="book__descr--right">
                      {book.numberOfPages}
                    </span>
                  </li>
                )}

                <li className="book__descr-item">
                  <span className="book__descr--left">Year of publication</span>
                  <span className="book__descr--right">
                    {book.publicationYear}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="book__description">
            <div className="book__about">
              <h2 className="book__description-title">About</h2>
              {book.description.map((sentence, index) => (
                <p
                  key={index}
                  className="book__about-descr"
                >
                  {sentence}
                </p>
              ))}
            </div>
            <div className="book__characteristics">
              <h2 className="book__description-title">Characteristics</h2>
              <ul className="book__descr-list">
                {characteristics
                  .filter(
                    (item) =>
                      item.value !== undefined &&
                      item.value !== null &&
                      item.value !== '',
                  )
                  .map((item, index) => (
                    <li
                      key={index}
                      className="book__descr-item"
                    >
                      <span className="book__descr--left">{item.label}</span>
                      <span className="book__descr--right">{item.value}</span>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
        <ProductList
          id="card"
          title="You may also like"
          books={recommended}
        />
      </div>
    </>
  );
};
