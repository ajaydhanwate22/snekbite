import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import {useTranslation} from 'react-i18next';
import AntDesign from 'react-native-vector-icons/AntDesign';

function GuestLoginScreen({navigation}) {
  const {t} = useTranslation();
  const handleButtonPress = screen => {
    navigation.navigate(screen);
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
    <View style={{flex: 1, justifyContent: 'center', top: -50}}>
      <ImageBackground
          source={require('../Assets/background.png')}
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center', overflow: 'hidden', borderBottomLeftRadius: 40, borderBottomRightRadius: 40, height: '100%' }}>
           <Image source={require('../Assets/logo.png')}
            style={{ width: 150, height: 150, resizeMode: 'contain', top: 30 }}/>
      </ImageBackground>
     </View>

     <TouchableOpacity
        style={{position: 'absolute', top: 20, left: 15}}
        onPress={() => navigation.goBack()}>
        <AntDesign name="leftcircle" size={25} color="white" />
      </TouchableOpacity>

     
     <View style={{paddingHorizontal:20}}>
     <View style={{ width: '100%', backgroundColor: 'white', height: 360, top: -100, elevation: 10, borderRadius: 30, padding: 20 }}>
      <View style={{gap: 15, top: 80, padding:20,}}>
      <TouchableOpacity onPress={() => handleButtonPress('GuestLoginform')}>
          <View style={{ height: 60, width: '100%', backgroundColor: '#093624', borderRadius: 10 }} >
          <Text style={{ justifyContent: 'center', padding: 20, color: 'white', textAlign: 'center' }}>{t('Sign In')}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleButtonPress('Guestsignupscreen')}>
          <View style={{ height: 60, width: '100%', backgroundColor: '#093624', borderRadius: 10 }}>
           <Text style={{ justifyContent: 'center', padding: 20, color: 'white', textAlign: 'center' }}>{t('Sign Up')}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>         
  </View>
  </View>
  );
}

export default GuestLoginScreen;
