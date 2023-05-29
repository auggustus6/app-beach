import 'react-native-gesture-handler';

import {Box, NativeBaseProvider} from 'native-base';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import LoginView from './src/views/LoginView';
import {THEME} from './src/theme/theme';
import AppRoutes from './src/routes/app.routes';

export default function App() {
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar translucent backgroundColor={'transparent'} />
      <AppRoutes />
      {/* <LoginView /> */}
    </NativeBaseProvider>
  );
}
