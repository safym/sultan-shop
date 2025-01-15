import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { HashRouter } from "react-router-dom";

import AddButton from "./AddButton";
import { Product } from "../../app/slices/productsSlice";

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

const mockStore = configureStore([]);

describe("AddButton", () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({
      cart: {
        cartItems: [
          {
            id: "1",
            count: 3,
            price: 48.76,
            total: 146.28
          }
        ],
        totalCount: 3,
        totalPrice: 146.28,
      },
    });
  });

  test("Add button should call 'addItem' action", async () => {
    render(
      <HashRouter>
        <Provider store={store}>
          <AddButton productData={productData} />
        </Provider>
      </HashRouter>
    );

    const button = screen.getByRole('button', { name: /add-button/i })

    fireEvent.click(button);

    const resultCartState = {
      payload: {
        item: productData,
      },
      type: "cartItems/addItem",
    };

    expect(store.getActions()).toEqual([resultCartState]);
  });

  test("Should correctly render total count of added item", async () => {
    render(
      <HashRouter>
        <Provider store={store}>
          <AddButton productData={productData} />
        </Provider>
      </HashRouter>
    );

    expect(screen.getByTestId("added-count")).toHaveTextContent("3");
  });
});
