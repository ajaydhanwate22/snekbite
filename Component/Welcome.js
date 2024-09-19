import React from 'react';
import {
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useTranslation } from 'react-i18next';

const WelcomeScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const handleButtonPress = screen => {
    navigation.navigate(screen);
  };

  return (
    <ImageBackground
      source={require('./Assets/background.png')}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ width: '100%', paddingHorizontal: 20, alignItems: 'center' }}>
        <Text style={{ fontFamily: 'Inter', fontSize: 40, fontWeight: 'bold', color: '#fff', marginTop: 10 }}>
          {t('Welcome')}
        </Text>
        <Text style={{ fontSize: 12, color: '#fff', marginBottom: 50 }}>
          {t('Choose your role to access')}
        </Text>
        <View style={{ marginTop: 30, gap: 10 }}>
          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center', borderColor: '#fff', borderWidth: 1, borderRadius: 6, padding: 15, marginBottom: 30, width: '80%', height: 50, maxWidth: 300, backgroundColor: 'transparent' }}
            onPress={() => handleButtonPress('Language')}>
            <Image source={require('./Assets/Hospital.png')} style={{ width: 24, height: 24, marginRight: 10 }} />
            <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#fff', flex: 1, textAlign: 'center' }}>
              {t('Treatment Center')}
            </Text>
            <Image source={require('./Assets/Forward.png')} style={{ width: 24, height: 24, marginLeft: 10 }} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center', borderColor: '#fff', borderWidth: 1, borderRadius: 6, padding: 15, marginBottom: 30, width: '80%', height: 50, maxWidth: 300, backgroundColor: 'transparent' }}
            onPress={() => handleButtonPress('RescuerlanguageScreen')}>
            <Image source={require('./Assets/IdentificationDocuments.png')} style={{ width: 24, height: 24, marginRight: 10 }} />
            <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#fff', flex: 1, textAlign: 'center' }}>
              {t('Rescuer')}
            </Text>
            <Image source={require('./Assets/Forward.png')} style={{ width: 24, height: 24, marginLeft: 10 }} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center', borderColor: '#fff', borderWidth: 1, borderRadius: 6, padding: 15, marginBottom: 30, width: '80%', height: 50, maxWidth: 300, backgroundColor: 'transparent' }}
            onPress={() => navigation.navigate('GuestLanguage')}>
            <Image source={require('./Assets/Customer.png')} style={{ width: 24, height: 24, marginRight: 10 }} />
            <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#fff', flex: 1, textAlign: 'center' }}>
              {t('Guest')}
            </Text>
            <Image source={require('./Assets/Forward.png')} style={{ width: 24, height: 24, marginLeft: 10 }} />
          </TouchableOpacity>
        </View>
      </View>
      <Image
        source={require('./Assets/logo.png')}
        style={{ marginTop: 50, width: 100, height: 100, resizeMode: 'contain', marginBottom: 20 }}
      />
      <Text style={{ color: 'white', textAlign: 'center', fontSize: 8, fontWeight: 'bold', top: 60 }}>
        COPYRIGHT © 2024 WFN, ALL RIGHTS RESERVED
      </Text>
      <Text style={{ color: 'white', textAlign: 'center', fontSize: 6, fontWeight: 'bold', top: 65 }}>
        Developed by KodSoft
      </Text>
    </ImageBackground>
  );
};

export default WelcomeScreen;
