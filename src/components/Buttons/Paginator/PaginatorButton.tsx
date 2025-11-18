import './PaginatorButton.scss';

import React from 'react';

export type PaginatorButtonProps = {
  label: string;
  onPageChange?: (page: number) => void;
};

export const PaginatorButton: React.FC<PaginatorButtonProps> = ({
  label,
  onPageChange,
}) => {
  return (
    <>
      <button
        className="paginator-button"
        onClick={() => onPageChange}
      >
        {label}
      </button>
    </>
  );
};
