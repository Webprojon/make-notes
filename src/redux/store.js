import { configureStore } from "@reduxjs/toolkit";
import { globalSlices } from "./slices";

export const store = configureStore({
  reducer: {
    global: globalSlices.reducer,
  },
});
