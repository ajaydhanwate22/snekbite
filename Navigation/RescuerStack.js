import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RescuerLoginScreen from '../Component/Rescuer/Rescuerslogin';
import RescuerlanguageScreen from '../Component/Rescuer/Rescuerlanguage';
import RescuerloginformScreen from '../Component/Rescuer/Rescuerloginform';
import RescuersignupScreen from '../Component/Rescuer/Rescuersignup';
import Rescuerforgatepsscreen from '../Component/Rescuer/Rescuerforgateps';
import Rescuerverifymobilescreen from '../Component/Rescuer/VerifyYourMobileNo';
import RescuerCreateNewPassword from '../Component/Rescuer/CreateNewPassword';
import Rescuersentactivetionscreen from '../Component/Rescuer/SendActivation';
import RescuerAuthorizesNamesreen from '../Component/Rescuer/AuthorizesName';
import Rescuerformscreen from '../Component/Rescuer/Rescuform';
import Rescuanimalscreen from '../Component/Rescuer/Rescuanimal';
import RescuePatientFormscren from '../Component/Rescuer/RescuePatientForm,';
import Rescuerpatientlistscreen from '../Component/Rescuer/Rescuerpatientlist';
import Rescuerpatientprofilescreen from '../Component/Rescuer/Rescuerpatientprofile';
import UsedASVscreen from '../Component/Rescuer/UsedASV';
import StockASVScreen from '../Component/Rescuer/StockASV';
import RescuerAboutscreen from '../Component/Rescuer/RescuerAbout';
import RescuerEditprofilescreen from '../Component/Rescuer/RescuerEditprofilescreen';
import Rescueprivancypolicyscreen from '../Component/Rescuer/Rescueprivancypolicy';
import RescuerFooterNavigation from '../Component/Rescuer/RescuerFooterNavigation';

const Stack = createNativeStackNavigator();

function RescuerStack() {
  return (
    <Stack.Navigator initialRouteName="RescuerlanguageScreen">
        <Stack.Screen name="RescuerLoginScreen" component={RescuerLoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="RescuerlanguageScreen" component={RescuerlanguageScreen} options={{ headerShown: false }} />
        <Stack.Screen name="RescuerloginformScreen" component={RescuerloginformScreen} options={{ headerShown: false }} />
        <Stack.Screen name="RescuersignupScreen" component={RescuersignupScreen} options={{ headerShown: false }} />
        <Stack.Screen name="RescuerFooterNavigation" component={RescuerFooterNavigation} options={{ headerShown: false }} />
        <Stack.Screen name="Rescuerforgatepsscreen" component={Rescuerforgatepsscreen} options={{ headerShown: false }} />
        <Stack.Screen name="Rescuerverifymobilescreen" component={Rescuerverifymobilescreen} options={{ headerShown: false }} />
        <Stack.Screen name="RescuerCreateNewPassword" component={RescuerCreateNewPassword} options={{ headerShown: false }} />
        <Stack.Screen name="Rescuersentactivetionscreen" component={Rescuersentactivetionscreen} options={{ headerShown: false }} />
        <Stack.Screen name="RescuerAuthorizesNamesreen" component={RescuerAuthorizesNamesreen} options={{ headerShown: false }} />
        <Stack.Screen name="Rescuerformscreen" component={Rescuerformscreen} options={{ headerShown: false }} />
        <Stack.Screen name="Rescuanimalscreen" component={Rescuanimalscreen} options={{ headerShown: false }} />
        <Stack.Screen name="RescuePatientFormscren" component={RescuePatientFormscren} options={{ headerShown: false }} />
        <Stack.Screen name="Rescuerpatientlistscreen" component={Rescuerpatientlistscreen} options={{ headerShown: false }} />
        <Stack.Screen name="Rescuerpatientprofilescreen" component={Rescuerpatientprofilescreen} options={{ headerShown: false }} />
        <Stack.Screen name="UsedASVscreen" component={UsedASVscreen} options={{ headerShown: false }} />
        <Stack.Screen name="StockASVScreen" component={StockASVScreen} options={{ headerShown: false }} />
        <Stack.Screen name="RescuerAboutscreen" component={RescuerAboutscreen} options={{ headerShown: false }} />
        <Stack.Screen name="RescuerEditprofilescreen" component={RescuerEditprofilescreen} options={{ headerShown: false }} />
        <Stack.Screen name="Rescueprivancypolicyscreen" component={Rescueprivancypolicyscreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default RescuerStack;
