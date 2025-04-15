import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/slices";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

// اینجا نوع دقیق state رو برمی‌گردونیم
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
