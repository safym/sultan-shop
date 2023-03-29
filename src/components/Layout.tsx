import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer/Footer";
import Breadcrumbs from "./Breadcrumbs";
import ScrollToTop from "./ScrollTop";

const Layout: React.FC = () => {
  return (
    <div className="main-wrapper">
      <ScrollToTop />
      <Header />
      <div className="content">
        <Breadcrumbs />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;