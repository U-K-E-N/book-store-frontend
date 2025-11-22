import paperBooks from '../../../public/books/paperback.json';
import { Catalog } from '../../components/Catalog/Catalog';

export const Paper = () => {
  return (
    <Catalog
      catalogBooks={paperBooks}
      title="Paper books"
    />
  );
};
