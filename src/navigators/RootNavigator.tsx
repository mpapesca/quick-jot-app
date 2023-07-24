import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from '../components';
import { DetailsView, HomeView, SettingsView } from '../views';

const Drawer = createDrawerNavigator();

export const RootNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={DrawerContent}
      screenOptions={{
        drawerType: 'front',
        drawerStyle: { width: '100%' },
      }}
    >
      <Drawer.Screen name='Home' component={HomeView} options={{ headerShown: false }} />
      <Drawer.Screen name='Details' component={DetailsView} options={{ headerShown: false }} />
      <Drawer.Screen name='Settings' component={SettingsView} options={{ headerShown: false }} />
    </Drawer.Navigator>
  );
};
