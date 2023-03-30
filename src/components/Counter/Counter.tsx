import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addItem, minusItem, removeItem } from "../../app/slices/cartSlice";
import { Product } from "../../app/slices/productsSlice";

import counterStyle from "./Counter.module.scss"

interface CounterProductProps {
  product: Product;
}

const Counter: React.FC<CounterProductProps> = (props: CounterProductProps) => {
  const cart = useAppSelector(state => state.cart);
  const addedItem = cart.cartItems.find((item) => item.id === props.product.id)

  const dispatch = useAppDispatch();
  
  const remove = (item: Product) => {
    dispatch(removeItem({ item }))
  }

  const countPlus = (item: Product) => {
    dispatch(addItem({ item }))
  }

  const countMinus = (item: Product) => {
    if (addedItem?.count === 1) {
      remove(props.product)
    } else {
      dispatch(minusItem({ item }))
    }
  };

  if (!addedItem?.count) {
    return (
      <div className={counterStyle.mock}></div>
    );
  }
  
  return (
    <div className={counterStyle.counter}>
      <button className={counterStyle.counter__button} onClick={() => countMinus(props.product)}>-</button>
      <b className={counterStyle.value}>{addedItem?.count}</b>
      <button className={counterStyle.counter__button} onClick={() => countPlus(props.product)}>+</button>
    </div>
  );
}

export default Counter;