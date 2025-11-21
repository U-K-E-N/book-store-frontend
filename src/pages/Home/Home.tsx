import { ProductList } from '../../components/ProductList';

import audioBooks from '../../../public/books/audiobook.json';
import kindleBooks from '../../../public/books/kindle.json';
import paperBooks from '../../../public/books/paperback.json';
import { Carousel } from '../../components/Carousel';
import { Categories } from '../../components/Categories';

export const Home = () => {
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
    <>
      <Carousel />
      <ProductList
        title="New books"
        books={books}
      />
      <Categories />
      <ProductList
        title="You might like"
        books={books}
      />
    </>
  );
};
