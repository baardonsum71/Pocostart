const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

const stubPurchases =
  process.env.EXPO_PUBLIC_CREATE_ENV !== 'PRODUCTION' ||
  !process.env.EXPO_PUBLIC_REVENUE_CAT_APP_STORE_API_KEY;

if (stubPurchases) {
  config.resolver.resolveRequest = (context, moduleName, platform) => {
    if (moduleName === 'react-native-purchases') {
      return {
        filePath: path.resolve(__dirname, 'polyfills/react-native-purchases.ts'),
        type: 'sourceFile',
      };
    }
    if (moduleName === 'react-native-purchases-ui') {
      return {
        filePath: path.resolve(__dirname, 'polyfills/react-native-purchases-ui.ts'),
        type: 'sourceFile',
      };
    }
    return context.resolveRequest(context, moduleName, platform);
  };
}

module.exports = config;
