import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { HashRouter } from "react-router-dom";

import ProductItem from "./ProductItem";
import { Product } from "../../app/slices/productsSlice";

const mockStore = configureStore([]);

const productData: Product = {
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
};

describe("ProductItem", () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({
      cart: {
        cartItems: [],
      },
    });
  });

  test("Should correctly render the passed data", () => {
    render(
      <HashRouter>
        <Provider store={store}>
          <ProductItem productData={productData} />
        </Provider>
      </HashRouter>
    );

    expect(screen.getByAltText("Cредство для мытья посуды Crystal")).toBeInTheDocument();
    expect(screen.getByTestId("item-brand")).toHaveTextContent("AOS");
    expect(
        screen.getByText("Cредство для мытья посуды Crystal")
      ).toBeInTheDocument();
    expect(screen.getByText("450 мл")).toBeInTheDocument();
    expect(screen.getByTestId("description-brand")).toHaveTextContent("AOS");
    expect(screen.getByText("Нэфис Косметикс")).toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("48.76")).toBeInTheDocument();
  });
});
