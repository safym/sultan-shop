import { getProducts } from "../../app/data/api";
import { useDispatch } from "react-redux"
import { useAppDispatch } from "../../app/hooks";
import { addItem } from "../../app/slices/cartSlice"
 
//todo: сделать api
import data from '../../app/data/products.json';

function Products() {
  const dispatch = useAppDispatch();

  const add = (item: object) => {
    dispatch(addItem({item}))
  }

  return (
    <>
      <h1>(Products)</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <img src={item.imageURL} alt={item.name} />
            
            <pre>
              <a>{item.name}</a>
            </pre>

            <pre>
              <p>{item.measurementValue} {item.measurementType}</p>
            </pre>
            
            <button onClick={() => add(item)}>Add</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Products;