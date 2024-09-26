import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {useTranslation} from 'react-i18next';

function Mobilenavigationcomponent({navigation}) {
  const {t} = useTranslation();
  const handleButtonPress = screen => {
    navigation.navigate(screen);
  };

  return (
    <View style={{backgroundColor: 'white'}}>
      <View
        style={{
          height: 60,
          width: 350,
          left: 18,
          backgroundColor: '#093624',
          marginBottom: 8,
          borderRadius: 15,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity
            onPress={() => handleButtonPress('Profiletab')}>
            <View
              style={{
                height: 30,
                width: 50,
                backgroundColor: 'red',
                top: 15,
                borderRadius: 20,
              }}>
              <Text style={{color: 'white', textAlign: 'center', top: 5}}>
                Profile
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleButtonPress('Abouttabscreen')}>
            <View
              style={{justifyContent: 'center', alignItems: 'center', top: 10}}>
              <Image source={require('./Assets/about.png')} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleButtonPress('Editprofilescreen')}>
            <View
              style={{justifyContent: 'center', alignItems: 'center', top: 15}}>
              <Image source={require('./Assets/edit.png')} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Mobilenavigationcomponent;
