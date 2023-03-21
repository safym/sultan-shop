import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { removeItem } from "../../app/slices/cartSlice"

function Cart() {
  const cartItems = useAppSelector(state => state.cartItems.cartItems);

  const dispatch = useAppDispatch();

  const remove = (id: string) => {
    dispatch(removeItem({ id }))
  }

  return (
    <>
      <h1>(Cart)</h1>
      <ul>
        {Object.entries(cartItems).map(([id, quantity]) => (
          <li key={id}>
            <a>id: {id} x{quantity}</a>
            <button onClick={() => remove(id)}>X</button>
          </li>
        )
        )}
      </ul>
    </>
  );
}

export default Cart;