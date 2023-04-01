import { useParams } from "react-router-dom"
import { useAppSelector } from "../../app/hooks"

import { Product } from "../../app/slices/productsSlice"

import style from "./AdminPage.module.scss"
import mainStyle from "../../scss/_container.module.scss"
import titleStyle from "../../scss/components/_title.module.scss"
import { useState } from "react"

const AdminPage: React.FC = () => {
  const [isEdit, setIsEdit] = useState(false);

  const productsItems = useAppSelector((state) => state.products.productsItems)

  return (
    <section className={`${style.edit} ${mainStyle.container} ${mainStyle.content}`}>
      <div className={style.container} >
        <h1 className={titleStyle.title}>Управление товарами</h1>
        <div className={style.body}>
          <form className={style.form}>
            Выберите режим:
            <div> 
            <label>Добавление
            <input type="radio" name="mode" value="edit"/>
            </label>
            <label>Изменение
            <input type="radio" name="mode" value="edit"/>
            </label>
            <label>Удаление
            <input type="radio" name="mode" value="edit"/>
            </label>
            </div>

            <label>Выберите товар
              <select className={style.styledSelect}>
                {
                  (isEdit 
                    && productsItems.map((item) => (
                    <option>{item.name}</option>
                  ))) 


                }
              </select>
            </label>
            <label className={style.label}>id:
              <input className={style.styledInput} type="text" defaultValue={''} />
            </label>
            <label className={style.label}>Наименование:
              <input className={style.styledInput} type="text" defaultValue={''} />
            </label>
            <label className={style.label}>Цена:
              <input className={style.styledInput} type="text" defaultValue={''} />
            </label>
            <label className={style.label}>Описание:
              <textarea className={style.styledInput} defaultValue={''} />
            </label>
            <label className={style.label}>URL изображения:
              <input className={style.styledInput} type="text" defaultValue={''} />
            </label>
            <label className={style.label}>Измерение: type value
              <input className={style.styledInput} type="text" defaultValue={''} />
            </label>
            <label className={style.label}>Штрихкод:
              <input className={style.styledInput} type="text" defaultValue={''} />
            </label>
            <label className={style.label}>Производитель:
              <input className={style.styledInput} type="text" defaultValue={''} />
            </label>
            <label className={style.label}>Бренд:
              <input className={style.styledInput} type="text" defaultValue={''} />
            </label>
            <label className={style.label}>Категория/Категории:
              <input className={style.styledInput} type="text" defaultValue={''} />
            </label>
          </form>
        </div>
      </div>
    </section>
  )
}

export default AdminPage