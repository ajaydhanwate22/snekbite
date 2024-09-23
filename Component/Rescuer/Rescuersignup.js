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
      .post('http://ajayapi.sp-consultants.in/Rescuesignup.php', formData, {
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
            width: 300,
            height: 1000,
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
            Sign Up
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: '#093624',
              borderRadius: 10,
              left:10,
              paddingLeft:10,
              gap:10,
              margin: 12,
              width: 250,
              height: 45,
            }}
          >
            <Image source={require('../Assets/rescuerusernameicon.png')} />
            <TextInput 
              placeholder="Username"
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
              left:10,
              paddingLeft:10,
              gap:10,
              margin: 12,
              width: 250,
              height: 45,
            }}
          >
            <Image source={require('../Assets/age.png')} />
            <TextInput 
              placeholder="Age"
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
              left:10,
              paddingLeft:10,
              gap:10,
              margin: 12,
              width: 250,
              height: 45,
            }}
          >
            <Image source={require('../Assets/rescuerusernameicon.png')} />
            <TextInput 
              placeholder="Gender"
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
              left:10,
              paddingLeft:10,
              gap:10,
              margin: 12,
              width: 250,
              height: 45,
            }}
          >
            <Image source={require('../Assets/contact.png')} />
            <TextInput 
              placeholder="Contact number"
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
              left:10,
              paddingLeft:10,
              gap:10,
              margin: 12,
              width: 250,
              height: 45,
            }}
          >
            <Image source={require('../Assets/mail.png')} />
            <TextInput 
              placeholder="Mail ID"
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
              left:10,
              paddingLeft:10,
              gap:10,
              margin: 12,
              width: 250,
              height: 45,
            }}
          >
            <Image source={require('../Assets/location.png')} />
            <TextInput 
              placeholder="Location/Address"
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
              left:10,
              paddingLeft:10,
              gap:10,
              margin: 12,
              width: 250,
              height: 45,
            }}
          >
            <Image source={require('../Assets/exxperience.png')} />
            <TextInput 
              placeholder="Years Of Experience"
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
              left:10,
              paddingLeft:10,
              gap:10,
              margin: 12,
              width: 250,
              height: 45,
            }}
          >
            <Image source={require('../Assets/education.png')} />
            <TextInput 
              placeholder="Education"
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
              left:10,
              paddingLeft:10,
              gap:10,
              margin: 12,
              width: 250,
              height: 45,
            }}
          >
            <Image source={require('../Assets/password.png')} />
            <TextInput 
              placeholder="Enter your Password"
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
              left:10,
              paddingLeft:10,
              gap:10,
              margin: 12,
              width: 250,
              height: 45,
            }}
          >
            <Image source={require('../Assets/password.png')} />
            <TextInput 
              placeholder="Confirm your Password"
              placeholderTextColor="#093624"
              value={confirmPassword}
              onChangeText={setconfirmpassword}
            />
          </View>
          <View
            style={{
              width: 120,
              height: 80,
              top: 10,
              backgroundColor: '#FFFFFF',
              borderRadius: 10,
              elevation: 10,
              marginLeft: 100,
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
                left: '30%',
                elevation: 10,
              }}
            />
            <Text style={{color:"#093624", textAlign:'center', top:50, }}>Gov ID</Text>           
          </View>
          <TouchableOpacity
            onPress={() => handleButtonPress('Rescuersentactivetionscreen')}
          >
            <View
              style={{
                height: 40,
                margin: 12,
                width: 250,
                left: 10,
                borderWidth: 1,
                borderRadius: 10,
                backgroundColor: '#093624',
                top: 30,
              }}
            >
              <Text style={{ color: 'white', padding: 8, textAlign: 'center' }}>
                Next
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default RescuersignupScreen;
