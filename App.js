import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import './i18';
import React from 'react';
import HomeScreen from './Component/Home';
import WelocomeScreen from './Component/Welcome';
import LoginScrren from './Component/Login';
import LanguageScreen from './Component/Language';
import Patientgform from './Component/Patientform';
import Profiletab from './Component/Profiletab';
import Patientlist from './Component/Patientlist';
import Patientprofile from './Component/Patientprofile';
import GuestLoginScreen from './Component/Guest/GuestLogin';
import GuestLoginform from './Component/Guest/GuestLoginform';
import GuestLanguage from './Component/Guest/GuestLanguage';
import Guestsignupscreen from './Component/Guest/Guestsignup';
import Guestprofilescreen from './Component/Guest/Guestprofile';
import Guestformscreen from './Component/Guest/Guestform';
import RescuerLoginScreen from './Component/Rescuer/Rescuerslogin';
import RescuerlanguageScreen from './Component/Rescuer/Rescuerlanguage';
import RescuerloginformScreen from './Component/Rescuer/Rescuerloginform';
import RescuersignupScreen from './Component/Rescuer/Rescuersignup';
import Rescuerforgatepsscreen from './Component/Rescuer/Rescuerforgateps';
import Rescuerverifymobilescreen from './Component/Rescuer/VerifyYourMobileNo';
import RescuerCreateNewPassword from './Component/Rescuer/CreateNewPassword';
import Rescuersentactivetionscreen from './Component/Rescuer/SendActivation';
import RescuerAuthorizesNamesreen from './Component/Rescuer/AuthorizesName';
import Rescuerformscreen from './Component/Rescuer/Rescuform';
import Rescuanimalscreen from './Component/Rescuer/Rescuanimal';
import RescuePatientFormscren from './Component/Rescuer/RescuePatientForm,';
import Rescuerpatientlistscreen from './Component/Rescuer/Rescuerpatientlist';
import Rescuerpatientprofilescreen from './Component/Rescuer/Rescuerpatientprofile';
import UsedASVscreen from './Component/Rescuer/UsedASV';
import SignupScreen from './Component/Signup';
import Loginform2Screen from './Component/Loginform2';
import Treatmentnewpsscreen from './Component/Treatmentnewps';
import Trantmentforgatpsscreen from './Component/Trantmentforgatps';
import Verifymobilescreen from './Component/Verifymobilescreen';
import TreatmentUsedASVscreen from './Component/TreatmentUsedASV';
import TreatmentAvailableASVscreen from './Component/TreatmentAvailableASV';
import Abouttabscreen from './Component/Abouttab';
import Editprofilescreen from './Component/Editprofilescreen';
import Privancypolicyscreen from './Component/Privancypolicy';
import StockASVScreen from './Component/Rescuer/StockASV';
import RescuerAboutscreen from './Component/Rescuer/RescuerAbout';
import RescuerEditprofilescreen from './Component/Rescuer/RescuerEditprofilescreen';
import Rescueprivancypolicyscreen from './Component/Rescuer/Rescueprivancypolicy';
import GuestAboutscreen from './Component/Guest/GuestAbout';
import GuestEditscreen from './Component/Guest/GuestEditscreen';
import GuestprivancyScreen from './Component/Guest/Guestprivancy';
import Guestforgatpsscreen from './Component/Guest/Guestforgatps';
import Guestverifynoscreen from './Component/Guest/Guestverifyno';
import Guestnewpsscreen from './Component/Guest/Guestnewps';
import Patientedit from './Component/Patientedit';
import AuthorEditscreen from './Component/AuthorEditscreen';


const Stack = createNativeStackNavigator();

