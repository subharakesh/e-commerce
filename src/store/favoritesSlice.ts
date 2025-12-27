import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


export interface Car {
  id: number;
  name: string;
  price: number;
  image: string;

}

interface FavoritesState {
  favorites: Car[];
}

const initialState: FavoritesState = {
  favorites: [], 
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
   
    addFavorite: (state, action: PayloadAction<Car>) => {
      const exists = state.favorites.find(car => car.id === action.payload.id);
      if (!exists) {
        state.favorites.push(action.payload);
      }
    },

    
    removeFavorite: (state, action: PayloadAction<number>) => {
      state.favorites = state.favorites.filter(car => car.id !== action.payload);
    },

   
    toggleFavorite: (state, action: PayloadAction<Car>) => {
      const exists = state.favorites.find(car => car.id === action.payload.id);
      if (exists) {
        state.favorites = state.favorites.filter(car => car.id !== action.payload.id);
      } else {
        state.favorites.push(action.payload);
      }
    },

  
    clearFavorites: (state) => {
      state.favorites = [];
    },
  },
});

export const { addFavorite, removeFavorite, toggleFavorite, clearFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
