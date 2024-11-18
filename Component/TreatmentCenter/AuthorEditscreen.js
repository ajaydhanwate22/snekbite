import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Image, ScrollView, Alert } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { launchImageLibrary } from 'react-native-image-picker';

const AuthorEditscreen = ({ navigation }) => {
  const { t } = useTranslation();
  const [centerName, setCenterName] = useState('');
  const [centerLocation, setCenterLocation] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [authorizesName, setAuthorizesName] = useState('');
  const [description, setDescription] = useState('');
  const [userId, setUserId] = useState('');
  const [photo, setPhoto] = useState('');
  const [originalData, setOriginalData] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await AsyncStorage.getItem('userData');
        if (data) {
          const userData = JSON.parse(data);
          setCenterName(userData.CenterName);
          setCenterLocation(userData.CenterLocation);
          setEmail(userData.EmailID);
          setContactNumber(userData.ContactNumber);
          setAuthorizesName(userData.AuthorizesName);
          setDescription(userData.Description);
          setUserId(userData.id);
          setOriginalData(userData);
          setPhoto(userData.photo_url); // Load current photo
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
    if (!centerName || !centerLocation || !email || !contactNumber || !authorizesName || !description) {
      Alert.alert('Missing Information', 'Please fill in all required fields.');
      return;
    }

    const hasChanges =
      centerName !== originalData.CenterName ||
      centerLocation !== originalData.CenterLocation ||
      email !== originalData.EmailID ||
      contactNumber !== originalData.ContactNumber ||
      authorizesName !== originalData.AuthorizesName ||
      description !== originalData.Description ||
      photo !== originalData.photo_url;  // Check if the photo is also updated

    if (!hasChanges) {
      Alert.alert('No Changes', 'No updates were made to your profile.', [{ text: 'OK', onPress: () => navigation.goBack() }]);
      return;
    }

    const formData = new FormData();
    formData.append('userId', userId);
    formData.append('CenterName', centerName);
    formData.append('CenterLocation', centerLocation);
    formData.append('EmailID', email);
    formData.append('ContactNumber', contactNumber);
    formData.append('Description', description);
    formData.append('AuthorizesName', authorizesName);

    // If photo is updated, append the new photo
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
        'https://realrate.store/ajayApi/UpdateAuthorizerprofile.php',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      if (response.data.message === 'Update successful') {
        Alert.alert('Success', 'Profile updated successfully!', [
          { text: 'OK', onPress: () => navigation.navigate('Profiletab', { userId }) },
        ]);
      } else {
        Alert.alert('Error', 'Update failed: ' + response.data.message);
      }
    } catch (error) {
      console.error('Update Error:', error);
      if (error.response) {
        Alert.alert('Error', 'An error occurred while updating the data: ' + error.response.data.message);
      } else {
        Alert.alert('Error', 'Error: ' + error.message);
      }
    }
  };

  return (
    
    <ScrollView contentContainerStyle={{flexGrow: 1, backgroundColor: 'white'}}>
      <ImageBackground
        source={require('../Assets/background.png')}
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          height: 180,
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
        }}
      >
        <TouchableOpacity
          style={{ position: 'absolute', top: 20, left: 15 }}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="leftcircle" size={25} color="white" />
        </TouchableOpacity>

        <Image
          source={require('../Assets/logo.png')}
          style={{ resizeMode: 'contain', height: 100, width: 100, top: -20 }}
        />
      </ImageBackground>
        <View style={{paddingHorizontal: 20}}>
          <View style={{ width: '100%', height: 850, backgroundColor: 'white', top: -50, borderRadius: 30, marginBottom: -30, elevation: 5, padding: 20, gap: 20 }}>
         <Text style={{ textAlign: 'center', color: '#093624', fontSize: 25, margin: 20, fontWeight: 'bold' }}>{t('Edit Profile')}</Text>
       
          {/* Render Input Fields */}

          <TouchableOpacity
            onPress={handleImagePick}
            style={{ alignSelf: 'center', marginBottom: 20, position: 'relative' }}
          >
            <View
              style={{
                width: 120,
                height: 120,
                backgroundColor: '#093624',
                borderRadius: 60,
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
              }}
            >
              {photo ? (
                <Image
                  source={{ uri: photo }}
                  style={{ width: '100%', height: '100%', resizeMode: 'cover' }}
                />
              ) : (
                <FontAwesome6 name="user-circle" size={70} color="white" />
              )}
            </View>
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                backgroundColor: 'white',
                borderRadius: 50,
                padding: 5,
              }}
            >
              <FontAwesome5 name="pen" size={20} color="#093624" />
            </View>
          </TouchableOpacity>

          <View style={styles.inputContainer}>
          <FontAwesome5 name="user-circle" size={20} color="black" />
          <TextInput placeholder={t('Authorizes Name')} placeholderTextColor="#093624" value={authorizesName} onChangeText={text => { const capitalizedText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase(); setAuthorizesName(capitalizedText); }}
           style={{flex: 1}} />
          </View>
          <View style={styles.inputContainer}>
          <Icon name="hospital-box-outline" size={20} color="black" />
          <TextInput placeholder={t('Centre name')} placeholderTextColor="#093624" value={centerName} onChangeText={text => { const capitalizedText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase(); setCenterName(capitalizedText); }} 
          style={{flex: 1}} />
          </View>

          <View style={styles.inputContainer}>
            <FontAwesome5 name="map-marker-alt" size={20} color="black" />
          <TextInput placeholder={t('Centre location')} placeholderTextColor="#093624" value={centerLocation} onChangeText={text => { const capitalizedText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase(); setCenterLocation(capitalizedText); }}
           style={{flex: 1}} />
          </View>
          <View style={styles.inputContainer}>
            <Icon name="email" size={20} color="black" />
          <TextInput placeholder={t('Email ID (Optional)')} placeholderTextColor="#093624" value={email} onChangeText={setEmail}
           style={{flex: 1}} />
          </View>
          <View style={styles.inputContainer}>
          <FontAwesome5 name="phone-alt" size={20} color="black" />
          <TextInput placeholder={t('Contact number')} placeholderTextColor="#093624" value={contactNumber} onChangeText={setContactNumber} 
          style={{flex: 1}} />
          </View>
          <View style={styles.inputContainer}>
          <MaterialCommunityIcons name="comment" size={20} color="#093624" />
          <TextInput placeholder={t('Description')} placeholderTextColor="#093624" value={description} onChangeText={text => { const capitalizedText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase(); setdescription(capitalizedText); }}
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
export default AuthorEditscreen;
