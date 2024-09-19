import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
} from 'react-native';

function HomeScreen({navigation}) {
  return (
    <ImageBackground
      source={require('./Assets/background.png')}
      style={styles.background}>
      <View style={styles.container}>
        <View style={styles.overlay}>
          <Image source={require('./Assets/logo.png')} style={styles.logo} />
          <TouchableOpacity onPress={() => navigation.navigate('WeloCome')}>
            <Image
            source={require('./Assets/Arroww.png')}
              style={styles.arrow}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('WeloCome')}>
            <Text style={styles.getStartedText}>Get Started</Text>
          </TouchableOpacity>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontSize: 8,
              fontWeight: 'bold',
              top: 220,
            }}>
            COPYRIGHT © 2024 WFN, ALL RIGHTS RESERVED
          </Text>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontSize: 6,
              fontWeight: 'bold',
              top: 225,
            }}>
            Developed by KodSoft
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  overlay: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 180, 
    height: 180, 
    resizeMode: 'contain',
    marginBottom: 20,
  },
  arrow: {
    width: 30, 
    height: 30, 
    resizeMode: 'contain',
    marginBottom: 5, 
  },
  getStartedText: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
