import React, { useState } from 'react';
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
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Loginform2Screen({ navigation }) {
  const { t } = useTranslation();
  const [AuthorizesName, setAuthorizesName] = useState('');
  const [Password, setPassword] = useState('');

  const handleButtonPress = (screenName) => {
    if (screenName === 'Trantmentforgatpsscreen') {
      navigation.navigate('Trantmentforgatpsscreen');
    } else if (screenName === 'SignupScreen') {
      navigation.navigate('SignupScreen');
    } else if (!AuthorizesName || !Password) {
      Alert.alert('Error', 'Please fill out all fields');
      return;
    } else {
      const formData = new FormData();
      formData.append('AuthorizesName', AuthorizesName);
      formData.append('Password', Password);

      axios
        .post('https://realrate.store/ajayApi/Tratmentslogin.php', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(async response => {
          const responseJson = response.data;
          if (responseJson.message === 'LoggedIn successfully') {
            const userData = responseJson.user;
            try {
              await AsyncStorage.setItem('userData', JSON.stringify({
                authorizesName: userData.AuthorizesName,
                email: userData.EmailID,
                contactNumber: userData.ContactNumber,
                centerLocation: userData.CenterLocation,
                centerName: userData.CenterName
              }));
            } catch (error) {
              console.error('Error storing data', error);
            }
            Alert.alert('Success', responseJson.message, [
              {
                text: 'OK',
                onPress: () => navigation.navigate('Profiletab',{
                  authorizesName: userData.AuthorizesName, 
                  email: userData.EmailID,
                  contactNumber: userData.ContactNumber,
                  centerLocation: userData.CenterLocation,
                  centerName: userData.CenterName
                }),
              },
            ]);
          } else {
            Alert.alert('Error', responseJson.message);
          }
        })
        .catch(error => {
          console.error(error);
          Alert.alert('Error', 'An error occurred while submitting the data');
        });
    }
  };

  return (
    <>
      <ScrollView style={{ backgroundColor: 'white' }}>
        <View style={{ backgroundColor: 'white' }}>
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
            }}
          >
            <Image
              source={require('./Assets/logo.png')}
              style={{ resizeMode: 'contain', height: 200, width: 200 }}
            />
          </ImageBackground>
          <View
            style={{
              width: 330,
              height: 450,
              backgroundColor: 'white',
              left: 25,
              top: -60,
              borderRadius: 30,
              marginBottom: -30,
              elevation: 10,
            }}
          >
            <Text
              style={{
                textAlign: 'center',
                color: '#093624',
                fontSize: 25,
                margin: 30,
                fontWeight: 'bold',
              }}
            >
              {t('Sign In')}
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
                width: 290,
                height: 50,
              }}
            >
              <Image source={require('./Assets/signinusernameicon.png')} />
              <TextInput
                placeholder={t("Authorizes name")}
                placeholderTextColor="#093624"
                value={AuthorizesName}
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
                width: 290,
                height: 50,
              }}
            >
              <Image source={require('./Assets/password.png')} />
              <TextInput
                placeholder={t("Password")}
                placeholderTextColor="#093624"
                value={Password}
                onChangeText={setPassword}
              />
            </View>
            <View style={{ gap: 40 }}>
              <TouchableOpacity
                onPress={() => handleButtonPress('Trantmentforgatpsscreen')}
              >
                <Text
                  style={{
                    textAlign: 'right',
                    right: 30,
                    color: '#404040',
                    fontSize: 12,
                    textDecorationLine: 'underline',
                  }}
                >
                  {t('Forgot Password?')}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleButtonPress('Profiletab')}>
                <View
                  style={{
                    height: 50,
                    width: 200,
                    borderWidth: 1,
                    left: 60,
                    borderRadius: 10,
                    backgroundColor: '#093624',
                  }}
                >
                  <Text
                    style={{
                      color: 'white',
                      padding: 15,
                      textAlign: 'center',
                    }}
                  >
                    {t('Log In')}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleButtonPress('SignupScreen')}
              >
                <Text
                  style={{
                    textAlign: 'center',
                    color: '#000000',
                    fontSize: 8,
                    top: -25,
                  }}
                >
                 {t('New here? Create an account')}
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                gap: 10,
                top: 10,
              }}
            >
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

export default Loginform2Screen;
