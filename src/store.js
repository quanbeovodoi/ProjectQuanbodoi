import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Slice/CartSlice";
import LoginSlice from './Slice/LoginSlice';
import SortSlice from "./Slice/ProductSortSlice";
import RegisterSlice from "./Slice/RegisterSlice";
import WishListSlice from './Slice/WishListSlice';
const rootReducer = {
  cart: CartSlice,
  login: LoginSlice,
  wishlist: WishListSlice,
  register: RegisterSlice,
  sort: SortSlice,
};
const store = configureStore({
  reducer: rootReducer,
});

export default store;
