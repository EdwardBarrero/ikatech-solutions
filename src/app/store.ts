import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import ProductSlice from './product/domain/services/ProductSlice';

export const store = configureStore({
  reducer: {
    products : ProductSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
