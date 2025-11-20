import { useState } from 'react';
import { Input } from '../Input';
import { Dropdown } from '../Dropdown';

export const Header = () => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Category');

  const [openInput, setOpenInput] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleChangeInputOpen = () => {
    if (openInput === false) {
      setOpenInput(true);
    } else {
      setOpenInput(false);
    }
  };

  return (
    <header>
      <button
        type="button"
        onClick={handleChangeInputOpen}
      >
        click
      </button>
      <Input
        isOpen={openInput}
        value={query}
        onChange={handleChange}
        placeholder="Find a book or author"
      />
      <Dropdown
        //sort, number, category
        variant="category"
        label="Sort by"
        dropdownText={selectedCategory}
        options={[
          { label: 'Audio', value: 'Audio' },
          { label: 'Kindle', value: 'Kindle' },
          { label: 'Paper', value: 'Paper' },
        ]}
        onSelect={(val) => setSelectedCategory(val)}
      />
    </header>
  );
};
