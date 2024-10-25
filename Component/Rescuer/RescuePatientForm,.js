import React, { useState,useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ImageBackground, Image, ScrollView, Modal } from 'react-native';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';  
import AntDesign from 'react-native-vector-icons/AntDesign';
import RescuerFooterNavigation from './RescuerFooterNavigation';

function RescuePatientFormscren({ navigation, route }) {
  const { t } = useTranslation();
  const [fullname, setFullname] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [snakeID, setSnakeID] = useState('');
  const [biteLocation, setBiteLocation] = useState('');
  const [affectedbodypart, setAffectedbodypart] = useState('');
  const [usedASV, setUsedASV] = useState('');
  const [patientstatus, setPatientstatus] = useState('');
  const [anyDisablity, setAnyDisablity] = useState('');
  const [genderModalVisible, setGenderModalVisible] = useState(false);
  const [statusModalVisible, setStatusModalVisible] = useState(false);
  const [disabilityModalVisible, setDisabilityModalVisible] = useState(false);
  const [rescuername, setrescuername] = useState('');
  const [address, setaddress] = useState('');
  const [image, setImage] = useState(null);
  const {userId} = route.params;
  const currentDate = new Date().toISOString().split('T')[0]; 
  

  const genders = ['Male', 'Female', 'Other'];
  const statuses = ['Stable', 'Critical', 'Under Observation', 'Discharged'];
  const disabilities = ['None', 'Temporary', 'Permanent'];



  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (userId) {
          const response = await axios.get(
            `https://realrate.store/ajayApi/Rescuefetchdata.php?userId=${userId}`,
          );
          const userData = response.data.data;
          if (userData) {
            setrescuername(userData.RescuerName || '');
            setaddress(userData.Address|| '');
          }
        }
      } catch (error) {
        console.error('Error fetching user data from server', error);
      }
    };

    fetchUserData();
  }, [userId]);


  

  const handleImagePick = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,  
    };
    
    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        setImage(response.assets[0]);  
      }
    });
  };

  const handleButtonPress = async () => {
    if (!fullname || !age || !gender || !contactNumber || !biteLocation || !affectedbodypart || !usedASV || !patientstatus || !anyDisablity) {
      Alert.alert('Error', 'Please fill all fields.');
      return;
    }

    const formData = new FormData();
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
    formData.append('RescuerName', rescuername);
    formData.append('Address', address);
    formData.append('UsedASVdate', currentDate); 
    
    if (image) {
      const localUri = image.uri;
      const filename = localUri.split('/').pop();
      const type = image.type;

      formData.append('photo', {
        uri: localUri,
        name: filename,
        type: type,
      });
    }
    
    try {
      const response = await axios.post('https://realrate.store/ajayApi/Rescuepatientdata.php', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const responseJson = response.data;
      if (responseJson.message === 'Registration successfully') {
        Alert.alert('Success', 'Registration successful!', [
          {
            text: 'OK',
            onPress: () => navigation.navigate('RescuerAuthorizesNamesreen',{userId}),
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
        source={require('../Assets/background.png')} style={{flex: 1,alignItems: 'center',justifyContent: 'center',
          overflow: 'hidden',height: 300,borderBottomLeftRadius: 40,borderBottomRightRadius: 40,}}>
            <TouchableOpacity style={{ position: 'absolute',top: 20,   left: 15}}        onPress={() => navigation.goBack()}>
            <AntDesign name="leftcircle" size={25} color="white" />
            </TouchableOpacity>
              
        <Image source={require('../Assets/logo.png')}style={{resizeMode: 'contain', height: 150, width: 150, top:-20}}/>
      </ImageBackground>
      <View style={{paddingHorizontal:20}}>
        <View style={{ width: '100%',height: 1200,backgroundColor: 'white',top: -50,borderRadius: 30,marginBottom: -30,elevation: 5,padding:20,gap:20}}>
          <Text style={{ textAlign: 'center',color: '#093624',fontSize: 25,fontWeight: 'bold',margin:20}}>
            Patient Form
          </Text>
          <Text style={{ color: '#093624', fontWeight: 'bold' }}>Patient Details</Text>
          <TextInput style={{ flexDirection: 'row', alignItems: 'center',borderWidth: 1,borderColor: '#093624',
              borderRadius: 10,paddingLeft: 10,gap: 20,width: '100%',height: 55,}}
            placeholder="Full Name"  placeholderTextColor="#093624" value={fullname} onChangeText={setFullname}/>
            <TextInput style={{flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#093624', borderRadius: 10, paddingLeft: 10, gap: 20, width: '100%', height: 55}} placeholder="Age" placeholderTextColor="#093624" value={age} onChangeText={text => /^\d*$/.test(text) && setAge(text)} keyboardType="numeric" />
          <TouchableOpacity style={{  flexDirection: 'row',alignItems: 'center',borderWidth: 1,
              borderColor: '#093624',borderRadius: 10,paddingLeft: 10,gap: 20,width: '100%',
              height: 55}} 
            onPress={() => setGenderModalVisible(true)}>
            <Text style={{color: gender ? '#000' : '#093624' }}> {gender || "Gender"} </Text>
          </TouchableOpacity>
          <TextInput style={{flexDirection: 'row',alignItems: 'center',borderWidth: 1,borderColor: '#093624',
              borderRadius: 10,paddingLeft: 10,gap: 20,width: '100%',height: 55,}}
            placeholder="Contact details of patient" placeholderTextColor="#093624"
            value={contactNumber}  onChangeText={setContactNumber}  keyboardType="phone-pad"/>

            <TouchableOpacity onPress={handleImagePick}>
            <View style={{width: '35%', height: 90, top: 10, backgroundColor: '#FFFFFF', borderRadius: 10, elevation: 10, borderColor: '#000000', borderWidth: 1, marginBottom: 20, alignSelf: "center"}} >
              {image ? (
               <View style={{width: '100%', height: '100%', padding: 10, justifyContent: 'center', alignItems: 'center'}} >
               <Image source={{ uri: image.uri }} style={{width: '100%', height: '100%', resizeMode: 'contain'}} />
              </View>
              ) : (
          <View style={{justifyContent:'center', alignItems:"center",height: '100%'}}>
            <Text style={{textAlign:'center'}}>Upload photo</Text>
          </View>
              )}
            </View>
          </TouchableOpacity>

       <Text style={{ color: '#093624', fontWeight: 'bold' }}>Snakebite Details</Text>

       <TextInput style={{flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#093624', borderRadius: 10, paddingLeft: 10, gap: 20, width: '100%', height: 55}} placeholder="Snake ID(if available)" placeholderTextColor="#093624" value={snakeID} onChangeText={setSnakeID}  keyboardType="phone-pad"/>

      <TextInput style={{flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#093624', borderRadius: 10, paddingLeft: 10, gap: 20, width: '100%', height: 55}} placeholder="Bite location(area)" placeholderTextColor="#093624" value={biteLocation} onChangeText={setBiteLocation} />

        <TextInput style={{flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#093624', borderRadius: 10, paddingLeft: 10, gap: 20, width: '100%', height: 55}} placeholder="Affected body part" placeholderTextColor="#093624" value={affectedbodypart} onChangeText={setAffectedbodypart} />

    <TextInput style={{flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#093624', borderRadius: 10, paddingLeft: 10, gap: 20, width: '100%', height: 55}} placeholder="Used ASV on the patient" placeholderTextColor="#093624" value={usedASV} onChangeText={setUsedASV}  keyboardType="numeric" />


    <Text style={{ color: '#093624', fontWeight: 'bold' }}>Discharge Details</Text>

    <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#093624', borderRadius: 10, paddingLeft: 10, gap: 20, width: '100%', height: 55}} onPress={() => setStatusModalVisible(true)}><Text style={{color: patientstatus ? '#000' : '#093624'}}>{patientstatus || "Patient Status"}</Text></TouchableOpacity>

    <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#093624', borderRadius: 10, paddingLeft: 10, gap: 20, width: '100%', height: 55}} onPress={() => setDisabilityModalVisible(true)}><Text style={{color: anyDisablity ? '#000' : '#093624'}}>{anyDisablity || "Any Disability Caused"}</Text></TouchableOpacity>

    <TouchableOpacity onPress={handleButtonPress}>
      <View style={{height: 55, width: '100%', borderWidth: 1, borderRadius: 10, backgroundColor: '#093624', top: 10}}>
        <Text style={{color: 'white', padding: 15, textAlign: 'center'}}>Save</Text>
      </View>
    </TouchableOpacity>

        </View>
                
      </View>
      </ScrollView>

      {/* Gender Selection Modal */}
     <Modal transparent={true} animationType="slide" visible={genderModalVisible} onRequestClose={() => setGenderModalVisible(false)}>
      <View style={{flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)'}}>
        <View style={{backgroundColor: 'white', borderRadius: 10, padding: 20, width: '70%', height: '35%', alignSelf: 'center'}}>
          <Text style={{textAlign: 'center', fontSize: 18, fontWeight: 'bold', marginBottom: 10}}>Select Gender</Text>
          {genders.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => {setGender(item); setGenderModalVisible(false);}}>
            <Text style={{padding: 15, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#ccc'}}>{item}</Text>
            </TouchableOpacity>))}
            <TouchableOpacity onPress={() => setGenderModalVisible(false)}>
              <Text style={{padding: 15, color: 'red', textAlign: 'center'}}>Close</Text>
            </TouchableOpacity>
         </View>
        </View>
      </Modal>


{/* Patient Status Modal */}
<Modal transparent={true} animationType="slide" visible={statusModalVisible} onRequestClose={() => setStatusModalVisible(false)}>
  <View style={{flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)'}}>
    <View style={{backgroundColor: 'white', borderRadius: 10, padding: 20, width: '70%', height: '40%', alignSelf: 'center'}}>
      <Text style={{textAlign: 'center', fontSize: 18, fontWeight: 'bold', marginBottom: 10}}>Select Patient Status</Text>
      {statuses.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => {setPatientstatus(item); setStatusModalVisible(false);}}>
          <Text style={{padding: 15, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#ccc'}}>{item}</Text>
        </TouchableOpacity>))}
        <TouchableOpacity onPress={() => setStatusModalVisible(false)}>
            <Text style={{padding: 15, color: 'red', textAlign: 'center'}}>Close</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>

{/* Disability Modal */}
<Modal transparent={true} animationType="slide" visible={disabilityModalVisible} onRequestClose={() => setDisabilityModalVisible(false)}>
  <View style={{flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)'}}>
    <View style={{backgroundColor: 'white', borderRadius: 10, padding: 20, width: '70%', height: '35%', alignSelf: 'center'}}>
      <Text style={{textAlign: 'center', fontSize: 18, fontWeight: 'bold', marginBottom: 10}}>Select Disability</Text>
      {disabilities.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => {setAnyDisablity(item); setDisabilityModalVisible(false);}}>
          <Text style={{padding: 15, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#ccc'}}>{item}</Text>
        </TouchableOpacity>))}
          <TouchableOpacity onPress={() => setDisabilityModalVisible(false)}>
            <Text style={{padding: 15, color: 'red', textAlign: 'center'}}>Close</Text>
          </TouchableOpacity>
    </View>
  </View>
</Modal>
      <RescuerFooterNavigation navigation={navigation} />
    </>
  );
}

export default RescuePatientFormscren;
