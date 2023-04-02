import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"

import { Product } from "../../app/slices/productsSlice"

import style from "./AdminPage.module.scss"
import mainStyle from "../../scss/_container.module.scss"
import titleStyle from "../../scss/components/_title.module.scss"
import buttonStyle from "../../scss/components/_button.module.scss"
import { createProduct, deleteProduct, editProduct } from "../../app/data/api"
import { setRelevant } from "../../app/slices/relevantSlice"

export interface formData {
  id?: string;
  name?: string;
  price?: number;
  description?: string;
  imageURL?: string;
  measurement?: {
    type?: string;
    value?: string;
  };
  barcode?: string;
  manufacturer?: string;
  brand?: string;
  category?: Array<string>
};

const AdminPage: React.FC = () => {
  const dispatch = useAppDispatch()

  const productsItems = useAppSelector((state) => state.products.productsItems)
  const initialProductData: Product = {
    id: '',
    name: '',
    price: 0,
    description: '',
    imageURL: '',
    measurement: {
      type: '',
      value: '',
    },
    barcode: '',
    manufacturer: '',
    brand: '',
    category: []
  }
  const [mode, setMode] = useState<string>()
  const [productData, setProductData] = useState<formData>(initialProductData)

  const modeOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedMode = event.target.defaultValue;

    if (selectedMode === 'add') {
      const productCopy: formData = JSON.parse(JSON.stringify(productData));

      console.log(productCopy)
      console.log(getNewProductId(productsItems))
      productCopy.id = getNewProductId(productsItems)
      setProductData(({ ...productCopy }))
    } else {
      setProductData(({ ...initialProductData }))
    }

    if (selectedMode) setMode(event.target.defaultValue)
  }

  const productOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const productId = event.target.value

    const selectedProduct = productsItems.find((item) => item.id === productId)

    if (selectedProduct) {
      setProductData(({ ...selectedProduct }))
    }
  }

  const fieldOnChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();

    const productCopy = JSON.parse(JSON.stringify(productData));

    const value = event.target.value;
    let fieldName = event.target.name;

    console.log(value, fieldName)

    switch (true) {
      case fieldName.includes('measurement'):
        const pathParts = fieldName.split('.');
        const firstPart = pathParts[0];
        const secondPart = pathParts[1];

        console.log(productCopy, firstPart, secondPart)

        productCopy[firstPart][secondPart] = value
        break;
      case fieldName.includes('category'):
        const values = event.target.value.split(',');
        console.log(values)
        productCopy[fieldName] = values
        break;
      case fieldName === 'price':

        productCopy[fieldName] = +value
        break;
      default:
        productCopy[fieldName] = value
    }

    console.log(productCopy)
    setProductData(({ ...productCopy }))
  }

  const setRelevantData = (item: boolean) => {
    dispatch(setRelevant(item))
  }

  const formOnSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    let response;
    switch (mode) {
      case 'add':
        response = await createProduct(productData)

        if (response?.ok) {
          alert('Товар добавлен')
        } else {
          alert('Ошибка')
        }

        setProductData(initialProductData)
        break
      case 'edit':
        console.log('EDIT', productData)
        response = await editProduct(productData)

        if (response?.ok) {
          alert('Товар изменен')
        } else {
          alert('Ошибка')
        }

        break
      case 'delete':
        console.log('DELETE', productData)
        response = await deleteProduct(productData.id)

        if (response?.deletedCount) {
          alert('Товар удален')
        } else {
          alert('Ошибка')
        }

        break
    }
    setRelevantData(false)
  }

  return (
    <section className={`${style.edit} ${mainStyle.container} ${mainStyle.content}`}>
      <div className={style.container} >
        <h1 className={titleStyle.title}>Управление товарами</h1>
        <div className={style.body}>
          <div className={style.fieldsWrapper}>
            <h2 className={style.subtitle}>Выберите режим:</h2>
            <div className={style.modeWrapper}>
              <label>
                <input className={style.styledRadio}
                  type="radio"
                  name="mode"
                  defaultValue="add"
                  onChange={modeOnChange} />
                Добавление
              </label>
              <label>
                <input className={style.styledRadio}
                  type="radio"
                  name="mode"
                  defaultValue="edit"
                  onChange={modeOnChange} />
                Изменение
              </label>
              <label>
                <input className={style.styledRadio}
                  type="radio"
                  name="mode"
                  defaultValue="delete"
                  onChange={modeOnChange} />
                Удаление
              </label>
            </div>


            {(mode === 'edit' || mode === 'delete')
              && <select className={style.styledSelect} onChange={productOnChange}>
                <option disabled={true} value="" selected>
                  Выберите товар
                </option>
                {
                  productsItems.map((item) => (
                    <option value={item.id} key={item.id}>{item.brand} {item.name}</option>))
                }
              </select>
            }


            <form className={style.form} onSubmit={formOnSubmit}>
              {(mode === 'add' || mode === 'edit') &&
                <>
                  <label className={style.label}>id:
                    <input className={style.styledInput}
                      name="id"
                      type="text"
                      value={productData.id}
                      onChange={fieldOnChange} />
                  </label>
                  <label className={style.label}>Наименование:
                    <input className={style.styledInput}
                      name="name"
                      type="text"
                      value={productData.name}
                      defaultValue={productData.name}
                      onChange={fieldOnChange} />
                  </label>
                  <label className={style.label}>Цена:
                    <input className={style.styledInput}
                      name="price" type="number"
                      value={productData.price}
                      onChange={fieldOnChange} />
                  </label>
                  <label className={style.label}>Описание:
                    <textarea className={style.styledInput}
                      rows={4}
                      name="description"
                      onChange={fieldOnChange}
                      value={productData.description}>
                    </textarea>
                  </label>
                  <label className={style.label}>URL изображения:
                    <input className={style.styledInput}
                      name="imageURL"
                      type="text"
                      value={productData.imageURL}
                      onChange={fieldOnChange} />
                  </label>

                  <div className={style.row}>
                    <label className={style.label}>Значение измерения:
                      <input className={style.styledInput}
                        name="measurement.type"
                        type="number"
                        value={productData.measurement?.type}
                        onChange={fieldOnChange} />
                    </label>

                    <label className={style.label}>Тип измерения:
                      <select className={style.styledSelect}
                        name="measurement.value"
                        value={productData.measurement?.value}
                        onChange={fieldOnChange}>
                        <option value='' disabled>ед</option>
                        <option value='л'>л</option>
                        <option value='мл'>мл</option>
                        <option value='шт'>шт</option>
                        <option value='кг'>кг</option>
                      </select>
                    </label>
                  </div>

                  <label className={style.label}>Штрихкод:
                    <input className={style.styledInput}
                      name="barcode"
                      type="text"
                      value={productData.barcode}
                      onChange={fieldOnChange} />
                  </label>
                  <label className={style.label}>Производитель:
                    <input className={style.styledInput}
                      name="manufacturer"
                      type="text"
                      value={productData.manufacturer}
                      onChange={fieldOnChange} />
                  </label>
                  <label className={style.label}>Бренд:
                    <input className={style.styledInput}
                      name="brand"
                      type="text"
                      value={productData.brand}
                      onChange={fieldOnChange} />
                  </label>
                  <label className={style.label}>Категория/Категории:
                    <input className={style.styledInput}
                      name="category"
                      type="text"
                      value={productData.category}
                      onChange={fieldOnChange} />
                  </label>
                </>
              }
              {(mode) &&
                <button className={buttonStyle.button} type="submit">
                  <span>
                    {
                      (mode === 'edit')
                        ? 'Редактировать'
                        : (mode === 'add')
                          ? 'Добавить'
                          : 'Удалить'
                    }
                  </span>
                </button>
              }
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AdminPage


const getNewProductId = (productItems: Product[]): string => {
  return String(Math.max(...productItems.map(item => (item.id) ? +item.id : 0)) + 1)
}