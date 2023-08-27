import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { THEME_MODES } from '../../services/ThemeService/constants';
import type { ISettingsState, TThemeMode } from './types/SettingsState';
import * as ThemeService from '../../services/ThemeService';

const initialState: ISettingsState = {
  themeMode: THEME_MODES.SYSTEM,
  testSetting: true,
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    resetToDefault: () => initialState,
    setThemeMode: (state, action: PayloadAction<TThemeMode>) => {
      state.themeMode = ThemeService.setThemeMode(action.payload);
    },
    setTestSetting: (state, action: PayloadAction<boolean>) => {
      state.testSetting = action.payload;
    },
  }
});

export const { setThemeMode, setTestSetting } = settingsSlice.actions;

export default settingsSlice.reducer;