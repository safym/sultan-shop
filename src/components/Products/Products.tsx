import React from "react"
import { useAppSelector } from "../../app/hooks"

import ProductItem from "../ProductItem/ProductItem"
import FilterSidebar from "../FilterSidebar/FilterSidebar"
import FilterCategories from "../FilterCategories/FilterCategories"
import Sort from "../Sort/Sort"
import ProductsSkeleton from "./ProductsSkeleton"
import Pagination from "../Pagination/Pagination"

import { sortByField } from "../../utils/sort"
import { getFilteredItems } from "../../utils/getFilteredItems"

import style from "./Products.module.scss"
import mainStyle from "../../styles/_container.module.scss"
import titleStyle from "../../styles/components/_title.module.scss"

import { PAGE_ITEMS } from "../../app/slices/paginationSlice"


const Products: React.FC = () => {
  const currentPage = useAppSelector((state) => state.pagination.currentPage)
  const productsItems = useAppSelector((state) => state.products.productsItems)
  const sort = useAppSelector((state) => state.sort.type)

  const filtredProductItems = getFilteredItems(productsItems)

  const sortedProductItems = sortByField(filtredProductItems, sort)

  const renderProductItems = () => {
    const items = [];

    const startIndex = 0 + PAGE_ITEMS * (currentPage - 1)
    const end = PAGE_ITEMS * currentPage - 1

    for (let i = startIndex; i <= end; i++) {
      if (sortedProductItems[i]) {
        const product = sortedProductItems[i];

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
                {renderProductItems()}
              </ul>
              <Pagination productItems={productsItems} />
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