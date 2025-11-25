import React, { useState } from 'react';
import { Input } from '../Input';
import './Header.scss';
import { NavLink } from 'react-router-dom';
import { BookStoreIcon, IconName } from '../BookStoreIcon';
import { Dropdown } from '../Dropdown';
import { MobileMenu } from './MobileMenu';

import { SearchDropdown } from '../SearchDropdown';

import { useStore } from '../../hooks/useStore';
import type { GeneralBook } from '../../types/GeneralBook';

interface HeaderProps {
  allBooks: GeneralBook[];
}

export const Header: React.FC<HeaderProps> = ({ allBooks }) => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | number>(
    'Category',
  );
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [openInput, setOpenInput] = useState(false);

  const filteredBooks = allBooks.filter(
    (book) =>
      book.name.toLowerCase().includes(query.toLowerCase()) ||
      book.author?.toLowerCase().includes(query.toLowerCase()),
  );

  const { cart, favourites } = useStore();
  const totalItemsCart = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleChangeInputOpen = () => {
    if (openInput === false) {
      setOpenInput(true);
    } else {
      setOpenInput(false);
    }
  };

  const toggleMobileMenu = () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
      document.body.classList.remove('no-scroll');
    } else {
      setIsMobileMenuOpen(true);
      document.body.classList.add('no-scroll');
    }
  };

  return (
    <>
      <header className="header">
        <div className="header__container">
          <div className="header__left">
            <NavLink
              to="/"
              className="header__logo-link"
            >
              <img
                src="/src/assets/logo-header.svg"
                alt="Book Store Logo"
                className="header__logo-image"
              />
            </NavLink>

            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item">
                  <NavLink
                    to="/"
                    className="header__nav-link"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="header__nav-item">
                  <NavLink
                    to="/paper"
                    className="header__nav-link"
                  >
                    Paper
                  </NavLink>
                </li>
                <li className="header__nav-item">
                  <NavLink
                    to="/kindle"
                    className="header__nav-link"
                  >
                    Kindle
                  </NavLink>
                </li>
                <li className="header__nav-item">
                  <NavLink
                    to="/audiobook"
                    className="header__nav-link"
                  >
                    AudioBook
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header__search">
            <div className="header__input">
              <Input
                isOpen={openInput}
                value={query}
                onChange={handleChange}
                placeholder="Find a book or author"
              />

              {query.length > 0 && (
                <button
                  className="header__input-clear"
                  onClick={() => setQuery('')}
                  aria-label="Clear input"
                >
                  ×
                </button>
              )}

              {query.length > 2 && filteredBooks.length > 0 && (
                <SearchDropdown books={filteredBooks} />
              )}
            </div>

            <div className="header__categories">
              <Dropdown
                //sort, number, category
                variant="category"
                dropdownText={selectedCategory}
                options={[
                  { label: 'Audio', value: 'Audio' },
                  { label: 'Kindle', value: 'Kindle' },
                  { label: 'Paper', value: 'Paper' },
                ]}
                onSelect={(val) => setSelectedCategory(val.toString())}
              />
            </div>
            <div className="header__icons">
              <div
                className="header__icon-wrapper"
                id="search-icon"
                onClick={handleChangeInputOpen}
              >
                <BookStoreIcon iconName={IconName.Search} />
              </div>
              <NavLink
                to="/favourites"
                className="header__icon-wrapper header__quantity-wrapper"
                id="favorite-icon"
              >
                {favourites.length !== 0 && (
                  <span className="header__quantity">{favourites.length}</span>
                )}
                <BookStoreIcon iconName={IconName.Heart} />
              </NavLink>
              <NavLink
                to="/cart"
                className="header__icon-wrapper header__quantity-wrapper"
                id="cart-icon"
              >
                {totalItemsCart !== 0 && (
                  <span className="header__quantity">{totalItemsCart}</span>
                )}
                <BookStoreIcon iconName={IconName.Cart} />
              </NavLink>

              <div
                className="header__icon-wrapper"
                id="menu-icon"
                onClick={toggleMobileMenu}
              >
                <BookStoreIcon iconName={IconName.Menu} />
              </div>
            </div>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <MobileMenu
          onClose={toggleMobileMenu}
          // value={query}
          // setValue={setQuery}
          // onChange={handleChange}
          allBooks={allBooks}
        />
      )}
    </>
  );
};
