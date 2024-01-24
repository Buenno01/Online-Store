import { MdOutlineStarBorder, MdOutlineStar } from 'react-icons/md';
import { ChangeEvent } from 'react';

interface StarProps {
  rate: string,
  name: string,
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void,
  value: string,
  checked?: boolean,
  testid?: string,
}

function Star({ name, rate, value, checked = false,
  handleChange = () => {}, testid = '' }: StarProps) {
  return (
    <label className="text-yellow-400 text-xl">
      {
        parseInt(value, 10) <= parseInt(rate, 10)
          ? <MdOutlineStar />
          : <MdOutlineStarBorder />
      }
      <input
        data-testid={ testid }
        checked={ checked }
        value={ value }
        onChange={ (e) => { handleChange(e); } }
        className="hidden"
        type="radio"
        name={ name }
      />
    </label>
  );
}

export default Star;
