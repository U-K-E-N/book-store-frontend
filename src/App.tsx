// import BookStoreIcon from './BookStoreIcon/BookStoreIcon';
// import { IconName } from './BookStoreIcon/types';
import { Header } from './components/Header';
import { AppRouter } from './router/AppRouter';

export const App = () => {
  return (
    <div>
      {/* Hello team */}
      <AppRouter />
      Hello team
      {/* Example of icons usage with badge
      <BookStoreIcon
        iconName={IconName.HeartFilled}
        count={12}
      />
       Example without badge 
      <BookStoreIcon iconName={IconName.Search} /> */}
      <main className="main">
        <div className="container">
          <Header />
        </div>
      </main>
    </div>
  );
};
