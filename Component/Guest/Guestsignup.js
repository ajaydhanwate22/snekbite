import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
  TextInputComponent,
} from 'react-native';
import axios from 'axios';
import {useTranslation} from 'react-i18next';

function Guestsignupscreen({navigation}) {
  const {t} = useTranslation();
  const handleButtonPress = () => {
    navigation.navigate('Guestformscreen');
  };

  return (
    <ScrollView>
      <View style={{backgroundColor: 'white'}}>
        <ImageBackground
          source={require('../Assets/background.png')}
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            height: 300,
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
          }}>
          <Image
            source={require('../Assets/logo.png')}
            style={{resizeMode: 'contain', height: 200, width: 200}}
          />
        </ImageBackground>
        <View
          style={{
            width: 300,
            height: 530,
            backgroundColor: 'white',
            left: 30,
            top: -60,
            borderRadius: 30,
            marginBottom: -30,
            elevation: 10,
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: '#093624',
              fontSize: 20,
              margin: 20,
              fontWeight: 'bold',
            }}>
            Sign Up
          </Text>
          <TextInput
            style={{
              height: 40,
              margin: 12,
              width: 250,
              left: 10,
              borderWidth: 1,
              paddingLeft: 30,
              borderRadius: 10,
              borderColor: '#093624',
              color: '#093624',
            }}
            placeholder="Username"
            placeholderTextColor="#093624"
          />
          <TextInput
            style={{
              height: 40,
              margin: 12,
              width: 250,
              left: 10,
              borderWidth: 1,
              paddingLeft: 30,
              borderRadius: 10,
              borderColor: '#093624',
              color: '#093624',
            }}
            placeholder="mobile number"
            placeholderTextColor="#093624"
          />
          <TextInput
            style={{
              height: 40,
              margin: 12,
              width: 250,
              left: 10,
              borderWidth: 1,
              paddingLeft: 30,
              borderRadius: 10,
              borderColor: '#093624',
              color: '#093624',
            }}
            placeholder="Password"
            placeholderTextColor="#093624"
          />

          <TextInput
            style={{
              height: 40,
              margin: 12,
              width: 250,
              left: 10,
              borderWidth: 1,
              paddingLeft: 30,
              borderRadius: 10,
              borderColor: '#093624',
              color: '#093624',
            }}
            placeholder="address"
            placeholderTextColor="#093624"
          />
          <TextInput
            style={{
              height: 40,
              margin: 12,
              width: 250,
              left: 10,
              borderWidth: 1,
              paddingLeft: 30,
              borderRadius: 10,
              borderColor: '#093624',
              color: '#093624',
            }}
            placeholder="mail ID"
            placeholderTextColor="#093624"
          />
          <TextInput
            style={{
              height: 40,
              margin: 12,
              width: 250,
              left: 10,
              borderWidth: 1,
              paddingLeft: 30,
              borderRadius: 10,
              borderColor: '#093624',
              color: '#093624',
            }}
            placeholder="expertise/profession"
            placeholderTextColor="#093624"
          />
          <TouchableOpacity
            onPress={() => handleButtonPress('Guestformscreen')}>
            <View
              style={{
                height: 40,
                margin: 12,
                width: 100,
                left: 90,
                borderWidth: 1,
                borderRadius: 10,
                backgroundColor: '#093624',
              }}>
              <Text style={{color: 'white', padding: 8, left: 25}}>Next</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default Guestsignupscreen;
