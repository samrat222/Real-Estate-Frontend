import { createSlice } from "@reduxjs/toolkit";
import Product from "../pages/Product";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload.product);
      state.total += action.payload.price;
    },
    removeFromCart(state, action) {
      const nextCartItems = state.products.filter(
        (Product) => Product.id !== action.payload.id
      );
      state.products = nextCartItems;
    },
  },
});

export const { addProduct, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
