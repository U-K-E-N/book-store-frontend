import { Outlet } from 'react-router-dom';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';

import audioBooks from '../../../public/books/audiobook.json';
import kindleBooks from '../../../public/books/kindle.json';
import paperBooks from '../../../public/books/paperback.json';

export const Layout = () => {
  const allBooks = [...audioBooks, ...kindleBooks, ...paperBooks];

  return (
    <>
      <Header allBooks={allBooks} />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
