import { HiMiniShoppingBag } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to="/">
      <h1
        className="text-emerald-300 hover:text-emerald-400 active:text-emerald-200
      flex items-center justify-center"
      >
        <span className="text-3xl md:text-5xl">
          <HiMiniShoppingBag />
        </span>
        <span className="flex-col text-center text-2xl hidden md:flex">
          <span className="uppercase font-semibold leading-6 text-white">front-end</span>
          <span className="lowercase font-light text-lg leading-4">online store</span>
        </span>
      </h1>
    </Link>
  );
}

export default Logo;
