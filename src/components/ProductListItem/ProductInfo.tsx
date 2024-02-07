import React from 'react';

type ProductInfoProps = {
  title: string,
  thumbnail: string,
};

function ProductInfo({ thumbnail, title }: ProductInfoProps) {
  return (
    <div className="flex items-start gap-2">
      <span className="w-16 h-16 flex items-center">
        <img
          className="max-h-16 max-w-16"
          src={ thumbnail }
          alt={ title }
        />
      </span>
      <span className="py-2">
        <h3
          data-testid="shopping-cart-product-name"
          className="text-gray-700 text-sm"
        >
          {title}
        </h3>
      </span>
    </div>
  );
}

export default ProductInfo;
