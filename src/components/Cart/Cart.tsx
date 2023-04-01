import { useAppSelector } from "../../app/hooks";
import CartItem from "../CartItem";

import buttonStyle from "../../scss/components/_button.module.scss";
import CartEmpty from "../CartEmpty/CartEmpty";

import style from "./Cart.module.scss"
import mainStyle from "../../scss/_container.module.scss"
import titleStyle from "../../scss/components/_title.module.scss"

const Cart: React.FC = () => {
  const cart = useAppSelector(state => state.cart)
  const productsItems = useAppSelector((state) => state.products.productsItems)

  if (!cart.cartItems.length) {
    return (
      <CartEmpty />
    )
  }

  return (
    <section className={style.cart}>
      <div className={`${mainStyle.container} ${mainStyle.content}`}>
        <div className={style.body}>
          <h1 className={titleStyle.title}>Корзина</h1>

          <ul className={style.list}>
            {cart.cartItems.map((item) => {
              const productId = item.id
              const product = productsItems.find((item) => item.id === productId)

              if (product) {
                const cartItemProps = {
                  product: product,
                  cartItem: item
                }

                return <CartItem key={productId} {...cartItemProps} />
              }
            })}
          </ul>

          <div className={style.total}>
            <button className={buttonStyle.button}>
              <span>Оформить</span>
            </button>
            <div className={style.price}>
              <b className="cart__total-value">{cart.totalPrice.toFixed(2)} ₸</b>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Cart