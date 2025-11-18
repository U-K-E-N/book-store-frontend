import { AppRouter } from './router/AppRouter';
import BookStoreIcon from './BookStoreIcon/BookStoreIcon';
import { IconName } from './BookStoreIcon/types';

export const App = () => {
  return (
    <div>
      Hello team
      <BookStoreIcon
        iconName={IconName.HeartFilled}
        count={12}
      />
      <BookStoreIcon iconName={IconName.Search} />
      <AppRouter />
    </div>
  );
};
