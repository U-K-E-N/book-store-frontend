import BookStoreIcon from '../../BookStoreIcon/BookStoreIcon';
import { IconName } from '../../BookStoreIcon/types';
import './SliderButton.scss';
import React from 'react';

export type SliderButtonProps = {
  iconName: IconName;
  disabled: boolean;
};

export const SliderButton: React.FC<SliderButtonProps> = ({
  iconName,
  disabled,
}) => {
  return (
    <>
      <button
        className="slider-button"
        disabled={disabled}
      >
        <BookStoreIcon iconName={iconName} />
      </button>
    </>
  );
};
