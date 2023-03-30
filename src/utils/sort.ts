import { Product } from "../app/slices/productsSlice"
import { sortSpec } from "../app/slices/sortSlice"

export const sortByField = (data: Product[], sortSpec: sortSpec) => {
  const dataCopy = [...data]
  const field = sortSpec.field;

  return dataCopy.sort((a, b) => {
    switch (field) {
      case 'price':
        return sortSpec.direction * (a.price - b.price)
      case 'brand':
        return sortSpec.direction * a.name.localeCompare(b.name, ["ru", "en-US"])
      default: 
        return 1;
    }
  })
}