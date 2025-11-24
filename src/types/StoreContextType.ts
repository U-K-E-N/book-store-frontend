import type { Book } from './Book';
import type { CartItem } from './CartItem';

export type StoreContextType = {
  cart: CartItem[];
  favourites: Book[];
  addToCart: (book: Book) => void;
  addToFavourites: (book: Book) => void;
  removeFromCart: (id: number | string) => void;
  removeFromFavourites: (id: number | string) => void;
  increaseQuantity: (id: number | string) => void;
  decreaseQuantity: (id: number | string) => void;
};
