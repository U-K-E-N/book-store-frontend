import { useState } from 'react';
import { Input } from '../Input';

export const Header = () => {
  const [query, setQuery] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <Input
      value={query}
      onChange={handleChange}
    />
  );
};
