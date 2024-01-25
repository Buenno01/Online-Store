import { HiMiniShoppingBag } from 'react-icons/hi2';

function Logo() {
  return (
    <h1 className="text-emerald-300 flex items-center justify-center">
      <span className="text-5xl">
        <HiMiniShoppingBag />
      </span>
      <span className="flex flex-col text-center text-2xl">
        <span className="uppercase text-white font-semibold leading-6">front-end</span>
        <span className="lowercase text-lg leading-4">online store</span>
      </span>
    </h1>
  );
}

export default Logo;
