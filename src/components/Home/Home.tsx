import { NavLink } from "react-router-dom"

import style from "./Home.module.scss"
import mainStyle from "../../styles/_container.module.scss"
import buttonStyle from "../../styles/components/_button.module.scss"

const consultant = new URL("../../assets/img/banner.png", import.meta.url).href;

const Home: React.FC = () => {
  return (
    <div className={style.home}>
      <img className={style.image} src={consultant} alt="consultant" />
      <div className={`${style.wrapper} ${mainStyle.content} ${mainStyle.container}`}>
        <h1 className={style.title}>
          Бытовая химия,
          косметика
          и хозтовары
        </h1>
        <h2 className={style.subtitle}>оптом по Кокшетау и области</h2>
        <NavLink to="/products" className={`app-header__action ${buttonStyle.button}`}>
          <span>Каталог</span>
          <span className={buttonStyle.icon}>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0.5 2C0.5 1.17157 1.17157 0.5 2 0.5H6C6.27614 0.5 6.5 0.723858 6.5 1V6C6.5 6.27614 6.27614 6.5 6 6.5H1C0.723858 6.5 0.5 6.27614 0.5 6V2Z"
                stroke="white" />
              <path
                d="M8.5 1C8.5 0.723858 8.72386 0.5 9 0.5H13C13.8284 0.5 14.5 1.17157 14.5 2V6C14.5 6.27614 14.2761 6.5 14 6.5H9C8.72386 6.5 8.5 6.27614 8.5 6V1Z"
                stroke="white" />
              <path
                d="M8.5 9C8.5 8.72386 8.72386 8.5 9 8.5H14C14.2761 8.5 14.5 8.72386 14.5 9V13C14.5 13.8284 13.8284 14.5 13 14.5H9C8.72386 14.5 8.5 14.2761 8.5 14V9Z"
                stroke="white" />
              <path
                d="M0.5 9C0.5 8.72386 0.723858 8.5 1 8.5H6C6.27614 8.5 6.5 8.72386 6.5 9V14C6.5 14.2761 6.27614 14.5 6 14.5H2C1.17157 14.5 0.5 13.8284 0.5 13V9Z"
                stroke="white" />
            </svg>
          </span>
        </NavLink>
      </div>
    </div>
  )
}

export default Home