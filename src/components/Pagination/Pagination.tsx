import { Product } from "../../app/slices/productsSlice"

import { PAGE_ITEMS } from "../../app/slices/paginationSlice"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { setCurrentPage } from "../../app/slices/paginationSlice"

import style from "./Pagintaion.module.scss"

const START_PAGE = 1;

interface paginationProps {
  productItems: Product[]
}

const Pagination: React.FC<paginationProps> = (props: paginationProps) => {
  const dispatch = useAppDispatch()
  const productsItems = useAppSelector((state) => state.products.productsItems)
  const currentPage = useAppSelector((state) => state.pagination.currentPage)

  const totalPages = Math.ceil(productsItems.length / PAGE_ITEMS)

  const handlePageChange = (newPage: number) => {
    if (START_PAGE - 1 < newPage && newPage <= totalPages) {
      dispatch(setCurrentPage(newPage));
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <a key={i}
          className={`${style.link} ${i === currentPage ? style.active : ''}`}
          onClick={() => handlePageChange(i)}>
          {i}
        </a>
      );
    }

    return pageNumbers;
  };

  return (
    <div className={style.pages}>
      <a className={style.control}
        onClick={() => handlePageChange(currentPage - 1)}>
        <svg width="9"
          height="16"
          viewBox="0 0 9 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M9 2.28571L3.375 8L9 13.7143L7.875 16L2.54292e-07 8L7.875 9.83506e-08L9 2.28571Z"
            fill="#FFC85E" />
        </svg>
      </a>
      {renderPageNumbers()}
      <a className={style.control}
        onClick={() => handlePageChange(currentPage + 1)}>
        <svg width="9"
          height="16"
          viewBox="0 0 9 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M0 13.7143L5.625 8L0 2.28571L1.125 0L9 8L1.125 16L0 13.7143Z" fill="#FFC85E" />
        </svg>
      </a>
    </div>
  )
}

export default Pagination