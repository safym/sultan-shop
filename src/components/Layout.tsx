import { Outlet } from "react-router-dom"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import Breadcrumbs from "./Breadcrumbs/Breadcrumbs"
import ScrollToTop from "./ScrollTop"

import mainStyle from "../scss/_container.module.scss"

const Layout: React.FC = () => {
  return (
    <div className={mainStyle.wrapper}>
      <ScrollToTop />
      <Header />
      <div className={mainStyle.fill}>
        <Breadcrumbs />
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout