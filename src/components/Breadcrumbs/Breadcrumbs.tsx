import { Link } from 'react-router-dom';
import { BookStoreIcon, IconName } from '../BookStoreIcon';
import type { GeneralBook } from '../../types/GeneralBook';
import './Breadcrumbs.scss';

type BreadcrumbsProps = {
  book: GeneralBook;
};

export const Breadcrumbs = ({ book }: BreadcrumbsProps) => {
  const categories = book.category || [];
  const mainCategory = categories[0] || 'Unknown';

  const typeMap = {
    paperback: 'Paper book',
    kindle: 'Kindle',
    audiobook: 'Audiobook',
  };

  return (
    <nav className="breadcrumbs">
      <Link
        className="breadcrumbs__home"
        to="/"
      >
        <BookStoreIcon iconName={IconName.Home} />
      </Link>
      <span className="breadcrumbs__arrow">
        <BookStoreIcon iconName={IconName.ArrowRight} />
      </span>

      <Link
        className="breadcrumbs__link breadcrumbs__link--type"
        to={`/${book.type}`}
      >
        {typeMap[book.type as 'paperback' | 'kindle' | 'audiobook']}
      </Link>
      <span className="breadcrumbs__arrow breadcrumbs__arrow--tablet">
        <BookStoreIcon iconName={IconName.ArrowRight} />
      </span>

      <Link
        className="breadcrumbs__link breadcrumbs__link--category"
        to={`/${book.type}/${mainCategory.toLowerCase().replace(/\s+/g, '-')}`}
      >
        {mainCategory}
      </Link>
      <span className="breadcrumbs__dots">...</span>

      <span className="breadcrumbs__arrow">
        <BookStoreIcon iconName={IconName.ArrowRight} />
      </span>

      <span className="breadcrumbs__link breadcrumbs__link--title">
        {book.name}
      </span>
    </nav>
  );
};
