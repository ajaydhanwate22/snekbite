import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import { useTranslation } from 'react-i18next';

function RescuerloginformScreen({ navigation }) {
  const { t } = useTranslation();
  const handleButtonPress = screen => {
    navigation.navigate(screen);
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
              placeholder="Username"
              placeholderTextColor="#093624"
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
            />
            <View  style={{gap:40}}>
            <TouchableOpacity onPress={() => handleButtonPress('Rescuerforgatepsscreen')}>
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
           onPress={() => handleButtonPress('RescuerAuthorizesNamesreen')}
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
            <TouchableOpacity     onPress={() => handleButtonPress('RescuersignupScreen')}> 
            <Text
              style={{
                textAlign: 'center',
                color: '#000000',
                fontSize: 12,
                top:20
              }}
            >
              New here? Create an account
            </Text>
            </TouchableOpacity>
            </View>
          
          </View>
        </View>
      </ScrollView>
    </>
  );
}

export default RescuerloginformScreen;
