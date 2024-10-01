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
import axios from 'axios';

function Patientedit({ route, navigation }) {
  const { patientDetails } = route.params;
  const [fullname, setFullname] = useState(patientDetails.FullName);
  const [age, setAge] = useState(patientDetails.Age.toString());
  const [gender, setGender] = useState(patientDetails.Gender);
  const [contactNumber, setContactNumber] = useState(patientDetails.ContactNumber);
  const [address, setAddress] = useState(patientDetails.Address);
  const [snakeID, setSnakeID] = useState(patientDetails.SnakeID);
  const [biteLocation, setBiteLocation] = useState(patientDetails.BiteLocation);
  const [affectedbodypart, setAffectedbodypart] = useState(patientDetails.AffectedBodypart);
  const [usedASV, setUsedASV] = useState(patientDetails.UsedASV);
  const [rescuername, setRescuername] = useState(patientDetails.Rescuername);
  const [patientstatus, setPatientstatus] = useState(patientDetails.Patientstatus);
  const [anyDisablity, setAnyDisablity] = useState(patientDetails.AnyDisablity);

  const handleUpdate = async () => {
    const id = patientDetails.id;

    if (!fullname || !age || !gender || !contactNumber || !address || !usedASV || !biteLocation || !affectedbodypart || !rescuername || !patientstatus || !anyDisablity) {
      Alert.alert('Missing Information', 'Please fill in all required fields before updating.');
      return;
    }

    const formData = new FormData();
    formData.append('id', id); 
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
      const response = await axios.post('https://realrate.store/ajayApi/Updatepatient.php', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.message.startsWith('Update successful')) {
        Alert.alert('Success', response.data.message);
        navigation.goBack();
      } else {
        Alert.alert('Error', response.data.message);
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Could not update patient details. Please try again later.');
    }
  };

  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <ImageBackground
        source={require('./Assets/background.png')}
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
          source={require('./Assets/logo.png')}
          style={{ resizeMode: 'contain', height: 200, width: 200 }}
        />
      </ImageBackground>
      <View
        style={{
          width: 340,
          backgroundColor: 'white',
          borderRadius: 30,
          elevation: 10,
          marginHorizontal: 20,
          marginTop: -60,
          padding: 20,
        }}>
        <Text
          style={{
            textAlign: 'center',
            color: '#093624',
            fontSize: 25,
            fontWeight: 'bold',
            marginBottom: 20,
          }}>
          Update Form
        </Text>
        <Text style={{ color: '#093624', fontWeight: 'bold', marginBottom: 10 }}>
          Patient Details
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor="#093624"
          value={fullname}
          onChangeText={setFullname}
        />
        <TextInput
          style={styles.input}
          placeholder="Age"
          placeholderTextColor="#093624"
          value={age}
          keyboardType="numeric"
          onChangeText={setAge}
        />
        <TextInput
          style={styles.input}
          placeholder="Gender"
          placeholderTextColor="#093624"
          value={gender}
          onChangeText={setGender}
        />
        <TextInput
          style={styles.input}
          placeholder="Contact details of patient"
          placeholderTextColor="#093624"
          value={contactNumber}
          onChangeText={setContactNumber}
        />
        <TextInput
          style={styles.input}
          placeholder="Address"
          placeholderTextColor="#093624"
          value={address}
          onChangeText={setAddress}
        />
        <Text style={{ color: '#093624', fontWeight: 'bold', marginBottom: 10 }}>
          Snakebite Details
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Snake ID (if available)"
          placeholderTextColor="#093624"
          value={snakeID}
          onChangeText={setSnakeID}
        />
        <TextInput
          style={styles.input}
          placeholder="Bite location (area)"
          placeholderTextColor="#093624"
          value={biteLocation}
          onChangeText={setBiteLocation}
        />
        <TextInput
          style={styles.input}
          placeholder="Affected body part"
          placeholderTextColor="#093624"
          value={affectedbodypart}
          onChangeText={setAffectedbodypart}
        />
        <TextInput
          style={styles.input}
          placeholder="Used ASV on the patient"
          placeholderTextColor="#093624"
          value={usedASV}
          onChangeText={setUsedASV}
        />
        <TextInput
          style={styles.input}
          placeholder="Rescuer name"
          placeholderTextColor="#093624"
          value={rescuername}
          onChangeText={setRescuername}
        />
        <Text style={{ color: '#093624', fontWeight: 'bold', marginTop: 20 }}>
          Discharge Details
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Patient Status"
          placeholderTextColor="#093624"
          value={patientstatus}
          onChangeText={setPatientstatus}
        />
        <TextInput
          style={styles.input}
          placeholder="Any Disability Caused"
          placeholderTextColor="#093624"
          value={anyDisablity}
          onChangeText={setAnyDisablity}
        />
        <TouchableOpacity onPress={handleUpdate}>
          <View
            style={{
              height: 50,
              marginVertical: 20,
              borderRadius: 10,
              backgroundColor: '#093624',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white' }}>Save</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = {
  input: {
    height: 50,
    marginVertical: 10,
    borderWidth: 1,
    paddingLeft: 15,
    borderRadius: 10,
    borderColor: '#093624',
  },
};

export default Patientedit;
