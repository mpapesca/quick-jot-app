export type TThemeMode = 'system' | 'light' | 'dark';

export interface ISettingsState {
  themeMode: TThemeMode;
  testSetting: boolean;
};