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
        headerStyle: {
          backgroundColor: colors.background,
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
          title: "Ken's Shop",
          headerBackVisible: false, // Disables back button on Home
          gestureEnabled: false,    // Disables swipe-to-go-back on Home
        }}
      />

      <Stack.Screen 
        name="Cart" 
        component={CartScreen} 
        options={{ title: 'My Cart' }}
      />

      <Stack.Screen
        name="Checkout"
        component={CheckoutScreen}
        options={{
          title: 'Finalize Order',
          headerBackVisible: false,
          gestureEnabled: true,    // Allow swipe back to Cart
        }}
      />
    </Stack.Navigator>
  );
}