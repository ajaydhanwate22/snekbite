import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ImageBackground, Image, ScrollView } from 'react-native';
import axios from 'axios';
import AntDesign from 'react-native-vector-icons/AntDesign';

function Rescuepatientedit({ route, navigation }) {
  const { patientDetails } = route.params;
  const [fullname, setFullname] = useState(patientDetails.FullName);
  const [age, setAge] = useState(patientDetails.Age.toString());
  const [gender, setGender] = useState(patientDetails.Gender);
  const [contactNumber, setContactNumber] = useState(patientDetails.ContactNumber);
  const [snakeID, setSnakeID] = useState(patientDetails.SnakeID);
  const [biteLocation, setBiteLocation] = useState(patientDetails.BiteLocation);
  const [affectedbodypart, setAffectedbodypart] = useState(patientDetails.AffectedBodypart);
  const [usedASV, setUsedASV] = useState(patientDetails.UsedASV);
  const [patientstatus, setPatientstatus] = useState(patientDetails.Patientstatus);
  const [anyDisablity, setAnyDisablity] = useState(patientDetails.AnyDisablity);
  const currentDate = new Date().toISOString().split('T')[0];  
  

  const handleUpdate = async () => {
    const id = patientDetails.id;

    // Check for required fields
    if (!fullname || !age || !gender || !contactNumber || !address || !usedASV || !biteLocation || !affectedbodypart || !rescuername || !patientstatus || !anyDisablity) {
      Alert.alert('Missing Information', 'Please fill in all required fields before updating.');
      return;
    }

    // Check if any field has changed
    const hasChanges =
      fullname !== patientDetails.FullName ||
      age !== patientDetails.Age.toString() ||
      gender !== patientDetails.Gender ||
      contactNumber !== patientDetails.ContactNumber ||
      snakeID !== patientDetails.SnakeID ||
      biteLocation !== patientDetails.BiteLocation ||
      affectedbodypart !== patientDetails.AffectedBodypart ||
      usedASV !== patientDetails.UsedASV ||
      patientstatus !== patientDetails.Patientstatus ||
      anyDisablity !== patientDetails.AnyDisablity;

    if (!hasChanges) {
      Alert.alert('No Changes', 'No updates were made to the patient details.', [
        { text: 'OK', onPress: () => navigation.goBack() },
      ]);
      return;
    }

    const formData = new FormData();
    formData.append('id', id);
    formData.append('FullName', fullname);
    formData.append('Age', age);
    formData.append('Gender', gender);
    formData.append('ContactNumber', contactNumber);
    formData.append('SnakeID', snakeID);
    formData.append('BiteLocation', biteLocation);
    formData.append('AffectedBodypart', affectedbodypart);
    formData.append('UsedASV', usedASV);
    formData.append('Patientstatus', patientstatus);
    formData.append('AnyDisablity', anyDisablity);

    try {
      const response = await axios.post('https://realrate.store/ajayApi/RescuUpdatepatient.php', formData, {
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
        source={require('../Assets/background.png')}
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          height: 150,
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
        }}>
          <TouchableOpacity  style={{ position: 'absolute',top: 20,   left: 15}}   onPress={() => navigation.goBack()} >
          <AntDesign name="leftcircle" size={25} color="white"/>
          </TouchableOpacity>
              
        {/* <Image
          source={require('../Assets/logo.png')}
          style={{resizeMode: 'contain', height: 150, width: 150,}}
        /> */}
      </ImageBackground>
      <View style={{paddingHorizontal:20}}>
      <View
        style={{
          width:'100%',
          height: 1150,
          backgroundColor: 'white',
          top: -50,
          borderRadius: 30,
          marginBottom: -30,
          elevation: 5,
        }}>
        <Text
          style={{
            textAlign: 'center',
            color: '#093624',
            fontSize: 25,
            margin: 50,
            fontWeight: 'bold',
          }}>
          Update Form
        </Text>
        <View style={{paddingHorizontal:20,gap:20}}>
        <Text style={{ color: '#093624', fontWeight: 'bold'}}>
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
        <Text style={{ color: '#093624', fontWeight: 'bold'}}>
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
        <Text style={{ color: '#093624', fontWeight: 'bold' }}>
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
              height: 55,
              width: '100%',
              borderWidth: 1,
              borderRadius: 10,
              backgroundColor: '#093624',
              top:20
            }}>
            <Text style={{color: 'white', padding: 15, textAlign: 'center'}}>Update</Text>
          </View>
        </TouchableOpacity>
        </View>
      </View>
      </View>
    </ScrollView>
  );
}

const styles = {
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#093624',
    borderRadius: 10,
    paddingLeft: 20,
    gap: 20,
    width: '100%',
    height: 55,
  },
};

export default Rescuepatientedit;
