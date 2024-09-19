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
import { useTranslation } from 'react-i18next';

function Guestverifynoscreen({ navigation }) {
  const { t } = useTranslation();
  const handleButtonPress = () => {
    navigation.navigate('Guestnewpsscreen');
  };

  return (
    <>
      <ScrollView style={{backgroundColor:'white'}}>
        <View style={{ backgroundColor: 'white' }}>
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
            }}
          >
            <Image
             source={require('../Assets/logo.png')}
              style={{ resizeMode: 'contain', height: 200, width: 200 }}
            />
          </ImageBackground>
          <View
            style={{
              width: 300,
              height: 450,
              backgroundColor: 'white',
              left: 30,
              top: -60,
              borderRadius: 30,
              marginBottom: -30,
              elevation: 10,
            }}
          >
            <Text
              style={{
                textAlign: 'center',
                color: '#093624',
                fontSize: 20,
                margin: 30,
                fontWeight: 'bold',
              }}
            >
              Verify Your Mobile No.
            </Text>
            <Text
              style={{ textAlign: 'center', padding: 10, color: '#093624' }}
            >
              Please Enter The 4 Digit Code Sent To 9********7
            </Text>
            <TextInput
              style={{
                height: 40,
                margin: 12,
                width: 250,
                top: 30,
                left: 10,
                borderWidth: 1,
                paddingLeft: 30,
                borderRadius: 10,
                borderColor: '#093624',
                color: '#093624',
              }}
              placeholder="OTP"
              placeholderTextColor="#093624"
            />

            <Text
              style={{
                top: 50,
                textAlign: 'center',
                color: '#093624',
                fontSize: 16,
              }}
            >
              Resend Code
            </Text>
            <TouchableOpacity
              onPress={() => handleButtonPress('Guestnewpsscreen')}
            >
              <View
                style={{
                  height: 40,
                  margin: 12,
                  top: 120,
                  width: 100,
                  left: 90,
                  borderWidth: 1,
                  borderRadius: 10,
                  backgroundColor: '#093624',
                }}
              >
                <Text style={{ color: 'white', padding: 8, left: 25 }}>
                  Verify
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

export default Guestverifynoscreen;
