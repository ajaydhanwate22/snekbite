import React from 'react';
import { ImageBackground, View, Image, Text, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';

function Patientprofile() {
  const { t } = useTranslation();

  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <ImageBackground
        source={require('./Assets/background.png')}
        style={{ height: 421, top: -200, borderBottomLeftRadius: 40, borderBottomRightRadius: 40, overflow: 'hidden', resizeMode: 'cover', position: 'relative' }}
      >
        <Image
          source={require('./Assets/logo.png')}
          style={{ width: 110, height: 140, resizeMode: 'contain', position: 'absolute', top: '50%', left: '30%' }}
        />
      </ImageBackground>

      <View style={{ backgroundColor: 'white', borderRadius: 7, marginLeft: 30, height: 800, width: 300, top: -270, elevation: 5, marginBottom: -250 }}>
        <Text style={{ textAlign: 'center', color: '#093624', margin: 40, fontSize: 20 }}>{t('Patient Profile')}</Text>

        <Text style={{ fontSize: 12, color: '#093624', marginLeft: 20 }}>{t('Patient Details')}</Text>
        <View style={{ width: 250, height: 140, top: 10, borderRadius: 10, marginLeft: 20, backgroundColor: 'white', elevation: 5 }}>
          <View style={{ top: 10, marginLeft: 20, flex: 1, flexDirection: 'column', gap: 5 }}>
            <Text>{t('Name')}</Text>
            <Text>{t('Age')}</Text>
            <Text>{t('Gender')}</Text>
            <Text>{t('Contact details of patient')}</Text>
            <Text>{t('address')}</Text>
          </View>
        </View>

        <Text style={{ fontSize: 12, color: '#093624', marginLeft: 20, top: 30 }}>{t('Snakebite Details')}</Text>
        <View style={{ width: 250, height: 250, top: 40, borderRadius: 10, marginLeft: 20, backgroundColor: 'white', elevation: 5 }}>
          <View style={{ top: 10, marginLeft: 20, flex: 1, flexDirection: 'column', fontSize: 10, gap: 5 }}>
            <Text>{t('Snake ID(if available)')}</Text>
            <Text>{t('bite location(area)')}</Text>
            <Text>{t('affected body part')}</Text>
            <Text>{t('used ASV on the patient')}</Text>
            <Text>{t('rescuer name')}</Text>
            <View style={{ width: 100, height: 90, top: 10, backgroundColor: '#FFFFFF', borderRadius: 5, elevation: 10 }}>
              <Image source={require('./Assets/Gallery.jpg')} style={{ width: 40, height: 30, resizeMode: 'contain', position: 'absolute', top: '30%', left: '30%' }} />
            </View>
          </View>
        </View>

        <Text style={{ fontSize: 12, color: '#093624', marginLeft: 20, top: 70 }}>{t('Discharge Details')}</Text>
        <View style={{ width: 250, height: 120, top: 90, borderRadius: 10, marginLeft: 20, backgroundColor: 'white', elevation: 5 }}>
          <View style={{ top: 20, marginLeft: 20, flex: 1, flexDirection: 'column', gap: 20 }}>
            <Text>{t('Patient Status ')}</Text>
            <Text>{t('Any Disability Caused')}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default Patientprofile;
