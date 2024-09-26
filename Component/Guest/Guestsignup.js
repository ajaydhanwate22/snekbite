import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
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
      .post('https://realrate.store/ajayApi/Guestsignup.php', formData, {
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
            width: 340,
            height: 650,
            backgroundColor: 'white',
            left: 20,
            top: -60,
            borderRadius: 30,
            marginBottom: -30,
            elevation: 10,
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: '#093624',
              fontSize: 25,
              margin: 30,
              fontWeight: 'bold',
            }}>
            {t('Sign Up')}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: '#093624',
              borderRadius: 10,
              left: 10,
              paddingLeft: 20,
              gap: 20,
              margin: 12,
              width: 300,
              height: 50,
            }}>
            <Image source={require('../Assets/rescuerusernameicon.png')} />
            <TextInput
              placeholder={t("Username")}
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
              paddingLeft: 15,
              gap: 20,
              margin: 12,
              width: 300,
              height: 50,
            }}>
            <Image source={require('../Assets/contact.png')} />
            <TextInput
              placeholder={t("Contact number")}
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
              paddingLeft: 15,
              gap: 20,
              margin: 12,
              width: 300,
              height: 50,
            }}>
            <Image source={require('../Assets/releaselocationicon.png')} />
            <TextInput
              placeholder={t("Address")}
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
              paddingLeft: 15,
              gap: 20,
              margin: 12,
              width: 300,
              height: 50,
            }}>
            <Image source={require('../Assets/mail.png')} />
            <TextInput
                placeholder={t("Email ID (Optional)")}
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
              paddingLeft: 15,
              gap: 20,
              margin: 12,
              width: 300,
              height: 50,
            }}>
            <Image source={require('../Assets/education.png')} />
            <TextInput
              placeholder={t("expertise/profession")}
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
              paddingLeft: 25,
              gap: 20,
              margin: 12,
              width: 300,
              height: 50,
            }}>
            <Image source={require('../Assets/password.png')} />
            <TextInput
              placeholder={t("Password")}
              placeholderTextColor="#093624"
              value={password}
              onChangeText={setpassword}
            />
          </View>
          <TouchableOpacity
            onPress={() => handleButtonPress('Guestformscreen')}>
            <View
              style={{
                height: 50,
                margin: 12,
                width: 300,
                left: 10,
                borderWidth: 1,
                borderRadius: 10,
                backgroundColor: '#093624',
                top: 20,
              }}>
              <Text style={{color: 'white', padding: 15,textAlign:"center"}}>{t('Next')}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default Guestsignupscreen;
