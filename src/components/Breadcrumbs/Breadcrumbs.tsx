import { NavLink } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { useAppSelector } from "../../app/hooks"

import style from "./Breadcrumbs.module.scss"

const Breadcrumbs: React.FC = () => {
  const productsItems = useAppSelector((state) => state.products.productsItems);
  const breadcrumbs = useBreadcrumbs();

  const getPathTitle = (path: string) => {
    switch (true) {
      case path === '/':
        return "Главная"
      case path === '/cart':
        return "Коризна"
      case path === '/products':
        return "Каталог"
      case path.includes('/products/'):
        const productId = path.replace('/products/', '');
        const product = productsItems.find((item) => item.id === productId)

        if (product) {
          return `${product.brand} ${product.name}`
        }
    }
  }

  if (!breadcrumbs) {
    return <></>
  }

  return (

      <div className={style.path}>
        {breadcrumbs.map(({ breadcrumb, match }, index) => (
          <span className={style.step} key={match.pathname}>
            <NavLink to={match.pathname || ""}>
              {getPathTitle(match.pathname)}
            </NavLink>
          </span>
        ))}
      </div>
    // </div>
  );
}


export default Breadcrumbs;