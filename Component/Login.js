import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Image,
} from 'react-native';
import {useTranslation} from 'react-i18next';

function LoginScreen({navigation}) {
  const {t} = useTranslation();
  const handleButtonPress = screen => {
    navigation.navigate(screen);
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flex: 1, justifyContent: 'center', top: -50}}>
        <ImageBackground
          source={require('./Assets/background.png')}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
            height: '100%',
          }}>
          <Image
            source={require('./Assets/logo.png')}
            style={{
              width: 180,
              height: 180,
              resizeMode: 'contain',
              top: 30,
            }}
          />
        </ImageBackground>
      </View>
      <View
        style={{
          width: 320,
          backgroundColor: 'white',
          height: 300,
          left: 30,
          top: -90,
          elevation: 10,
          borderRadius: 30,
        }}>
        <View style={{gap: 15, top: 100}}>
          <TouchableOpacity onPress={() => handleButtonPress('SignupScreen')}>
            <View
              style={{
                height: 50,
                width: 250,
                backgroundColor: '#093624',
                borderRadius: 10,
                left: 35,
              }}>
              <Text
                style={{
                  justifyContent: 'center',
                  padding: 15,
                  color: 'white',
                  textAlign: 'center',
                }}>
                {t('Sign Up')}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleButtonPress('Loginform2Screen')}>
            <View
              style={{
                height: 50,
                width: 250,
                backgroundColor: '#093624',
                borderRadius: 10,
                left: 35,
              }}>
              <Text
                style={{
                  justifyContent: 'center',
                  padding: 15,
                  color: 'white',
                  textAlign: 'center',
                }}>
                {t('Sign In')}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default LoginScreen;
