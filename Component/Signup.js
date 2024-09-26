import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
  Alert
} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTranslation } from 'react-i18next';

const SignupScreen = ({navigation}) => {

  const { t } = useTranslation();
  const [centerName, setCenterName] = useState('');
  const [centerLocation, setCenterLocation] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [currentStockASV, setCurrentStockASV] = useState('');
  const [availabilityOfASV, setAvailabilityOfASV] = useState('');
  const [description, setDescription] = useState('');
  const [authorizesName, setAuthorizesName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleButtonPress = async () => {
    if (!centerName || !centerLocation || !email || !contactNumber || !authorizesName || !password || password !== confirmPassword) {
      Alert.alert('Error', 'Please fill all fields and ensure passwords match.');
      return;
    }
    
    const formData = new FormData();
    formData.append('CenterName', centerName);
    formData.append('CenterLocation', centerLocation);
    formData.append('EmailID', email);
    formData.append('ContactNumber', contactNumber);
    formData.append('CurrentstockASV', currentStockASV);
    formData.append('AvailabilityofASV', availabilityOfASV);
    formData.append('Description', description);
    formData.append('AuthorizesName', authorizesName);
    formData.append('Password', password);
    formData.append('ConfirmPassword', confirmPassword);

    try {
      const response = await axios.post('https://realrate.store/ajayApi/Tratmentsignup.php', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const responseJson = response.data;
      if (responseJson.message === 'Registration successfully') {
        await AsyncStorage.setItem('userData', JSON.stringify({
          authorizesName,
          email,
          centerLocation,
          contactNumber,
          centerName,
        }));

        Alert.alert('Success', 'Registration successful!', [
          {
            text: 'OK',
            onPress: () => navigation.navigate('Profiletab', {
              authorizesName,
              email,
              centerLocation,
              contactNumber,
              centerName
            }),
          },
        ]);
      } else {
        Alert.alert('Error', 'Data not saved: ' + responseJson.message);
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'An error occurred while submitting the data');
    }
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1, backgroundColor: 'white'}}>
      <ImageBackground
        source={require('./Assets/background.png')}
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          height: 300,
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
        }}>
        <Image
          source={require('./Assets/logo.png')}
          style={{resizeMode: 'contain', height: 200, width: 200}}
        />
      </ImageBackground>
      <View
        style={{
          width: 340,
          height: 950,
          backgroundColor: 'white',
          left: 20,
          top: -60,
          borderRadius: 30,
          marginBottom: -30,
          elevation: 5,
        }}>
        <Text
          style={{
            textAlign: 'center',
            color: '#093624',
            fontSize: 25,
            margin: 30,
            fontWeight: 'bold',
          }}>
          {t('Sign Up')}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: '#093624',
            borderRadius: 10,
            left: 10,
            paddingLeft: 10,
            gap: 20,
            margin: 12,
            width: 300,
            height: 50,
          }}>
          <Image source={require('./Assets/centername.png')} />
          <TextInput
            placeholder={t("Centre name")}
            placeholderTextColor="#093624"
            value={centerName}
            onChangeText={setCenterName}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: '#093624',
            borderRadius: 10,
            left: 10,
            paddingLeft: 10,
            gap: 17,
            margin: 12,
            width: 300,
            height: 50,
          }}>
          <Image source={require('./Assets/location.png')} />
          <TextInput
            placeholder={t("Centre location")}
            placeholderTextColor="#093624"
            value={centerLocation}
            onChangeText={setCenterLocation}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: '#093624',
            borderRadius: 10,
            left: 10,
            paddingLeft: 15,
            gap: 20,
            margin: 12,
            width: 300,
            height: 50,
          }}>
          <Image source={require('./Assets/mail.png')} />
          <TextInput
            placeholder={t("Email ID (Optional)")}
            placeholderTextColor="#093624"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: '#093624',
            borderRadius: 10,
            left: 10,
            paddingLeft: 15,
            gap: 20,
            margin: 12,
            width: 300,
            height: 50,
          }}>
          <Image source={require('./Assets/contact.png')} />
          <TextInput
            placeholder={t("Contact number")}
            placeholderTextColor="#093624"
            value={contactNumber}
            onChangeText={setContactNumber}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: '#093624',
            borderRadius: 10,
            left: 10,
            paddingLeft: 20,
            gap: 22,
            margin: 12,
            width: 300,
            height: 50,
          }}>
          <Image source={require('./Assets/rescuerusernameicon.png')} />
          <TextInput
            placeholder={t("Authorizes Name")}
            placeholderTextColor="#093624"
            value={authorizesName}
            onChangeText={setAuthorizesName}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: '#093624',
            borderRadius: 10,
            left: 10,
            paddingLeft: 20,
            gap: 20,
            margin: 12,
            width: 300,
            height: 50,
          }}>
          <Image source={require('./Assets/asvavailable.png')} />
          <TextInput
            placeholder={t("Availability of ASV")}
            placeholderTextColor="#093624"
            value={availabilityOfASV}
            onChangeText={setAvailabilityOfASV}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: '#093624',
            borderRadius: 10,
            left: 10,
            paddingLeft: 15,
            gap: 20,
            margin: 12,
            width: 300,
            height: 50,
          }}>
          <Image source={require('./Assets/currASV.png')} />
          <TextInput
            placeholder={t("Current stock ASV")}
            placeholderTextColor="#093624"
            value={currentStockASV}
            onChangeText={setCurrentStockASV}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: '#093624',
            borderRadius: 10,
            left: 10,
            paddingLeft: 15,
            gap: 20,
            margin: 12,
            width: 300,
            height: 50,
          }}>
          <Image source={require('./Assets/description.png')} />
          <TextInput
            placeholder={t("Description")}
            placeholderTextColor="#093624"
            value={description}
            onChangeText={setDescription}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: '#093624',
            borderRadius: 10,
            left: 10,
            paddingLeft: 20,
            gap: 20,
            margin: 12,
            width: 300,
            height: 50,
          }}>
          <Image source={require('./Assets/password.png')} />
          <TextInput
            placeholder={t("Password")}
            placeholderTextColor="#093624"
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: '#093624',
            borderRadius: 10,
            left: 10,
            paddingLeft: 20,
            gap: 20,
            margin: 12,
            width: 300,
            height: 50,
          }}>
          <Image source={require('./Assets/password.png')} />
          <TextInput
            placeholder={t("Confirm Password")}
            placeholderTextColor="#093624"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </View>
        <TouchableOpacity onPress={handleButtonPress}>
          <View
            style={{
              height: 50,
              margin: 12,
              width: 300,
              left: 10,
              borderWidth: 1,
              borderRadius: 10,
              backgroundColor: '#093624',
              top: 20,
            }}>
            <Text style={{color: 'white', padding: 15, textAlign: 'center'}}>
              {t('Next')}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SignupScreen;
