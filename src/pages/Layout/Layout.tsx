import { Outlet } from 'react-router-dom';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { useFetchAllBooks } from '../../hooks/useFetchAllBooks';

export const Layout = () => {
  const { data } = useFetchAllBooks();

  return (
    <>
      <div className="site">
        <Header allBooks={data} />
        <main className="main">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};
