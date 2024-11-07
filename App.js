import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider, useAuth } from './Component/AuthContext'; 
import TratmentCenterStack from './Navigation/TratmentCenterStack';
import RescuerStack from './Navigation/RescuerStack';
import GuestStack from './Navigation/GuestStack';
import HomeScreen from './Component/Home';
import WelocomeScreen from './Component/Welcome';
import './i18';
import Profiletab from './Component/TreatmentCenter/Profiletab';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
}

function RootNavigator() {
  const { user } = useAuth(); 

  return (
    <Stack.Navigator>
      {user ? (
        <Stack.Screen name="Profiletab" component={Profiletab} options={{ headerShown: true }} />
      ) : (
      
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      )}
      <Stack.Screen name="TratmentCenterStack" component={TratmentCenterStack} options={{ headerShown: false }} />
      <Stack.Screen name="RescuerStack" component={RescuerStack} options={{ headerShown: false }} />
      <Stack.Screen name="GuestStack" component={GuestStack} options={{ headerShown: false }} />
      <Stack.Screen name="WeloCome" component={WelocomeScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default App;
