import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import SignInScreen from '../Screens/SignInScreen/SignInScreen';
import MealsOverView from '../Screens/MealsOverView';
import MealDetails from '../Screens/MealDetails';
import CategoriesScreens from '../Screens/CategoriesScreens';

export default function componentName() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="login Page" component={SignInScreen}></Stack.Screen>
        <Stack.Screen
          name="Category Screen"
          component={CategoriesScreens}></Stack.Screen>
        <Stack.Screen
          name="Meals OverView"
          component={MealsOverView}></Stack.Screen>
        <Stack.Screen
          name="Meals Details"
          component={MealDetails}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
