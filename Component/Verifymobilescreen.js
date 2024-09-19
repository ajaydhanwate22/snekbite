import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';

function Verifymobilescreen({ navigation }) {
  const { t } = useTranslation();
  const handleButtonPress = () => {
    navigation.navigate('Treatmentnewpsscreen');
  };

  return (
    <ScrollView>
      <View style={{ backgroundColor: 'white' }}>
        <ImageBackground
          source={require('./Assets/background.png')}
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center', height: 300, borderBottomLeftRadius: 40, borderBottomRightRadius: 40 }}>
          <Image source={require('./Assets/logo.png')} style={{ resizeMode: 'contain', height: 200, width: 200 }} />
        </ImageBackground>
        <View style={{ width: 300, height: 450, backgroundColor: 'white', borderRadius: 30, marginHorizontal: 30, marginTop: -60, marginBottom: -30, elevation: 10 }}>
          <Text style={{ textAlign: 'center', color: '#093624', fontSize: 20, margin: 30, fontWeight: 'bold' }}>{t('Verify Your Mobile No.')}</Text>
          <Text style={{ textAlign: 'center', padding: 10, color: '#093624' }}>{t('Please Enter The 4 Digit Code Sent To 9********7')}</Text>
          <TextInput
            style={{ height: 40, margin: 12, width: 250, borderWidth: 1, borderRadius: 10, borderColor: '#093624', color: '#093624', paddingLeft: 30 }}
            placeholder="OTP"
            placeholderTextColor="#093624"
          />
          <Text style={{ textAlign: 'center', color: '#093624', fontSize: 16, marginTop: 50 }}>{t('Resend Code')}</Text>
          <TouchableOpacity onPress={handleButtonPress}>
            <View style={{ height: 40, width: 100, borderWidth: 1, borderRadius: 10, backgroundColor: '#093624', justifyContent: 'center', alignItems: 'center', marginTop: 30, marginHorizontal: 90 }}>
              <Text style={{ color: 'white', fontSize: 16 }}>{t('Verify')}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default Verifymobilescreen;
