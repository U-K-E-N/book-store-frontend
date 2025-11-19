import { useState } from 'react';
import { Input } from '../Input';
import { Dropdown } from '../Dropdown';

export const Header = () => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Category');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <header>
      <Input
        value={query}
        onChange={handleChange}
      />
      <Dropdown
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
