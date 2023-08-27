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

export interface IRadioSettingRowProps<TValue> {
  value: TValue;
  option: ISettingOption<TValue>;
  callback: (newValue: TValue) => void;
  isLastRow?: boolean;
}

const RadioSettingRow = <TValue,>({
  value,
  option,
  callback,
  isLastRow = false,
}: IRadioSettingRowProps<TValue>) => {
  const getRadioGroup = (
    value: TValue,
    option: ISettingOption<TValue>,
    callback: (newValue: TValue) => void,
  ) => {
    return (
      <>
        {option.values?.map((optionValue) => (
          <Radio checked={value === optionValue.key} onChange={() => callback(optionValue.key)}>
            {optionValue.displayName}
          </Radio>
        ))}
      </>
    );
  };

  return (
    <SettingRow option={option} isLastRow={isLastRow}>
      {getRadioGroup(value, option, callback)}
    </SettingRow>
  );
};

export default RadioSettingRow;
