import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Practice from '../screens/practice';
import {NavigationContainer} from '@react-navigation/native';
import FindPlant from '../screens/findPlant';

import ListCounter from '../screens/listCounter';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="FindPlant" component={FindPlant} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
