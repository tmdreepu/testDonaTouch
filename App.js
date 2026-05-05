import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import ContactDetailsScreen from './src/screens/ContactDetailsScreen';
import CheckOutScreen from './src/screens/CheckOutScreen';
import PaymentFailedScreen from './src/screens/PaymentFailedScreen';
import SuccessScreen from './src/screens/SuccessScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

// Navigation Stack
const Stack = createNativeStackNavigator();

// Screen Routes Configuration
const SCREENS = {
  CONTACT_DETAILS: 'ContactDetailsScreen',
  CHECKOUT: 'CheckOutScreen',
  PAYMENT_FAILED: 'PaymentFailedScreen',
  SUCCESS: 'SuccessScreen',
};

/**
 * App Component - Main entry point
 * Manages navigation flow between:
 * Contact Details → Checkout → Success/Failed
 */
const App = () => {
  const navigationOptions = {
    headerShown: false,
    animationEnabled: true,
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={navigationOptions}
          initialRouteName={SCREENS.CONTACT_DETAILS}
        >
          <Stack.Screen
            name={SCREENS.CONTACT_DETAILS}
            component={ContactDetailsScreen}
          />
          <Stack.Screen
            name={SCREENS.CHECKOUT}
            component={CheckOutScreen}
          />
          <Stack.Screen
            name={SCREENS.PAYMENT_FAILED}
            component={PaymentFailedScreen}
          />
          <Stack.Screen
            name={SCREENS.SUCCESS}
            component={SuccessScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
