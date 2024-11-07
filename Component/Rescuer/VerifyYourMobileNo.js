import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Image, ScrollView, Alert } from 'react-native';
import { useTranslation } from 'react-i18next';
import AntDesign from 'react-native-vector-icons/AntDesign';

function Rescuerverifymobilescreen({ navigation,route }) {
  const { t } = useTranslation();
  const [otp, setOtp] = useState('');
  const [email, setEmail] = useState(null);

  // Use the useEffect hook to ensure email is fetched correctly when the screen is loaded
  useEffect(() => {
    console.log('Route Params:', route.params); // Check the route params in the console
    if (route.params?.email) {
      setEmail(route.params.email); // Set the email if it's passed through route.params
    } else {
      Alert.alert(t('Error'), t('Email not found.'));
      navigation.goBack(); // Optionally navigate back if email is missing
    }
  }, [route.params?.email]); // Dependency on route.params?.email

  const handleOTPVerification = () => {
    if (!otp) {
      Alert.alert(t('Error'), t('Please enter the OTP.'));
      return;
    }
  
    // Make the API call to verify the OTP
    fetch('https://realrate.store/ajayApi/TreatmentcenterverifyOTP.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, otp }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          Alert.alert(t('Success'), data.message, [
            { 
              text: t('OK'),
              onPress: () => {
                // Navigate to Treatmentnewpsscreen with the email
                navigation.navigate('RescuerCreateNewPassword', { email: email });
              },
            },
          ]);
        } else {
          Alert.alert(t('Error'), data.message);
        }
      })
      .catch(error => {
        console.error('Error:', error);
        Alert.alert(t('Error'), t('Failed to verify OTP.'));
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
              fontSize: 20,
              margin: 40,
              fontWeight: 'bold',
            }}
          >
            {t('Verify Your Email address.')}
          </Text>

          <Text
            style={{textAlign: 'center', padding: 10, color: '#093624' }}
          >
            {t('Please Enter The 4 Digit Code Sent To Your Email.')}
          </Text>
          <View  style={{paddingHorizontal:60, paddingVertical:20}}>
          <TextInput
            style={{
              height: 60,
              width: '100%',
              borderWidth: 1,
              // paddingLeft: 20,
              borderRadius: 10,
              borderColor: '#093624',
              color: '#093624',
              textAlign:"center"
            }}
            placeholder="OTP"
            placeholderTextColor="#093624"
            keyboardType="numeric"
            value={otp}
            onChangeText={setOtp}
          />
          </View>

          <TouchableOpacity onPress={handleOTPVerification}>
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
              <Text style={{ color: 'white', padding: 15, textAlign: 'center', alignSelf:"center"}}>
                {t('Verify')}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default Rescuerverifymobilescreen;
