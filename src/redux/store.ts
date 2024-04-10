import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

// creating redux store

export const store = configureStore({
  reducer: {},
});

// setting up listeners
setupListeners(store.dispatch);

// rootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
