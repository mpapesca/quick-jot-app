import { Button, Icon } from '@ui-kitten/components';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NoteView from '../views/NoteView';
import HistoryView from '../views/HistoryView';
import SettingsView from '../views/SettingsView';
import type { TRootStackParamList } from './types';

const Stack = createNativeStackNavigator<TRootStackParamList>();

export const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Note' component={NoteView} options={{ headerShown: false }} />
      <Stack.Screen name='History' component={HistoryView} options={{ headerShown: false }} />
      <Stack.Screen name='Settings' component={SettingsView} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};
