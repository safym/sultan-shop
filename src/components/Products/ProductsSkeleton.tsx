import { useAppSelector } from "../../app/hooks";
import ProductItemSkeleton from "../ProductItem/ProductItemSkeleton";

import { PAGE_ITEMS } from "../../utils/pagination";

const ProductsSkeleton: React.FC = () => {
  const isLoading = useAppSelector((state) => state.loading.isLoading)

  const skeletons = [];

  if (isLoading) {
    for (let index = 0; index < PAGE_ITEMS; index++) {
      skeletons.push(<ProductItemSkeleton />)
    }
  }

  return (
    <>
    {skeletons}
    </>
  )
}

export default ProductsSkeleton