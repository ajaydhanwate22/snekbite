import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ImageBackground,
  Image,
  ScrollView,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import FooterNavigationcenter from './FooterNavigationcenter';

function Patientgform({ navigation }) {
  const { t } = useTranslation();
  const [fullname, setFullname] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [address, setAddress] = useState('');
  const [snakeID, setSnakeID] = useState('');
  const [biteLocation, setBiteLocation] = useState('');
  const [affectedbodypart, setAffectedbodypart] = useState('');
  const [usedASV, setUsedASV] = useState('');
  const [rescuername, setRescuername] = useState('');
  const [patientstatus, setPatientstatus] = useState('');
  const [anyDisablity, setAnyDisablity] = useState('');

  const handleButtonPress = async () => {
    // Validation
    if (!fullname || !age || !gender || !contactNumber || !address || !biteLocation || !affectedbodypart || !usedASV || !rescuername || !patientstatus || !anyDisablity) {
      Alert.alert('Error', 'Please fill all fields.');
      return;
    }

    const formData = new FormData();
    formData.append('FullName', fullname);
    formData.append('Age', age);
    formData.append('Gender', gender);
    formData.append('ContactNumber', contactNumber);
    formData.append('Address', address);
    formData.append('SnakeID', snakeID);
    formData.append('BiteLocation', biteLocation);
    formData.append('AffectedBodypart', affectedbodypart);
    formData.append('UsedASV', usedASV);
    formData.append('Rescuername', rescuername);
    formData.append('Patientstatus', patientstatus);
    formData.append('AnyDisablity', anyDisablity);

    try {
      const response = await axios.post('https://realrate.store/ajayApi/Patientdata.php', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const responseJson = response.data;
      if (responseJson.message === 'Registration successfully') {
        Alert.alert('Success', 'Registration successful!', [
          {
            text: 'OK',
            onPress: () => navigation.navigate('Profiletab'), // Navigate here
          },
        ]);
      } else {
        Alert.alert('Error', 'Data not saved: ' + responseJson.message);
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'An error occurred while submitting the data');
    }
  };



  return (
    <>
      <ScrollView style={{backgroundColor: 'white'}}>
        <ImageBackground
          source={require('./Assets/background.png')}
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            height: 200,
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
          }}>
          <Image
            source={require('./Assets/logo.png')}
            style={{resizeMode: 'contain', height: 100, width: 100}}
          />
        </ImageBackground>
        <View
          style={{
            width: 300,
            height: 1100,
            backgroundColor: 'white',
            left: 30,
            top: -50,
            borderRadius: 30,
            marginBottom: -30,
            elevation: 10,
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: '#093624',
              fontSize: 20,
              margin: 30,
              fontWeight: 'bold',
            }}>
            Patient Form
          </Text>
          <Text style={{left: 30, color: '#093624', fontWeight: 'bold'}}>
            Patient Details
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
            placeholder="FullName"
            placeholderTextColor="#093624"
            value={fullname}
            onChangeText={setFullname}
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
            onChangeText={setAge}
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
            onChangeText={setGender}
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
            placeholder="Contact details of patient"
            placeholderTextColor="#093624"
            value={contactNumber}
            onChangeText={setContactNumber}
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
            placeholder="Address"
            placeholderTextColor="#093624"
            value={address}
            onChangeText={setAddress}
          />
          <Text style={{left: 30, color: '#093624', fontWeight: 'bold'}}>
            Snakebite Details
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
            placeholder="Snake ID(if available)"
            placeholderTextColor="#093624"
            value={snakeID}
            onChangeText={setSnakeID}
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
            placeholder="Bite location(area)"
            placeholderTextColor="#093624"
            value={biteLocation}
            onChangeText={setBiteLocation}
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
            placeholder="Affected body part"
            placeholderTextColor="#093624"
            value={affectedbodypart}
            onChangeText={setAffectedbodypart}
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
            placeholder="Used ASV on the patient"
            placeholderTextColor="#093624"
            value={usedASV}
            onChangeText={setUsedASV}
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
            placeholder="Rescuer name"
            placeholderTextColor="#093624"
            value={rescuername}
            onChangeText={setRescuername}
          />
          <View
            style={{
              width: 100,
              height: 90,
              top: 10,
              backgroundColor: '#FFFFFF',
              borderRadius: 10,
              elevation: 10,
              marginLeft: 100,
              borderColor: '#000000',
              borderWidth: 2,
            }}>
            <Image
              source={require('./Assets/Gallery.jpg')}
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
          <Text
            style={{left: 30, color: '#093624', fontWeight: 'bold', top: 30}}>
            Discharge Details 
          </Text>
          <TextInput
            style={{
              height: 40,
              margin: 12,
              width: 250,
              left: 10,
              top: 30,
              borderWidth: 1,
              paddingLeft: 30,
              borderRadius: 10,
              borderColor: '#093624',
              color: '#093624',
            }}
            placeholder="Patient Status"
            placeholderTextColor="#093624"
            value={patientstatus}
            onChangeText={setPatientstatus}
          />
          <TextInput
            style={{
              height: 40,
              margin: 12,
              width: 250,
              left: 10,
              top: 30,
              borderWidth: 1,
              paddingLeft: 30,
              borderRadius: 10,
              borderColor: '#093624',
              color: '#093624',
            }}
            placeholder="Any Disability Caused"
            placeholderTextColor="#093624"
            value={anyDisablity}
            onChangeText={setAnyDisablity}
          />
          <TouchableOpacity onPress={handleButtonPress}>
            <View
              style={{
                height: 40,
                width: 150,
                backgroundColor: '#093624',
                marginLeft: 75,
                top: 40,
                borderRadius: 10,
              }}>
              <Text style={{color: 'white', padding: 10, textAlign: 'center'}}>
                Save
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
 <FooterNavigationcenter navigation={navigation}/>
    </>
  );
}

export default Patientgform;
