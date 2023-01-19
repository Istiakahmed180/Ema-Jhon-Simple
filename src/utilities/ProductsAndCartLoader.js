import { getStoredCart } from "./fakedb";

export const productsAndCartLoder = async () => {
  const productsData = await fetch("products.json");
  const products = await productsData.json();

  const storedCart = getStoredCart();
  const savedCart = [];
  for (const id in storedCart) {
    const addedProducts = products.find((product) => product.id === id);
    if (addedProducts) {
      const quantity = storedCart[id];
      addedProducts.quantity = quantity;
      savedCart.push(addedProducts);
    }
  }
  return { products, savedCart };
};
