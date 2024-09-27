import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const FooterNavigationcenter = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Profiletab')}>
        <Text style={styles.buttonText}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Abouttabscreen')}>
        <Image source={require('./Assets/about.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Editprofilescreen')}>
        <Image source={require('./Assets/edit.png')} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#093624',
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 50,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: 'white', // Make sure this is set to white
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});

export default FooterNavigationcenter;
