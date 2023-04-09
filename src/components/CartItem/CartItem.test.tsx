import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { HashRouter } from "react-router-dom";

import { Product } from "../../app/slices/productsSlice";
import { CartItem } from "../../app/slices/cartSlice";
import CartItemComponent from "./CartItem";

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

const cartItemData: CartItem = {
  id: "1",
  count: 2,
  price: 48.76,
  total: 97.52,
};

const mockStore = configureStore([]);

describe("AddButton", () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({
      cart: {
        cartItems: [],
        totalCount: 0,
        totalPrice: 0,
      },
    });
  });

  test("Should correctly render the passed data", async () => {
    render(
      <HashRouter>
        <Provider store={store}>
          <CartItemComponent product={productData} cartItem={cartItemData} />
        </Provider>
      </HashRouter>
    );

    expect(screen.getByTestId("item-price")).toHaveTextContent("97.52 ₸");
    expect(screen.getByTestId("item-name")).toHaveTextContent("Cредство для мытья посуды Crystal");
    expect(screen.getByTestId("item-description")).toHaveTextContent("Бренд AOS в декабре 2022 года четвертый раз признан «Маркой № 1 в России» в категории «Средство для мытья посуды». Гель для мытья посуды AOS Бальзам отмывает жир с посуды даже в холодной воде, не сушит кожу рук и полностью смывается водой.");
  });

  test("Remove button should call 'removeItem' action", async () => {
    render(
      <HashRouter>
        <Provider store={store}>
          <CartItemComponent product={productData} cartItem={cartItemData} />
        </Provider>
      </HashRouter>
    );

    const button = screen.getByRole("button", { name: /remove-button/i });

    fireEvent.click(button);

    const resultCartState = {
      payload: {
        item: productData,
      },
      type: "cartItems/removeItem",
    };

    expect(store.getActions()).toEqual([resultCartState]);
  });
});
