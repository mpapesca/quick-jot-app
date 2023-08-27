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
import { ReactNode } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import type { ISettingOption } from '../../services/ThemeService/types';

export interface ISettingRowProps<TValue> {
  option: ISettingOption<TValue>;
  children: ReactNode;
  isLastRow?: boolean;
}

const SettingRow = <TOptionValue,>({
  // value,
  option,
  // callback,
  children,
  isLastRow = false,
}: ISettingRowProps<TOptionValue>) => {
  // const getRadioGroup = <T,>(
  //   value: T,
  //   option: ISettingOption<T>,
  //   callback: (newValue: T) => void,
  // ) => {
  //   return (
  //     <>
  //       {option.values?.map((optionValue) => (
  //         <Radio checked={value === optionValue.key} onChange={() => callback(optionValue.key)}>
  //           {option.displayName}
  //         </Radio>
  //       ))}
  //     </>
  //   );
  // };

  // const getSelect = <T,>(value: T, option: ISettingOption<T>, callback: (indexPath: T) => void) => {
  //   const selectedIndex = option.values?.findIndex(({ key }) => value) ?? -1;
  //   const selectedIndexPath = new IndexPath(selectedIndex);
  //   return (
  //     <Select
  //       selectedIndex={selectedIndexPath}
  //       onSelect={(indexPath) => callback(indexPath as IndexPath)}
  //     >
  //       {option.values?.map((optionValue) => (
  //         <SelectItem title={optionValue.displayName} />
  //       ))}
  //     </Select>
  //   );
  // };

  // const getButtonGroup = <T,>(
  //   value: T,
  //   option: ISettingOption<T>,
  //   callback: (newValue: T) => void,
  // ) => {
  //   const buttons = option.values?.map((optionValue) => (
  //     <Button
  //       onPress={() => callback(optionValue.key)}
  //       appearance={optionValue.key === value ? 'filled' : 'outline'}
  //     >
  //       {optionValue.displayName}
  //     </Button>
  //   ));
  //   return <ButtonGroup size='large'>{buttons ?? []}</ButtonGroup>;
  // };

  // const getToggleInput = <T,>(value: T, callback: (isEnabled?: T) => void) => {
  //   return <Toggle checked={!!value} onChange={(isChecked) => callback(isChecked as T)} />;
  // };

  // const getInput = useCallback(() => {
  //   switch (option.type) {
  //     case 'radio':
  //       // return getRadioGroup(value as string, option, callback);
  //       return getButtonGroup(value, option, callback);
  //     case 'toggle':
  //       return getToggleInput(value, callback);
  //     case 'select':
  //       return getSelect(value, option, callback);
  //   }
  // }, [option.type]);

  return (
    <>
      <TouchableOpacity activeOpacity={1.0} style={styles.container}>
        <Text category='s2'>{option.displayName}</Text>
        {children}
      </TouchableOpacity>
      {!isLastRow && <Divider />}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
  },
});

export default SettingRow;
