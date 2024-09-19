import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native';
import axios from 'axios';

const SignupScreen = ({ navigation }) => {
  const [centerName, setCenterName] = useState('');
  const [centerLocation, setCenterLocation] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [currentStockASV, setCurrentStockASV] = useState('');
  const [availabilityOfASV, setAvailabilityOfASV] = useState('');
  const [description, setDescription] = useState('');
  const [authorizesName, setAuthorizesName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleButtonPress = () => {
    const data = {
      CenterName: centerName,
      CenterLocation: centerLocation,
      EmailID: email,
      ContactNumber: contactNumber,
      CurrentStockASV: currentStockASV,
      AvailabilityOfASV: availabilityOfASV,
      Description: description,
      AuthorizesName: authorizesName,
      Password: password,
      ConfirmPassword: confirmPassword,
    };

    axios
      .post('http://ajayapi.sp-consultants.in/Tratmentsignup.php', data)
      .then(response => {
        const responseJson = response.data;
        if (responseJson.message === 'Registration successfully') {
          alert('Registration successful!');
          navigation.navigate('Profiletab');
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
    <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: 'white' }}>
      <ImageBackground
        source={require('./Assets/background.png')}
        style={{ alignItems: 'center', justifyContent: 'center', height: 300, borderBottomLeftRadius: 40, borderBottomRightRadius: 40 }}
      >
        <Image source={require('./Assets/logo.png')} style={{ resizeMode: 'contain', height: 200, width: 200 }} />
      </ImageBackground>
      <View style={{ marginHorizontal: 30, marginTop: -60, backgroundColor: 'white', borderRadius: 30, elevation: 10, padding: 20 }}>
        <Text style={{ textAlign: 'center', color: '#093624', fontSize: 20, marginVertical: 30, fontWeight: 'bold' }}>Sign Up</Text>
        <TextInput
          style={{ height: 40, marginVertical: 12, width: '100%', borderWidth: 1, paddingLeft: 15, borderRadius: 10, borderColor: '#093624', color: '#093624' }}
          placeholder="Centre name"
          placeholderTextColor="#093624"
          value={centerName}
          onChangeText={setCenterName}
        />
        <TextInput
          style={{ height: 40, marginVertical: 12, width: '100%', borderWidth: 1, paddingLeft: 15, borderRadius: 10, borderColor: '#093624', color: '#093624' }}
          placeholder="Centre location"
          placeholderTextColor="#093624"
          value={centerLocation}
          onChangeText={setCenterLocation}
        />
        <TextInput
          style={{ height: 40, marginVertical: 12, width: '100%', borderWidth: 1, paddingLeft: 15, borderRadius: 10, borderColor: '#093624', color: '#093624' }}
          placeholder="Email ID (Optional)"
          placeholderTextColor="#093624"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={{ height: 40, marginVertical: 12, width: '100%', borderWidth: 1, paddingLeft: 15, borderRadius: 10, borderColor: '#093624', color: '#093624' }}
          placeholder="Contact number"
          placeholderTextColor="#093624"
          value={contactNumber}
          onChangeText={setContactNumber}
        />
        <TextInput
          style={{ height: 40, marginVertical: 12, width: '100%', borderWidth: 1, paddingLeft: 15, borderRadius: 10, borderColor: '#093624', color: '#093624' }}
          placeholder="Current stock ASV"
          placeholderTextColor="#093624"
          value={currentStockASV}
          onChangeText={setCurrentStockASV}
        />
        <TextInput
          style={{ height: 40, marginVertical: 12, width: '100%', borderWidth: 1, paddingLeft: 15, borderRadius: 10, borderColor: '#093624', color: '#093624' }}
          placeholder="Availability of ASV"
          placeholderTextColor="#093624"
          value={availabilityOfASV}
          onChangeText={setAvailabilityOfASV}
        />
        <TextInput
          style={{ height: 40, marginVertical: 12, width: '100%', borderWidth: 1, paddingLeft: 15, borderRadius: 10, borderColor: '#093624', color: '#093624' }}
          placeholder="Description"
          placeholderTextColor="#093624"
          value={description}
          onChangeText={setDescription}
        />
        <TextInput
          style={{ height: 40, marginVertical: 12, width: '100%', borderWidth: 1, paddingLeft: 15, borderRadius: 10, borderColor: '#093624', color: '#093624' }}
          placeholder="Authorizes Name"
          placeholderTextColor="#093624"
          value={authorizesName}
          onChangeText={setAuthorizesName}
        />
        <TextInput
          style={{ height: 40, marginVertical: 12, width: '100%', borderWidth: 1, paddingLeft: 15, borderRadius: 10, borderColor: '#093624', color: '#093624' }}
          placeholder="Password"
          placeholderTextColor="#093624"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TextInput
          style={{ height: 40, marginVertical: 12, width: '100%', borderWidth: 1, paddingLeft: 15, borderRadius: 10, borderColor: '#093624', color: '#093624' }}
          placeholder="Confirm Password"
          placeholderTextColor="#093624"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
        <TouchableOpacity onPress={handleButtonPress}>
          <View style={{ height: 40, marginVertical: 12, width: 150, borderWidth: 1, borderRadius: 10, backgroundColor: '#093624', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: 'white', textAlign: 'center' }}>Next</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SignupScreen;
