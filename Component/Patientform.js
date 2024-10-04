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
  Modal 
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
  const [genderModalVisible, setGenderModalVisible] = useState(false);
  const [statusModalVisible, setStatusModalVisible] = useState(false);
  const [disabilityModalVisible, setDisabilityModalVisible] = useState(false);

  const genders = ['Male', 'Female', 'Other'];
  const statuses = ['Stable', 'Critical', 'Under Observation', 'Discharged'];
  const disabilities = ['None', 'Temporary', 'Permanent'];

  const handleButtonPress = async () => {
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
            onPress: () => navigation.navigate('Profiletab'),
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
          style={{resizeMode: 'contain', height: 200, width: 200}}
        />
      </ImageBackground>
        <View
          style={{
            width: 340,
            height: 1250,
            backgroundColor: 'white',
            left: 20,
            top: -60,
            borderRadius: 30,
            marginBottom: -30,
            elevation: 5,
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: '#093624',
              fontSize: 25,
              margin: 30,
              fontWeight: 'bold',
            }}>
            Patient Form
          </Text>
          <Text style={{ left: 30, color: '#093624', fontWeight: 'bold' }}>
            Patient Details
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
            gap: 20,
            margin: 12,
            width: 300,
            height: 50,
          }}>
          <TextInput
            placeholder={t("Full name")}
            placeholderTextColor="#093624"
            value={fullname}
            onChangeText={setFullname}
          />
        </View>
          <TextInput
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: '#093624',
              borderRadius: 10,
              left: 10,
              paddingLeft: 10,
              gap: 20,
              margin: 12,
              width: 300,
              height: 50,
            }}
            placeholder="Age"
            placeholderTextColor="#093624"
            value={age}
            onChangeText={setAge}
          />
          <TouchableOpacity 
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: '#093624',
              borderRadius: 10,
              left: 10,
              paddingLeft: 10,
              gap: 20,
              margin: 12,
              width: 300,
              height: 50,
            }} 
            onPress={() => setGenderModalVisible(true)}>
            <Text style={{color: gender ? '#000' : '#093624' }}>
              {gender || "Gender"}
            </Text>
          </TouchableOpacity>
          <TextInput
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: '#093624',
              borderRadius: 10,
              left: 10,
              paddingLeft: 10,
              gap: 20,
              margin: 12,
              width: 300,
              height: 50,
            }}
            placeholder="Contact details of patient"
            placeholderTextColor="#093624"
            value={contactNumber}
            onChangeText={setContactNumber}
          />
          <TextInput
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: '#093624',
              borderRadius: 10,
              left: 10,
              paddingLeft: 10,
              gap: 20,
              margin: 12,
              width: 300,
              height: 50,
            }}
            placeholder="Address"
            placeholderTextColor="#093624"
            value={address}
            onChangeText={setAddress}
          />
          <Text style={{ left: 30, color: '#093624', fontWeight: 'bold' }}>
            Snakebite Details
          </Text>
          <TextInput
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: '#093624',
              borderRadius: 10,
              left: 10,
              paddingLeft: 10,
              gap: 20,
              margin: 12,
              width: 300,
              height: 50,
            }}
            placeholder="Snake ID(if available)"
            placeholderTextColor="#093624"
            value={snakeID}
            onChangeText={setSnakeID}
          />
          <TextInput
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: '#093624',
              borderRadius: 10,
              left: 10,
              paddingLeft: 10,
              gap: 20,
              margin: 12,
              width: 300,
              height: 50,
            }}
            placeholder="Bite location(area)"
            placeholderTextColor="#093624"
            value={biteLocation}
            onChangeText={setBiteLocation}
          />
          <TextInput
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: '#093624',
              borderRadius: 10,
              left: 10,
              paddingLeft: 10,
              gap: 20,
              margin: 12,
              width: 300,
              height: 50,
            }}
            placeholder="Affected body part"
            placeholderTextColor="#093624"
            value={affectedbodypart}
            onChangeText={setAffectedbodypart}
          />
          <TextInput
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: '#093624',
              borderRadius: 10,
              left: 10,
              paddingLeft: 10,
              gap: 20,
              margin: 12,
              width: 300,
              height: 50,
            }}
            placeholder="Used ASV on the patient"
            placeholderTextColor="#093624"
            value={usedASV}
            onChangeText={setUsedASV}
          />
          <TextInput
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: '#093624',
              borderRadius: 10,
              left: 10,
              paddingLeft: 10,
              gap: 20,
              margin: 12,
              width: 300,
              height: 50,
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
              marginLeft: 120,
              borderColor: '#000000',
              borderWidth: 1,
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
          <Text style={{ left: 30, color: '#093624', fontWeight: 'bold', top:30 }}>
            Discharge Details 
          </Text>
          <TouchableOpacity 
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: '#093624',
              borderRadius: 10,
              left: 10,
              paddingLeft: 10,
              gap: 20,
              margin: 12,
              width: 300,
              height: 50,
              top:30
            }} 
            onPress={() => setStatusModalVisible(true)}>
            <Text style={{  color: patientstatus ? '#000' : '#093624' }}>
              {patientstatus || "Patient Status"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: '#093624',
              borderRadius: 10,
              left: 10,
              paddingLeft: 10,
              gap: 20,
              margin: 12,
              width: 300,
              height: 50,
              top:30
            }} 
            onPress={() => setDisabilityModalVisible(true)}>
            <Text style={{ color: anyDisablity ? '#000' : '#093624' }}>
              {anyDisablity || "Any Disability Caused"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleButtonPress}>
            <View
              style={{
                height: 50,
                margin: 12,
                width: 300,
                left: 10,
                borderWidth: 1,
                borderRadius: 10,
                backgroundColor: '#093624',
                top:30
              }}>
              <Text style={{ color: 'white', padding: 15, textAlign: 'center' }}>
                Save
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Gender Selection Modal */}
     {/* Gender Selection Modal */}
