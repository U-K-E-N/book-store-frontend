import { BookStoreIcon, IconName } from '../BookStoreIcon';
import './Input.css';

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
