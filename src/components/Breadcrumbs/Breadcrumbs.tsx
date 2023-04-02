import { NavLink, useParams } from "react-router-dom"
import useBreadcrumbs from "use-react-router-breadcrumbs"
import { useAppSelector } from "../../app/hooks"

import style from "./Breadcrumbs.module.scss"
import mainStyle from "../../scss/_container.module.scss"
import ProductItem from "../ProductItem/ProductItem"

const Breadcrumbs: React.FC = () => {
  const productsItems = useAppSelector((state) => state.products.productsItems)
  const breadcrumbs = useBreadcrumbs()

  let { productId } = useParams()

  const getPathTitle = (path: string) => {
    switch (true) {
      case path === '/':
        return "Главная"
      case path === '/cart':
        return "Коризна"
      case path === '/products':
        return "Каталог"
      case path.includes('/edit'):
        return "Редактирование"
      case path.includes('/products/'):
        if (!productId) break
        
        const product = productsItems.find((item) => item.id === productId)

        if (product) return `${product.brand} ${product.name}`
    }
  }

  if (!breadcrumbs || breadcrumbs.length === 1) {
    return <></>
  }

  return (
    <div className={`${style.path} ${mainStyle.container} ${mainStyle.content}`}>
      {breadcrumbs.map(({ breadcrumb, match }, index) => {

        return (
          <span className={style.step} key={match.pathname}>
            <NavLink to={match.pathname || ""}>
              {getPathTitle(match.pathname)}
            </NavLink>
          </span>
        )
      })}
    </div>
    // </div>
  )
}


export default Breadcrumbs