<Modal
  transparent={true}
  animationType="slide"
  visible={genderModalVisible}
  onRequestClose={() => setGenderModalVisible(false)}>
  <View style={{
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  }}>
    <View style={{ 
      backgroundColor: 'white', 
      borderRadius: 10, 
      padding: 20,
      width: '70%', // Adjust the width here
      height: '35%', // Adjust the height here
      alignSelf: 'center', // Center the modal
    }}>
      <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
        Select Gender
      </Text>
      {genders.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => {
          setGender(item);
          setGenderModalVisible(false);
        }}>
          <Text style={{
            padding: 15,
            backgroundColor: 'white',
            borderBottomWidth: 1,
            borderBottomColor: '#ccc',
          }}>{item}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity onPress={() => setGenderModalVisible(false)}>
        <Text style={{ padding: 15, color: 'red', textAlign: 'center' }}>Close</Text>
      </TouchableOpacity>
    </View>
  </View>
</Modal>

{/* Patient Status Modal */}
<Modal
  transparent={true}
  animationType="slide"
  visible={statusModalVisible}
  onRequestClose={() => setStatusModalVisible(false)}>
  <View style={{
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  }}>
    <View style={{ 
      backgroundColor: 'white', 
      borderRadius: 10, 
      padding: 20,
      width: '70%', // Adjust the width here
      height: '40%', // Adjust the height here
      alignSelf: 'center', // Center the modal
    }}>
      <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
        Select Patient Status
      </Text>
      {statuses.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => {
          setPatientstatus(item);
          setStatusModalVisible(false);
        }}>
          <Text style={{
            padding: 15,
            backgroundColor: 'white',
            borderBottomWidth: 1,
            borderBottomColor: '#ccc',
          }}>{item}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity onPress={() => setStatusModalVisible(false)}>
        <Text style={{ padding: 15, color: 'red', textAlign: 'center' }}>Close</Text>
      </TouchableOpacity>
    </View>
  </View>
</Modal>

{/* Disability Modal */}
<Modal
  transparent={true}
  animationType="slide"
  visible={disabilityModalVisible}
  onRequestClose={() => setDisabilityModalVisible(false)}>
  <View style={{
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  }}>
    <View style={{ 
      backgroundColor: 'white', 
      borderRadius: 10, 
      padding: 20,
      width: '70%', // Adjust the width here
      height: '35%', // Adjust the height here
      alignSelf: 'center', // Center the modal
    }}>
      <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
        Select Disability
      </Text>
      {disabilities.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => {
          setAnyDisablity(item);
          setDisabilityModalVisible(false);
        }}>
          <Text style={{
            padding: 15,
            backgroundColor: 'white',
            borderBottomWidth: 1,
            borderBottomColor: '#ccc',
          }}>{item}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity onPress={() => setDisabilityModalVisible(false)}>
        <Text style={{ padding: 15, color: 'red', textAlign: 'center' }}>Close</Text>
      </TouchableOpacity>
    </View>
  </View>
</Modal>

      <FooterNavigationcenter navigation={navigation} />
    </>
  );
}

export default Patientgform;
