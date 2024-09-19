import React from 'react'; import { View, Text, TextInput, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native'; import { useTranslation } from 'react-i18next';

function Patientgform({ navigation }) { const { t } = useTranslation(); const handleButtonPress = () => navigation.navigate('Profiletab');

  return (
    <ScrollView contentContainerStyle={{ backgroundColor: 'white' }}>
      <ImageBackground source={require('./Assets/background.png')} style={{ flex: 1, alignItems: 'center', justifyContent: 'center', height: 300, borderBottomLeftRadius: 40, borderBottomRightRadius: 40 }}>
        <Image source={require('./Assets/logo.png')} style={{ resizeMode: 'contain', height: 100, width: 100 }} />
      </ImageBackground>
      <View style={{ backgroundColor: 'white', borderRadius: 7, marginHorizontal: 30, padding: 20, elevation: 5 }}>
        <Text style={{ textAlign: 'center', color: '#093624', fontSize: 16, marginBottom: 10 }}>{t('Patient Form')}</Text>
        <Text style={{ fontSize: 12, color: '#093624', marginBottom: 5 }}>{t('Patient Details')}</Text>
        {['Name', 'Age', 'Contact details of patient', 'Address'].map((placeholder, index) => (
          <TextInput key={index} style={{ borderWidth: 1, borderRadius: 10, paddingLeft: 20, marginBottom: 15, width: '100%' }} placeholder={t(placeholder)} />
        ))}
        <Text style={{ fontSize: 12, color: '#093624', marginBottom: 5 }}>{t('Snakebite Details')}</Text>
        {['Snake ID(if available)', 'Bite location(area)', 'Affected body part', 'Used ASV on the patient', 'Rescuer name'].map((placeholder, index) => (
          <TextInput key={index} style={{ borderWidth: 1, borderRadius: 10, paddingLeft: 20, marginBottom: 15, width: '100%' }} placeholder={t(placeholder)} />
        ))}
        <View style={{ width: 100, height: 90, backgroundColor: '#FFFFFF', borderRadius: 10, elevation: 10, alignSelf: 'center', marginBottom: 20 }}>
          <Image source={require('./Assets/Gallery.jpg')} style={{ width: 40, height: 30, resizeMode: 'contain', position: 'absolute', top: '30%', left: '30%', elevation: 10 }} />
        </View>
        <TouchableOpacity style={{ backgroundColor: '#093624', padding: 10, borderRadius: 5, justifyContent: 'center', alignItems: 'center', width: 280, alignSelf: 'center' }} onPress={handleButtonPress}>
          <Text style={{ color: '#FFFFFF' }}>{t('Save')}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default Patientgform;
