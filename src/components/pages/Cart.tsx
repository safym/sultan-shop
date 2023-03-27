import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { removeItem } from "../../app/slices/cartSlice"
import CartItem from "../CartItem";

const Cart: React.FC = () => {
  const cartItems = useAppSelector(state => state.cart.cartItems);
  const productsItems = useAppSelector((state) => state.products.productsItems);

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
                {Object.entries(cartItems).map(([id, quantity]) => {
                  const product = productsItems[id]

                const cartItemProps = {
                  productData: product,
                quantity: quantity
                  }

                return <CartItem key={id} {...cartItemProps} />
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;