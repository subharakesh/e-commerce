import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


export interface Car {
  id: number;
  name: string;
  price: number;
  image: string;
  // add other fields as needed
}

interface FavoritesState {
  favorites: Car[];
}

const initialState: FavoritesState = {
  favorites: [], // start empty
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    // Add a car to favorites if not already added
    addFavorite: (state, action: PayloadAction<Car>) => {
      const exists = state.favorites.find(car => car.id === action.payload.id);
      if (!exists) {
        state.favorites.push(action.payload);
      }
    },

    // Remove a car from favorites by ID
    removeFavorite: (state, action: PayloadAction<number>) => {
      state.favorites = state.favorites.filter(car => car.id !== action.payload);
    },

    // Toggle: if exists remove, otherwise add
    toggleFavorite: (state, action: PayloadAction<Car>) => {
      const exists = state.favorites.find(car => car.id === action.payload.id);
      if (exists) {
        state.favorites = state.favorites.filter(car => car.id !== action.payload.id);
      } else {
        state.favorites.push(action.payload);
      }
    },

    // Optional: clear all favorites
    clearFavorites: (state) => {
      state.favorites = [];
    },
  },
});

export const { addFavorite, removeFavorite, toggleFavorite, clearFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
