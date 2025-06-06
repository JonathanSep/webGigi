import { configureStore } from '@reduxjs/toolkit';
import productosReducer from '../productos/productosSlice';

export const store = configureStore({
  reducer: {
    productos: productosReducer,
  },
});
