import { configureStore } from "@reduxjs/toolkit";
import updateName from "./features/user/userSlice";
import cartReducer from "./features/cart/cartSlice";
const store = configureStore({
  reducer: {
    user: updateName,
    cart: cartReducer,
  },
});

export default store;
