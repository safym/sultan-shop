import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { sortList, sortItem, setSort } from "../../app/slices/sortSlice";

import style from "./Sort.module.scss"

const Sort: React.FC = () => {
  let [dropdownOpen, setDropdownOpen] = useState(false);

  const sort = useAppSelector((state) => state.sort);
  const dispatch = useAppDispatch();

  const sortOnClick = () => {
    setDropdownOpen(!dropdownOpen);
  }

  const optionOnClick = (item: sortItem) => {
    dispatch(setSort({ item }))
    setDropdownOpen(!dropdownOpen);
  }

  useEffect(() => {
    const onClickOutSide = (event: MouseEvent) => {
      if (event.target instanceof Element && !event.target.closest('#product-sort')) {
        setDropdownOpen(false)
      }
    }

    document.body.addEventListener('click', onClickOutSide);

    return () => document.body.removeEventListener('click', onClickOutSide);
  }, []);

  return (
    <div className={style.sort} id="product-sort">
      <span className={style.sort__title}>Сортировка:</span>
      <a className={style.sort__link} href="#">

        <span onClick={() => sortOnClick()}>{sort.title}</span>

        {/* <span className="show-hide-link__direction-arrow">
          <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.5 6L0.468911 0.750001L6.53109 0.75L3.5 6Z" fill="#3F4E65" />
          </svg>
        </span> */}
      </a>
      {dropdownOpen && (
        <div className={style.dropdown}>
          {sortList.map((item) => (
            <span className={style.dropdown__option} onClick={() => optionOnClick(item)} key={item.title}>
              {item.title}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default Sort;

