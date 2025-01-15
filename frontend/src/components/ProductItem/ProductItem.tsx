import { NavLink } from "react-router-dom";
import { Product } from "../../app/slices/productsSlice";

import AddButton from "../AddButton/AddButton";
import Measurement from "../Measurement/Measurement";

import style from "./_productItem.module.scss";

interface productItemProps {
  productData: Product;
}

const ProductItem: React.FC<productItemProps> = (props: productItemProps) => {
  return (
    <li className={`${style.item} product-item`} data-testid="product-item">
      <NavLink className={style.body} to={props.productData.id}>
        <div className={style.imageWrapper}>
          <img
            className={style.image}
            src={props.productData.imageURL}
            alt={props.productData.name}
          />
        </div>
        <Measurement {...props.productData.measurement} />
        <p className={style.name}>
          <b data-testid="item-brand">{props.productData.brand}</b>{" "}
          {props.productData.name}
        </p>
        <div className={style.info}>
          <p className={style.property}>
            Штрихкод:
            <span className={style.value}>{props.productData.barcode}</span>
          </p>
          <p className={style.property}>
            Производитель:
            <span className={style.value}>
              {props.productData.manufacturer}
            </span>
          </p>
          <p className={style.property}>
            Бренд:
            <span className={style.value} data-testid="description-brand">{props.productData.brand}</span>
          </p>
        </div>
      </NavLink>
      <div className={style.footer}>
        <p className={style.price}>
          <span data-testid="item-price">{props.productData.price}</span>  ₸
        </p>
        <AddButton productData={props.productData} />
      </div>
    </li>
  );
};

export default ProductItem;
