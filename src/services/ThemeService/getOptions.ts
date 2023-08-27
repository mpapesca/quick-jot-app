import type { ISettingsState, TThemeMode } from "../../state/slices/types/SettingsState";
import { THEME_MODES } from "./constants";
import type { ISettingOption } from "./types";

const getOptions = (): {
  themeMode: ISettingOption<TThemeMode>;
  testSetting: ISettingOption<boolean>;
} => {
  return {
    themeMode: {
      key: 'themeMode',
      displayName: 'Theme',
      description: 'The theme used through out the app.',
      type: 'radio',
      values: [
        {
          key: THEME_MODES.SYSTEM,
          displayName: 'System',
        },
        {
          key: THEME_MODES.LIGHT,
          displayName: 'Light',
        },
        {
          key: THEME_MODES.DARK,
          displayName: 'Dark',
        }
      ]
    },
    testSetting: {
      key: 'testSetting',
      displayName: 'Test Setting',
      description: 'This is just a test!',
      type: 'toggle',
    }
  };
};

export default getOptions;