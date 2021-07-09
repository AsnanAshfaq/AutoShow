import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

// screens 
import HomeScreen from '../screens/HomeScreen';
import ManageCarBrands from '../screens/ManageCarBrands'
import CarDetails from '../screens/CarDetails'
import AddCar from '../screens/AddCar'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerStack = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Manage Car" component={HomeScreen} options={{ header: () => null }} />
      <Drawer.Screen name="Manage Car Brands" component={ManageCarBrands} />
    </Drawer.Navigator>
  )
}

export default function AppStack () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Drawer" component={DrawerStack} options={{ header: () => null }} />
        <Stack.Screen name="Car Details" component={CarDetails} />
        <Stack.Screen name="Add Car" component={AddCar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
