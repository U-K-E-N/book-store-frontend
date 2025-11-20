import React from 'react';
import { Button } from '../Button';

type ProductCardProps = {
  image: string;
  name: string;
  author: string;
  price: number;
  oldPrice?: number;
  inStock?: boolean;
};

export const ProductCard: React.FC<ProductCardProps> = ({
  image,
  name,
  author,
  price,
  oldPrice,
  inStock = true,
}) => {
  return (
    <div className="productCard">
      <div className="productCard__imageWrapper">
        <img
          src={image}
          alt={name}
          className="productCard__image"
        />
      </div>

      <div className="productCard__content">
        <h3 className="productCard__name">{name}</h3>
        <p className="productCard__author">{author}</p>

        <div className="productCard__prices">
          <span className="productCard__price">₴{price}</span>
          {oldPrice && (
            <span className="productCard__oldPrice">₴{oldPrice}</span>
          )}
        </div>

        <div className="productCard__stock">
          {inStock ? 'In stock' : 'Out of stock'}
        </div>

        <div className="productCard__actions">
          <Button />
          <button className="productCard__favorite">♡</button>
        </div>
      </div>
    </div>
  );
};
