import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Image, ScrollView, Alert } from 'react-native';
import { useTranslation } from 'react-i18next';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

function Trantmentforgatpsscreen({ navigation }) {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');

  const handleButtonPress = () => {
    if (!email) {
      Alert.alert(t('Error'), t('Please enter your email address.'));
      return;
    }
  
    fetch('https://realrate.store/ajayApi/TratmentcenterOTPgenerate.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        Alert.alert(t('Success'), data.message, [
          { 
            text: t('OK'), 
            onPress: () => navigation.navigate('Verifymobilescreen', { email: email }) // Pass the email here
          },
        ]);
      } else {
        Alert.alert(t('Error'), data.message);
      }
    })
    .catch(error => {
      console.error('Error:', error);
      Alert.alert(t('Error'), t('Failed to send OTP.'));
    });
  };
  

  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
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
            <AntDesign name="leftcircle" size={25} color="white" style={{ position: 'absolute',top: 20,   left: 15}}  onPress={() => navigation.goBack()}/>
          <Image
            source={require('../Assets/logo.png')}
            style={{ resizeMode: 'contain', height: 150, width: 150 }}
          />
        </ImageBackground>
        <View style={{paddingHorizontal:20}}>
        <View
          style={{
            width: '100%',
            height: 480,
            backgroundColor: 'white',
            top: -50,
            borderRadius: 30,
            // marginBottom: -30,
            elevation: 10,
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              color: '#093624',
              fontSize: 25,
              margin: 40,
              fontWeight: 'bold',
            }}
          >
            {t('Forgot Password?')}
          </Text>
          <Text
            style={{ textAlign: 'center', padding: 10, color: '#093624' }}
          >
            {t('Please Enter Your Email address To Receive a Verification Code')}
          </Text>
          <View  style={{padding:20}}>
          <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#093624', borderRadius: 10, paddingLeft: 15, gap: 20, width: '100%', height: 60 }}>
            <MaterialCommunityIcons name="email" size={20} color="#093624" />
            <TextInput placeholder={t('Enter Your Email Address.')} placeholderTextColor="#093624" value={email} onChangeText={setEmail} style={{ flex: 1 }} />
          </View>
          </View>
        
          <TouchableOpacity onPress={handleButtonPress}>
            <View
              style={{
                  height: 60,
                  // margin: 12,
                  top: 80,
                  width: 150,
                  // left: 75,
                  borderWidth: 1,
                  borderRadius: 10,
                  backgroundColor: '#093624',
                  alignSelf:"center"
              }}
            >
              <Text style={{ color: 'white', padding: 15, textAlign: 'center', alignSelf:"center" }}>
                {t('Send')}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default Trantmentforgatpsscreen;
