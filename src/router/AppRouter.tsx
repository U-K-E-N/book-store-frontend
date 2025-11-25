import { Routes, Route, HashRouter } from 'react-router-dom';
import { Layout } from '../pages/Layout';
import { Home } from '../pages/Home';
import { Paper } from '../pages/Paper';
import { Kindle } from '../pages/Kindle';
import { Audiobook } from '../pages/Audiobook';
import { Favourites } from '../pages/Favourites';
import { Cart } from '../pages/Cart';
import { NotFoundPage } from '../pages/NotFoundPage';
import { AuthPage } from '../pages/AuthPage';
import { ItemCard } from '../pages/ItemCard';
import { AboutPage } from '../pages/AboutPage';

export const AppRouter = () => (
  <HashRouter>
    <Routes>
      <Route
        path="/"
        element={<Layout />}
      >
        <Route
          index
          element={<Home />}
        />
        <Route
          path="paper"
          element={<Paper />}
        />
        <Route
          path="kindle"
          element={<Kindle />}
        />
        <Route
          path="audiobook"
          element={<Audiobook />}
        />
        <Route
          path="favourites"
          element={<Favourites />}
        />
        <Route
          path="cart"
          element={<Cart />}
        />
        <Route
          path="about"
          element={<AboutPage />}
        />
        <Route
          path=":type/:category/:slug"
          element={<ItemCard />}
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Route>

      <Route
        path="/auth"
        element={<AuthPage />}
      />
    </Routes>
  </HashRouter>
);
