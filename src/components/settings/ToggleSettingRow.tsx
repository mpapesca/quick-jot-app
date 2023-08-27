import {
  Button,
  ButtonGroup,
  Divider,
  IndexPath,
  Radio,
  Select,
  SelectItem,
  Text,
  Toggle,
} from '@ui-kitten/components';
import { ReactNode, useCallback } from 'react';
import { TouchableOpacity } from 'react-native';
import type { ISettingOption } from '../../services/ThemeService/types';
import { TThemeMode } from '../../state/slices/types/SettingsState';
import SettingRow from './SettingRow';

export interface IToggleSettingRowProps {
  value: boolean;
  option: ISettingOption<boolean>;
  callback: (newValue?: boolean) => void;
  isLastRow?: boolean;
}

const ToggleSettingRow = ({
  value,
  option,
  callback,
  isLastRow = false,
}: IToggleSettingRowProps) => {
  const getToggleInput = useCallback((value: boolean, callback: (isEnabled?: boolean) => void) => {
    return <Toggle checked={value} onChange={(isChecked) => callback(isChecked)} />;
  }, []);

  return (
    <SettingRow option={option} isLastRow={isLastRow}>
      {getToggleInput(value, callback)}
    </SettingRow>
  );
};

export default ToggleSettingRow;
