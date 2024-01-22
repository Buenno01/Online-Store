import React, { useState } from 'react';

function Home() {
  const [products, setProducts] = useState([]);
  return (
    <div data-testid="home-initial-message">
      {
        products.length === 0
         && 'Digite algum termo de pesquisa ou escolha uma categoria.'
      }
    </div>
  );
}

export default Home;
