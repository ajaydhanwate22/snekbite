import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Image, ScrollView, Alert } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useTranslation} from 'react-i18next';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';  
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function RescuersignupScreen({ navigation }) {
  const {t} = useTranslation();
  const [rescuername, setRescuername] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [contactnumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [experience, setExperience] = useState('');
  const [education, setEducation] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =useState(false);
  // const [image, setImage] = useState(null);
  const currentDate = new Date().toISOString().split('T')[0];

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  };

  // const handleImagePick = () => {
  //   const options = {
  //     mediaType: 'photo',
  //     quality: 1,  
  //   };
    
  //   launchImageLibrary(options, (response) => {
  //     if (response.didCancel) {
  //       console.log('User cancelled image picker');
  //     } else if (response.errorCode) {
  //       console.log('ImagePicker Error: ', response.errorMessage);
  //     } else {
  //       setImage(response.assets[0]);  
  //     }
  //   });
  // };

  const handleButtonPress = async () => {
    if (!rescuername || !age || !gender || !contactnumber || !email || !address || password !== confirmPassword || !experience || !education)  
      {Alert.alert(
        'Error',
        'Please fill all fields and ensure passwords match.',
      );
      return;
    }

    const formData = new FormData();
    formData.append('RescuerName', rescuername);
    formData.append('Age', age);
    formData.append('Gender', gender);
    formData.append('ContactNumber', contactnumber);
    formData.append('EmailID', email);
    formData.append('Address', address);
    formData.append('Experience', experience);
    formData.append('Education', education);
    formData.append('Password', password);
    formData.append('ConfirmPassword', confirmPassword);

    // if (image) {
    //   const localUri = image.uri;
    //   const filename = localUri.split('/').pop();
    //   const type = image.type;

    //   formData.append('photo', {
    //     uri: localUri,
    //     name: filename,
    //     type: type,
    //   });
    // }

    try {
      const response = await axios.post(
        'https://realrate.store/ajayApi/Rescuesignup.php',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      const responseJson = response.data;

      if (responseJson.message === 'Registration successfully') {
        await AsyncStorage.setItem(
          'userData',
          JSON.stringify({
            userId: responseJson.id,
          }),
        );

        Alert.alert('Success', 'Registration successful!', [
          {
            text: 'OK',
            onPress: () => {
              navigation.navigate('RescuerAuthorizesNamesreen', {
                userId: responseJson.id,
              });
            },
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
    <ScrollView contentContainerStyle={{flexGrow: 1, backgroundColor: 'white'}}>
    <ImageBackground source={require('../Assets/background.png')} 
       style={{flex: 1, alignItems: 'center', justifyContent: 'center', overflow: 'hidden', height: 300, borderBottomLeftRadius: 40, borderBottomRightRadius: 40, position: 'relative'}}>
         <TouchableOpacity style={{ position: 'absolute',top: 20,   left: 15}}  onPress={() => navigation.goBack()}>
         <AntDesign name="leftcircle" size={25} color="white" />
         </TouchableOpacity>    
         <Image
         source={require('../Assets/logo.png')}
         style={{resizeMode: 'contain', height: 150, width: 150}}
       />
     </ImageBackground>
     <View style={{paddingHorizontal: 20}}>
     <View style={{width: '100%', height: 950, backgroundColor: 'white', top: -50, borderRadius: 30, marginBottom: -30, elevation: 5, padding: 20, gap: 20}}>
     <Text style={{ textAlign: 'center', color: '#093624', fontSize: 25, margin: 20, fontWeight: 'bold' }}>
         {t('Sign Up')}
     </Text>

     <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#093624', borderRadius: 10, paddingLeft: 15, gap: 20, width: '100%', height: 55 }}>
         <FontAwesome5 name="user-check" size={20} color="#093624" />
         <TextInput placeholder={t('Rescure Name')} placeholderTextColor="#093624" value={rescuername} onChangeText={text => { const capitalizedText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase(); setRescuername(capitalizedText); }} style={{ flex: 1 }} />
     </View>

     <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#093624', borderRadius: 10, paddingLeft: 15, gap: 20, width: '100%', height: 55 }}>
           <FontAwesome5 name="calendar-alt" size={20} color="#093624" />
           <TextInput placeholder={t('Age')} placeholderTextColor="#093624" value={age} onChangeText={setAge} style={{flex: 1}} />
       </View>

       <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#093624', borderRadius: 10, paddingLeft: 15, gap: 20, width: '100%', height: 55 }}>
       <FontAwesome5 name="mars" size={20} color="#093624" />
       <TextInput placeholder={t('Gender')} placeholderTextColor="#093624" value={gender} onChangeText={setGender} style={{ flex: 1 }} />
       </View>


       <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#093624', borderRadius: 10, paddingLeft: 15, gap: 20, width: '100%', height: 55 }}>
           <MaterialCommunityIcons name="email" size={20} color="#093624" />
           <TextInput placeholder={t('Email ID')} placeholderTextColor="#093624" value={email} onChangeText={setEmail} style={{ flex: 1 }} />
         </View>

         <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#093624', borderRadius: 10, paddingLeft: 15, gap: 20, width: '100%', height: 55 }}>
           <FontAwesome5 name="phone-alt" size={20} color="#093624" />
           <TextInput placeholder={t('Contact number')} placeholderTextColor="#093624" value={contactnumber} onChangeText={setContactNumber} style={{ flex: 1 }} />
         </View>

         <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#093624', borderRadius: 10, paddingLeft: 15, gap: 20, width: '100%', height: 55 }}>
           <FontAwesome5 name="map-marker-alt" size={20} color="#093624" />
           <TextInput placeholder={t('Address')} placeholderTextColor="#093624" value={address} onChangeText={setAddress} style={{ flex: 1 }} />
         </View>


         <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#093624', borderRadius: 10, paddingLeft: 15, gap: 20, width: '100%', height: 55 }}>
           <FontAwesome5 name="briefcase-medical" size={20} color="#093624" />
           <TextInput placeholder={t('Experience')} placeholderTextColor="#093624" value={experience} onChangeText={setExperience} style={{ flex: 1 }} />
         </View>

         <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#093624', borderRadius: 10, paddingLeft: 15, gap: 20, width: '100%', height: 55 }}>
           <FontAwesome name="mortar-board" size={20} color="#093624" />
           <TextInput placeholder={t('Education')} placeholderTextColor="#093624" value={education} onChangeText={setEducation} style={{ flex: 1 }} />
         </View>

         <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#093624', borderRadius: 10, paddingLeft: 15, paddingRight: 10, gap: 20, width: '100%', height: 55 }}>
           <FontAwesome5 name="key" size={20} color="#093624" />
           <TextInput placeholder={t('Password')} placeholderTextColor="#093624" value={password} onChangeText={setPassword} secureTextEntry={!isPasswordVisible} style={{ flex: 1 }} />
           <TouchableOpacity onPress={togglePasswordVisibility}>
           <FontAwesome5 name={isPasswordVisible ? 'eye' : 'eye'} size={20} color="#093624" />
           </TouchableOpacity>
         </View>

         <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#093624', borderRadius: 10, paddingLeft: 15, gap: 20, width: '100%', height: 55, paddingRight: 10 }}>
           <FontAwesome5 name="key" size={20} color="#093624" />
           <TextInput placeholder={t('Confirm Password')} placeholderTextColor="#093624" value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry={!isConfirmPasswordVisible} style={{ flex: 1 }} />
           <TouchableOpacity onPress={toggleConfirmPasswordVisibility}>
           <FontAwesome5 name={isPasswordVisible ? 'eye' : 'eye'} size={20} color="#093624" />
           </TouchableOpacity>
         </View>

         {/* <TouchableOpacity onPress={handleImagePick}>
         <View style={{ width: '35%', height: 90, top: 10, backgroundColor: '#FFFFFF', borderRadius: 10, elevation: 10, borderColor: '#000000', borderWidth: 1, marginBottom: 20, alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
             {image ? (
            <View style={{ width: '100%', height: '100%', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={{ uri: image.uri }} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
             </View>
             ) : (
         <View style={{justifyContent:'center', alignItems:"center",height: '100%',}}>
           <Text style={{textAlign:'center'}}>Upload photo</Text>
         </View>
             )}
         </View>
         </TouchableOpacity> */}
         <TouchableOpacity onPress={handleButtonPress}>
         <View style={{ height: 55, width: '100%', borderWidth: 1, borderRadius: 10, backgroundColor: '#093624', top: 10 }}>
             <Text style={{color: 'white', padding: 15, textAlign: 'center'}}>
               {t('Submit')}
             </Text>
           </View>
         </TouchableOpacity>
       </View>
     </View>
   </ScrollView>
  );
}

export default RescuersignupScreen;
