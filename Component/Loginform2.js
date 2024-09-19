import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Image,
  ScrollView,
  Alert
} from 'react-native';
import axios from 'axios';

function Loginform2Screen({ navigation }) {
  const [AuthorizesName, setAuthorizesName] = useState('');
  const [Password, setPassword] = useState('');

  const handleButtonPress = () => {
    if (!AuthorizesName || !Password) {
      Alert.alert('Error', 'Please fill out all fields');
      return;
    }

    const data = {
      AuthorizesName: AuthorizesName,
      Password: Password,
    };

    axios
      .post('http://ajayapi.sp-consultants.in/Tratmentslogin.php', data, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        const responseJson = response.data;
        console.log(responseJson)
        if (responseJson.message === 'LoggedIn successfully') {
          Alert.alert('Success', responseJson.message, [
            {
              text: 'OK',
              onPress: () => navigation.navigate('Profiletab'),
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
  };

  return (
    <ScrollView style={{backgroundColor:'white'}}>
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
        <TextInput
          style={{
            height: 40,
            margin: 12,
            width: 250,
            left: 10,
            borderWidth: 1,
            paddingLeft: 30,
            borderRadius: 10,
            borderColor: '#093624',
            color: '#093624',
          }}
          placeholder="AuthorizesName"
          placeholderTextColor="#093624"
          value={AuthorizesName}
          onChangeText={setAuthorizesName}
        />
        <TextInput
          style={{
            height: 40,
            margin: 12,
            width: 250,
            left: 10,
            borderWidth: 1,
            paddingLeft: 30,
            borderRadius: 10,
            borderColor: '#093624',
            color: '#093624',
          }}
          placeholder="Password"
          placeholderTextColor="#093624"
          value={Password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => handleButtonPress('Trantmentforgatpsscreen')}>
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
       onPress={() => handleButtonPress('Profiletab')}
        >
          <View
            style={{
              height: 40,
              margin: 12,
              top: 40,
              width: 100,
              left: 90,
              borderWidth: 1,
              borderRadius: 10,
              backgroundColor: '#093624',
            }}
          >
            <Text style={{ color: 'white', padding: 8, left: 25 }}>
              Log In
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleButtonPress('SignupScreen')}> 
        <Text
          style={{top: 50,textAlign: 'center',color: '#000000',fontSize: 12,}}>
          New here? Create an account
        </Text>
        </TouchableOpacity>      
      </View>
    </View>
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
  imageBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  logo: {
    resizeMode: 'contain',
    height: 200,
    width: 200,
  },
  formContainer: {
    width: 300,
    height: 450,
    backgroundColor: 'white',
    marginHorizontal: 30,
    marginTop: -60,
    borderRadius: 30,
    marginBottom: -30,
    elevation: 10,
  },
  header: {
    textAlign: 'center',
    color: '#093624',
    fontSize: 20,
    margin: 30,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    left:15,
    margin: 12,
    width: 250,
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 10,
    borderColor: '#093624',
    color: '#093624',
  },
  forgotPassword: {
    textAlign: 'right',
    marginRight: 30,
    color: '#404040',
    fontSize: 12,
    textDecorationLine: 'underline',
    marginTop: 10,
  },
  loginButton: {
    height: 40,
    margin: 12,
    width: 200,
    marginHorizontal: 40,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#093624',
  },
  loginButtonText: {
    color: 'white',
    padding: 8,
    textAlign: 'center',
  },
  signUpText: {
    marginTop: 50,
    textAlign: 'center',
    color: '#000000',
    fontSize: 12,
  },
  orText: {
    marginTop: 60,
    textAlign: 'center',
    color: '#000000',
    fontSize: 12,
  },
});

export default Loginform2Screen;
