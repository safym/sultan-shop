import Search from "../Search/Search"

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useEffect, useState } from "react";
import { removeManufacturer, setManufacturer } from "../../app/slices/filterSlice";
import { getManufacturersList, manufacturerItem } from "../../utils/getManufacturersList";

import style from "./_manufacturerList.module.scss"
import checkboxStyle from "../../styles/components/_checkbox.module.scss"

const ManufacturerList: React.FC = () => {
  const productsItems = useAppSelector((state) => state.products.productsItems)
  const filters = useAppSelector((state) => state.filter)

  const [manufacturersList, setManufacturersList] = useState<Array<manufacturerItem>>([])
  const [filteredManufacturers, setFilteredManufacturers] = useState<Array<manufacturerItem>>([])
  const [substring, setSubstring] = useState<string>('')

  const dispatch = useAppDispatch()

  useEffect(() => {
    setManufacturersList(getManufacturersList(productsItems));
    setFilteredManufacturers(getManufacturersList(productsItems));
  }, [productsItems])

  const manufacturerOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const manufacturer = event.target.value

    if (event.target.checked) {
      dispatch(setManufacturer([manufacturer]))
    } else {
      dispatch(removeManufacturer(manufacturer))
    }
  }

  const filterMnufacturers = (event: any) => {
    const filtered = manufacturersList.filter(item => {
      return item.manufacturer.toUpperCase().includes(event.target.value.toUpperCase())
    });

    setFilteredManufacturers(filtered)
    setSubstring(event.target.value)
  }

  return (
    <div className={style.filterManufacturer}>
      <h2 className={style.title}>Производитель</h2>
      <Search onChange={filterMnufacturers} substring={substring} />
      <ul className={style.list}>
        {filteredManufacturers.map((item, index) => {
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
                <span className={checkboxStyle.counter}>({item.count})</span>
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
    </div>)
}

export default ManufacturerList