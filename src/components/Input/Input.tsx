import './Input.css';
import BookStoreIcon from '../../BookStoreIcon/BookStoreIcon';
import { IconName } from '../../BookStoreIcon/types';

export const Input = ({ ...rest }) => {
  return (
    <div className="input-container">
      <div className="input-icon">
        <BookStoreIcon iconName={IconName.Search} />
      </div>
      <input
        className="input"
        type="text"
        name="text"
        placeholder="Find a book or author"
        {...rest}
      />
    </div>
  );
};
