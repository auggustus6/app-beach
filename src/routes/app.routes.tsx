import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import React from 'react';
import LoginView from '../views/LoginView';
import HomeView from '../views/HomeView';
import {PrivateRoutes} from './private.routes';

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
  const user = true;
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {user ? (
          <Stack.Screen name="home" component={PrivateRoutes} />
        ) : (
          <Stack.Screen name="login" component={LoginView} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
