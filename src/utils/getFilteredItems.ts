import { useAppSelector } from "../app/hooks"
import { ProductFiltersState } from "../app/slices/filterSlice"
import { Product } from "../app/slices/productsSlice"

export const getFilteredItems = (items: Product[], filters: ProductFiltersState): Product[] => {
  return items.filter((item) => {
    const priceIsMatch = filters.minPrice < item.price && item.price < filters.maxPrice
    const manufacturerMatch = filters.manufacturers.includes(item.manufacturer) || !filters.manufacturers.length
    const categoryMatch = item.category.includes(filters.category) || !filters.category

    return priceIsMatch && manufacturerMatch && categoryMatch
  })
}
