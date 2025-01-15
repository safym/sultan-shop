import { useAppSelector } from "../../app/hooks";
import ProductItemSkeleton from "../ProductItem/ProductItemSkeleton";

import { PAGE_ITEMS } from "../../app/slices/paginationSlice"

const ProductsSkeleton: React.FC = () => {
  const isLoading = useAppSelector((state) => state.loading.isLoading)

  const renderSkeletons = () => {
    const skeletons = [];

    if (isLoading) {
      for (let index = 0; index < PAGE_ITEMS; index++) {
        skeletons.push(<ProductItemSkeleton key={index}/>)
      }
    }

    return skeletons;
  };

  return (
    <>
    {renderSkeletons()}
    </>
  )
}

export default ProductsSkeleton