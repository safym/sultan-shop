import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { sortList, sortItem, setSort } from "../../app/slices/sortSlice"

import style from "./_sort.module.scss"

const Sort: React.FC = () => {
  let [dropdownOpen, setDropdownOpen] = useState(false)

  const sort = useAppSelector((state) => state.sort)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const onClickOutSide = (event: MouseEvent) => {
      if (event.target instanceof Element && !event.target.closest('#product-sort')) {
        setDropdownOpen(false)
      }
    }

    document.body.addEventListener('click', onClickOutSide)

    return () => document.body.removeEventListener('click', onClickOutSide)
  }, [])

  const sortOnClick = () => {
    setDropdownOpen(!dropdownOpen)
  }

  const optionOnClick = (item: sortItem) => {
    dispatch(setSort({ item }))
    setDropdownOpen(!dropdownOpen)
  }

  return (
    <div className={style.sort} id="product-sort">
      <span className={style.title}>Сортировка:</span>
      <a className={style.link}>
        <span onClick={() => sortOnClick()}>{sort.title}</span>
      </a>
      {dropdownOpen && (
        <div className={style.dropdown}>
          {sortList.map((item) => (
            <span className={style.option} onClick={() => optionOnClick(item)} key={item.title}>
              {item.title}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

export default Sort

