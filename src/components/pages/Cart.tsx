import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { removeItem } from "../../app/slices/cartSlice"
import CartItem from "../CartItem";

const Cart: React.FC = () => {
  const cart = useAppSelector(state => state.cart);
  const productsItems = useAppSelector((state) => state.products.productsItems);

  if (!cart.cartItems.length) {
    return (
      <section className="content__cart cart">
        <div className="cart__container _container">
          <div className="cart__body">
            <div className="cart__title-wrapper">
              <h1 className="cart__title title">Корзина</h1>
              <div className="cart__empty-message empty-message">
                <svg xmlns="http://www.w3.org/2000/svg" height="512px" viewBox="-3 0 512 512" width="512px" className="empty-message__image"><g><path d="m494.929688 97.148438c-9.492188-10.84375-23.023438-16.816407-38.097657-16.816407h-364.429687l-3.667969-27.5c-3.953125-29.625-24.578125-52.832031-46.957031-52.832031h-26.777344c-8.285156 0-15 6.714844-15 15s6.714844 15 15 15h26.777344c4.8125 0 15.003906 10.175781 17.21875 26.796875l42.9375 322.039063c1.890625 14.195312 9.183594 27.484374 20.535156 37.421874 8.417969 7.371094 18.367188 12.273438 28.789062 14.324219-4.246093 7.808594-6.660156 16.753907-6.660156 26.25 0 30.421875 24.75 55.167969 55.167969 55.167969s55.167969-24.746094 55.167969-55.167969c0-9.0625-2.210938-17.613281-6.101563-25.164062h78.601563c-3.890625 7.550781-6.101563 16.101562-6.101563 25.164062 0 30.421875 24.75 55.167969 55.167969 55.167969s55.167969-24.746094 55.167969-55.167969c0-9.0625-2.210938-17.613281-6.101563-25.164062h39.300782c8.28125 0 15-6.71875 15-15 0-8.285157-6.71875-15-15-15h-302.589844c-14.65625 0-28.671875-12.273438-30.609375-26.800781l-3.136719-23.535157h116.746094c.003906 0 .007812.003907.011718.003907.003907 0 .007813-.003907.015626-.003907h96.367187c.003906 0 .007813.003907.015625.003907.003906 0 .003906-.003907.007812-.003907h83.003907c14.320312 0 28.457031-5.472656 39.808593-15.40625 11.351563-9.9375 18.644532-23.230469 20.535157-37.425781l21.515625-161.367188c1.992187-14.941406-2.136719-29.140624-11.628906-39.984374zm-269.996094 359.683593c0 13.878907-11.289063 25.167969-25.167969 25.167969-13.875 0-25.167969-11.289062-25.167969-25.167969 0-13.875 11.292969-25.164062 25.167969-25.164062 13.878906 0 25.167969 11.289062 25.167969 25.164062zm176.734375 0c0 13.878907-11.289063 25.167969-25.167969 25.167969s-25.167969-11.289062-25.167969-25.167969c0-13.875 11.289063-25.164062 25.167969-25.164062s25.167969 11.289062 25.167969 25.164062zm70.6875-339.921875c3.714843 4.242188 5.300781 10.011719 4.464843 16.253906l-9.019531 67.667969h-102.0625l6.03125-90.5h85.0625c6.300781 0 11.8125 2.335938 15.523438 6.578125zm-213.019531 204.421875-6.035157-90.5h80.371094l-6.035156 90.5zm-8.035157-120.5-6.03125-90.5h96.433594l-6.03125 90.5zm-36.097656-90.5 6.03125 90.5h-112.769531l-12.066406-90.5zm-102.738281 120.5h110.769531l6.035156 90.5h-104.738281zm312.234375 90.5h-66.996094l6.035156-90.5h100.0625l-8.492187 63.703125c-1.9375 14.527344-15.957032 26.796875-30.609375 26.796875zm0 0" data-original="#000000" class="active-path" data-old_color="#000000" fill="#FFB41B" /></g> </svg>
                <h2 className="empty-message__title">Пусто :(</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="content__cart cart">
      <div className="cart__container _container">
        <div className="cart__body">
          <div className="cart__title-wrapper">
            <h1 className="cart__title title">Корзина</h1>
          </div>
          <div className="cart__content">
            <div className="cart__list-wrapper">
              <ul className="cart__list">
                {cart.cartItems.map((item) => {
                  const productId = item.id;
                  const product = productsItems[productId];

                  const cartItemProps = {
                    product: product,
                    cartItem: item
                  }

                  return <CartItem key={productId} {...cartItemProps} />
                })}
              </ul>
            </div>
            <div className="cart__total-wrapper">
              <button className="cart__order-button button button_size_l">
                <span className="button__text">Оформить</span>
              </button>
              <div className="cart__total price">
                <b className="cart__total-value"> {cart.totalPrice} ₸</b>
                <span className="cart__total-currency"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;