import audioBooks from '../../../public/books/audiobook.json';
import { Catalog } from '../../components/Catalog/Catalog';

export const Audiobook = () => {
  return (
    <Catalog
      catalogBooks={audioBooks}
      title="Audiobooks"
    />
  );
};
