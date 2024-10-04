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

function Patientprofile({navigation}) {
  const {t} = useTranslation();
  const [patientDetails, setPatientDetails] = useState(null);

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
    navigation.navigate('Patientedit', { patientDetails });
  };
  

  return (
    <>
      <ScrollView
        contentContainerStyle={{flexGrow: 1, backgroundColor: 'white'}}>
        {/* backgound image and logo */}
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
            <TouchableOpacity      onPress={handleEdit} >
            <Image
            source={require('./Assets/pencil.png')}
            style={{resizeMode: 'contain',left:140}}
          />
          </TouchableOpacity>
              <Image
            source={require('./Assets/logo.png')}
            style={{resizeMode: 'contain', height: 200, width: 200}}
          />
        </ImageBackground>
        {/* profile container */}
        <View
          style={{
            width: 340,
            height: 850,
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
              marginTop: 30,
              fontWeight: 'bold',
            }}>
            {t('Patient Profile')}
          </Text>
          <View style={{alignItems: 'center', margin: 10}}>
            <Image source={require('./Assets/patientprofileicon.png')} />
          </View>

          {/* first box profile cntainer  */}
          <Text
            style={{
              fontSize: 12,
              color: '#093624',
              marginLeft: 20,
              // top: 30,
              left: 10,
              fontWeight: 'bold',
            }}>
            {t('Patient Details')}
          </Text>
          <View
            style={{
              width: 290,
              height: 140,
              top: 10,
              borderRadius: 10,
              marginLeft: 20,
              backgroundColor: 'white',
              elevation: 5,
            }}>
            <View
              style={{
                top: 10,
                marginLeft: 20,
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
          {/* second box profile container */}
          <Text
            style={{
              fontSize: 12,
              color: '#093624',
              marginLeft: 20,
              top: 30,
              left: 10,
              fontWeight: 'bold',
            }}>
            {t('Snakebite Details')}
          </Text>
          <View
            style={{
              width: 290,
              height: 250,
              top: 40,
              borderRadius: 10,
              marginLeft: 20,
              backgroundColor: 'white',
              elevation: 5,
            }}>
            <View
              style={{
                top: 10,
                marginLeft: 20,
                flex: 1,
                flexDirection: 'column',
                fontSize: 10,
                gap: 5,
                color: '#A3A3A3',
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
              <View
                style={{
                  width: 100,
                  height: 90,
                  top: 10,
                  backgroundColor: '#FFFFFF',
                  borderRadius: 5,
                  elevation: 10,
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
            </View>
          </View>
          {/* third box profile conatiner */}
          <Text
            style={{
              fontSize: 12,
              color: '#093624',
              marginLeft: 20,
              top: 60,
              fontWeight: 'bold',
              left: 10,
            }}>
            {t('Discharge Details')}
          </Text>
          <View
            style={{
              width: 290,
              height: 120,
              top: 70,
              borderRadius: 10,
              marginLeft: 20,
              backgroundColor: 'white',
              elevation: 5,
            }}>
            <View
              style={{
                top: 20,
                marginLeft: 20,
                flex: 1,
                flexDirection: 'column',
                gap: 20,
                color: '#C0C0C0',
              }}>
              {patientDetails && (
                <>
                  <Text>Patient Status: {patientDetails.Patientstatus}</Text>
                  <Text>Disability: {patientDetails.AnyDisablity}</Text>
                </>
              )}
            </View>
          </View>
        </View>
      </ScrollView>
      <FooterNavigationcenter navigation={navigation} />
    </>
  );
}

export default Patientprofile;
