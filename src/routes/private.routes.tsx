import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeView from '../views/HomeView';
import {Box} from 'native-base';
import CustomDrawerHeader from '../components/CustomDrawerHeader';
import CourtView from '../views/CourtView';

const Drawer = createDrawerNavigator();

export function PrivateRoutes() {
  return (
    <Drawer.Navigator
      initialRouteName="court_drawer"
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
      {/* <Drawer.Screen name="Article" component={Article} /> */}
    </Drawer.Navigator>
  );
}
