import { useCallback } from 'react';
import {
  Button,
  ButtonGroup,
  IndexPath,
  Layout,
  List,
  ListItem,
  Radio,
  Select,
  SelectItem,
  Text,
  Toggle,
} from '@ui-kitten/components';
import { ViewWithInsets } from './ViewWithInsets';
import * as ThemeService from '../services/ThemeService';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { setTestSetting, setThemeMode } from '../state/slices/settingsSlice';
import { TThemeMode } from '../state/slices/types/SettingsState';
import {
  RadioSettingRow,
  SelectSettingRow,
  SettingsViewTopNavigation,
  ToggleSettingRow,
} from '../components/settings';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TRootStackParamList } from '../navigators/types';

type TSettingsViewProps = NativeStackScreenProps<TRootStackParamList, 'Settings'>;

const SettingsView = ({ route, navigation }: TSettingsViewProps) => {
  const dispatch = useAppDispatch();
  const { themeMode, testSetting } = useAppSelector((state) => state.settings);

  const options = ThemeService.getOptions();

  const handleChangeThemeMode = (newThemeMode: TThemeMode) => {
    dispatch(setThemeMode(newThemeMode));
  };

  const handleToggleTestSetting = (newTestSetting?: boolean) => {
    dispatch(setTestSetting(newTestSetting ?? !testSetting));
  };

  return (
    <ViewWithInsets>
      <SettingsViewTopNavigation route={route} navigation={navigation} />
      <Layout style={{ flex: 1, padding: 8 }}>
        {/* <RadioSettingRow
          option={options.themeMode}
          value={themeMode}
          callback={handleChangeThemeMode}
        /> */}
        <SelectSettingRow
          option={options.themeMode}
          value={themeMode}
          callback={handleChangeThemeMode}
        />
        <ToggleSettingRow
          option={options.testSetting}
          value={testSetting}
          callback={handleToggleTestSetting}
          isLastRow
        />
      </Layout>
    </ViewWithInsets>
  );
};

export default SettingsView;
