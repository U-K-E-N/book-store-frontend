import type React from 'react';
import type { BookStoreIconsProps } from './types';
import './BookStoreIcon.scss';

export const BookStoreIcon: React.FC<BookStoreIconsProps> = ({
  iconName,
  count,
}) => {
  return (
    <>
      <div className="container">
        <i className={iconName}></i>
        {count && <span className="badge">{count}</span>}
      </div>
    </>
  );
};

export default BookStoreIcon;
