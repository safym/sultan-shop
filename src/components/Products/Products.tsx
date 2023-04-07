import { useEffect, useState } from "react"
import { useAppSelector } from "../../app/hooks"

import ProductItem from "../ProductItem/ProductItem"
import FilterSidebar from "../FilterSidebar/FilterSidebar"
import FilterCategories from "../FilterCategories/FilterCategories"
import Sort from "../Sort/Sort"
import ProductsSkeleton from "./ProductsSkeleton"
import Pagination from "../Pagination/Pagination"

import { sortByField } from "../../utils/sort"
import { getFilteredItems } from "../../utils/getFilteredItems"

import style from "./_products.module.scss"
import mainStyle from "../../styles/main/_container.module.scss"
import titleStyle from "../../styles/components/_title.module.scss"

import { PAGE_ITEMS } from "../../app/slices/paginationSlice"
import { Product } from "../../app/slices/productsSlice"

const Products: React.FC = () => {
  const [finalProductsItems, setFinalProductsItems] = useState<Array<Product>>([])
  const [productsElements, setProductsElements] = useState<Array<JSX.Element>>([])

  const currentPage = useAppSelector((state) => state.pagination.currentPage)
  const productsItems = useAppSelector((state) => state.products.productsItems)
  const sort = useAppSelector((state) => state.sort.type)
  const filters = useAppSelector((state) => state.filter)

  useEffect(() => {
    const filtered = getFilteredItems(productsItems, filters)
    const sorted = sortByField(filtered, sort)

    setFinalProductsItems(sorted)
    setProductsElements(renderProductItems(sorted))
  }, [productsItems, sort, filters, currentPage])

  const renderProductItems = (data: Product[]):JSX.Element[] => {
    const items = [];

    const startIndex = 0 + PAGE_ITEMS * (currentPage - 1)
    const end = PAGE_ITEMS * currentPage - 1

    for (let i = startIndex; i <= end; i++) {
      if (data[i]) {
        const product = data[i];

        const productItemProps = {
          productData: product,
        }

        items.push(<ProductItem key={i} {...productItemProps} />)
      }
    }

    return items;
  };

  return (
    <section className={style.products}>
      <div className={`${mainStyle.container} ${mainStyle.content}`}>
        <div className={style.body}>
          <div className={style.titleWrapper}>
            <h1 className={`${style.title} ${titleStyle.title}`}>Косметика и гигиена</h1>
            <div className={style.options}>
              <Sort />
            </div>
          </div>
          <FilterCategories />
          <div className={style.content}>
            <FilterSidebar />
            <div className={style.listWrapper}>
              <ul className={style.list}>
                <ProductsSkeleton />
                {productsElements}
              </ul>
              <Pagination productsItems={finalProductsItems} />
              <p className={style.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum
                duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis.
                Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products