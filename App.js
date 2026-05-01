import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ContactDetailsScreen from './src/screens/ContactDetailsScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import CheckOutScreen from './src/screens/CheckOutScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PaymentFailedScreen from './src/screens/PaymentFailedScreen';
import SuccessScreen from './src/screens/SuccessScreen';


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaView >
      <StatusBar style="auto" />
      <View style={styles.container}>

        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='CheckOutScreen'>
            <Stack.Screen
              name="ContactDetailsScreen"
              component={ContactDetailsScreen}
            />
            <Stack.Screen
              name="CheckOutScreen"
              component={CheckOutScreen}
            />
            <Stack.Screen
              name="PaymentFailedScreen"
              component={PaymentFailedScreen}
            />

            <Stack.Screen
              name="SuccessScreen"
              component={SuccessScreen}
            />


          </Stack.Navigator>
        </NavigationContainer>
        {/* {
          !isShowCheckOut ? <ContactDetailsScreen setShowCheckout={setShowCheckout} /> : <CheckOutScreen />
        } */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%'
  },
});
