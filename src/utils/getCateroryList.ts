import { ProductItems } from "../app/slices/productsSlice";

export const getCateroryList = (items: ProductItems) =>{
  return Object.entries(items).reduce(function (result: Array<string>, currentPair) {
    const [key, value] = currentPair;
  
    for (const categoryItem of value.category) {
      if (!result.includes(categoryItem)) {
        result.push(categoryItem)
      }
    }
  
    return result;
  }, []);
} 
