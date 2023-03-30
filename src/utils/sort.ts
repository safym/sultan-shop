import { ProductItems } from "../app/slices/productsSlice"
import { sortSpec } from "../app/slices/sortSlice"


export const sortByField = (data: ProductItems, sortSpec: sortSpec) => {
  // console.log(data, sortSpec)
  // // const dataCopy = [...data]
  // const field = sortSpec.type;

  // data.sort((a, b) => {
  //   switch (field) {
  //     case 'price':
  //       return sortSpec.direction * (a.price - b.price)
  //     case 'name':
  //       return sortSpec.direction * a.name.localeCompare(b.name, ["ru", "en-US"])
  //   }
  // })

  // // return sortedData
}