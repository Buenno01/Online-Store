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
    const params = [
      categoryId.length > 0 && `category=${categoryId}`,
      query.length > 0 && `q=${query}`,
    ].filter((e) => e !== false).join('&');
    console.log(params);

    const fetchData = await fetch(`${BASE_URL}${params}`);

    // if (!fetchData.ok) { throw new Error(errorMessage); }

    const data = await fetchData.json();

    return data;
  } catch (error: any) {
    return {};
  }
}

export async function getProductById(productId: string) {
  try {
    const fetchData = await fetch(`https://api.mercadolibre.com/items/${productId}`);

    // if (!fetchData.ok) { throw new Error(errorMessage); }

    const data = await fetchData.json();

    return data;
  } catch (error: any) {
    throw new Error(errorMessage);
  }
}

// Busca itens pela categoria - req 6
export async function getProductsByCategory(categoryId: string) {
  const API_URL = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;

  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
}
