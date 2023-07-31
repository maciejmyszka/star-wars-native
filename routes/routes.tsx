import {
  createDrawerNavigator,
  DrawerItemList,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import { Home } from '../views/home';
import { People } from '../views/people';
import { Planets } from '../views/planets';
import { Species } from '../views/species';
import { Starships } from '../views/starships';
import { Vehicles } from '../views/vehicles';
import { PersonDetails } from '../views/personDetails';
import { PlanetDetails } from '../views/planetDetails';
import { SpecieDetails } from '../views/specieDetails';
import { StarshipDetails } from '../views/starshipDetails';
import { VehicleDetails } from '../views/vehicleDetails';
import { Text } from 'native-base';

const Drawer = createDrawerNavigator();

export const Routes = () => {
  return (
    <Drawer.Navigator
      initialRouteName='Home'
      backBehavior='history'
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#000',
        },
        drawerLabelStyle: {
          fontFamily: 'Starjedi',
        },
        drawerActiveBackgroundColor: 'yellow',
        drawerActiveTintColor: 'black',
        drawerInactiveTintColor: 'white',
      }}
      drawerContent={(props) => (
        <DrawerContentScrollView {...props}>
          <Text
            style={{
              fontFamily: 'Starjedi',
              color: 'yellow',
              textAlign: 'center',
              fontSize: 30,
              paddingTop: 40,
            }}
          >
            Star Wars
          </Text>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
      )}
    >
      <Drawer.Screen
        name='Home'
        component={Home}
        options={{
          headerShown: false,
        }}
      />

      <Drawer.Screen
        name='People'
        component={People}
        options={{
          title: 'Characters',
          headerStyle: {
            backgroundColor: '#000',
            height: 110,
          },
          headerTitleStyle: {
            fontFamily: 'Starjedi',
            color: 'yellow',
            fontSize: 25,
          },
          headerTintColor: 'yellow',
        }}
      />
      <Drawer.Screen
        name='PersonDetails'
        component={PersonDetails}
        options={{
          title: 'Character details',
          drawerItemStyle: { height: 0 },
          headerStyle: {
            backgroundColor: '#000',
            height: 110,
          },
          headerTitleStyle: {
            fontFamily: 'Starjedi',
            color: 'yellow',
            fontSize: 19,
          },
          headerTintColor: 'yellow',
        }}
      />

      <Drawer.Screen
        name='Planets'
        component={Planets}
        options={{
          headerStyle: {
            backgroundColor: '#000',
            height: 110,
          },
          headerTitleStyle: {
            fontFamily: 'Starjedi',
            color: 'yellow',
            fontSize: 19,
          },
          headerTintColor: 'yellow',
        }}
      />
      <Drawer.Screen
        name='PlanetDetails'
        component={PlanetDetails}
        options={{
          drawerItemStyle: { height: 0 },
          title: 'Planet details',
          headerStyle: {
            backgroundColor: '#000',
            height: 110,
          },
          headerTitleStyle: {
            fontFamily: 'Starjedi',
            color: 'yellow',
            fontSize: 19,
          },
          headerTintColor: 'yellow',
        }}
      />

      <Drawer.Screen
        name='Species'
        component={Species}
        options={{
          headerStyle: {
            backgroundColor: '#000',
            height: 110,
          },
          headerTitleStyle: {
            fontFamily: 'Starjedi',
            color: 'yellow',
            fontSize: 19,
          },
          headerTintColor: 'yellow',
        }}
      />
      <Drawer.Screen
        name='SpecieDetails'
        component={SpecieDetails}
        options={{
          drawerItemStyle: { height: 0 },
          title: 'Specie details',
          headerStyle: {
            backgroundColor: '#000',
            height: 110,
          },
          headerTitleStyle: {
            fontFamily: 'Starjedi',
            color: 'yellow',
            fontSize: 19,
          },
          headerTintColor: 'yellow',
        }}
      />

      <Drawer.Screen
        name='Starships'
        component={Starships}
        options={{
          headerStyle: {
            backgroundColor: '#000',
            height: 110,
          },
          headerTitleStyle: {
            fontFamily: 'Starjedi',
            color: 'yellow',
            fontSize: 19,
          },
          headerTintColor: 'yellow',
        }}
      />
      <Drawer.Screen
        name='StarshipDetails'
        component={StarshipDetails}
        options={{
          drawerItemStyle: { height: 0 },
          title: 'Starship details',
          headerStyle: {
            backgroundColor: '#000',
            height: 110,
          },
          headerTitleStyle: {
            fontFamily: 'Starjedi',
            color: 'yellow',
            fontSize: 19,
          },
          headerTintColor: 'yellow',
        }}
      />

      <Drawer.Screen
        name='Vehicles'
        component={Vehicles}
        options={{
          headerStyle: {
            backgroundColor: '#000',
            height: 110,
          },
          headerTitleStyle: {
            fontFamily: 'Starjedi',
            color: 'yellow',
            fontSize: 19,
          },
          headerTintColor: 'yellow',
        }}
      />
      <Drawer.Screen
        name='VehicleDetails'
        component={VehicleDetails}
        options={{
          drawerItemStyle: { height: 0 },
          title: 'Vehicle details',
          headerStyle: {
            backgroundColor: '#000',
            height: 110,
          },
          headerTitleStyle: {
            fontFamily: 'Starjedi',
            color: 'yellow',
            fontSize: 19,
          },
          headerTintColor: 'yellow',
        }}
      />
    </Drawer.Navigator>
  );
};
