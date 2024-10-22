import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GuestLoginScreen from '../Component/Guest/GuestLogin';
import GuestLoginform from '../Component/Guest/GuestLoginform';
import GuestLanguage from '../Component/Guest/GuestLanguage';
import Guestsignupscreen from '../Component/Guest/Guestsignup';
import Guestprofilescreen from '../Component/Guest/Guestprofile';
import Guestformscreen from '../Component/Guest/Guestform';
import GuestAboutscreen from '../Component/Guest/GuestAbout';
import GuestEditscreen from '../Component/Guest/GuestEditscreen';
import GuestprivancyScreen from '../Component/Guest/Guestprivancy';
import Guestforgatpsscreen from '../Component/Guest/Guestforgatps';
import Guestverifynoscreen from '../Component/Guest/Guestverifyno';
import Guestnewpsscreen from '../Component/Guest/Guestnewps';

const Stack = createNativeStackNavigator();

function GuestStack() {
    return (
      <Stack.Navigator initialRouteName="GuestLanguage">
        <Stack.Screen name="GuestLogin" component={GuestLoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="GuestLoginform" component={GuestLoginform} options={{ headerShown: false }} />
        <Stack.Screen name="GuestLanguage" component={GuestLanguage} options={{ headerShown: false }} />
        <Stack.Screen name="Guestsignupscreen" component={Guestsignupscreen} options={{ headerShown: false }} />
        <Stack.Screen name="Guestprofilescreen" component={Guestprofilescreen} options={{ headerShown: false }} />
        <Stack.Screen name="Guestformscreen" component={Guestformscreen} options={{ headerShown: false }} />
        <Stack.Screen name="GuestAboutscreen" component={GuestAboutscreen} options={{ headerShown: false }} />
        <Stack.Screen name="GuestEditscreen" component={GuestEditscreen} options={{ headerShown: false }} />
        <Stack.Screen name="GuestprivancyScreen" component={GuestprivancyScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Guestforgatpsscreen" component={Guestforgatpsscreen} options={{ headerShown: false }} />
        <Stack.Screen name="Guestverifynoscreen" component={Guestverifynoscreen} options={{ headerShown: false }} />
        <Stack.Screen name="Guestnewpsscreen" component={Guestnewpsscreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    );
  }
  
  export default GuestStack;