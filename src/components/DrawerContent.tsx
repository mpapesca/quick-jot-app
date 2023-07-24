import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {
  Drawer,
  DrawerItem,
  IndexPath,
  ListItem,
  useTheme,
  Text,
  List,
} from '@ui-kitten/components';
import { ListRenderItem, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const DrawerContent = ({ navigation, state, descriptors }: DrawerContentComponentProps) => {
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  // const drawerItemTitles = new Array(50).fill(0).map((_, idx) => `Item ${idx}`);
  const renderItem: ListRenderItem<Date> = ({ item }): React.ReactElement => (
    <ListItem>
      <Text category='h1' style={{ width: '100%', textAlign: 'center' }}>
        {item.toDateString()}
      </Text>
    </ListItem>
  );

  const today = Date.now();
  const day = 1000 * 60 * 60 * 24;

  const days = new Array(100).fill(0).map((_, index) => new Date(today - index * day));

  return (
    <Drawer
      centerContent
      style={{
        paddingTop: insets.top,
        paddingLeft: insets.left,
        paddingBottom: insets.bottom,
        backgroundColor: theme['background-basic-color-1'],
      }}
      selectedIndex={new IndexPath(state.index)}
      onSelect={(index) => navigation.navigate(state.routeNames[index.row])}
    >
      <List style={styles.container} data={days} renderItem={renderItem} />
    </Drawer>
  );
};

const styles = StyleSheet.create({
  container: {
    // maxHeight: '100%',
    flex: 1,
  },
});
