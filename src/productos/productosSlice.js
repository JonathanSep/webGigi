import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lista: [],
};

export const productosSlice = createSlice({
  name: 'productos',
  initialState,
  reducers: {
    agregarProducto: (state, action) => {
      state.lista.push(action.payload);
    },
  },
});

export const { agregarProducto } = productosSlice.actions;
export default productosSlice.reducer;
