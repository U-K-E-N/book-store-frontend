import { useState } from 'react';
import { Input } from '../Input';
import BookStoreIcon from '../../BookStoreIcon/BookStoreIcon';
import { IconName } from '../../BookStoreIcon/types';
import './Header.css';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [query, setQuery] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div className="header">
      <div className="header__left">
        <div className="header__logo">
          <Link
            to="/"
            className="header__logo-link"
          >
            <img
              src="/public/books/img/favicon.png"
              alt="Book Store Logo"
              className="header__logo-image"
            />
          </Link>
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <Link
                to="/"
                className="header__nav-link"
              >
                Home
              </Link>
            </li>
            <li className="header__nav-item">
              <Link
                to="/paper"
                className="header__nav-link"
              >
                Paper
              </Link>
            </li>
            <li className="header__nav-item">
              <Link
                to="/kindle"
                className="header__nav-link"
              >
                Kindle
              </Link>
            </li>
            <li className="header__nav-item">
              <Link
                to="/audiobook"
                className="header__nav-link"
              >
                AudioBook
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header__search">
        <div className="header__input">
          <Input
            value={query}
            onChange={handleChange}
          />
        </div>
        <span className="header__categories">Categories</span>
        <div className="header__icons">
          <div className="header__icon-wrapper">
            <BookStoreIcon iconName={IconName.Heart} />
          </div>
          <div className="header__icon-wrapper">
            <BookStoreIcon iconName={IconName.Cart} />
          </div>
        </div>
      </div>
    </div>
  );
};
