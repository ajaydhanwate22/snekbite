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
  const [RescuerID, setRescuerID] = useState('');
  const [password, setpassword] = useState('');
  const [confirmPassword, setconfirmpassword] = useState('');
  
  const handleButtonPress = () => {
    const data = {
      Username: username,
      Age: age,
      Gender: gender,
      ContactNumber: Contactnumber,
      Mail: mailID,
      Address: address,
      Experience: experience,
      Education: education,
      RescurId: RescuerID,
      Password: password,
      confirmPassword,
    };
  
    axios
      .post('http://192.168.0.104/snakebites/rescuesignup.php', data)
      .then(response => {
        console.log(responseJson);
        const responseJson = response.data;
        if (responseJson.message === 'Registration successfully') {
          alert('Registration successful!');
          navigation.navigate('Rescuersentactivetionscreen');
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
            value={username}
            onChangeText={setusername}
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
            placeholder="Age"
            placeholderTextColor="#093624"
            value={age}
            onChangeText={setage}
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
            placeholder="Gender"
            placeholderTextColor="#093624"
            value={gender}
            onChangeText={setgender}
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
            placeholder="Contact number"
            placeholderTextColor="#093624"
            keyboardType="numeric" 
            value={Contactnumber}
            onChangeText={setContactnumber}
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
            value={mailID}
            onChangeText={setmailID}
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
            placeholder="location/address"
            placeholderTextColor="#093624"
            value={address}
            onChangeText={setaddress}
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
            placeholder="years of experience"
            placeholderTextColor="#093624"
            value={experience}
            onChangeText={setexperience}
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
            placeholder="education"
            placeholderTextColor="#093624"
            value={education}
            onChangeText={seteducation}
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
            placeholder="Rescuer ID (if any)"
            placeholderTextColor="#093624"
            keyboardType="numeric" 
            value={RescuerID}
            onChangeText={setRescuerID}
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
            value={password}
            onChangeText={setpassword}
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
            placeholder="confirm Password"
            placeholderTextColor="#093624"
            value={confirmPassword}
            onChangeText={setconfirmpassword}
          />
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
            }}
          >
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
          <TouchableOpacity onPress={() => handleButtonPress('Rescuersentactivetionscreen')} >
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
