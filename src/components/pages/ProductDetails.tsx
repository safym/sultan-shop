import { useParams } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
const ProductDetails: React.FC = () => {

  const { productId } = useParams();
  const productsItems = useAppSelector((state) => state.products.productsItems);
  // const item = productsItems.find((item) => item.id === productId)
  console.log(productsItems)


  return (
    <section className="content__product-details product-details">
      <div className="product-details__container _container">
        <div className="product-details__body">
          <div className="products__content">
            <img src="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;