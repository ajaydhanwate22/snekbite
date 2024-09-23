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
  const [Username, setUsername] = useState('');
  const [contact, setContact] = useState('');
  const [address, setaddress] = useState('');
  const [mailID, setmailID] = useState('');
  const [profession, setprofession] = useState('');
  const [password, setpassword] = useState('');

  const handleButtonPress = () => {
    const formData = new FormData();
    formData.append('Username', Username);
    formData.append('ContactNumber', contact);
    formData.append('Address', address);
    formData.append('Mail', mailID);
    formData.append('Profession', profession);
    formData.append('Password', password);

    axios
      .post('http://ajayapi.sp-consultants.in/Guestsignup.php', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(response => {
        const responseJson = response.data;
        if (responseJson.message === 'Registration successfully') {
          alert('Registration successful!');
          navigation.navigate('Guestformscreen');
        } else {
          alert('Data not saved: ' + responseJson.message);
        }
      })
      .catch(error => {
        console.error(error);
        alert('An error occurred while submitting the data');
      });
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
            height: 550,
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
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: '#093624',
              borderRadius: 10,
              left: 10,
              paddingLeft: 10,
              gap: 10,
              margin: 12,
              width: 250,
              height: 45,
            }}>
            <Image source={require('../Assets/rescuerusernameicon.png')} />
            <TextInput
              placeholder="Username"
              placeholderTextColor="#093624"
              value={Username}
              onChangeText={setUsername}
            />
          </View>
       <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: '#093624',
              borderRadius: 10,
              left: 10,
              paddingLeft: 10,
              gap: 10,
              margin: 12,
              width: 250,
              height: 45,
            }}>
            <Image source={require('../Assets/contact.png')} />
            <TextInput
              placeholder="Mobile number"
              placeholderTextColor="#093624"
              value={contact}
              onChangeText={setContact}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: '#093624',
              borderRadius: 10,
              left: 10,
              paddingLeft: 10,
              gap: 10,
              margin: 12,
              width: 250,
              height: 45,
            }}>
            <Image source={require('../Assets/releaselocationicon.png')} />
            <TextInput
              placeholder="Address"
              placeholderTextColor="#093624"
              value={address}
              onChangeText={setaddress}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: '#093624',
              borderRadius: 10,
              left: 10,
              paddingLeft: 10,
              gap: 10,
              margin: 12,
              width: 250,
              height: 45,
            }}>
            <Image source={require('../Assets/mail.png')} />
            <TextInput
              placeholder="mail ID"
              placeholderTextColor="#093624"
              value={mailID}
              onChangeText={setmailID}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: '#093624',
              borderRadius: 10,
              left: 10,
              paddingLeft: 10,
              gap: 10,
              margin: 12,
              width: 250,
              height: 45,
            }}>
            <Image source={require('../Assets/education.png')} />
            <TextInput
              placeholder="expertise/profession"
              placeholderTextColor="#093624"
              value={profession}
              onChangeText={setprofession}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: '#093624',
              borderRadius: 10,
              left: 10,
              paddingLeft: 10,
              gap: 10,
              margin: 12,
              width: 250,
              height: 45,
            }}>
            <Image source={require('../Assets/password.png')} />
            <TextInput
              placeholder="Password"
              placeholderTextColor="#093624"
              value={password}
              onChangeText={setpassword}
            />
          </View>
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
