import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Alert,
  Image,
  ScrollView,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import axios from 'axios';

function GuestLoginform({navigation}) {
  const {t} = useTranslation();
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');

  const handleButtonPress = (screenName) => {
    if (screenName === 'Guestforgatpsscreen') {
      navigation.navigate('Guestforgatpsscreen');
    } else if (screenName === 'Guestsignupscreen') {
      navigation.navigate('Guestsignupscreen');
    } else if (!Username || !Password) {
      Alert.alert('Error', 'Please fill out all fields');
      return;
    } else {
      const formData = new FormData();
      formData.append('Username', Username);
      formData.append('Password', Password);

      axios
        .post('http://ajayapi.sp-consultants.in/Guestsignin.php', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(response => {
          const responseJson = response.data;
          if (responseJson.message === 'LoggedIn successfully') {
            Alert.alert('Success', responseJson.message, [
              {
                text: 'OK',
                onPress: () => navigation.navigate('Guestprofilescreen'),
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
            <ScrollView style={{backgroundColor:'white'}}>
        <View style={{ backgroundColor: 'white' }}>
          <ImageBackground
            source={require('../Assets/background.png')}
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
                   source={require('../Assets/logo.png')}
              style={{ resizeMode: 'contain', height: 200, width: 200 }}
            />
          </ImageBackground>
          <View
            style={{
              width: 300,
              height: 450,
              backgroundColor: 'white',
              left: 30,
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
                fontSize: 20,
                margin: 30,
                fontWeight: 'bold',
              }}
            >
              Sign In
            </Text>
            <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: '#093624',
              borderRadius: 10,
              left:10,
              paddingLeft:10,
              gap:10,
              margin: 12,
              width: 250,
              height: 45,
            }}
          >
            <Image source={require('../Assets/signinusernameicon.png')} />
            <TextInput 
              placeholder="Username"
              placeholderTextColor="#093624"
              value={Username }
              onChangeText={setUsername}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: '#093624',
              borderRadius: 10,
              left:10,
              paddingLeft:10,
              gap:10,
              margin: 12,
              width: 250,
              height: 45,
            }}
          >
            <Image source={require('../Assets/password.png')} />
            <TextInput 
              placeholder="Password"
              placeholderTextColor="#093624"
              value={Password}
              onChangeText={setPassword}
            />
          </View>
            <View  style={{gap:40}}>
            <TouchableOpacity onPress={() => handleButtonPress('Guestforgatpsscreen')}>
              <Text
                style={{
                  textAlign: 'right',
                  right: 30,
                  color: '#404040',
                  fontSize: 12,
                  textDecorationLine: 'underline',
                }}
              >
                Forgot Password ?
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
           onPress={() => handleButtonPress('Guestprofilescreen')}
            >
              <View
                style={{
                  height: 40,
                  width: 140,
                  borderWidth: 1,
                  left:80,
                  borderRadius: 10,
                  backgroundColor: '#093624',
                }}
              >
                <Text style={{ color: 'white', padding: 8, textAlign:'center' }}>
                  Log In
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity     onPress={() => handleButtonPress('Guestsignupscreen')}> 
            <Text
              style={{
                textAlign: 'center',
                color: '#000000',
                fontSize: 10,
                top:-30
              }}
            >
              New here? Create an account 
            </Text>
            </TouchableOpacity>
            </View>
            <Text style={{textAlign:"center", color:'#000000', top:-15}}>Or</Text>
            <View style={{flexDirection:'row', justifyContent:"center", gap:10, top:10}}>
            <Image source={require('../Assets/linkdein.png')}/>
            <Image source={require('../Assets/goggle.png')}/>
            </View>
          
          </View>
        </View>
      </ScrollView>
    </>
  );
}

export default GuestLoginform;
