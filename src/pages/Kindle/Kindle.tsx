import kindleBook from '../../../public/books/kindle.json';
import { Catalog } from '../../components/Catalog/Catalog';

export const Kindle = () => {
  return (
    <Catalog
      catalogBooks={kindleBook}
      title="Kindle books"
    />
  );
};
