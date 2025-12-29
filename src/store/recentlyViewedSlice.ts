import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Car } from "@/types/car";

const initialState: Car[] = [];

const recentlyViewedSlice = createSlice({
  name: "recentlyViewed",
  initialState,
  reducers: {
    addRecentlyViewed: (state, action: PayloadAction<Car>) => {
      const index = state.findIndex((car) => car.id === action.payload.id);
      if (index !== -1) state.splice(index, 1);

      state.unshift(action.payload);

      if (state.length > 5) state.pop();
    },
  },
});

export const { addRecentlyViewed } = recentlyViewedSlice.actions;
export default recentlyViewedSlice.reducer;
