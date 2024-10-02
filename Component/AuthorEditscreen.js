import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useTranslation} from 'react-i18next';

const AuthorEditscreen = ({navigation}) => {
  const {t} = useTranslation();

  const [centerName, setCenterName] = useState('');
  const [centerLocation, setCenterLocation] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [authorizesName, setAuthorizesName] = useState('');
  const [availabilityOfASV, setAvailabilityOfASV] = useState('');
  const [currentStockASV, setCurrentStockASV] = useState('');
  const [userId, setUserId] = useState('');
  const [originalData, setOriginalData] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await AsyncStorage.getItem('userData');
        if (data) {
          const userData = JSON.parse(data);
          setCenterName(userData.centerName);
          setCenterLocation(userData.centerLocation);
          setEmail(userData.email);
          setContactNumber(userData.contactNumber);
          setAuthorizesName(userData.authorizesName);
          setAvailabilityOfASV(userData.availabilityOfASV);
          setCurrentStockASV(userData.currentStockASV);
          setUserId(userData.userId);
          setOriginalData(userData); // Save original data for comparison
        }
      } catch (error) {
        console.error('Failed to load user data', error);
      }
    };

    fetchUserData();
  }, []);

  const handleUpdate = async () => {
    // Check for required fields
    if (
      !centerName ||
      !centerLocation ||
      !email ||
      !contactNumber ||
      !authorizesName ||
      !availabilityOfASV ||
      !currentStockASV
    ) {
      Alert.alert('Missing Information', 'Please fill in all required fields.');
      return;
    }
  
    // Check if any field has changed
    const hasChanges = 
      centerName !== originalData.centerName ||
      centerLocation !== originalData.centerLocation ||
      email !== originalData.email ||
      contactNumber !== originalData.contactNumber ||
      authorizesName !== originalData.authorizesName ||
      availabilityOfASV !== originalData.availabilityOfASV ||
      currentStockASV !== originalData.currentStockASV;
  
    if (!hasChanges) {
      // Alert for no changes and navigate to Profiletab
      Alert.alert('No Changes', 'No updates were made to your profile.', [
        { text: 'OK', onPress: () => navigation.navigate('Profiletab') },
      ]);
      return;
    }
  
    const formData = new FormData();
    formData.append('userId', userId);
    formData.append('CenterName', centerName);
    formData.append('CenterLocation', centerLocation);
    formData.append('EmailID', email);
    formData.append('ContactNumber', contactNumber);
    formData.append('CurrentstockASV', currentStockASV);
    formData.append('AvailabilityofASV', availabilityOfASV);
    formData.append('AuthorizesName', authorizesName);
  
    try {
      const response = await axios.post(
        'https://realrate.store/ajayApi/UpdateAuthorizerprofile.php',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
  
      if (response.data.message === 'Update successful') {
        Alert.alert('Success', 'Profile updated successfully!', [
          { text: 'OK', onPress: () => navigation.navigate('Profiletab') },
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
          height: 730,
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
          {t('Edit Profile')}
        </Text>

        {/* Render Input Fields */}
        <View style={styles.inputContainer}>
          <Image source={require('./Assets/centername.png')} />
          <TextInput
            placeholder={t('Centre name')}
            placeholderTextColor="#093624"
            value={centerName}
            onChangeText={setCenterName}
          />
        </View>
        <View style={styles.inputContainer}>
          <Image source={require('./Assets/location.png')} />
          <TextInput
            placeholder={t('Centre location')}
            placeholderTextColor="#093624"
            value={centerLocation}
            onChangeText={setCenterLocation}
          />
        </View>
        <View style={styles.inputContainer}>
          <Image source={require('./Assets/mail.png')} />
          <TextInput
            placeholder={t('Email ID (Optional)')}
            placeholderTextColor="#093624"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.inputContainer}>
          <Image source={require('./Assets/contact.png')} />
          <TextInput
            placeholder={t('Contact number')}
            placeholderTextColor="#093624"
            value={contactNumber}
            onChangeText={setContactNumber}
          />
        </View>
        <View style={styles.inputContainer}>
          <Image source={require('./Assets/rescuerusernameicon.png')} />
          <TextInput
            placeholder={t('Authorizes Name')}
            placeholderTextColor="#093624"
            value={authorizesName}
            onChangeText={setAuthorizesName}
          />
        </View>
        <View style={styles.inputContainer}>
          <Image source={require('./Assets/asvavailable.png')} />
          <TextInput
            placeholder={t('Availability of ASV')}
            placeholderTextColor="#093624"
            value={availabilityOfASV}
            onChangeText={setAvailabilityOfASV}
          />
        </View>
        <View style={styles.inputContainer}>
          <Image source={require('./Assets/currASV.png')} />
          <TextInput
            placeholder={t('Current stock ASV')}
            placeholderTextColor="#093624"
            value={currentStockASV}
            onChangeText={setCurrentStockASV}
          />
        </View>

        <TouchableOpacity onPress={handleUpdate}>
          <View
            style={{
              height: 50,
              margin: 12,
              width: 300,
              left: 10,
              borderWidth: 1,
              borderRadius: 10,
              backgroundColor: '#093624',
              top: 20,
            }}>
            <Text style={{color: 'white', padding: 15, textAlign: 'center'}}>
              {t('Update')}
            </Text>
          </View>
        </TouchableOpacity>
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
    left: 10,
    paddingLeft: 15,
    gap: 20,
    margin: 12,
    width: 300,
    height: 50,
  },
};

export default AuthorEditscreen;
