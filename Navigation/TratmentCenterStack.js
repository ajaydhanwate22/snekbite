import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../Component/TreatmentCenter/Login';
import LanguageScreen from '../Component/TreatmentCenter/Language';
import SignupScreen from '../Component/TreatmentCenter/Signup';
import Loginform2Screen from '../Component/TreatmentCenter/Loginform2';
import Patientgform from '../Component/TreatmentCenter/Patientform';
import Profiletab from '../Component/TreatmentCenter/Profiletab';
import Patientlist from '../Component/TreatmentCenter/Patientlist';
import Patientprofile from '../Component/TreatmentCenter/Patientprofile';
import Treatmentnewpsscreen from '../Component/TreatmentCenter/Treatmentnewps';
import Trantmentforgatpsscreen from '../Component/TreatmentCenter/Trantmentforgatps';
import Verifymobilescreen from '../Component/TreatmentCenter/Verifymobilescreen';
import TreatmentUsedASVscreen from '../Component/TreatmentCenter/TreatmentUsedASV';
import TreatmentAvailableASVscreen from '../Component/TreatmentCenter/TreatmentAvailableASV';
import Abouttabscreen from '../Component/TreatmentCenter/Abouttab';
import Editprofilescreen from '../Component/TreatmentCenter/Editprofilescreen';
import Privancypolicyscreen from '../Component/TreatmentCenter/Privancypolicy';
import Patientedit from '../Component/TreatmentCenter/Patientedit';
import AuthorEditscreen from '../Component/TreatmentCenter/AuthorEditscreen';
import Authorprofilescreen from '../Component/TreatmentCenter/Authorprofilescreen';

const Stack = createNativeStackNavigator();

function TratmentCenterStack() {
  return (
    <Stack.Navigator initialRouteName="Language">
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Language" component={LanguageScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Loginform2Screen" component={Loginform2Screen} options={{ headerShown: false }} />
      <Stack.Screen name="patientform" component={Patientgform} options={{ headerShown: false }} />
        <Stack.Screen name="Profiletab" component={Profiletab} options={{ headerShown: false }} />
        <Stack.Screen name="Patientlist" component={Patientlist} options={{ headerShown: false }} />
        <Stack.Screen name="Patientprofile" component={Patientprofile} options={{ headerShown: false }} />
        <Stack.Screen name="Patientedit" component={Patientedit} options={{ headerShown: false }} />
        <Stack.Screen name="AuthorEditscreen" component={AuthorEditscreen} options={{ headerShown: false }} />
        <Stack.Screen name="Authorprofilescreen" component={Authorprofilescreen} options={{ headerShown: false }} />
        <Stack.Screen name="Treatmentnewpsscreen" component={Treatmentnewpsscreen} options={{ headerShown: false }} />
        <Stack.Screen name="Trantmentforgatpsscreen" component={Trantmentforgatpsscreen} options={{ headerShown: false }} />
        <Stack.Screen name="Verifymobilescreen" component={Verifymobilescreen} options={{ headerShown: false }} />
        <Stack.Screen name="TreatmentUsedASVscreen" component={TreatmentUsedASVscreen} options={{ headerShown: false }} />
        <Stack.Screen name="TreatmentAvailableASVscreen" component={TreatmentAvailableASVscreen} options={{ headerShown: false }} />
        <Stack.Screen name="Abouttabscreen" component={Abouttabscreen} options={{ headerShown: false }} />
        <Stack.Screen name="Editprofilescreen" component={Editprofilescreen} options={{ headerShown: false }} />
        <Stack.Screen name="Privancypolicyscreen" component={Privancypolicyscreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default TratmentCenterStack;
