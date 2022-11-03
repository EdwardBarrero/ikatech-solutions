import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../../store';

export interface CounterState {
  data: any;
}

const initialState: CounterState = {
  data: {},
};

export const ProductSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    get: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
  },
});

export const { get } = ProductSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;

export default ProductSlice.reducer;