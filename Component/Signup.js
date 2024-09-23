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

const SignupScreen = ({navigation}) => {
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
    const formData = new FormData();
    formData.append('CenterName', centerName);
    formData.append('CenterLocation', centerLocation);
    formData.append('EmailID', email);
    formData.append('ContactNumber', contactNumber);
    formData.append('CurrentstockASV', currentStockASV);
    formData.append('AvailabilityofASV', availabilityOfASV);
    formData.append('Description', description);
    formData.append('AuthorizesName', authorizesName);
    formData.append('Password', password);
    formData.append('ConfirmPassword', confirmPassword);

    axios
      .post('http://ajayapi.sp-consultants.in/Tratmentsignup.php', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
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
    <ScrollView contentContainerStyle={{flexGrow: 1, backgroundColor: 'white'}}>
      <ImageBackground
        source={require('./Assets/background.png')}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: 300,
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
        }}>
        <Image
          source={require('./Assets/logo.png')}
          style={{resizeMode: 'contain', height: 200, width: 200}}
        />
      </ImageBackground>
      <View
          style={{
            width: 300,
            height: 900,
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
            <Image source={require('./Assets/centername.png')} />
            <TextInput 
              placeholder="Centre name"
              placeholderTextColor="#093624"
              value={centerName}
              onChangeText={setCenterName}
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
            <Image source={require('./Assets/location.png')} />
            <TextInput 
              placeholder="Centre location"
              placeholderTextColor="#093624"
              value={centerLocation}
              onChangeText={setCenterLocation}
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
            <Image source={require('./Assets/mail.png')} />
            <TextInput 
              placeholder="Email ID (Optional)"
              placeholderTextColor="#093624"
              value={email}
              onChangeText={setEmail}
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
            <Image source={require('./Assets/contact.png')} />
            <TextInput 
              placeholder="Contact number"
              placeholderTextColor="#093624"
              value={contactNumber}
              onChangeText={setContactNumber}
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
            <Image source={require('./Assets/rescuerusernameicon.png')} />
            <TextInput 
              placeholder="Authorizes Name"
              placeholderTextColor="#093624"
              value={authorizesName}
              onChangeText={setAuthorizesName}
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
            <Image source={require('./Assets/asvavailable.png')} />
            <TextInput 
              placeholder="Availability of ASV"
              placeholderTextColor="#093624"
              value={availabilityOfASV}
              onChangeText={setAvailabilityOfASV}
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
            <Image source={require('./Assets/currASV.png')} />
            <TextInput 
              placeholder="Current stock ASV"
              placeholderTextColor="#093624"
              value={currentStockASV}
              onChangeText={setCurrentStockASV}
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
            <Image source={require('./Assets/description.png')} />
            <TextInput 
              placeholder="Description "
              placeholderTextColor="#093624"
              value={description}
              onChangeText={setDescription}
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
            <Image source={require('./Assets/password.png')} />
            <TextInput 
              placeholder="Password"
              placeholderTextColor="#093624"
              value={password}
              onChangeText={setPassword}
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
            <Image source={require('./Assets/password.png')} />
            <TextInput 
              placeholder="Confirm Password"
              placeholderTextColor="#093624"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
          </View>
        <TouchableOpacity onPress={handleButtonPress}>
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
    </ScrollView>
  );
};

export default SignupScreen;
