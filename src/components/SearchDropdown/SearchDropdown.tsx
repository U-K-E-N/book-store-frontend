/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import type { BookBase } from '../../types/BookBase';
import './SearchDropdown.scss';

interface SearchDropdownProps {
  books: BookBase[];
}

export const SearchDropdown: React.FC<SearchDropdownProps> = ({ books }) => {
  return (
    <div className="search-dropdown">
      <div className="search-dropdown-wrapper">
        <p className="search-dropdown__title">Books</p>

        <ul className="search-dropdown__list">
          {books.map((book) => (
            <li
              className="search-dropdown__item"
              key={book.id}
            >
              <Link
                to={`/${book.type}/${book.category[0].toLowerCase().replace(/\s+/g, '-')}/${book.slug}`}
                className="search-dropdown__link"
              >
                <img
                  className="search-dropdown__image"
                  src={`/books/${book.images[0]}`}
                  alt={book.name}
                />
                <div>
                  <div className="search-dropdown__book-title">{book.name}</div>
                  <div className="search-dropdown__book-author">
                    {book.author}
                  </div>
                  <div className="search-dropdown__book-price">
                    {(book.priceDiscount ?? book.priceRegular) + ' $'}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
