import { NavLink } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { useAppSelector } from "../app/hooks";

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
        const product = productsItems[productId];

        if (product) {
          return `${product.brand} ${product.name}`
        }
    }
  }

  if (!breadcrumbs) {
    return
  }

  return (
    <header className="content__page-header page-header">
      <div className="page-header__container _container">
        <div className="page-header__path path">

          {breadcrumbs.map(({ breadcrumb, match }, index) => (
            <span className="path__step" key={match.pathname}>
              <NavLink to={match.pathname || ""}>{getPathTitle(match.pathname)}</NavLink>
              {index < breadcrumbs.length - 1 && <span className="path__divider divider divider_size_long"></span>}
            </span>
          ))}
        </div>

      </div>
    </header>
  );
}


export default Breadcrumbs;