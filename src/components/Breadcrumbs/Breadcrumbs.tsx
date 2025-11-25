import { Link } from 'react-router-dom';
import { BookStoreIcon, IconName } from '../BookStoreIcon';
import type { GeneralBook } from '../../types/GeneralBook';

type BreadcrumbsProps = {
  book: GeneralBook;
};

export const Breadcrumbs = ({ book }: BreadcrumbsProps) => {
  const categories = book.category || [];
  const mainCategory = categories[0] || 'Unknown';

  const typeMap: Record<'paper' | 'kindle' | 'audiobook', string> = {
    paper: 'Paper book',
    kindle: 'Kindle',
    audiobook: 'Audiobook',
  };

  return (
    <nav className="breadcrumbs">
      <Link to="/">
        <BookStoreIcon iconName={IconName.Home} />
      </Link>
      <span>
        <BookStoreIcon iconName={IconName.ArrowRight} />
      </span>

      <Link to={`/${book.type}`}>
        {typeMap[book.type as 'paper' | 'kindle' | 'audiobook']}
      </Link>
      <span>
        <BookStoreIcon iconName={IconName.ArrowRight} />
      </span>

      <Link
        className="breadcrumbs__category"
        to={`/category/${mainCategory.toLowerCase().replace(/\s+/g, '-')}`}
      >
        {mainCategory}
      </Link>
      <span className="breadcrumbs__dots">...</span>

      <span>
        <BookStoreIcon iconName={IconName.ArrowRight} />
      </span>

      <span className="breadcrumbs__title">{book.name}</span>
    </nav>
  );
};
