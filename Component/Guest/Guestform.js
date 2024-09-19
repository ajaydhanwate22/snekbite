import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import {useTranslation} from 'react-i18next';

function Guestformscreen({navigation}) {
  const {t} = useTranslation();
  const handleButtonPress = () => {
    navigation.navigate('Guestprofilescreen');
  };
  return (
    <>
      <ScrollView style={{backgroundColor:'white'}}>
        <View style={{backgroundColor: 'white'}}>
          <ImageBackground
            source={require('../Assets/background.png')}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              height: 200,
              borderBottomLeftRadius: 40,
              borderBottomRightRadius: 40,
            }}>
            <Image
              source={require('../Assets/logo.png')}
              style={{resizeMode: 'contain', height: 100, width: 100}}
            />
          </ImageBackground>
          <View
            style={{
              width: 300,
              height: 450,
              backgroundColor: 'white',
              left: 30,
              top: 30,
              borderRadius: 30,
              marginBottom: -30,
              elevation: 10,
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: '#093624',
                marginTop: 20,
                fontSize: 16,
              }}>
              {' '}
              Form
            </Text>
            <View
              style={{
                width: 100,
                height: 90,
                top: 30,
                backgroundColor: '#FFFFFF',
                borderRadius: 10,
                elevation: 10,
                marginLeft: 100,
                borderColor: '#000000',
                borderWidth: 1,
              }}>
              <Image
                    source={require('../Assets/Gallery.jpg')}
                style={{
                  width: 40,
                  height: 30,
                  resizeMode: 'contain',
                  position: 'absolute',
                  top: '30%',
                  left: '30%',
                  elevation: 10,
                }}
              />
            </View>
            <TextInput
              style={{
                height: 40,
                margin: 12,
                width: 250,
                top: 40,
                left: 10,
                borderWidth: 1,
                paddingLeft: 30,
                borderRadius: 10,
                borderColor: '#093624',
                color: '#093624',
              }}
              placeholder="current location"
              placeholderTextColor="#093624"
            />
            <TextInput
              style={{
                height: 40,
                margin: 12,
                width: 250,
                top: 40,
                left: 10,
                borderWidth: 1,
                paddingLeft: 30,
                borderRadius: 10,
                borderColor: '#093624',
                color: '#093624',
              }}
              placeholder="date of upload"
              placeholderTextColor="#093624"
            />
            <TextInput
              style={{
                height: 40,
                margin: 12,
                width: 250,
                top: 40,
                left: 10,
                borderWidth: 1,
                paddingLeft: 30,
                borderRadius: 10,
                borderColor: '#093624',
                color: '#093624',
              }}
              placeholder="manual location"
              placeholderTextColor="#093624"
            />
            <TextInput
              style={{
                height: 40,
                margin: 12,
                width: 250,
                top: 40,
                left: 10,
                borderWidth: 1,
                paddingLeft: 30,
                borderRadius: 10,
                borderColor: '#093624',
                color: '#093624',
              }}
              placeholder="description/ ID"
              placeholderTextColor="#093624"
            />
          </View>
          <TouchableOpacity
            onPress={() => handleButtonPress('Guestprofilescreen')}>
            <View
              style={{
                height: 50,
                width: 250,
                backgroundColor: 'red',
                top :80,
                left: 50,
                backgroundColor: '#093624',
                borderRadius: 10,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  top: 12,
                  fontSize: 16,
                  color: 'white',
                }}>
                Next
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}

export default Guestformscreen;
