import { useParams } from "react-router-dom"
import { useAppSelector } from "../../app/hooks"

import style from "./EditProduct.module.scss"
import mainStyle from "../../scss/_container.module.scss"

const EditProduct: React.FC = () => {
  const { productId } = useParams()
  const productsItems = useAppSelector((state) => state.products.productsItems)

  let product
  if (productId) {
    product = productsItems.find((item) => item.id === productId)
  }

  if (!product) return <></>

  return (
    <section className={`${style.edit} ${mainStyle.container} ${mainStyle.content}`}>
      <div className={style.container} >
        <div className={style.body}>
          <p>{product.name}</p>
        </div>
      </div>
    </section>
  )
}

export default EditProduct