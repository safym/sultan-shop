import { useAppSelector } from "../../app/hooks";
import CartItem from "../CartItem";

import buttonStyle from "../../scss/components/_button.module.scss";
import CartEmpty from "../CartEmpty/CartEmpty";

const Cart: React.FC = () => {
  const cart = useAppSelector(state => state.cart);
  const productsItems = useAppSelector((state) => state.products.productsItems);

  if (!cart.cartItems.length) {
    return (
      <CartEmpty />
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
                  const product = productsItems.find((item) => item.id === productId);
                  
                  if (product) {
                    const cartItemProps = {
                      product: product,
                      cartItem: item
                    }
  
                    return <CartItem key={productId} {...cartItemProps} />
                  }
                })}
              </ul>
            </div>
            <div className="cart__total-wrapper">
              <button className={buttonStyle.button}>
                <span>Оформить</span>
              </button>
              <div className="cart__total price">
                <b className="cart__total-value">{cart.totalPrice.toFixed(2)} ₸</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;