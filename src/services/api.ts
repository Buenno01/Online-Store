import { CategoryType } from '../@types/CategoryType';

const errorMessage = 'Failed to fetch';

export async function getCategories() {
  try {
    const fetchData = await fetch('https://api.mercadolibre.com/sites/MLB/categories');

    // if (!fetchData.ok) return [];

    const data = await fetchData.json();

    return data as CategoryType[];
  } catch (error: any) {
    return [];
  }
}

export async function getProductsFromCategoryAndQuery(categoryId = '', query = '') {
  try {
    const BASE_URL = 'https://api.mercadolibre.com/sites/MLB/search?';
    const categoryParam = categoryId.length > 0 ? `category=${categoryId}` : '';
    const queryParam = query.length > 0 ? `&q=${query}` : '';
    const fetchData = await fetch(`${BASE_URL}${categoryParam}${queryParam}`);

    // if (!fetchData.ok) { throw new Error(errorMessage); }

    const data = await fetchData.json();

    return data;
  } catch (error: any) {
    throw new Error(errorMessage);
  }
}

export async function getProductById(productId: string) {
  // Esta implementação específica não é avaliada, mas pode ajudar você 🙂
  // Atenção: essa função não deverá ser chamada na tela do carrinho de compras.
  try {
    const fetchData = await fetch(`https://api.mercadolibre.com/items/${productId}`);

    // if (!fetchData.ok) { throw new Error(errorMessage); }

    const data = await fetchData.json();

    return data;
  } catch (error: any) {
    throw new Error(errorMessage);
  }
}