function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="WeloCome" component={WelocomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScrren} options={{ headerShown: false }} />
        <Stack.Screen name="Language" component={LanguageScreen} options={{ headerShown: false }} />
        <Stack.Screen name="patientform" component={Patientgform} options={{ headerShown: false }} />
        <Stack.Screen name="Profiletab" component={Profiletab} options={{ headerShown: false }} />
        <Stack.Screen name="Patientlist" component={Patientlist} options={{ headerShown: false }} />
        <Stack.Screen name="Patientprofile" component={Patientprofile} options={{ headerShown: false }} />
        <Stack.Screen name="Patientedit" component={Patientedit} options={{ headerShown: false }} />
        <Stack.Screen name="AuthorEditscreen" component={AuthorEditscreen} options={{ headerShown: false }} />
        <Stack.Screen name="GuestLogin" component={GuestLoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="GuestLoginform" component={GuestLoginform} options={{ headerShown: false }} />
        <Stack.Screen name="GuestLanguage" component={GuestLanguage} options={{ headerShown: false }} />
        <Stack.Screen name="Guestsignupscreen" component={Guestsignupscreen} options={{ headerShown: false }} />
        <Stack.Screen name="Guestprofilescreen" component={Guestprofilescreen} options={{ headerShown: false }} />
        <Stack.Screen name="Guestformscreen" component={Guestformscreen} options={{ headerShown: false }} />
        <Stack.Screen name="RescuerLoginScreen" component={RescuerLoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="RescuerlanguageScreen" component={RescuerlanguageScreen} options={{ headerShown: false }} />
        <Stack.Screen name="RescuerloginformScreen" component={RescuerloginformScreen} options={{ headerShown: false }} />
        <Stack.Screen name="RescuersignupScreen" component={RescuersignupScreen} options={{ headerShown: false }} />
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
        <Stack.Screen name="SignupScreen" component={SignupScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Loginform2Screen" component={Loginform2Screen} options={{ headerShown: false }} />
        <Stack.Screen name="Treatmentnewpsscreen" component={Treatmentnewpsscreen} options={{ headerShown: false }} />
        <Stack.Screen name="Trantmentforgatpsscreen" component={Trantmentforgatpsscreen} options={{ headerShown: false }} />
        <Stack.Screen name="Verifymobilescreen" component={Verifymobilescreen} options={{ headerShown: false }} />
        <Stack.Screen name="TreatmentUsedASVscreen" component={TreatmentUsedASVscreen} options={{ headerShown: false }} />
        <Stack.Screen name="TreatmentAvailableASVscreen" component={TreatmentAvailableASVscreen} options={{ headerShown: false }} />
        <Stack.Screen name="Abouttabscreen" component={Abouttabscreen} options={{ headerShown: false }} />
        <Stack.Screen name="Editprofilescreen" component={Editprofilescreen} options={{ headerShown: false }} />
        <Stack.Screen name="Privancypolicyscreen" component={Privancypolicyscreen} options={{ headerShown: false }} />
        <Stack.Screen name="StockASVScreen" component={StockASVScreen} options={{ headerShown: false }} />
        <Stack.Screen name="RescuerAboutscreen" component={RescuerAboutscreen} options={{ headerShown: false }} />
        <Stack.Screen name="RescuerEditprofilescreen" component={RescuerEditprofilescreen} options={{ headerShown: false }} />
        <Stack.Screen name="Rescueprivancypolicyscreen" component={Rescueprivancypolicyscreen} options={{ headerShown: false }} />
        <Stack.Screen name="GuestAboutscreen" component={GuestAboutscreen} options={{ headerShown: false }} />
        <Stack.Screen name="GuestEditscreen" component={GuestEditscreen} options={{ headerShown: false }} />
        <Stack.Screen name="GuestprivancyScreen" component={GuestprivancyScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Guestforgatpsscreen" component={Guestforgatpsscreen} options={{ headerShown: false }} />
        <Stack.Screen name="Guestverifynoscreen" component={Guestverifynoscreen} options={{ headerShown: false }} />
        <Stack.Screen name="Guestnewpsscreen" component={Guestnewpsscreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
