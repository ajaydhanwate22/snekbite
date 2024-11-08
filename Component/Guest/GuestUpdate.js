import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Image, ScrollView, Alert } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { launchImageLibrary } from 'react-native-image-picker';

const GuestUpdate = ({ navigation }) => {
  const { t } = useTranslation();
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
    if (!username || !EmailID || !ContactNumber || !address || !Education) {
      Alert.alert('Missing Information', 'Please fill in all required fields.');
      return;
    }

    const hasChanges =
      username !== originalData.Username ||
      EmailID !== originalData.EmailID ||
      ContactNumber !== originalData.ContactNumber ||
      address !== originalData.Address ||
      Education !== originalData.Education ||
      photo !== originalData.photo_url;

    if (!hasChanges) {
      Alert.alert('No Changes', 'No updates were made to your profile.', [
        { text: 'OK', onPress: () => navigation.goBack() },
      ]);
      return;
    }

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
      const type = 'image/jpeg'; // Or 'image/png' depending on the file type

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
        }
      );

      if (response.data.message === 'Update successful') {
        Alert.alert('Success', 'Profile updated successfully!', [
          {
            text: 'OK',
            onPress: () => {
              navigation.navigate('Guestprofilescreen', { userId });
            },
          },
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
            error.response.data.message
        );
      } else {
        Alert.alert('Error', 'Error: ' + error.message);
      }
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: 'white' }}>
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

      <View style={{ paddingHorizontal: 20 }}>
        <View
          style={{
            width: '100%',
            height: 850,
            backgroundColor: 'white',
            top: -50,
            borderRadius: 30,
            marginBottom: -30,
            elevation: 5,
            padding: 20,
            gap: 20,
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              color: '#093624',
              fontSize: 25,
              margin: 20,
              fontWeight: 'bold',
            }}
          >
            {t('Edit Profile')}
          </Text>

          {/* Profile Picture Section */}
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

          {/* Input Fields */}
          <View style={styles.inputContainer}>
            <FontAwesome5 name="user-circle" size={20} color="black" />
            <TextInput
              placeholder={t('Username')}
              placeholderTextColor="#093624"
              value={username}
              onChangeText={(text) => {
                const capitalizedText =
                  text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
                setUsername(capitalizedText);
              }}
              style={styles.input}
            />
          </View>

          <View style={styles.inputContainer}>
            <Icon name="email" size={20} color="black" />
            <TextInput
              placeholder={t('Email ID')}
              placeholderTextColor="#093624"
              value={EmailID}
              onChangeText={setEmailID}
              style={styles.input}
            />
          </View>

          <View style={styles.inputContainer}>
            <FontAwesome5 name="phone-alt" size={20} color="black" />
            <TextInput
              placeholder={t('Contact number')}
              placeholderTextColor="#093624"
              value={ContactNumber}
              onChangeText={setContactNumber}
              style={styles.input}
            />
          </View>

          <View style={styles.inputContainer}>
            <FontAwesome5 name="book-reader" size={20} color="black" />
            <TextInput
              placeholder={t('Education')}
              placeholderTextColor="#093624"
              value={Education}
              onChangeText={(text) => {
                const capitalizedText =
                  text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
                setEducation(capitalizedText);
              }}
              style={styles.input}
            />
          </View>

          <View style={styles.inputContainer}>
            <FontAwesome5 name="map-marker-alt" size={20} color="black" />
            <TextInput
              placeholder={t('Address')}
              placeholderTextColor="#093624"
              value={address}
              onChangeText={(text) => {
                const capitalizedText =
                  text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
                setAddress(capitalizedText);
              }}
              style={styles.input}
            />
          </View>

          <TouchableOpacity onPress={handleUpdate}>
            <View style={styles.updateButton}>
              <Text style={styles.updateButtonText}>{t('Update')}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = {
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#093624',
    borderRadius: 10,
    paddingLeft: 15,
    gap: 20,
    width: '100%',
    height: 55,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    paddingLeft: 10,
  },
  updateButton: {
    height: 55,
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#093624',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  updateButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
};

export default GuestUpdate;
