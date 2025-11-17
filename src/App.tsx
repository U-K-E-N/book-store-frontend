import BookStoreIcon from './BookStoreIcon/BookStoreIcon';
import { IconName } from './BookStoreIcon/types';

export const App = () => {
  return (
    <div>
      Hello team
      {/* Example of icons usage */}
      <BookStoreIcon
        iconName={IconName.HeartFilled}
        count={12}
      />
    </div>
  );
};
