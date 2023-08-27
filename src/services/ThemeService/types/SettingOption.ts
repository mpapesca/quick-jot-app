import { ISettingsState } from '../../../state/slices/types/SettingsState';
import ISettingOptionValue from './SettingOptionValue';

export default interface ISettingOption<TValueKey = string> {
  key: keyof ISettingsState;
  displayName: string;
  description?: string;
  type: 'toggle' | 'select' | 'radio' | 'slider';
  values?: ISettingOptionValue<TValueKey>[];
};