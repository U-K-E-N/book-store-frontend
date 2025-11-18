import { useState } from 'react';
import { Input } from '../Input';
import BookStoreIcon from '../../BookStoreIcon/BookStoreIcon';
import { IconName } from '../../BookStoreIcon/types';
import './Header.css';

export const Header = () => {
  const [query, setQuery] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div className="header">
      <a
        href="/"
        className="header__logo-link"
      >
        <img
          src="/public/books/img/favicon.png"
          alt="Book Store Logo"
          className="logo"
        />
      </a>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <a
              href="/"
              className="header__nav-link"
            >
              Home
            </a>
          </li>
          <li className="header__nav-item">
            <a
              href="/paper"
              className="header__nav-link"
            >
              Paper
            </a>
          </li>
          <li className="header__nav-item">
            <a
              href="/kindle"
              className="header__nav-link"
            >
              Kindle
            </a>
          </li>
          <li className="header__nav-item">
            <a
              href="/audiobook"
              className="header__nav-link"
            >
              AudioBook
            </a>
          </li>
        </ul>
      </nav>
      <Input
        value={query}
        onChange={handleChange}
      />
      <span className="categories">Categories</span>
      <BookStoreIcon iconName={IconName.Heart} />
      <BookStoreIcon iconName={IconName.Cart} />
    </div>
  );
};
