import type { RouteProp } from '@react-navigation/native';
import type { TRootStackParamList } from '../../navigators/types';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Divider, Icon } from '@ui-kitten/components';
import { TopNavigation } from '../../components/shared';

interface INoteViewTopNavigationProps {
  route: RouteProp<TRootStackParamList, 'Note'>;
  navigation: NativeStackNavigationProp<TRootStackParamList, 'Note', undefined>;
}

const NoteViewTopNavigation = ({ route, navigation }: INoteViewTopNavigationProps) => {
  return (
    <TopNavigation
      route={route}
      navigation={navigation}
      rightIcon={<Icon name='menu-outline' />}
      rightCallback={() => navigation.navigate('History')}
    />
  );
};

export default NoteViewTopNavigation;
