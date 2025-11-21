import { useState } from 'react';
import { Input } from '../Input';
import './Header.scss';
import { NavLink } from 'react-router-dom';
import { BookStoreIcon, IconName } from '../BookStoreIcon';
import { Dropdown } from '../Dropdown';
import { MobileMenu } from './MobileMenu';

export const Header = () => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Category');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [openInput, setOpenInput] = useState(false);

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

  return (
    <>
      <header className="header">
        <div className="header__left">
          <div className="header__logo">
            <NavLink
              to="/"
              className="header__logo-link"
            >
              <img
                src="/src/assets/images/logo-header.svg"
                alt="Book Store Logo"
                className="header__logo-image"
              />
            </NavLink>
          </div>
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
              onSelect={(val) => setSelectedCategory(val)}
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
              className="header__icon-wrapper"
              id="favorite-icon"
            >
              <BookStoreIcon iconName={IconName.Heart} />
            </NavLink>
            <NavLink
              to="/cart"
              className="header__icon-wrapper"
              id="cart-icon"
            >
              <BookStoreIcon iconName={IconName.Cart} />
            </NavLink>

            <div
              className="header__icon-wrapper"
              id="menu-icon"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <BookStoreIcon iconName={IconName.Menu} />
            </div>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <MobileMenu onClose={() => setIsMobileMenuOpen(false)} />
      )}
    </>
  );
};
