import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Slice/CartSlice";
const rootReducer = {
  cart: CartSlice,
};
const store = configureStore({
  reducer: rootReducer,
});

export default store;
