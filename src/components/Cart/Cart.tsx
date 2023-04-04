import { useAppSelector } from "../../app/hooks"
import { useState } from "react"

import CartItem from "../CartItem/CartItem"
import CartEmpty from "../CartEmpty/CartEmpty"
import ModalComplete from "../ModalComlete/ModalComplete"

import style from "./Cart.module.scss"
import buttonStyle from "../../styles/components/_button.module.scss"
import mainStyle from "../../styles/_container.module.scss"
import titleStyle from "../../styles/components/_title.module.scss"

const Cart: React.FC = () => {
  const cart = useAppSelector(state => state.cart)
  const productsItems = useAppSelector((state) => state.products.productsItems)

  const [isOrdered, setIsOrdered] = useState<boolean>(false)

  const placeOreder = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsOrdered(!isOrdered)
  }

  if (!cart.cartItems.length) {
    return (
      <CartEmpty />
    )
  }

  return (
    <section className={style.cart}>
      <div className={`${mainStyle.container} ${mainStyle.content}`}>
        {(isOrdered) && <ModalComplete setIsOrdered={setIsOrdered}/>}
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
            <button className={buttonStyle.button} onClick={placeOreder}>
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