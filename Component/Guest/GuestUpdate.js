import React, {useEffect, useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Image, ScrollView, Alert } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useTranslation} from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { launchImageLibrary } from 'react-native-image-picker';

const GuestUpdate = ({navigation}) => {
  const {t} = useTranslation();
  const [username, setUsername] = useState('');
  const [EmailID, setEmailID] = useState('');
  const [ContactNumber, setContactNumber] = useState('');
  const [address, setAddress] = useState('');
  const [Education, setEducation] = useState('');
  const [userId, setUserId] = useState('');
  const [originalData, setOriginalData] = useState({});
  const [photo, setPhoto] = useState('');


  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await AsyncStorage.getItem('userData');
        if (data) {
          const userData = JSON.parse(data);
          setUsername(userData.Username);
          setEmailID(userData.EmailID);
          setContactNumber(userData.ContactNumber);
          setEducation(userData.Education);
          setAddress(userData.Address);
          setUserId(userData.id);
          setPhoto(userData.photo_url); // Load current photo
          setOriginalData(userData);
        }
      } catch (error) {
        console.error('Failed to load user data', error);
      }
    };
    fetchUserData();
  }, []);


  
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
        setPhoto(response.assets[0].uri);  // Update the photo state with the new image
      }
    });
  };


  const handleUpdate = async () => {
    if (!username  || !EmailID || !ContactNumber || !address || !Education) { Alert.alert('Missing Information', 'Please fill in all required fields.'); return; }

    const hasChanges = username !== originalData.Username  || EmailID !== originalData.EmailID  || ContactNumber !== originalData.ContactNumber  || address !== originalData.Address  || Education !== originalData.Education ||photo !== originalData.photo_url;
    
    if (!hasChanges) { Alert.alert('No Changes', 'No updates were made to your profile.', [{text: 'OK', onPress: () => navigation.goBack()}]); return; }

    const formData = new FormData();
    formData.append('userId', userId);
    formData.append('Username', username);
    formData.append('EmailID', EmailID);
    formData.append('ContactNumber', ContactNumber);
    formData.append('Address', address);
    formData.append('Education', Education);


    
    if (photo) {
      const localUri = photo; 
      const filename = localUri.split('/').pop();
      const type = 'image/jpeg';  // Or 'image/png' depending on the file type

      formData.append('photo', {
        uri: localUri,
        name: filename,
        type: type,
      });
    }

    try {
      const response = await axios.post(
        'https://realrate.store/ajayApi/GuestUpdate.php',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );

      if (response.data.message === 'Update successful') {
        Alert.alert('Success', 'Profile updated successfully!', [
          {text: 'OK', onPress: () => {
            navigation.navigate('Guestprofilescreen', { userId });
          }},
        ]);
      } else {
        Alert.alert('Error', 'Update failed: ' + response.data.message);
      }
    } catch (error) {
      console.error('Update Error:', error);
      if (error.response) {
        Alert.alert(
          'Error',
          'An error occurred while updating the data: ' +
            error.response.data.message,
        );
      } else {
        Alert.alert('Error', 'Error: ' + error.message);
      }
    }
  };

  return (
    
    <ScrollView contentContainerStyle={{flexGrow: 1, backgroundColor: 'white'}}>
      <ImageBackground source={require('../Assets/background.png')} style={{ flex: 1, alignItems: 'center', justifyContent: 'center', overflow: 'hidden', height: 300, borderBottomLeftRadius: 40, borderBottomRightRadius: 40 }}>
      <AntDesign name="leftcircle" size={25} color="white" style={{ position: 'absolute',top: 20,   left: 15}}        onPress={() => navigation.goBack()}/>
      <Image source={require('../Assets/logo.png')} style={{ resizeMode: 'contain', height: 150, width: 150, top:-30 }} />
      </ImageBackground>

        <View style={{paddingHorizontal: 20}}>
          <View style={{ width: '100%', height: 750, backgroundColor: 'white', top: -50, borderRadius: 30, marginBottom: -30, elevation: 5, padding: 20, gap: 20 }}>
         <Text style={{ textAlign: 'center', color: '#093624', fontSize: 25, margin: 20, fontWeight: 'bold' }}>{t('Edit Profile')}</Text>
       
          {/* Render Input Fields */}


          <TouchableOpacity onPress={handleImagePick} style={{ alignSelf: 'center', marginBottom: 20 }}>
            <View style={{ width: 100, height: 100, backgroundColor: '#093624', borderRadius: 50, justifyContent: 'center', alignItems: 'center' }}>
              {photo ? (
                <Image source={{ uri: photo }} style={{ width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 50 }} />
              ) : (
                <FontAwesome6 name="user-circle" size={60} color="white" />
              )}
            </View>
          </TouchableOpacity>


          <View style={styles.inputContainer}>
          <FontAwesome5 name="user-circle" size={20} color="black" />
          <TextInput placeholder={t('Username')} placeholderTextColor="#093624" value={username} onChangeText={text => { const capitalizedText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase(); username(capitalizedText); }}
           style={{flex: 1}} />
          </View>

          <View style={styles.inputContainer}>
            <Icon name="email" size={20} color="black" />
          <TextInput placeholder={t('Email ID')} placeholderTextColor="#093624" value={EmailID} onChangeText={setEmailID}
           style={{flex: 1}} />
          </View>

          <View style={styles.inputContainer}>
          <FontAwesome5 name="phone-alt" size={20} color="black" />
          <TextInput placeholder={t('Contact number')} placeholderTextColor="#093624" value={ContactNumber} onChangeText={setContactNumber} 
          style={{flex: 1}} />
          </View>
{/* 
          <View style={styles.inputContainer}>
          <FontAwesome5 name="user" size={20} color="#093624" />
          <TextInput placeholder={t('Experience')} placeholderTextColor="#093624" value={Experience} onChangeText={text => { const capitalizedText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase(); setExperience(capitalizedText); }}
           style={{flex: 1}} /> 
          </View> */}

<View style={styles.inputContainer}>
            <FontAwesome5 name="book-reader" size={20} color="black" />
          <TextInput placeholder={t('Education')} placeholderTextColor="#093624" value={Education} onChangeText={text => { const capitalizedText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase(); setEducation(capitalizedText); }}
           style={{flex: 1}} />
          </View>

          <View style={styles.inputContainer}>
            <FontAwesome5 name="map-marker-alt" size={20} color="black" />
          <TextInput placeholder={t('Address')} placeholderTextColor="#093624" value={address} onChangeText={text => { const capitalizedText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase(); setAddress(capitalizedText); }}
           style={{flex: 1}} />
          </View>

          <TouchableOpacity onPress={handleUpdate}>
          <View style={{ height: 55, width: '100%', borderWidth: 1, borderRadius: 10, backgroundColor: '#093624', top: 20 }}>
            <Text style={{ color: 'white', padding: 15, textAlign: 'center' }}>{t('Update')}</Text>
          </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = {
  inputContainer: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#093624', borderRadius: 10, paddingLeft: 15, gap: 20, width: '100%', height: 55 }
};
export default GuestUpdate;
