import { Product } from "../app/slices/productsSlice";

export const getNewProductId = (productItems: Product[]): string => {
  return String(
    Math.max(...productItems.map((item) => (item.id ? +item.id : 0))) + 1
  );
};