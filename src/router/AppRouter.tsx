import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '../pages/Layout';
import { Home } from '../pages/Home';
import { Paper } from '../pages/Paper';
import { Kindle } from '../pages/Kindle';
import { Audiobook } from '../pages/Audiobook';
import { Favourites } from '../pages/Favourites';
import { Cart } from '../pages/Cart';
import { NotFoundPage } from '../pages/NotFoundPage';
import { AuthPage } from '../pages/AuthPage';

export const AppRouter = () => (
  <BrowserRouter>
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
          path="favorites"
          element={<Favourites />}
        />
        <Route
          path="cart"
          element={<Cart />}
        />
      </Route>

      <Route
        path="/auth"
        element={<AuthPage />}
      />

      <Route
        path="*"
        element={<NotFoundPage />}
      />
    </Routes>
  </BrowserRouter>
);
