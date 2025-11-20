import { Link } from 'react-router-dom';
import { SliderButton } from '../Buttons';
import { IconName } from '../BookStoreIcon';
import './Footer.scss';

export const Footer = () => {
  const scrollToTop = () => {
    if (window.scrollTo) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="footer">
        <div className="footer__logo">
          <Link
            to="/"
            className="footer__logo-link"
          >
            <img
              src="/src/assets/images/logo-footer.svg"
              alt="Book Store Logo"
              className="footer__logo-image"
            />
          </Link>
        </div>
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

        <button
          className="footer__back"
          onClick={scrollToTop}
        >
          Back to top
          <SliderButton
            disabled={false}
            iconName={IconName.ArrowUp}
          />
        </button>
      </div>
    </>
  );
};
