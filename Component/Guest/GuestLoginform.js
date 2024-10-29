import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Image, ScrollView, Alert } from 'react-native';
import {useTranslation} from 'react-i18next';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'; 
import AntDesign from 'react-native-vector-icons/AntDesign';

function GuestLoginform({navigation}) {
  const {t} = useTranslation();
  const [username, setusername] = useState('');
  const [Password, setPassword] = useState('');

  const handleButtonPress = screenName => {
    if (screenName === 'Guestforgatpsscreen') {
      navigation.navigate('Guestforgatpsscreen');
    } else if (screenName === 'Guestsignupscreen') {
      navigation.navigate('Guestsignupscreen');
    } else if (!username || !Password) {
      Alert.alert('Error', 'Please fill out all fields');
      return;
    } else {
      const formData = new FormData();
      formData.append('Username', username);
      formData.append('Password', Password);

      axios
        .post('https://realrate.store/ajayApi/Guestsignin.php', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(async response => {
          const responseJson = response.data;
          if (responseJson.message === 'LoggedIn successfully') {
            const userData = responseJson.user;
            try {
              await AsyncStorage.setItem(
                'userData',
                JSON.stringify({
                  userId: userData.id,
                }),
              );
            } catch (error) {
              console.error('Error storing data', error);
            }
            Alert.alert('Success', responseJson.message, [
              {
                text: 'OK',
                onPress: () =>
                  navigation.navigate('Guestprofilescreen', {
                    userId: userData.id,
                  }),
              },
            ]);
          } else {
            Alert.alert('Error', responseJson.message);
          }
        })
        .catch(error => {
          Alert.alert('Error', 'An error occurred while submitting the data');
        });
    }
  };
  
  return (
    <>
     <ScrollView style={{backgroundColor: 'white'}}>
        <View style={{backgroundColor: 'white'}}>
        <ImageBackground source={require('../Assets/background.png')} style={{ flex: 1, alignItems: 'center', justifyContent: 'center', overflow: 'hidden', height: 300, borderBottomLeftRadius: 40, borderBottomRightRadius: 40, position: 'relative' }}>
          <AntDesign name="leftcircle" size={25} color="white" style={{ position: 'absolute',top: 20,   left: 15}}  onPress={() => navigation.goBack()}/>
            <Image
              source={require('../Assets/logo.png')}
              style={{resizeMode: 'contain', height: 150, width: 150}}
            />
          </ImageBackground>
          <View style={{paddingHorizontal:20}}>
          <View style={{ width: '100%', height: 450, backgroundColor: 'white', top: -50, borderRadius: 30, marginBottom: -20, elevation: 5, padding: 20, gap: 25 }}>
          <Text style={{ textAlign: 'center', color: '#093624', fontSize: 25, margin: 20, fontWeight: 'bold' }}>{t('Sign In')}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#093624', borderRadius: 10, paddingLeft: 15, gap: 20, width: '100%', height: 55 }}>
          <FontAwesome5 name="user-check" size={20} color="#093624"/>
          <TextInput placeholder={t('Username')} placeholderTextColor="#093624" value={username} onChangeText={text => setusername(text.charAt(0).toUpperCase() + text.slice(1).toLowerCase())} style={{ flex: 1 }} />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#093624', borderRadius: 10, paddingLeft: 15, gap: 20, width: '100%', height: 55 }}>
           <FontAwesome5 name="key" size={20} color="#093624"/>
           <TextInput placeholder={t('Password')} placeholderTextColor="#093624" value={Password} onChangeText={setPassword} style={{ flex: 1 }} />
            </View>
            <View style={{gap: 40}}>
              <TouchableOpacity
                onPress={() => handleButtonPress('Guestforgatpsscreen')}>
            <Text style={{ textAlign: 'right', right: 20, color: '#404040', fontSize: 12, textDecorationLine: 'underline' }}>{t('Forgot Password?')}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleButtonPress('Guestprofilescreen')}>
              <View style={{ height: 55, width: '50%', borderWidth: 1, left: 75, borderRadius: 10, top: -10, backgroundColor: '#093624' }}>
              <Text style={{ color: 'white', padding: 15, textAlign: 'center' }}>{t('Log In')}</Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleButtonPress('Guestsignupscreen')}>
            <Text style={{ textAlign: 'center', color: '#000000', fontSize: 10, top: -25 }}>{t('New here? Create an account')}</Text>
              </TouchableOpacity>
            </View>
          </View> 
          </View>
        </View>
      </ScrollView>
    </>
  );
}

export default GuestLoginform;
