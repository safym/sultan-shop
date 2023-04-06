import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { removeCategory, setCategory } from "../../app/slices/filterSlice"
import { getCateroryList } from "../../utils/getCateroryList"

import style from "./_filterCategories.module.scss"

const FilterCategories: React.FC = () => {
  const dispatch = useAppDispatch()

  const productsItems = useAppSelector((state) => state.products.productsItems)
  const filters = useAppSelector((state) => state.filter)
  const categoryList = getCateroryList(productsItems)

  const categoryOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const category = event.target.value

    if (event.target.checked) {
      dispatch(setCategory(category))
    } else {
      console.log(category)
      dispatch(removeCategory(category))
    }
  }

  return (
    <div className={style.filterCategories}>
      {categoryList.map((item, index) => {
        const key = `categoryItem_${index}`
        const checked = filters.category === item

        return (
          <span key={key}
            className={`${style.card}  ${(checked) ? style.checked : ''}`} >
            <label className={style.label}>
              {item}
              <input className={style.input}
                value={item} name="category"
                onChange={categoryOnChange}
                checked={filters.category === item}
                type="checkbox" />
            </label>
          </span >
        )
      })}
    </div>
  )
}

export default FilterCategories