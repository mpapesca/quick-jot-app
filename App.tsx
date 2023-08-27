import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { IconRegistry as IconProvider } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { Provider as StoreProvider } from 'react-redux';

import { RootNavigator } from './src/navigators';
import { store } from './src/state/store';
import ThemeProvider from './src/providers/ThemeProvider';

export default function App() {
  return (
    <StoreProvider store={store}>
      <IconProvider icons={EvaIconsPack} />
      <ThemeProvider>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </ThemeProvider>
    </StoreProvider>
  );
}
