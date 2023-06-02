import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeView from '../views/HomeView';
import {Box} from 'native-base';
import CustomDrawerHeader from '../components/CustomDrawerHeader';
import CourtView from '../views/CourtView';
import ProfileView from '../views/ProfileView';
import EventView from '../views/EventView';
import {useEffect, useLayoutEffect, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import LoginView from '../views/LoginView';

const Drawer = createDrawerNavigator();

export function PrivateRoutes() {
  return (
    <Drawer.Navigator
      initialRouteName="home_drawer"
      screenOptions={{
        // drawerLabel: () => null,
        headerTitle: () => <CustomDrawerHeader />,
        drawerContentContainerStyle: {
          justifyContent: 'center',
          flex: 1,
          gap: 16,
          padding: 16,
          paddingBottom: 32,
        },
        headerBackgroundContainerStyle: {
          // backgroundColor: 'transparent',
          elevation: 3,
          borderWidth: 1,
          borderColor: 'white',
          flex: 1,
          zIndex: -1,
        },

        sceneContainerStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Drawer.Screen
        name="home_drawer"
        options={{
          title: 'Home',
        }}
        component={HomeView}
      />
      <Drawer.Screen
        name="court_drawer"
        options={{
          title: 'Quadras',
        }}
        component={CourtView}
      />
      <Drawer.Screen
        name="profile_drawer"
        options={{
          drawerItemStyle: {display: 'none'},
        }}
        component={ProfileView}
      />
      <Drawer.Screen
        name="event_drawer"
        options={{
          title: 'Eventos',
        }}
        component={EventView}
      />

      <Drawer.Screen
        name="login_drawer"
        options={{
          drawerItemStyle: {display: 'none'},
          headerShown: false,
        }}
        component={LoginView}
      />

      <Drawer.Screen
        name="exit_drawer"
        options={{
          title: 'Sair',
          headerShown: false,
        }}
        component={LoginView}
      />
    </Drawer.Navigator>
  );
}
