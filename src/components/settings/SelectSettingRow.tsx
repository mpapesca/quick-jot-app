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

export interface ISelectSettingRowProps<TValue> {
  value: TValue;
  option: ISettingOption<TValue>;
  callback: (newValue: TValue) => void;
  isLastRow?: boolean;
}

const SelectSettingRow = <TValue,>({
  value,
  option,
  callback,
  isLastRow = false,
}: ISelectSettingRowProps<TValue>) => {
  const handleChange = (indexPath: IndexPath) => {
    const newValue = option.values?.[indexPath.row].key;
    if (!newValue) return;
    callback(newValue);
  };

  const getSelect = (value: TValue, option: ISettingOption<TValue>) => {
    const selectedIndex = option.values?.findIndex(({ key }) => value === key) ?? -1;
    const selectedIndexPath = new IndexPath(selectedIndex);
    return (
      <Select
        style={{ width: 150 }}
        selectedIndex={selectedIndexPath}
        onSelect={(indexPath) => handleChange(indexPath as IndexPath)}
        value={selectedIndex > -1 ? option.values?.[selectedIndex].displayName : undefined}
      >
        {option.values?.map((optionValue) => {
          console.log({ displayName: optionValue.displayName });
          return (
            <SelectItem
              key={optionValue.displayName.replace(' ', '-').toLocaleLowerCase()}
              title={optionValue.displayName}
            />
          );
        })}
      </Select>
    );
  };

  return (
    <SettingRow option={option} isLastRow={isLastRow}>
      {getSelect(value, option)}
    </SettingRow>
  );
};

export default SelectSettingRow;
