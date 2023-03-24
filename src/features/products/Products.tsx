import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getProducts } from "../../app/data/api";
import { setProducts } from "../../app/slices/productsSlice"
import ProductItem from "../components/ProductItem";

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
          <div className="products__categories-filter ">
            <a className="products__filter-card">Уход за телом</a>
            <a className="products__filter-card">Уход за руками</a>
            <a className="products__filter-card">Уход за ногами</a>
            <a className="products__filter-card">Уход за лицом</a>
            <a className="products__filter-card">Уход за волосами</a>
            <a className="products__filter-card">Средства для загара</a>
            <a className="products__filter-card">Средства для бритья</a>
            <a className="products__filter-card">Подарочные наборы</a>
            <a className="products__filter-card">Гигиеническая продукция</a>
            <a className="products__filter-card">Гигиена полости рта</a>
            <a className="products__filter-card">Бумажная продукция</a>
          </div>
          <div className="products__content">
            <div className="products__filter-sidebar filter-sidebar">
              <h2 className="filter-sidebar__title">ПОДБОР ПО ПАРАМЕТРАМ</h2>
              <div className="filter-sidebar__price filter-sidebar__section">
                <div className="filter-sidebar__subtitle">Цена <span className="filter-sidebar__currency">₸</span></div>
                <div className="filter-sidebar__price-fields-wrapper">
                  <input className="filter-sidebar__price-input" placeholder="0" type="text" />
                  <span className="filter-sidebar__dash">-</span>
                  <input className="filter-sidebar__price-input" placeholder="10000" type="text" />
                </div>
              </div>

              <div className="filter-sidebar__manufacturer filter-sidebar__section">
                <h2 className="filter-sidebar__title">Производитель</h2>
                <form className="filter-sidebar__search-field field">
                  <input placeholder="Поиск..." className="field__input" type="text" />
                  <button className="field__button-submit" type="submit">
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M16.5294 16.5294L13.0989 13.0928L16.5294 16.5294ZM15 8.5C15 10.2239 14.3152 11.8772 13.0962 13.0962C11.8772 14.3152 10.2239 15 8.5 15C6.77609 15 5.12279 14.3152 3.90381 13.0962C2.68482 11.8772 2 10.2239 2 8.5C2 6.77609 2.68482 5.12279 3.90381 3.90381C5.12279 2.68482 6.77609 2 8.5 2C10.2239 2 11.8772 2.68482 13.0962 3.90381C14.3152 5.12279 15 6.77609 15 8.5V8.5Z"
                        stroke="white" stroke-width="1.3" stroke-linecap="round" />
                    </svg>
                  </button>
                </form>
                <ul className="filter-sidebar__manufacturer-list">
                  <li className="filter-sidebar__manufacturer-item">
                    <label className="filter-sidebar__checkbox checkbox">
                      <input type="checkbox" className="checkbox__input" />
                      Nivea <span className="checkbox__counter">(56)</span>
                      <span className="checkbox__checkmark"></span>
                    </label>
                  </li>
                  <li className="filter-sidebar__manufacturer-item">
                    <label className="filter-sidebar__checkbox checkbox">
                      <input type="checkbox" className="checkbox__input" />
                      Nivea
                      <span className="checkbox__counter">(56)</span>
                      <span className="checkbox__checkmark"></span>
                    </label>
                  </li>

                </ul>
                <a className="filter-sidebar__show-hide-link show-hide-link">
                  Показать все
                  <span className="show-hide-link__direction-arrow">
                    <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.5 6L0.468911 0.750001L6.53109 0.75L3.5 6Z" fill="#3F4E65" />
                    </svg>
                  </span>
                </a>
              </div>

              <div className="filter-sidebar__controls filter-sidebar__section">
                <a className="filter-sidebar__show-button button button_width_long" href="">
                  <span className="button__text">Показать</span>
                </a>
                <a className="filter-sidebar__delete-button button" href="">
                  <span className="button__icon">
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12.625 3.25H17.3125C17.5197 3.25 17.7184 3.33231 17.8649 3.47882C18.0114 3.62534 18.0938 3.82405 18.0938 4.03125C18.0938 4.23845 18.0114 4.43716 17.8649 4.58368C17.7184 4.73019 17.5197 4.8125 17.3125 4.8125H16.4484L15.2734 15.4C15.1673 16.3555 14.7125 17.2384 13.9961 17.8795C13.2797 18.5207 12.352 18.8751 11.3906 18.875H7.60938C6.64797 18.8751 5.72029 18.5207 5.00389 17.8795C4.28749 17.2384 3.8327 16.3555 3.72656 15.4L2.55 4.8125H1.6875C1.4803 4.8125 1.28159 4.73019 1.13507 4.58368C0.98856 4.43716 0.90625 4.23845 0.90625 4.03125C0.90625 3.82405 0.98856 3.62534 1.13507 3.47882C1.28159 3.33231 1.4803 3.25 1.6875 3.25H6.375C6.375 2.4212 6.70424 1.62634 7.29029 1.04029C7.87634 0.45424 8.6712 0.125 9.5 0.125C10.3288 0.125 11.1237 0.45424 11.7097 1.04029C12.2958 1.62634 12.625 2.4212 12.625 3.25ZM9.5 1.6875C9.0856 1.6875 8.68817 1.85212 8.39515 2.14515C8.10212 2.43817 7.9375 2.8356 7.9375 3.25H11.0625C11.0625 2.8356 10.8979 2.43817 10.6049 2.14515C10.3118 1.85212 9.9144 1.6875 9.5 1.6875ZM7.15625 7.9375V14.1875C7.15625 14.3947 7.23856 14.5934 7.38507 14.7399C7.53159 14.8864 7.7303 14.9688 7.9375 14.9688C8.1447 14.9688 8.34341 14.8864 8.48993 14.7399C8.63644 14.5934 8.71875 14.3947 8.71875 14.1875V7.9375C8.71875 7.7303 8.63644 7.53159 8.48993 7.38507C8.34341 7.23856 8.1447 7.15625 7.9375 7.15625C7.7303 7.15625 7.53159 7.23856 7.38507 7.38507C7.23856 7.53159 7.15625 7.7303 7.15625 7.9375ZM11.0625 7.15625C10.8553 7.15625 10.6566 7.23856 10.5101 7.38507C10.3636 7.53159 10.2812 7.7303 10.2812 7.9375V14.1875C10.2812 14.3947 10.3636 14.5934 10.5101 14.7399C10.6566 14.8864 10.8553 14.9688 11.0625 14.9688C11.2697 14.9688 11.4684 14.8864 11.6149 14.7399C11.7614 14.5934 11.8438 14.3947 11.8438 14.1875V7.9375C11.8438 7.7303 11.7614 7.53159 11.6149 7.38507C11.4684 7.23856 11.2697 7.15625 11.0625 7.15625Z"
                        fill="white" />
                    </svg>
                  </span>
                </a>
              </div>
              <div className="filter-sidebar__borderline"></div>
              <div className="filter-sidebar__categories filter-sidebar__section">
                <ul className="filter-sidebar__categories-list">
                  <li className="filter-sidebar__category-item"><a href="#">Уход за телом</a></li>
                  <li className="filter-sidebar__category-item"><a href="#">Уход за руками</a></li>
                </ul>
              </div>
            </div>
            <div className="products__list-wrapper">
              <ul className="products__list">
                {Object.entries(productsItems).map(([id, product]) => {
                  const productItemProps = { 
                    id: id,
                    productData: product,
                  }

                  return <ProductItem {...productItemProps} />
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