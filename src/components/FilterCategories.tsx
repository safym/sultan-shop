import { useAppSelector } from "../app/hooks";
import { getCateroryList } from "../utils/getCateroryList";

const FilterCategories: React.FC = () => {
  const productsItems = useAppSelector((state) => state.products.productsItems);
  const categoryList = getCateroryList(productsItems)

  return (
    <div className="products__categories-filter ">
      {categoryList.map((item, index) => <a key={index} className="products__filter-card">{item}</a>)}
    </div>
  );
}

export default FilterCategories;