import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { removeItem } from "../../app/slices/cartSlice"

function Cart() {
  const cartItems = useAppSelector(state => state.cart.cartItems);
  const productsItems = useAppSelector((state) => state.products.productsItems);

  const dispatch = useAppDispatch();

  const remove = (id: string) => {
    dispatch(removeItem({ id }))
  }

  return (
    <>
      <h1>(Cart)</h1>
      <ul>
        {Object.entries(cartItems).map(([id, quantity]) => {
          const product = productsItems[id]

          return (
            <li key={id}>
              <a>{product.name}</a>
              <a>   x{quantity}</a>
              <button onClick={() => remove(id)}>X</button>
            </li>
          )
        }
        )}
      </ul>
    </>
  );
}

export default Cart;