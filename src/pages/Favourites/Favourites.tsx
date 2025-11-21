import audioBooks from '../../../public/books/audiobook.json';
import kindleBooks from '../../../public/books/kindle.json';
import paperBooks from '../../../public/books/paperback.json';
import { ProductCard } from '../../components/ProductCard';
import './Favourites.scss';

export const Favourites = () => {
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

  return (
    <section className="section">
      <div className="container">
        <h2 className="favourites__title">Favourites</h2>
        <p className="favourites__subtitle">{books.length} items</p>
        <ul className="favourites__list">
          {books.map((book) => (
            <li
              className="favourites__item"
              key={book.id}
            >
              <ProductCard book={book} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
