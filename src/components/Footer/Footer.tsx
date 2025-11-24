import { Link } from 'react-router-dom';
import { BookStoreIcon, IconName } from '../BookStoreIcon';
import './Footer.scss';

export const Footer = () => {
  const scrollToTop = () => {
    if (window.scrollTo) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container footer__container">
        <Link
          to="/"
          className="footer__logo-link"
        >
          <img
            src="/src/assets/logo-header.svg"
            alt="Book Store Logo"
            className="footer__logo-image"
          />
        </Link>
        <nav className="footer__nav">
          <ul className="footer__nav-list">
            <li className="footer__nav-item">
              <Link
                to="/"
                className="footer__nav-link"
              >
                GITHUB
              </Link>
            </li>
            <li className="footer__nav-item">
              <Link
                to="/"
                className="footer__nav-link"
              >
                CONTACTS
              </Link>
            </li>
            <li className="footer__nav-item">
              <Link
                to="/"
                className="footer__nav-link"
              >
                RIGHTS
              </Link>
            </li>
          </ul>
        </nav>

        <div className="footer__back-wrapper">
          <button
            type="button"
            className="footer__back"
            onClick={scrollToTop}
          >
            Back to top
            <div className="slider-button">
              <BookStoreIcon iconName={IconName.ArrowUp} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};
