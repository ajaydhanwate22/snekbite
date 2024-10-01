import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const FooterNavigationcenter = ({ navigation }) => {
  const handleButtonPress = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={{ backgroundColor: 'white' }}>
      <View
        style={{
          height: 60,
          width: 350,
          left: 17,
          backgroundColor: '#093624',
          marginBottom: 8,
          borderRadius: 15,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <TouchableOpacity onPress={() => handleButtonPress('Profiletab')}>
          <Text style={{ color: 'white', fontSize: 20, fontWeight:'bold' }}>
            Profile
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleButtonPress('Abouttabscreen')}>
          <Image
            source={require('./Assets/about.png')}
            style={{ width: 30, height: 30, resizeMode: 'contain' }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleButtonPress('Editprofilescreen')}>
          <Image
            source={require('./Assets/edit.png')}
            style={{ width: 30, height: 30, resizeMode: 'contain' }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FooterNavigationcenter;
