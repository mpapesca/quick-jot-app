import { ExpoConfig } from 'expo/config';

// In SDK 46 and lower, use the following import instead:
// import { ExpoConfig } from '@expo/config-types';

const config: ExpoConfig = {
  name: 'Quick Jot',
  slug: 'quick-jot-app',
  extra: {
    eas: {
      projectId: "3bc6e1a3-cd43-4423-8d8c-5f1380310086"
    }
  },
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff"
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
    bundleIdentifier: "com.mpapesca.quick-jot-app"
  },
  android: {
    package: "com.mpapesca.quick_jot_app",
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#ffffff",
    }
  },
  web: {
    favicon: "./assets/favicon.png"
  },
  experiments: {
    tsconfigPaths: true
  }
};

export default config;