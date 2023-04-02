import React from "react"
import { useAppSelector } from "../../app/hooks"
import ProductItem from "../ProductItem/ProductItem"
import FilterSidebar from "../FilterSidebar/FilterSidebar"
import FilterCategories from "../FilterCategories/FilterCategories"
import Sort from "../Sort/Sort"
import { sortByField } from "../../utils/sort"
import { getFilteredItems } from "../../utils/getFilteredItems"

import style from "./Products.module.scss"
import mainStyle from "../../scss/_container.module.scss"
import titleStyle from "../../scss/components/_title.module.scss"
import ProductsSkeleton from "./ProductsSkeleton"


const Products: React.FC = () => {
  const productsItems = useAppSelector((state) => state.products.productsItems)
  const isLoading = useAppSelector((state) => state.loading.isLoading)

  const sort = useAppSelector((state) => state.sort.type)

  const filtredProductItems = getFilteredItems(productsItems)

  const sortedProductItems = sortByField(filtredProductItems, sort)

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
                {Object.entries(sortedProductItems).map(([id, product]) => {
                  const productItemProps = {
                    productData: product,
                  }

                  return <ProductItem key={id} {...productItemProps} />
                })}
              </ul>
              <div className={`${style.pages} pagination`}>
                <a className="pagination-pages__page-nav-link">
                  <svg width="9"
                    height="16"
                    viewBox="0 0 9 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 2.28571L3.375 8L9 13.7143L7.875 16L2.54292e-07 8L7.875 9.83506e-08L9 2.28571Z"
                      fill="#FFC85E" />
                  </svg>
                </a>
                <a className="pagination-pages__page-link pagination-pages__page-link_state_active">1</a>
                <a className="pagination-pages__page-link">2</a>
                <a className="pagination-pages__page-link">3</a>
                <a className="pagination-pages__page-nav-link">
                  <svg width="9"
                    height="16"
                    viewBox="0 0 9 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.7143L5.625 8L0 2.28571L1.125 0L9 8L1.125 16L0 13.7143Z" fill="#FFC85E" />
                  </svg>
                </a>
              </div>
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