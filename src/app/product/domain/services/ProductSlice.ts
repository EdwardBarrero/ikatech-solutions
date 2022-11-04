import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../../store';

export interface ProductState {
  shoes: [];
  shoe: {
    foto: '',
    precio: 0,
    nombre: '',
    referencia: '',
    tallas: []
  };
  shoppingCar: number;
}

const initialState: ProductState = {
  shoes: [],
  shoe: {
    foto: '',
    precio: 0,
    nombre: '',
    referencia: '',
    tallas : [],
  },
  shoppingCar: 0
};

export const ProductSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getShoes: (state, action: PayloadAction<any>) => {
      state.shoes = action.payload;
    },
    getShoe: (state, action: PayloadAction<any>) => {
      state.shoe = action.payload;
    },
    addToShoppingCar: (state, action: PayloadAction<any>) => {
      state.shoppingCar += action.payload;
    }
  },
});

export const { getShoes, getShoe, addToShoppingCar } = ProductSlice.actions;

export default ProductSlice.reducer;