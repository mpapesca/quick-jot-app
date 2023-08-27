import type { TThemeMode } from "../../state/slices/types/SettingsState";

export const THEME_MODES: { [key: string]: TThemeMode } = {
  SYSTEM: 'system',
  LIGHT: 'light',
  DARK: 'dark',
};
