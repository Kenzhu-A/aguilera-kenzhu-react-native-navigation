import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/Home/HomeScreen';
import CartScreen from '../screens/Cart/CartScreen';
import CheckoutScreen from '../screens/Checkout/CheckoutScreen';
import { useTheme } from '../context/ThemeContext';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const { colors } = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',

        /* 🔥 IMPORTANT PART */
        headerStyle: {
          backgroundColor: colors.background, // no more white
        },

        headerTintColor: colors.text,

        contentStyle: {
          backgroundColor: colors.background,
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerBackVisible: false,
          gestureEnabled: false,
          title: 'Kenzhus Shop',
        }}
      />

      <Stack.Screen name="Cart" component={CartScreen} />

      <Stack.Screen
        name="Checkout"
        component={CheckoutScreen}
        options={{
          headerBackVisible: false,
          gestureEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
}
