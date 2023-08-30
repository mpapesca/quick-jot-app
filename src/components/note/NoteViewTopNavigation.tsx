import type { RouteProp } from '@react-navigation/native';
import type { TRootStackParamList } from '../../navigators/types';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Divider, Icon } from '@ui-kitten/components';
import { TopNavigation } from '../../components/shared';
import INote from 'services/NoteService/types/Note';

interface INoteViewTopNavigationProps {
  note?: INote;
  route: RouteProp<TRootStackParamList, 'Note'>;
  navigation: NativeStackNavigationProp<TRootStackParamList, 'Note', undefined>;
}

const NoteViewTopNavigation = ({ note, route, navigation }: INoteViewTopNavigationProps) => {
  return (
    <TopNavigation
      title={note?.date}
      route={route}
      navigation={navigation}
      rightIcon={<Icon name='menu-outline' />}
      rightCallback={() => navigation.navigate('History')}
    />
  );
};

export default NoteViewTopNavigation;
