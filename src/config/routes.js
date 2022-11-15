import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Practice from '../screens/practice';
import {NavigationContainer} from '@react-navigation/native';

import ListCounter from '../screens/listCounter';
import Login from '../screens/login';
import Register from '../screens/register';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="Practice" component={Practice} />
        <Stack.Screen name="listCounter" component={ListCounter} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
