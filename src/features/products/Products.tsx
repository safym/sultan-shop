import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getProducts } from "../../app/data/api";
import { addItem } from "../../app/slices/cartSlice"
import { setProducts } from "../../app/slices/productsSlice"

const Products: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    getProducts().then((products) => {
      dispatch(setProducts(products));
    });
  }, []);

  const productsItems = useAppSelector((state) => state.products.productsItems);

  const add = (item: object) => {
    dispatch(addItem({item}))
  }

  return (
    <>
      <h1>(Products)</h1>
      <ul>
        {Object.entries(productsItems).map(([id, product]) => (
          <li key={id}>
            <img src={product.imageURL} alt={product.name} />
            
            <pre>
              <a>{product.name}</a>
            </pre>

            <pre>
              <p>{product.measurementValue} {product.measurementType}</p>
            </pre>
            
            <button onClick={() => add(product)}>Add</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Products;