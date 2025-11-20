import { ProductList } from '../../components/ProductList';

import paperBooks from '../../../public/books/paperback.json';

export const Home = () => {
  const filteredBooks = paperBooks.filter(
    (book) => book.publicationYear > 2020,
  );

  return (
    <main className="main">
      <ProductList
        title="New books"
        books={filteredBooks}
      />
    </main>
  );
};
