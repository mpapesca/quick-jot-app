import 'react-native-gesture-handler';
import { useColorScheme } from 'react-native';

import * as eva from '@eva-design/eva';
import { NavigationContainer } from '@react-navigation/native';
import {
  ApplicationProvider as ThemeProvider,
  IconRegistry as IconProvider,
} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { Provider as StoreProvider } from 'react-redux';

import { RootNavigator } from './src/navigators';
import { store } from './src/state/store';

export default function App() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? eva.dark : eva.light;

  return (
    <StoreProvider store={store}>
      <IconProvider icons={EvaIconsPack} />
      <ThemeProvider {...eva} theme={theme}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </ThemeProvider>
    </StoreProvider>
  );
}
