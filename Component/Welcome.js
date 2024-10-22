import React from 'react';
import { View, ImageBackground, Text, TouchableOpacity, Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import Icon2 from 'react-native-vector-icons/AntDesign'; 
import Entypo from 'react-native-vector-icons/Entypo'; 
import Fontisto from 'react-native-vector-icons/Fontisto'; 
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'; 



const WelcomeScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const handleButtonPress = screen => {
    navigation.navigate(screen);
  };

  return (
    <ImageBackground
      source={require('./Assets/background.png')}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ alignItems: 'center' }}>
        <Text style={{fontSize: 48, fontWeight: '700', color: '#fff', marginTop: 10, lineHeight:58.09 }}>
          {t('Welcome')}
        </Text>
        <Text style={{ fontSize: 14, color: '#ffffff', fontWeight:'400', lineHeight:19.36 }}>
          {t('Choose your role to access')}
        </Text>
        <View style={{ top:80, gap: 20,paddingHorizontal:20 }}>
          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center', borderColor: '#fff', borderWidth: 1, borderRadius: 6, padding: 15, marginBottom: 30, width: '100%', height: 70, backgroundColor: 'transparent' }}
            onPress={() => handleButtonPress('TratmentCenterStack')}>
            <FontAwesome5 name="hospital" size={20} color="white" />
            <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#fff', flex: 1, textAlign: 'center' }}>
              {t('Treatment Center')}
            </Text>
            <Icon2 name="right" size={20} color="white" />
            </TouchableOpacity>
          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center', borderColor: '#fff', borderWidth: 1, borderRadius: 6, padding: 15, marginBottom: 30, width: '100%', height: 70, backgroundColor: 'transparent' }}
            onPress={() => handleButtonPress('RescuerStack')}>
            <Fontisto name="first-aid-alt" size={20} color="white" />
            <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#fff', flex: 1, textAlign: 'center' }}>
              {t('Rescuer')}
            </Text>
            <Icon2 name="right" size={20} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center', borderColor: '#fff', borderWidth: 1, borderRadius: 6, padding: 15, marginBottom: 30, width: '100%', height: 70, backgroundColor: 'transparent' }}
            onPress={() => navigation.navigate('GuestStack')}>
            <Entypo name="user" size={20} color="white" />
            <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#fff', flex: 1, textAlign: 'center' }}>
              {t('Guest')}
            </Text>
            <Icon2 name="right" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <Image
        source={require('./Assets/logo.png')}
        style={{ marginTop: 100, width: 100, height: 100, resizeMode: 'contain', marginBottom: 20 }}
      />
      <Text style={{ color: 'white', textAlign: 'center', fontSize: 8, fontWeight: 'bold', top: 10 }}>
       { t('COPYRIGHT © 2024 WFN, ALL RIGHTS RESERVED')}
      </Text>
      <Text style={{ color: 'white', textAlign: 'center', fontSize: 6, fontWeight: 'bold', top: 15 }}>
        {t('Developed by KodSoft')}
      </Text>
    </ImageBackground>
  );
};

export default WelcomeScreen;