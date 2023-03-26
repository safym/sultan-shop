import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getProducts } from "../../app/data/api";
import { setProducts } from "../../app/slices/productsSlice"
import ProductItem from "../ProductItem";
import FilterSidebar from "../FilterSidebar";
import FilterCategories from "../FilterCategories";

const Products: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    getProducts().then((products) => {
      dispatch(setProducts(products));
    });
  }, []);

  const productsItems = useAppSelector((state) => state.products.productsItems);

  return (
    <section className="content__products products">
      <div className="products__container _container">
        <div className="products__body">
          <div className="products__title-wrapper">
            <h1 className="products__title title">Косметика и гигиена</h1>
            <div className="products__options">
              <div className="products__sort sort">
                <span className="products__sort-title">Сортировка:</span>
                <a className="products__show-hide-link show-hide-link" href="#">
                  Название
                  <span className="show-hide-link__direction-arrow">
                    <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.5 6L0.468911 0.750001L6.53109 0.75L3.5 6Z" fill="#3F4E65" />
                    </svg>
                  </span>
                </a>
              </div>

            </div>
          </div>
          <FilterCategories />
          <div className="products__content">
            <FilterSidebar />
            <div className="products__list-wrapper">
              <ul className="products__list">
                {Object.entries(productsItems).map(([id, product]) => {
                  const productItemProps = { 
                    productData: product,
                  }

                  return <ProductItem key={id} {...productItemProps} />
                })}
              </ul>
              <div className="products__pages pagination-pages">
                <a className="pagination-pages__page-nav-link">
                  <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 2.28571L3.375 8L9 13.7143L7.875 16L2.54292e-07 8L7.875 9.83506e-08L9 2.28571Z"
                      fill="#FFC85E" />
                  </svg>
                </a>
                <a className="pagination-pages__page-link pagination-pages__page-link_state_active">1</a>
                <a className="pagination-pages__page-link">2</a>
                <a className="pagination-pages__page-link">3</a>
                <a className="pagination-pages__page-nav-link">
                  <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.7143L5.625 8L0 2.28571L1.125 0L9 8L1.125 16L0 13.7143Z" fill="#FFC85E" />
                  </svg>
                </a>
              </div>
              <p className="products__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum
                duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis.
                Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;