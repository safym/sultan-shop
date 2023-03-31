import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { removeCategory, setCategory } from "../../app/slices/filterSlice";
import { getCateroryList } from "../../utils/getCateroryList";

import style from "./FilterCategories.module.scss"

const FilterCategories: React.FC = () => {
  const dispatch = useAppDispatch();
  
  const productsItems = useAppSelector((state) => state.products.productsItems);
  const filters = useAppSelector((state) => state.filter);
  const categoryList = getCateroryList(productsItems)

  const categoryOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const category = event.target.value

    if (event.target.checked) {
      dispatch(setCategory(category))
    } else {
      dispatch(removeCategory(category))
    }
  }

  return (
    <div className={style.filterCategories}>
      {categoryList.map((item, index) => {
        const id = `categoryItem_${index}`
        console.log(filters.category === item)
        const checked = filters.category === item;

        return (
          <span key={`category_${index}`} 
            className={`${style.card}  ${(checked) ? style.checked : ''}`} >
            <label key={`label_${index}`} 
              className={style.label}
              htmlFor={id}>
              {item}
            </label>
            <input key={`input_${index}`}
              value={item} name="category"
              onChange={categoryOnChange}
              id={id}
              className={style.input}
              type="checkbox"
              checked={filters.category === item} />
          </span >
        )
      })}
    </div>
  );
}

export default FilterCategories;