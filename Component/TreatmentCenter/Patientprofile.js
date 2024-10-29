import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {useTranslation} from 'react-i18next';
import FooterNavigationcenter from './FooterNavigationcenter';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign';

function Patientprofile({navigation}) {
  const {t} = useTranslation();
  const [patientDetails, setPatientDetails] = useState(null);
  const currentDate = new Date().toISOString().split('T')[0];

  // Fetch patient details from AsyncStorage
  const fetchPatientId = async () => {
    try {
      const patientId = await AsyncStorage.getItem('patientId');
      if (patientId) {
        fetchPatientDetails(patientId);
      } else {
        Alert.alert('Error', 'No patient ID found.');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Could not retrieve patient ID.');
    }
  };

  // Fetch patient details from the server
  const fetchPatientDetails = async id => {
    try {
      const response = await axios.get(
        `https://realrate.store/ajayApi/GetPatientDetails.php?id=${id}`,
      );
      if (response.data.message === 'Patient details fetched successfully') {
        setPatientDetails(response.data.data);
      } else {
        Alert.alert('Info', response.data.message);
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Could not fetch patient details');
    }
  };

  useEffect(() => {
    fetchPatientId(); // Fetch patient ID and details when the component mounts
  }, []);

  const handleEdit = () => {
    navigation.navigate('Patientedit', {patientDetails});
  };

  return (
    <>
      <ScrollView
        contentContainerStyle={{flexGrow: 1, backgroundColor: 'white'}}>
        {/* backgound image and logo */}
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
          <TouchableOpacity onPress={handleEdit}>
            <Image
              source={require('../Assets/pencil.png')}
              style={{resizeMode: 'contain', left: 165, top:-35}}
            />
          </TouchableOpacity>
          {/* <Image
            source={require('../Assets/logo.png')}
            style={{resizeMode: 'contain', height: 100, width: 100, top:-50}}
          /> */}
                 <TouchableOpacity
          style={{position: 'absolute', top: 20, left: 15}}
          onPress={() => navigation.goBack()}>
          <AntDesign name="leftcircle" size={25} color="white" />
        </TouchableOpacity>
        </ImageBackground>
        {/* profile container */}
        <View style={{paddingHorizontal:20}}>
        <View
          style={{
            width: '100%',
            height: 780,
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
              margin: 20,
              fontWeight: 'bold',
              top:10
            }}>
            {t('Patient Profile')}
          </Text>
          <View style={{height: 100,
                      width: 100,
                      backgroundColor: '#093624',
                      borderRadius: 50,
                      justifyContent: 'center',
                      alignSelf: 'center',
                      alignItems:'center'}}>
          {patientDetails && patientDetails.photo_url ? (
                <Image
                  source={{uri: patientDetails.photo_url}}
                  style={{
                    width: '100%',
                    height: '100%',
                    resizeMode: 'cover',
                    borderRadius: 50,
                  }}
                />
              ) : (
                <FontAwesome
                  name="user-circle"
                  size={60}
                  color="#093624"
                />
              )}
          </View>
          {/* first box profile cntainer  */}
          <View style={{paddingHorizontal:30}}>
          <Text
            style={{
              fontSize: 12,
              color: '#093624',
              top: 30,
              fontWeight: 'bold',
            }}>
            {t('Patient Details')}
          </Text>
          <View
            style={{
              width: '100%',
              height: 140,
              top: 40,
              borderRadius: 10,
              backgroundColor: 'white',
              elevation: 5,
            }}>
            <View
              style={{
                top: 10,
                paddingLeft: 20,
                flex: 1,
                flexDirection: 'column',
                gap: 5,
                color: '#A3A3A3',
              }}>
              {patientDetails && (
                <>
                  <Text>Name: {patientDetails.FullName}</Text>
                  <Text>Age: {patientDetails.Age}</Text>
                  <Text>Gender: {patientDetails.Gender}</Text>
                  <Text>Contact: {patientDetails.ContactNumber}</Text>
                  <Text>Address: {patientDetails.Address}</Text>
                </>
              )}
            </View>
          </View>    
          </View>
          {/* second box profile container */}
          <View style={{paddingHorizontal:30}}>
          <Text
            style={{
              fontSize: 12,
              color: '#093624',
              top: 60,
              fontWeight: 'bold',
            }}>
            {t('Snakebite Details')}
          </Text>
          <View
            style={{
              width: '100%',
              height: 150,
              top: 70,
              borderRadius: 10,
              backgroundColor: 'white',
              elevation: 5,
            }}>
            <View
              style={{
                top: 10,
                paddingLeft: 20,
                flex: 1,
                flexDirection: 'column',
                fontSize: 10,
                gap: 5,
                color: '#A3A3A3'
              }}>
              {patientDetails && (
                <>
                  <Text>Snake ID: {patientDetails.SnakeID}</Text>
                  <Text>Bite Location: {patientDetails.BiteLocation}</Text>
                  <Text>Affected Part: {patientDetails.AffectedBodypart}</Text>
                  <Text>ASV Used: {patientDetails.UsedASV}</Text>
                  <Text>Rescuer Name: {patientDetails.Rescuername}</Text>
                </>
              )}
            </View>
          </View>
          </View>
          {/* third box profile conatiner */}
          <View style={{paddingHorizontal:30}}>
          <Text
            style={{
              fontSize: 12,
              color: '#093624',
              top: 100,
              fontWeight: 'bold',
            }}>
            {t('Discharge Details')}
          </Text>
          <View
            style={{
              width:'100%',
              height: 130,
              top: 110,
              borderRadius: 10,
              backgroundColor: 'white',
              elevation: 5,
            }}>
            <View
              style={{
                top: 20,
                paddingLeft: 20,
                flex: 1,
                flexDirection: 'column',
                gap: 20,
                color: '#C0C0C0',
              }}>
              {patientDetails && (
                <>
                  <Text>Patient Status: {patientDetails.Patientstatus}</Text>
                  <Text>Disability: {patientDetails.AnyDisablity}</Text>
                  <Text>Date: {currentDate}</Text>
                </>
              )}
            </View>
          </View>   
          </View>
        </View>
        </View>
      </ScrollView>
      <FooterNavigationcenter navigation={navigation} />
    </>
  );
}

export default Patientprofile;
