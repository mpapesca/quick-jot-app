import type { RouteProp } from '@react-navigation/native';
import type { TRootStackParamList } from '../../navigators/types';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Divider, Icon } from '@ui-kitten/components';
import { TopNavigation } from '../shared';

interface IHistoryViewTopNavigationProps {
  route: RouteProp<TRootStackParamList, 'History'>;
  navigation: NativeStackNavigationProp<TRootStackParamList, 'History', undefined>;
}

const HistoryViewTopNavigation = ({ route, navigation }: IHistoryViewTopNavigationProps) => {
  return (
    <TopNavigation
      route={route}
      navigation={navigation}
      leftIcon={<Icon name='arrow-back-outline' />}
      leftCallback={() => navigation.goBack()}
      rightIcon={<Icon name='settings-outline' />}
      rightCallback={() => navigation.navigate('Settings')}
    />
  );
};

export default HistoryViewTopNavigation;
