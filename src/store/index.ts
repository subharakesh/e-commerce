import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./favoritesSlice";
import recentlyViewedReducer from "./recentlyViewedSlice";

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    recentlyViewed: recentlyViewedReducer,
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
