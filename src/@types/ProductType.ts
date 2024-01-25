export type ProductType = {
  id: string,
  title: string,
  price: string,
  thumbnail: string,
  shipping : {
    free_shipping: boolean,
  } | undefined,
};
