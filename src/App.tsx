// import BookStoreIcon from './BookStoreIcon/BookStoreIcon';
// import { IconName } from './BookStoreIcon/types';
import { Header } from './components/Header';

export const App = () => {
  return (
    <div>
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
