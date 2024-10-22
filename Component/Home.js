import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import Ionicons from 'react-native-vector-icons/Ionicons'; 

function HomeScreen({navigation}) {
  const { t } = useTranslation();

  return (
    
 <ImageBackground source={require('./Assets/background.png')} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.overlay}>
          <Image source={require('./Assets/logo.png')} style={styles.logo} />
          <TouchableOpacity onPress={() => navigation.navigate('WeloCome')}>
          <Ionicons name="arrow-forward-circle" size={30} color="white" style={{marginBottom:5}} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('WeloCome')}>
            <Text style={styles.getStartedText}>{t('Get Started')}</Text>
          </TouchableOpacity>
          <Text style={{color: 'white', textAlign: 'center', fontSize: 8, fontWeight: 'bold', top: 220}}>
          {t('COPYRIGHT © 2024 WFN, ALL RIGHTS RESERVED')}
          </Text>
        <Text style={{color: 'white', textAlign: 'center', fontSize: 6, fontWeight: 'bold', top: 225}}>
         {t('Developed by KodSoft')}
        </Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' },
  overlay: { justifyContent: 'center', alignItems: 'center' },
  logo: { width: 180, height: 180, resizeMode: 'contain', marginBottom: 20 },
  getStartedText: { fontSize: 15, color: '#fff', fontWeight: 'bold' }
});

export default HomeScreen;
