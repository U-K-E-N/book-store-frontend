import './PaginatorButton.scss';

import React from 'react';

export type PaginatorButtonProps = {
  label: string;
};

export const PaginatorButton: React.FC<PaginatorButtonProps> = ({ label }) => {
  return (
    <>
      <button className="paginator-button">{label}</button>
    </>
  );
};
