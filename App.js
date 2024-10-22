import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TratmentCenterStack from './Navigation/TratmentCenterStack';
import { NavigationContainer } from '@react-navigation/native';
import RescuerStack from './Navigation/RescuerStack';
import WelocomeScreen from './Component/Welcome';
import GuestStack from './Navigation/GuestStack';
import HomeScreen from './Component/Home';
import React from 'react';
import './i18';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="TratmentCenterStack" component={TratmentCenterStack} options={{ headerShown: false }}/> 
        <Stack.Screen name="RescuerStack" component={RescuerStack} options={{ headerShown: false }}/>
        <Stack.Screen name="GuestStack" component={GuestStack} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="WeloCome" component={WelocomeScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
