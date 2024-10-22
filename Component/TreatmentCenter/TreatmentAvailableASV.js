import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, ScrollView, Alert,Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import axios from 'axios';
import AntDesign from 'react-native-vector-icons/AntDesign';

function TreatmentAvailableASVscreen({  navigation, route }){
  const {t} = useTranslation();
  const [authorizerName, setAuthorizerName] = useState('');
  const [centerName, setCenterName] = useState('');
  const [availabilityOfASV, setavailabilityOfASV] = useState('0');
  const [initialUsedASV, setInitialUsedASV] = useState('0');
  const [image, setImage] = useState(null);
  const currentDate = new Date().toISOString().split('T')[0];
  const { userId } = route.params;  

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (userId) {
          const response = await axios.get(`https://realrate.store/ajayApi/Fetchauthor.php?userId=${userId}`);
          const userData = response.data.data;  
          if (userData) {
          setAuthorizerName(userData.AuthorizesName || '');
          setCenterName(userData.CenterName || '');
          setavailabilityOfASV(userData.AvailabilityofASV || '0');
          setImage(userData.photo_url || null);
          setInitialUsedASV(userData.AvailabilityofASV || '0');
        }
      }
    } catch (error) {
      console.error('Error fetching user data from server', error);
    }
  };

  fetchUserData();
}, [userId]);


  const handleadd = async () => {
    if (availabilityOfASV === initialUsedASV) {
      Alert.alert('No update', 'No ASV update made.');
      navigation.navigate('Profiletab', { userId });
      return;
    }
    if (
      !availabilityOfASV ||
      isNaN(availabilityOfASV) ||
      parseInt(availabilityOfASV) < 0
    ) {
      Alert.alert('Error', 'Please enter a valid used ASV amount.');
      return;
    }
    const formData = new FormData();
    formData.append('CenterName', centerName);
    formData.append('AvailabilityofASV', availabilityOfASV);
    formData.append('AuthorizesName', authorizerName);
    formData.append('AvailableASVDate', currentDate);
    try {
      const response = await axios.post(
        'https://realrate.store/ajayApi/AvailableASV.php',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      if (response.data.message === 'updated successfully') {
        Alert.alert('Success', 'ASV stock updated successfully!');
        navigation.navigate('Profiletab', { userId });
      } else {
        Alert.alert(
          'Error',
          'Failed to update ASV stock: ' + response.data.message,
        );
        navigation.navigate('Profiletab');
      }
    } catch (error) {
      console.error('Error updating ASV stock:', error);
      Alert.alert('Error', 'An error occurred while updating ASV stock.');
      navigation.navigate('Profiletab');
    }
  };


const handlesub = async () => {
    if (availabilityOfASV === initialUsedASV) {
      Alert.alert('No update', 'No ASV update made.');
      navigation.navigate('Profiletab', { userId });
      return;
    }

    if (parseInt(availabilityOfASV) > parseInt(initialUsedASV)) {
      Alert.alert('Error', 'Cannot subtract more ASV than the initial available ASV.');
      return;
    }

    if (
      !availabilityOfASV ||
      isNaN(availabilityOfASV) ||
      parseInt(availabilityOfASV) < 0
    ) {
      Alert.alert('Error', 'Please enter a valid used ASV amount.');
      return;
    }
    const formData = new FormData();
    formData.append('CenterName', centerName);
    formData.append('AvailabilityofASV', availabilityOfASV);
    formData.append('AuthorizesName', authorizerName);
    formData.append('AvailableASVDate', currentDate);
    try {
      const response = await axios.post(
        'https://realrate.store/ajayApi/AvailableminusASV.php',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      if (response.data.message === 'updated successfully') {
        Alert.alert('Success', 'ASV stock updated successfully!');
        navigation.navigate('Profiletab', { userId });
      } else {
        Alert.alert(
          'Error',
          'Failed to update ASV stock: ' + response.data.message,
        );
        navigation.navigate('Profiletab');
      }
    } catch (error) {
      console.error('Error updating ASV stock:', error);
      Alert.alert('Error', 'An error occurred while updating ASV stock.');
      navigation.navigate('Profiletab');
    }
  };

  return (
    <>
      <ScrollView style={{backgroundColor: 'white'}}>
        <View style={{backgroundColor: 'white'}}>
        <ImageBackground source={require('../Assets/background.png')} style={{ flex: 1, alignItems: 'center', justifyContent: 'center', overflow: 'hidden', height: 200, borderBottomLeftRadius: 40, borderBottomRightRadius: 40 }} />

          <TouchableOpacity  style={{ position: 'absolute',top: 20,   left: 15}} onPress={() => navigation.goBack()}>
          <AntDesign name="leftcircle" size={25} color="white"/>
          </TouchableOpacity>
          <View style={{paddingHorizontal: 10}}>
          <View style={{ width: '100%', height: 134, backgroundColor: '#093624', top: -50, borderRadius: 20, elevation: 10 }} >
          
             <View style={{flexDirection: 'row', gap: 40, padding: 15, left: 10,alignItems:"center"}}>
                <View style={{height: 100, width: 100, backgroundColor: '#093624', borderRadius: 50, justifyContent: 'center', alignItems: 'center'}}>
                {image ? (
                  <Image source={{ uri: image }} style={{ width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 50 }}/>
                ) : (
                  <FontAwesome6 name="user-circle" size={60} color="white" />
                )}
                   </View>  
                <View style={{gap: 10}}>
                  <Text style={{ fontSize: 20, fontWeight: '500', color: '#ffffff', lineHeight: 24.02 }}>{authorizerName} </Text>
                  <Text style={{ fontSize: 13, fontWeight: '500', color: '#ffffff', lineHeight: 15.73 }}>{centerName} </Text>
                </View>
              </View>
            </View>
          </View>

          <Text style={{ textAlign: 'center', color: '#093624', fontWeight: '500', fontSize: 24 }}>{t('Stock of ASV')}</Text>

              <View style={{ flexDirection: 'row', justifyContent: 'center', top: 50, gap: 20, marginBottom: 150 }}>      
                  <TextInput style={{ fontSize: 60, color: '#093624', width: '50%', textAlign: 'center', fontWeight: '700', lineHeight: 116.18, borderBottomWidth: 2, borderBottomColor: '#093624' }} value={availabilityOfASV} onChangeText={text => { if (!isNaN(text)) setavailabilityOfASV(text); }} keyboardType="numeric" />
              </View>

            <View style={{paddingHorizontal: 30,flexDirection:"row",justifyContent:'space-around', alignItems:"center",}}>

              <TouchableOpacity onPress={handlesub} style={{ width:"48%"}}>
                <View style={{backgroundColor: '#093624',height: 70,justifyContent:"center", alignItems:'center', borderRadius: 10,}}>
                <Text style={{ color: 'white',fontSize: 20, fontWeight: 'bold',}}>Substract</Text>
                </View>
              </TouchableOpacity>  

              <TouchableOpacity onPress={handleadd} style={{width:"48%",}}>
                 <View style={{backgroundColor: '#093624',height: 70,justifyContent:"center", alignItems:'center', borderRadius: 10,}}>
                     <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold', }}>Add</Text>
                 </View>
              </TouchableOpacity> 

            </View>
        </View>
      </ScrollView>
    </>
  );
}

export default TreatmentAvailableASVscreen;
