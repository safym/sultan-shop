import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Breadcrumbs from "./Breadcrumbs";

const Layout: React.FC = () => {
  return (
    <div className="main-wrapper">
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