import {
  Divider,
  TopNavigation as UiKittenTopNavigation,
  TopNavigationAction,
  Icon,
} from '@ui-kitten/components';
import type { IconElement } from '@ui-kitten/components';
import type { TRootStackParamList } from '../../navigators/types';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';

interface ITopNavigationProps {
  route: RouteProp<TRootStackParamList, keyof TRootStackParamList>;
  navigation: NativeStackNavigationProp<TRootStackParamList, keyof TRootStackParamList, undefined>;
  rightIcon?: IconElement;
  leftIcon?: IconElement;
  rightCallback?: () => void;
  leftCallback?: () => void;
}

const TopNavigation = ({ route, navigation, rightIcon, rightCallback }: ITopNavigationProps) => {
  const accessoryRight =
    rightIcon && rightCallback
      ? () => <TopNavigationAction icon={rightIcon} onPress={rightCallback} />
      : undefined;

  const accessoryLeft = navigation.canGoBack()
    ? () => (
        <TopNavigationAction
          icon={<Icon name='arrow-back-outline' />}
          onPress={() => navigation.goBack()}
        />
      )
    : undefined;

  return (
    <>
      <UiKittenTopNavigation
        alignment='center'
        title={route.name}
        accessoryRight={accessoryRight}
        accessoryLeft={accessoryLeft}
      />
      <Divider />
    </>
  );
};

export default TopNavigation;
