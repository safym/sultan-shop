import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { getCateroryList } from "../../utils/getCateroryList"
import { setMaxPrice, setMinPrice, setManufacturer, removeManufacturer, setCategory, removeCategory, removeFilters } from "../../app/slices/filterSlice"
import { useState } from "react"

import Search from "../Search/Search"

import style from "./FilterSidebar.module.scss"
import expandedBlockStyle from "../../scss/components/_expanded-block.module.scss"
import buttonStyle from "../../scss/components/_button.module.scss"
import checkboxStyle from "../../scss/components/_checkbox.module.scss"


interface manufacturerItem {
  manufacturer: string
  countItems: 1
}

const FilterSidebar: React.FC = () => {
  const [filteredManufacturers, setFilteredManufacturers] = useState<Array<manufacturerItem>>([])
  const [filterIsOpen, setFilterIsOpen] = useState(true)

  const dispatch = useAppDispatch()
  const productsItems = useAppSelector((state) => state.products.productsItems)
  const filters = useAppSelector((state) => state.filter)

  const categoryList = getCateroryList(productsItems)

  const manufacturersList = productsItems.reduce(function (result: Array<manufacturerItem>, value) {
    const isAdded = result.find((item) => item.manufacturer === value.manufacturer)

    if (!isAdded) {
      result.push({ manufacturer: value.manufacturer, countItems: 1 })
    } else {
      isAdded.countItems++
    }
    return result
  }, [])

  const minOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const price = event.target.value.replace(/\D/g, '')

    dispatch(setMinPrice(+price))
  }

  const maxOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const price = event.target.value.replace(/\D/g, '')

    dispatch(setMaxPrice(+price))
  }

  const manufacturerOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const manufacturer = event.target.value

    if (event.target.checked) {
      dispatch(setManufacturer([manufacturer]))
    } else {
      dispatch(removeManufacturer(manufacturer))
    }
  }

  const categoryOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const category = event.target.value

    if (event.target.checked) {
      dispatch(setCategory(category))
    } else {
      dispatch(removeCategory(category))
    }
  }

  const filterMnufacturers = (event: React.ChangeEvent<HTMLInputElement>) => {
    const filterSubString = event.target.value

    console.log(filterSubString)

    if (filterSubString) {
      console.log(manufacturersList)

      const filtered = manufacturersList.filter(item => {
        return item.manufacturer.toUpperCase().includes(filterSubString.toUpperCase())
      });

      setFilteredManufacturers(filtered)
      console.log(filtered)
    }
  }

  const removeFiltersOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(removeFilters())
  }

  const toggleFilterInOpen = () => {
    setFilterIsOpen(!filterIsOpen)
  }

  return (
    <div className={style.filter}>
      <div className={expandedBlockStyle.expandedBlock}>
        <div className={expandedBlockStyle.title} onClick={toggleFilterInOpen}>
          <h2 className={style.title}>ПОДБОР ПО ПАРАМЕТРАМ</h2>
          <span className={filterIsOpen ? expandedBlockStyle.arrowUp : expandedBlockStyle.arrowDown} />
        </div>
        <div className={`${expandedBlockStyle.list} ${filterIsOpen ? expandedBlockStyle.open : ""}`}>
          <div className={style.price}>
            <div className={style.subtitle}>
              Цена
              <span className={style.currency}>₸</span>
            </div>
            <div className={style.priceWrapper}>
              <input className={style.priceInput}
                placeholder="0"
                value={filters.minPrice}
                onChange={minOnChange}
                type="text" />
              <span className={style.dash}>-</span>
              <input className={style.priceInput}
                placeholder="10000"
                value={filters.maxPrice}
                onChange={maxOnChange}
                type="text" />
            </div>
          </div>
          <div className={style.manufacturer}>
            <h2 className={style.title}>Производитель</h2>
            <Search onChange={filterMnufacturers} />
            <ul className={style.list}>
              {manufacturersList.map((item, index) => {
                const checked = filters.manufacturers.includes(item.manufacturer)

                return (
                  <li className={`${style.listItem} ${checkboxStyle.checkbox}`}
                    key={`Manufacturer_${index}`}>
                    <label className={checkboxStyle.label}>
                      <input className={checkboxStyle.input}
                        value={item.manufacturer} onChange={manufacturerOnChange}
                        checked={checked}
                        type="checkbox" />
                      <span className={checkboxStyle.text}>{item.manufacturer}</span>
                      <span className={checkboxStyle.counter}>({item.countItems})</span>
                    </label>
                  </li>
                )
              })}
            </ul>
            <a className={style.expandLink}>
              Показать все
              <span className={style.expandLink__arrow}>
                <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.5 6L0.468911 0.750001L6.53109 0.75L3.5 6Z" fill="#3F4E65" />
                </svg>
              </span>
            </a>
          </div>
          <div className={style.controls}>
            <button className={buttonStyle.button}>
              <span>Показать</span>
            </button>
            <button className={buttonStyle.roundedButton}
              onClick={removeFiltersOnClick}>
              <span>
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12.625 3.25H17.3125C17.5197 3.25 17.7184 3.33231 17.8649 3.47882C18.0114 3.62534 18.0938 3.82405 18.0938 4.03125C18.0938 4.23845 18.0114 4.43716 17.8649 4.58368C17.7184 4.73019 17.5197 4.8125 17.3125 4.8125H16.4484L15.2734 15.4C15.1673 16.3555 14.7125 17.2384 13.9961 17.8795C13.2797 18.5207 12.352 18.8751 11.3906 18.875H7.60938C6.64797 18.8751 5.72029 18.5207 5.00389 17.8795C4.28749 17.2384 3.8327 16.3555 3.72656 15.4L2.55 4.8125H1.6875C1.4803 4.8125 1.28159 4.73019 1.13507 4.58368C0.98856 4.43716 0.90625 4.23845 0.90625 4.03125C0.90625 3.82405 0.98856 3.62534 1.13507 3.47882C1.28159 3.33231 1.4803 3.25 1.6875 3.25H6.375C6.375 2.4212 6.70424 1.62634 7.29029 1.04029C7.87634 0.45424 8.6712 0.125 9.5 0.125C10.3288 0.125 11.1237 0.45424 11.7097 1.04029C12.2958 1.62634 12.625 2.4212 12.625 3.25ZM9.5 1.6875C9.0856 1.6875 8.68817 1.85212 8.39515 2.14515C8.10212 2.43817 7.9375 2.8356 7.9375 3.25H11.0625C11.0625 2.8356 10.8979 2.43817 10.6049 2.14515C10.3118 1.85212 9.9144 1.6875 9.5 1.6875ZM7.15625 7.9375V14.1875C7.15625 14.3947 7.23856 14.5934 7.38507 14.7399C7.53159 14.8864 7.7303 14.9688 7.9375 14.9688C8.1447 14.9688 8.34341 14.8864 8.48993 14.7399C8.63644 14.5934 8.71875 14.3947 8.71875 14.1875V7.9375C8.71875 7.7303 8.63644 7.53159 8.48993 7.38507C8.34341 7.23856 8.1447 7.15625 7.9375 7.15625C7.7303 7.15625 7.53159 7.23856 7.38507 7.38507C7.23856 7.53159 7.15625 7.7303 7.15625 7.9375ZM11.0625 7.15625C10.8553 7.15625 10.6566 7.23856 10.5101 7.38507C10.3636 7.53159 10.2812 7.7303 10.2812 7.9375V14.1875C10.2812 14.3947 10.3636 14.5934 10.5101 14.7399C10.6566 14.8864 10.8553 14.9688 11.0625 14.9688C11.2697 14.9688 11.4684 14.8864 11.6149 14.7399C11.7614 14.5934 11.8438 14.3947 11.8438 14.1875V7.9375C11.8438 7.7303 11.7614 7.53159 11.6149 7.38507C11.4684 7.23856 11.2697 7.15625 11.0625 7.15625Z"
                    fill="white" />
                </svg>
              </span>
            </button>
          </div>
          <div className={style.borderline}></div>
          <div className={style.list}>
            <form className={`${style.list} ${style.categoriesList}`}>
              {categoryList.map((item, index) => {
                const checked = filters.category === item

                return (
                  <span className={`${style.listItem} ${checkboxStyle.checkbox}`}
                    key={`Category_${index}`}>
                    <label className={`${checkboxStyle.label} ${(checked) ? checkboxStyle.checked : ''}`}>
                      {item}
                      <input className={`${checkboxStyle.input} ${checkboxStyle.hidden}`}
                        value={item} name="category"
                        onChange={categoryOnChange}
                        checked={checked}
                        type="checkbox" />
                    </label>
                  </span >
                )
              })}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterSidebar