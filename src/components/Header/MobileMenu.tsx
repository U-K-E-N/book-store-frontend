import { NavLink } from 'react-router-dom';
import { BookStoreIcon, IconName } from '../BookStoreIcon';
import { Input } from '../Input';
import { Dropdown } from '../Dropdown';
import './MobileMenu.scss';
import React from 'react';

type MobileMenuProps = {
  onClose: () => void;
};

export const MobileMenu: React.FC<MobileMenuProps> = ({ onClose }) => {
  return (
    <div className="mobile-menu">
      <div className="mobile-menu__top">
        <div className="mobile-menu__logo">
          <NavLink
            to="/"
            className="mobile-menu__logo-link"
          >
            <img
              src="/src/assets/images/logo-header.svg"
              alt="Book Store Logo"
              className="mobile-menu__logo-image"
            />
          </NavLink>
        </div>
        <div
          className="mobile-menu__close"
          onClick={onClose}
        >
          <BookStoreIcon iconName={IconName.Close} />
        </div>
      </div>

      <nav className="mobile-menu__nav">
        <ul className="mobile-menu__nav-list">
          <li className="mobile-menu__nav-item">
            <NavLink
              to="/"
              className="mobile-menu__nav-link"
            >
              Home
            </NavLink>
          </li>
          <li className="mobile-menu__nav-item">
            <NavLink
              to="/paper"
              className="mobile-menu__nav-link"
            >
              Paper
            </NavLink>
          </li>
          <li className="mobile-menu__nav-item">
            <NavLink
              to="/kindle"
              className="mobile-menu__nav-link"
            >
              Kindle
            </NavLink>
          </li>
          <li className="mobile-menu__nav-item">
            <NavLink
              to="/audiobook"
              className="mobile-menu__nav-link"
            >
              AudioBook
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="mobile-menu__search">
        <Input placeholder="Find a book or author" />
      </div>

      <div className="mobile-menu__categories">
        <Dropdown
          variant="v3"
          dropdownText="Categories"
          options={[
            { label: 'Fantasy', value: 'fantasy' },
            { label: 'Sci-fi', value: 'scifi' },
            { label: 'Romance', value: 'romance' },
          ]}
          onSelect={() => {}}
        />
      </div>
      <div className="mobile-menu__icons">
        <NavLink
          to="/favourites"
          className="mobile-menu__icon-wrapper"
          id="favorite-icon"
        >
          <BookStoreIcon iconName={IconName.Heart} />
        </NavLink>
        <NavLink
          to="/cart"
          className="mobile-menu__icon-wrapper"
          id="cart-icon"
        >
          <BookStoreIcon
            iconName={IconName.Cart}
            // fontSize={32}
          />
        </NavLink>
      </div>
    </div>
  );
};
