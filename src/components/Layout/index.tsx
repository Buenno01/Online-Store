import React from 'react';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <header>
        <form>
          <input
            className="border border-gray-400"
            type="text"
            placeholder="digite o nome do produto"
          />
          <button>Pesquisar</button>
        </form>
        <h1>
          Online Store
        </h1>
        <hr />
      </header>
      <Outlet />
    </>
  );
}

export default Layout;
