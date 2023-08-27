import { ReactNode, useEffect } from 'react';
import * as eva from '@eva-design/eva';
import { useColorScheme } from 'react-native';
import { THEME_MODES } from '../services/ThemeService/constants';
import { useAppSelector } from '../state/hooks';
import { ApplicationProvider as UiKittenThemeProvider } from '@ui-kitten/components';

interface IThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider = ({ children }: IThemeProviderProps) => {
  const systemColorScheme = useColorScheme();
  const { themeMode } = useAppSelector((state) => state.settings);
  const colorScheme = themeMode === THEME_MODES.SYSTEM ? systemColorScheme : themeMode;
  const theme = eva[colorScheme === 'light' ? 'light' : 'dark'];

  useEffect(() => {
    console.log('theme changed', themeMode);
  }, [themeMode]);

  return (
    <UiKittenThemeProvider {...eva} theme={theme}>
      {children}
    </UiKittenThemeProvider>
  );
};

export default ThemeProvider;
