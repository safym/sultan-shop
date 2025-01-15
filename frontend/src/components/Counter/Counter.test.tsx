import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { HashRouter } from "react-router-dom";

import { Product } from "../../app/slices/productsSlice";
import Counter from "./Counter";

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
  price: 50,
  category: ["Чистящие средства"],
};

const mockStore = configureStore([]);

describe("Counter", () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({
      cart: {
        cartItems: [
          {
            id: "1",
            count: 2,
            price: 48.76,
            total: 97.52,
          }
        ],
        totalCount: 2,
        totalPrice: 97.52,
      },
    });
  });

  screen.debug(undefined, 10000000000000)

  test("Counter should correctly render the current count", async () => {
    render(
      <HashRouter>
        <Provider store={store}>
          <Counter product={productData} />
        </Provider>
      </HashRouter>
    );

    expect(screen.getByTestId("count")).toHaveTextContent("2");
  });

  test("Minus button should call 'minusItem' action", async () => {
    render(
      <HashRouter>
        <Provider store={store}>
          <Counter product={productData} />
        </Provider>
      </HashRouter>
    );

    const button = screen.getByRole('button', { name: /minus-button/i })

    fireEvent.click(button);

    const resultCartState = {
      payload: {
        item: productData,
      },
      type: "cartItems/minusItem",
    };

    expect(store.getActions()).toEqual([resultCartState]);
  });

  test("Plus button should call 'addItem' action", async () => {
    render(
      <HashRouter>
        <Provider store={store}>
          <Counter product={productData} />
        </Provider>
      </HashRouter>
    );

    const button = screen.getByRole('button', { name: /plus-button/i })

    fireEvent.click(button);

    const resultCartState = {
      payload: {
        item: productData,
      },
      type: "cartItems/addItem",
    };

    expect(store.getActions()).toEqual([resultCartState]);
  });
});
