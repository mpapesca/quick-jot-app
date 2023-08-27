import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { THEME_MODES } from '../../services/ThemeService/constants';
import type { ISettingsState, TThemeMode } from './types/SettingsState';

const initialState: ISettingsState = {
  themeMode: THEME_MODES.SYSTEM,
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setThemeMode: (state, action: PayloadAction<TThemeMode>) => {
      state.themeMode = action.payload;
    },
  }
});

export const { setThemeMode } = settingsSlice.actions;

export default settingsSlice.reducer;