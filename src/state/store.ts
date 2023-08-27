import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import settingsSlice from './slices/settingsSlice';

export const store = configureStore({
  reducer: {
    settings: settingsSlice,
  },
});

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
export type TAppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  TRootState,
  unknown,
  Action<string>
>;