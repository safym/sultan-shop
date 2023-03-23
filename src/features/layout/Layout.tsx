import { Outlet } from "react-router-dom";
import Header from "../header/Header";

const Layout: React.FC = () =>  {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;