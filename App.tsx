/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

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

export default function App() {
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar translucent backgroundColor={'transparent'} />
      <LoginView />
    </NativeBaseProvider>
  );
}
