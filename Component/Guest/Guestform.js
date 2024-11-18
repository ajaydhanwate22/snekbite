import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ImageBackground, Image, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';  
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';  // Add Feather for additional icons
import GuestFooternavigation from './GuestFooternavigation';

function Guestformscreen({ navigation }) {
  const { t } = useTranslation();
  const [CurrentLocation, setCurrentLocation] = useState('');
  const [Manuallocation, setManualLocation] = useState('');
  const [Description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const currentDate = new Date().toISOString().split('T')[0]; 
  const [username, setusername] = useState('');

  useEffect(() => {
    const getData = async () => {
      try {
        const userData = await AsyncStorage.getItem('userData');
        if (userData) {
          const parsedData = JSON.parse(userData);
          setusername(parsedData.Username || '');  
        }
      } catch (error) {
        console.error('Error fetching user data from AsyncStorage', error);
      }
    };
    getData();
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
        setImage(response.assets[0]);  // Set the picked image
      }
    });
  };

  const handleButtonPress = async () => {
    if (!CurrentLocation || !Manuallocation || !Description) {
      Alert.alert('Error', 'Please fill all fields.');
      return;
    }

    const formData = new FormData();
    formData.append('CurrentLocation', CurrentLocation);
    formData.append('Manuallocation', Manuallocation);
    formData.append('Description', Description);
    formData.append('Date', currentDate);
    formData.append('Username', username);
    
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
      const response = await axios.post('https://realrate.store/ajayApi/GuestPostdata.php', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const responseJson = response.data;
      if (responseJson.message === 'Uploaded successfully') {
        Alert.alert('Success', 'Uploaded successful!', [
            {
                text: 'OK',
                onPress: () => navigation.navigate('Guestprofilescreen'),
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
          source={require('../Assets/background.png')} 
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            height: 180,
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
          }}>
          <TouchableOpacity
            style={{ position: 'absolute', top: 20, left: 15 }}
            onPress={() => navigation.goBack()}>
            <AntDesign name="leftcircle" size={25} color="white" />
          </TouchableOpacity>
          
          <Image 
            source={require('../Assets/logo.png')}
            style={{ resizeMode: 'contain', height: 100, width: 100, top: -20 }} 
          />
        </ImageBackground>

        <View style={{ paddingHorizontal: 20 }}>
          <View style={{
            width: '100%',
            height: 600,
            backgroundColor: 'white',
            top: -50,
            borderRadius: 30,
            marginBottom: -30,
            elevation: 5,
            padding: 20,
            gap: 20
          }}>
            <Text style={{
              textAlign: 'center',
              color: '#093624',
              fontSize: 25,
              fontWeight: 'bold',
              margin: 20
            }}>
              {t('Upload Post')} 
            </Text>

            <TouchableOpacity onPress={handleImagePick}>
              <View style={{
                width: '35%',
                height: 90,
                backgroundColor: '#FFFFFF',
                borderRadius: 10,
                elevation: 10,
                borderColor: '#000000',
                borderWidth: 1,
                marginBottom: 20,
                alignSelf: 'center',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                {image ? (
                  <Image 
                    source={{ uri: image.uri }} 
                    style={{ width: '100%', height: '100%', resizeMode: 'contain' }} 
                  />
                ) : (
                  <Feather name="camera" size={30} color="#093624" style={{ position: 'absolute', top: 30 }} />
                )}
              </View>
            </TouchableOpacity>

            {/* Current Location Input */}
            <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#093624', borderRadius: 10, paddingLeft: 10, gap: 20, width: '100%', height: 55, marginBottom: 15 }}>
              <AntDesign name="enviromento" size={20} color="#093624" />
              <TextInput
                style={{ flex: 1 }}
                placeholder={t("Current Location")}
                placeholderTextColor="#093624"
                value={CurrentLocation}
                onChangeText={setCurrentLocation}
              />
            </View>

            {/* Manual Location Input */}
            <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#093624', borderRadius: 10, paddingLeft: 10, gap: 20, width: '100%', height: 55, marginBottom: 15 }}>
              <AntDesign name="pushpino" size={20} color="#093624" />
              <TextInput
                style={{ flex: 1 }}
                placeholder={t("Manual Location")}
                placeholderTextColor="#093624"
                value={Manuallocation}
                onChangeText={setManualLocation}
              />
            </View>

            {/* Description Input */}
            <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#093624', borderRadius: 10, paddingLeft: 10, gap: 20, width: '100%', height: 55, marginBottom: 20 }}>
              <Feather name="file-text" size={20} color="#093624" />
              <TextInput
                style={{ flex: 1 }}
                placeholder={t("Description")}
                placeholderTextColor="#093624"
                value={Description}
                onChangeText={setDescription}
              />
            </View>

            {/* Save Button */}
            <TouchableOpacity onPress={handleButtonPress}>
              <View style={{
                height: 55,
                width: '100%',
                borderWidth: 1,
                borderRadius: 10,
                backgroundColor: '#093624',
                top: 10,
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <Text style={{ color: 'white', padding: 15, textAlign: 'center' }}>{t('Upload')}</Text>
              </View>
            </TouchableOpacity>
          </View>              
        </View>
      </ScrollView>

      <GuestFooternavigation navigation={navigation} />
    </>
  );
}

export default Guestformscreen;
