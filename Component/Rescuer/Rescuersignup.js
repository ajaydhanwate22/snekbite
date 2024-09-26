import React, { useState } from 'react';
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
import { useTranslation } from 'react-i18next';

function RescuersignupScreen({ navigation }) {
  const { t } = useTranslation();

  const [username, setusername] = useState('');
  const [age, setage] = useState('');
  const [gender, setgender] = useState('');
  const [Contactnumber, setContactnumber] = useState('');
  const [mailID, setmailID] = useState('');
  const [address, setaddress] = useState('');
  const [experience, setexperience] = useState('');
  const [education, seteducation] = useState('');
  const [password, setpassword] = useState('');
  const [confirmPassword, setconfirmpassword] = useState('');

  const handleButtonPress = () => {
    const formData = new FormData();
    formData.append('Username', username);
    formData.append('Age', age);
    formData.append('Gender', gender);
    formData.append('ContactNumber', Contactnumber);
    formData.append('Mail', mailID);
    formData.append('Address', address);
    formData.append('Experience', experience);
    formData.append('Education', education);
    formData.append('Password', password);
    formData.append('ConfirmPassword', confirmPassword);

    axios
      .post('https://realrate.store/ajayApi/Rescuesignup.php', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        console.log(response);
        const responseJson = response.data;
        if (responseJson.message === 'Registration successfully') {
          alert('Registration successful!');
          navigation.navigate('Rescuersentactivetionscreen');
        } else {
          alert('Data not saved: ' + responseJson.message);
        }
      })
      .catch((error) => {
        console.error(error);
        alert('An error occurred while submitting the data');
      });
  };
  return (
    <ScrollView>
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
            width: 340,
            height: 1050,
            backgroundColor: 'white',
            left: 20,
            top: -60,
            borderRadius: 30,
            marginBottom: -30,
            elevation: 5,
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              color: '#093624',
              fontSize: 25,
              margin: 30,
              fontWeight: 'bold',
            }}
          >
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
              paddingLeft: 15,
              gap: 20,
              margin: 12,
              width: 300,
              height: 50,
            }}
          >
            <Image source={require('../Assets/rescuerusernameicon.png')} />
            <TextInput 
              placeholder={t("Username")}
              placeholderTextColor="#093624"
              value={username}
              onChangeText={setusername}
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
              gap: 15,
              margin: 12,
              width: 300,
              height: 50,
            }}
          >
            <Image source={require('../Assets/age.png')} />
            <TextInput 
              placeholder={t("Age")}
              placeholderTextColor="#093624"
              value={age}
              onChangeText={setage}
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
              paddingLeft: 17,
              gap: 20,
              margin: 12,
              width: 300,
              height: 50,
            }}
          >
            <Image source={require('../Assets/rescuerusernameicon.png')} />
            <TextInput 
              placeholder={t("Gender")}
              placeholderTextColor="#093624"
              value={gender}
              onChangeText={setgender}
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
              paddingLeft: 12,
              gap: 20,
              margin: 12,
              width: 300,
              height: 50,
            }}
          >
            <Image source={require('../Assets/contact.png')} />
            <TextInput 
              placeholder={t("Contact number")}
              placeholderTextColor="#093624"
              value={Contactnumber}
              onChangeText={setContactnumber}
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
            }}
          >
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
              paddingLeft: 10,
              gap: 18,
              margin: 12,
              width: 300,
              height: 50,
            }}
          >
            <Image source={require('../Assets/location.png')} />
            <TextInput 
              placeholder={t("Location/Address")}
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
              gap: 15,
              margin: 12,
              width: 300,
              height: 50,
            }}
          >
            <Image source={require('../Assets/exxperience.png')} />
            <TextInput 
              placeholder={t("Years Of Experience")}
              placeholderTextColor="#093624"
              value={experience}
              onChangeText={setexperience}
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
            }}
          >
            <Image source={require('../Assets/education.png')} />
            <TextInput 
              placeholder={t("Education")}
              placeholderTextColor="#093624"
              value={education}
              onChangeText={seteducation}
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
              paddingLeft: 20,
              gap: 20,
              margin: 12,
              width: 300,
              height: 50,
            }}
          >
            <Image source={require('../Assets/password.png')} />
            <TextInput 
              placeholder={t("Enter your Password")}
              placeholderTextColor="#093624"
              value={password}
              onChangeText={setpassword}
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
              paddingLeft: 20,
              gap: 20,
              margin: 12,
              width: 300,
              height: 50,
            }}
          >
            <Image source={require('../Assets/password.png')} />
            <TextInput 
              placeholder={t("Confirm your Password")}
              placeholderTextColor="#093624"
              value={confirmPassword}
              onChangeText={setconfirmpassword}
            />
          </View>
          <View
            style={{
              width: 120,
              height: 80,
              top: 20,
              backgroundColor: '#FFFFFF',
              borderRadius: 10,
              elevation: 10,
              marginLeft: 110,
              borderColor: '#093624',
              borderWidth: 1,
              flexDirection:"column"
            }}
          >
            <Image
              source={require('../Assets/Gallery.jpg')}
              style={{
                width: 40,
                height: 40,
                resizeMode: 'contain',
                position: 'absolute',
                top: '10%',
                left: '32%',
                elevation: 10,
              }}
            />
            <Text style={{color:"#093624", textAlign:'center', top:50, }}>{t('Gov ID')}</Text>           
          </View>
          <TouchableOpacity
            onPress={() => handleButtonPress('Rescuersentactivetionscreen')}
          >
            <View
              style={{
                height: 50,
                margin: 12,
                width: 300,
                left: 10,
                borderWidth: 1,
                borderRadius: 10,
                backgroundColor: '#093624',
                top: 40,
              }}
            >
              <Text style={{ color: 'white', padding: 15, textAlign: 'center' }}>
                {t('Next')}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default RescuersignupScreen;
