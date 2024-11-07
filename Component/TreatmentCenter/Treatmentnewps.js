import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Image, ScrollView, Alert } from 'react-native';
import { useTranslation } from 'react-i18next';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



function Treatmentnewpsscreen({ navigation, route }) {
  const { t } = useTranslation();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState(route.params?.email || ''); // Receive the email from route params

  const handleButtonPress = () => {
    // Check if passwords are empty
    if (!newPassword || !confirmPassword) {
      Alert.alert(t('Error'), t('Please enter both new password and confirm password.'));
      return;
    }

    // Check if password is at least 6 characters long
    if (newPassword.length < 6) {
      Alert.alert(t('Error'), t('Password must be at least 6 characters.'));
      return;
    }

    // Check if passwords match
    if (newPassword !== confirmPassword) {
      Alert.alert(t('Error'), t('Passwords do not match.'));
      return;
    }

    // Make the API call to update the password
    fetch('https://realrate.store/ajayApi/TreatmentcenterUpdatepassword.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, newPassword, confirmPassword }),  // Send both newPassword and confirmPassword
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          Alert.alert(t('Success'), data.message, [
            {
              text: t('OK'),
              onPress: () => navigation.navigate('Loginform2Screen'), // Navigate after successful password update
            },
          ]);
        } else {
          // Show error message from backend
          Alert.alert(t('Error'), data.message); // Error from API
        }
      })
      .catch(error => {
        console.error('Error:', error);
        Alert.alert(t('Error'), t('Failed to update password. Please try again.'));
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
              paddingVertical: 40,
              fontWeight: 'bold',
            }}
          >
            {t('Create New Password')}
          </Text>
          <View style={{paddingHorizontal:30}}>

          <Text style={{ color: '#093624',  justifyContent:"flex-start" }}>
            {t('Enter New Password :')}
          </Text>
          <TextInput
            style={{
              height: 60,
              width: '100%',
              // left: 20,
              borderWidth: 1,
              paddingLeft: 20,
              borderRadius: 10,
              borderColor: '#093624',
              color: '#093624',
              top:10
            }}
            placeholder=""
            placeholderTextColor="#093624"
            value={newPassword}
            onChangeText={setNewPassword}
            secureTextEntry={true}
          />
          <Text style={{ color: '#093624',  justifyContent:"flex-start", top:20 }}>
            {t('Confirm Password')}
          </Text>
          <TextInput
            style={{
              height: 60,
              width: '100%',
              // left: 20,
              borderWidth: 1,
              paddingLeft: 20,
              borderRadius: 10,
              borderColor: '#093624',
              color: '#093624',
              top:30,
              marginBottom:100
            }}
            placeholder=""
            placeholderTextColor="#093624"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={true}
          />
     </View>
          {/* <Text
            style={{
              top: 50,
              textAlign: 'center',
              color: '#093624',
              fontSize: 12,
            }}
          >
            {t('Change Password')}
          </Text> */}

          <TouchableOpacity onPress={handleButtonPress}>
            <View
              style={{
                height: 60,
                  // margin: 12,
                  // top: 100,
                  width: 150,
                  // left: 75,
                  borderWidth: 1,
                  borderRadius: 10,
                  backgroundColor: '#093624',
                  alignSelf:"center"
              }}
            >
              <Text style={{ color: 'white', padding: 15, textAlign: 'center', alignSelf:"center"  }}>
                {t('Save')}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        </View>

      </View>
    </ScrollView>
  );
}

export default Treatmentnewpsscreen;
