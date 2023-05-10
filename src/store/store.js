import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "./wishListSlice";

export const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
  },
});
