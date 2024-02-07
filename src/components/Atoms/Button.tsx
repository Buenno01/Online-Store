import { ButtonHTMLAttributes, ElementType } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  Icon: ElementType,
}

function Button({ Icon, ...rest }: ButtonProps) {
  return (
    <button
      { ...rest }
      className="w-8 h-8 flex justify-center items-center"
      data-testid="product-decrease-quantity"
    >
      <Icon />
    </button>
  );
}

export default Button;
