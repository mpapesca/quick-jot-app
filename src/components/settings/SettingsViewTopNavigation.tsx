import type { RouteProp } from '@react-navigation/native';
import type { TRootStackParamList } from '../../navigators/types';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Divider, Icon } from '@ui-kitten/components';
import { TopNavigation } from '../shared';

interface ISettingsViewTopNavigationProps {
  route: RouteProp<TRootStackParamList, 'Settings'>;
  navigation: NativeStackNavigationProp<TRootStackParamList, 'Settings', undefined>;
}

const SettingsViewTopNavigation = ({ route, navigation }: ISettingsViewTopNavigationProps) => {
  return (
    <TopNavigation
      route={route}
      navigation={navigation}
      leftIcon={<Icon name='arrow-back-outline' />}
      leftCallback={() => navigation.goBack()}
    />
  );
};

export default SettingsViewTopNavigation;
