import { Product } from "../app/slices/productsSlice"

export const getCateroryList = (items:  Product[]) => {
  return Object.entries(items).reduce(function (result: Array<string>, currentPair) {
    const [key, value] = currentPair
  
    for (const categoryItem of value.category) {
      if (!result.includes(categoryItem)) {
        result.push(categoryItem)
      }
    }
  
    return result
  }, [])
} 
