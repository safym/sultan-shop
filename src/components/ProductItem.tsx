import { NavLink } from "react-router-dom";
import { Product } from "../app/data/api"
import AddButton from "./addButton";
import Measurement from "./Measurement";

// ----> draft
interface productItemProps {
  productData: Product,
}
// draft <-----

const ProductItem: React.FC<productItemProps> = (props: productItemProps) => {
  return (
    <li className="products__item product-item">
      <NavLink className="product-item__body" to={props.productData.id}>
        <div className="product-item__image-wrapper">
          <img className="product-item__image" src={props.productData.imageURL} alt="" />
        </div>
        <Measurement {...props.productData.measurement} />
        <p className="product-item__name">{props.productData.name}</p>
        <div className="product-item__info">
          <p className="product-item__barcode-title product-item__property-title">
            Штрихкод:
            <span className="product-item__barcode-value product-item__property-value">
              {props.productData.barcode}
            </span>
          </p>
          <p className="product-item__manufacturer-title product-item__property-title">
            Производитель:
            <span className="product-item__manufacturer-value product-item__property-value">
              {props.productData.manufacturer}
            </span>
          </p>
          <p className="product-item__brand-title product-item__property-title">
            Бренд:
            <span className="product-item__brand-value product-item__property-value">
              {props.productData.brand}
            </span>
          </p>
        </div>
      </NavLink>
      <div className="product-item__footer">
        <p className="product-item__price-wrapper">
          <span className="product-item__price-value">{props.productData.price}</span>
          <span className="product-item__price-currency">₸</span>
        </p>
        <AddButton productData={props.productData} />
      </div>
    </li>
  );
}

export default ProductItem;