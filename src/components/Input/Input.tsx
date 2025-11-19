import type { ChangeEvent } from 'react';
import { BookStoreIcon, IconName } from '../BookStoreIcon';
import './Input.scss';

type InputProps = {
  style: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
};

export const Input = ({ style, value, onChange, placeholder }: InputProps) => {
  return (
    <div className={`input-container ${style}`}>
      <div className="input-icon">
        <BookStoreIcon iconName={IconName.Search} />
      </div>
      <input
        className="input"
        type="text"
        name="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};
