import { ButtonHTMLAttributes, ElementType } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  Icon: ElementType,
}

function Button({ Icon, ...rest }: ButtonProps) {
  return (
    <button
      { ...rest }
      className={ twMerge('w-8 h-8 flex justify-center items-center', rest.className) }
      data-testid="product-decrease-quantity"
    >
      <Icon />
    </button>
  );
}

export default Button;
