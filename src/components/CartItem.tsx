import { NavLink } from "react-router-dom";
import { Product } from "../app/slices/productsSlice";
import { CartItem as CartItemData } from "../app/slices/cartSlice"
import { useAppDispatch } from "../app/hooks";
import { removeItem } from "../app/slices/cartSlice";
import Measurement from "./Measurement/Measurement";
import Counter from "./Counter/Counter";

export interface CartItemProps {
  product: Product;
  cartItem: CartItemData;
}

const CartItem: React.FC<CartItemProps> = (props: CartItemProps) => {
  const dispatch = useAppDispatch();

  const remove = (item: Product) => {
    dispatch(removeItem({ item }))
  }

  return (
    <li className="cart__item cart-item">
      <div className="cart-item__wrapper">
        <NavLink className="cart-item__image-wrapper" to={`/products/${props.product.id}`}>
          <img className="cart-item__image" src={props.product.imageURL} alt="" />
        </NavLink>
        <div className="cart-item__info-wrapper">
          <Measurement {...props.product.measurement} />
          <NavLink className="cart-item__name" to={`/products/${props.product.id}`}>{props.product.name}</NavLink>
          <p className="cart-item__description">{props.product.description}</p>
        </div>
        <div className="cart-item__controls-wrapper">
          <span className="cart-item__divider divider divider_size_long"></span>
          <div className="cart-item__counter counter">
            <Counter product={props.product} />
          </div>
          <span className="cart-item__divider divider divider_size_long"></span>
          <div className="cart-item__total price">
            <b className="cart-item__total-value"> {(props.cartItem.total).toFixed(2)} ₸</b>
            <span className="cart-item__total-currency"></span>
          </div>
          <span className="cart-item__divider divider divider_size_long"></span>
          <button className="filter-sidebar__delete-button button button_form_rounded" onClick={() => remove(props.product)}>
            <span className="rounded-button__icon">
              <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12.625 3.25H17.3125C17.5197 3.25 17.7184 3.33231 17.8649 3.47882C18.0114 3.62534 18.0938 3.82405 18.0938 4.03125C18.0938 4.23845 18.0114 4.43716 17.8649 4.58368C17.7184 4.73019 17.5197 4.8125 17.3125 4.8125H16.4484L15.2734 15.4C15.1673 16.3555 14.7125 17.2384 13.9961 17.8795C13.2797 18.5207 12.352 18.8751 11.3906 18.875H7.60938C6.64797 18.8751 5.72029 18.5207 5.00389 17.8795C4.28749 17.2384 3.8327 16.3555 3.72656 15.4L2.55 4.8125H1.6875C1.4803 4.8125 1.28159 4.73019 1.13507 4.58368C0.98856 4.43716 0.90625 4.23845 0.90625 4.03125C0.90625 3.82405 0.98856 3.62534 1.13507 3.47882C1.28159 3.33231 1.4803 3.25 1.6875 3.25H6.375C6.375 2.4212 6.70424 1.62634 7.29029 1.04029C7.87634 0.45424 8.6712 0.125 9.5 0.125C10.3288 0.125 11.1237 0.45424 11.7097 1.04029C12.2958 1.62634 12.625 2.4212 12.625 3.25ZM9.5 1.6875C9.0856 1.6875 8.68817 1.85212 8.39515 2.14515C8.10212 2.43817 7.9375 2.8356 7.9375 3.25H11.0625C11.0625 2.8356 10.8979 2.43817 10.6049 2.14515C10.3118 1.85212 9.9144 1.6875 9.5 1.6875ZM7.15625 7.9375V14.1875C7.15625 14.3947 7.23856 14.5934 7.38507 14.7399C7.53159 14.8864 7.7303 14.9688 7.9375 14.9688C8.1447 14.9688 8.34341 14.8864 8.48993 14.7399C8.63644 14.5934 8.71875 14.3947 8.71875 14.1875V7.9375C8.71875 7.7303 8.63644 7.53159 8.48993 7.38507C8.34341 7.23856 8.1447 7.15625 7.9375 7.15625C7.7303 7.15625 7.53159 7.23856 7.38507 7.38507C7.23856 7.53159 7.15625 7.7303 7.15625 7.9375ZM11.0625 7.15625C10.8553 7.15625 10.6566 7.23856 10.5101 7.38507C10.3636 7.53159 10.2812 7.7303 10.2812 7.9375V14.1875C10.2812 14.3947 10.3636 14.5934 10.5101 14.7399C10.6566 14.8864 10.8553 14.9688 11.0625 14.9688C11.2697 14.9688 11.4684 14.8864 11.6149 14.7399C11.7614 14.5934 11.8438 14.3947 11.8438 14.1875V7.9375C11.8438 7.7303 11.7614 7.53159 11.6149 7.38507C11.4684 7.23856 11.2697 7.15625 11.0625 7.15625Z"
                  fill="white" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </li>
  );
}

export default CartItem;