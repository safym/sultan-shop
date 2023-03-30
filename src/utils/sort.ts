import { ProductsState } from "../app/slices/productsSlice"
import { sortSpec } from "../app/slices/sortSlice"


export const sortByField = (data: ProductsState, sortSpec: sortSpec) => {
  console.log(data, sortSpec)
  const dataCopy = [...data.productsItems]
  const field = sortSpec.type;

  // dataCopy.sort((a, b) => {
  //   switch (field) {
  //     case 'price':
  //       return sortSpec.direction * (a.price - b.price)
  //     case 'name':
  //       return sortSpec.direction * a.name.localeCompare(b.name, ["ru", "en-US"])
  //   }
  // })

  // return sortedData
}