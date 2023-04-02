import { useAppSelector } from "../../app/hooks";
import ProductItemSkeleton from "../ProductItem/ProductItemSkeleton";
import style from "./Home.module.scss"

const pageItemsCount = 15;

const ProductsSkeleton: React.FC = () => {
  const isLoading = useAppSelector((state) => state.loading.isLoading)

  const skeletons = [];

  if (isLoading) {
    for (let index = 0; index < pageItemsCount; index++) {
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