import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { HashRouter } from "react-router-dom";

import { Product } from "../../app/slices/productsSlice";
import Products from "./Products";

const mockStore = configureStore([]);

const products: Product[] = [
  {
    measurement: {
      type: "мл",
      value: "450",
    },
    id: "1",
    imageURL:
      "https://sbermarket.ru/statics/spree/products/3521745/original/18473161.jpg?1642667408",
    name: "Cредство для мытья посуды Crystal",
    barcode: "1",
    manufacturer: "Нэфис Косметикс",
    brand: "AOS",
    description:
      "Бренд AOS в декабре 2022 года четвертый раз признан «Маркой № 1 в России» в категории «Средство для мытья посуды». Гель для мытья посуды AOS Бальзам отмывает жир с посуды даже в холодной воде, не сушит кожу рук и полностью смывается водой.",
    price: 48.76,
    category: ["Чистящие средства"],
  },
  {
    measurement: {
      type: "кг",
      value: "3",
    },
    id: "2",
    imageURL:
      "https://main-cdn.sbermegamarket.ru/big1/hlr-system/622/662/859/315/114/4/100023621244b0.jpg",
    name: "Стиральный порошок Свежесть от Вернель Автомат",
    barcode: "2",
    manufacturer: "Henkel",
    brand: "PERSIL",
    description:
      "Стиральный порошок для белого белья с формулой Deep Clean Technology обладает уникальным сочетанием 13 активных компонентов. Стиральный порошок Persil это всё, что нужно для сияющей чистоты белья. Порошок для стирки белья Persil содержит защиту от образования известкового налета для жесткой и мягкой воды.",
    price: 599,
    category: ["Средства для стирки"],
  },
  {
    measurement: {
      type: "кг",
      value: "6",
    },
    id: "3",
    imageURL:
      "https://www.shop-profit.ru/upload/iblock/d81/stiralnyy_poroshok_avtomat_mif_3_v_1_moroznaya_svezhest_6kg_5413149352902.jpg",
    name: "Стиральный порошок 3 в 1 «Морозная свежесть» Автомат",
    barcode: "3",
    manufacturer: "Procter & Gamble",
    brand: "Миф",
    description:
      "Стиральный порошок Миф Морозная Свежесть — это новая, лучшая формула Миф для сияющей белизны, с технологией против разводов. Стиральный порошок Миф растворяется едва коснувшись воды, и моментально активируется: удаляет даже трудновыводимые пятна и придает одежде сияющую белизну. С помощью технологии против разводов, Миф помогает эффективно справляться с загрязнениями, не оставляя разводов на одежде. Только чистота и морозная свежесть!",
    price: 1300,
    category: ["Средства для стирки"],
  },
];

describe("Products", () => {
  let store: any;

  test("Should correctly render product data sorted by 'price, asc'", () => {
    store = mockStore({
      products: {
        productsItems: [...products],
      },
      cart: {
        cartItems: [],
        totalCount: 0,
        totalPrice: 0,
      },
      pagination: {
        currentPage: 1,
      },
      loading: {
        isLoading: true,
      },
      sort: {
        title: "Сначала дешевле",
        type: { field: "price", direction: 1 },
      },
      filter: {
        minPrice: 0,
        maxPrice: 100000,
        manufacturers: [],
        category: "",
      },
    });

    render(
      <HashRouter>
        <Provider store={store}>
          <Products />
        </Provider>
      </HashRouter>
    );

    const productNames = screen.getAllByTestId("item-price");

    expect(productNames[0].innerHTML).toEqual("48.76");
    expect(productNames[productNames.length - 1].innerHTML).toEqual("1300");
  });

  test("Should correctly render product data sorted by 'price, desc'", () => {
    store = mockStore({
      products: {
        productsItems: [...products],
      },
      cart: {
        cartItems: [],
        totalCount: 0,
        totalPrice: 0,
      },
      pagination: {
        currentPage: 1,
      },
      loading: {
        isLoading: true,
      },
      sort: {
        title: "Сначала дороже",
        type: { field: "price", direction: -1 },
      },
      filter: {
        minPrice: 0,
        maxPrice: 100000,
        manufacturers: [],
        category: "",
      },
    });

    render(
      <HashRouter>
        <Provider store={store}>
          <Products />
        </Provider>
      </HashRouter>
    );

    const productNames = screen.getAllByTestId("item-price");

    expect(productNames[0].innerHTML).toEqual("1300");
    expect(productNames[productNames.length - 1].innerHTML).toEqual("48.76");
  });

  test("Should correctly render product data sorted by 'brand name, asc'", () => {
    store = mockStore({
      products: {
        productsItems: [...products],
      },
      cart: {
        cartItems: [],
        totalCount: 0,
        totalPrice: 0,
      },
      pagination: {
        currentPage: 1,
      },
      loading: {
        isLoading: true,
      },
      sort: {
        title: "По алфавиту от А до Я",
        type: { field: "brand", direction: 1 },
      },
      filter: {
        minPrice: 0,
        maxPrice: 100000,
        manufacturers: [],
        category: "",
      },
    });

    render(
      <HashRouter>
        <Provider store={store}>
          <Products />
        </Provider>
      </HashRouter>
    );

    const productNames = screen.getAllByTestId("item-brand");

    expect(productNames[0].innerHTML).toEqual("Миф");
    expect(productNames[productNames.length - 1].innerHTML).toEqual("PERSIL");
  });

  test("Should correctly render product data sorted by 'brand name, asc'", () => {
    store = mockStore({
      products: {
        productsItems: [...products],
      },
      cart: {
        cartItems: [],
        totalCount: 0,
        totalPrice: 0,
      },
      pagination: {
        currentPage: 1,
      },
      loading: {
        isLoading: true,
      },
      sort: {
        title: "По алфавиту от Я до А",
        type: { field: "brand", direction: -1 },
      },
      filter: {
        minPrice: 0,
        maxPrice: 100000,
        manufacturers: [],
        category: "",
      },
    });

    render(
      <HashRouter>
        <Provider store={store}>
          <Products />
        </Provider>
      </HashRouter>
    );

    const productNames = screen.getAllByTestId("item-brand");

    expect(productNames[0].innerHTML).toEqual("PERSIL");
    expect(productNames[productNames.length - 1].innerHTML).toEqual("Миф");
  });
});
