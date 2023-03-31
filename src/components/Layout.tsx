import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer/Footer";
import Breadcrumbs from "./Breadcrumbs/Breadcrumbs";
import ScrollToTop from "./ScrollTop";

import mainStyle from "../scss/_container.module.scss"

const Layout: React.FC = () => {
  return (
    <div className="main-wrapper">
      <ScrollToTop />
      <Header />
      <div className={mainStyle.container}>
        <Breadcrumbs />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;