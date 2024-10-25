import React, {useEffect, useState} from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView, Alert, TextInput, ActivityIndicator } from 'react-native';
import axios from 'axios';
import {useTranslation} from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RescuerFooterNavigation from './RescuerFooterNavigation';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

function Rescuanimalscreen({ navigation, route }) {
  const {t} = useTranslation();
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const {userId} = route.params;



  const fetchPatients = async () => {
    try {
      const response = await axios.get(
        'https://realrate.store/ajayApi/RescueAnimalsfetch.php',
      );
      if (response.data.message === 'Patients fetched successfully') {
        const sortedPatients = response.data.data.reverse();
        setPatients(response.data.data);
      } else {
        Alert.alert('Info', response.data.message);
      }
    } catch (error) {
      console.error(error);
      Alert.alert(
        'Error',
        'Could not fetch patient data. Please try again later.',
      );
    } finally {
      setLoading(false);
    }
  };



  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (loading) {
        Alert.alert(
          'Loading',
          'Fetching patient data is taking longer than usual. Please wait...',
          [{text: 'OK'}],
        );
      }
    }, 5000);

    fetchPatients();

    return () => clearTimeout(timeoutId);
  }, [loading]);

  const filteredPatients = patients.filter(patient =>
    patient.SpeciesName.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleSearch = () => {
    console.log(`Searching for: ${searchTerm}`);
  };


  return (
    <>
       <ScrollView style={{backgroundColor: 'white'}}>
        <TouchableOpacity
          style={{position: 'absolute', top: 20, left: 15}}
          onPress={() => navigation.goBack()}>
          <AntDesign name="leftcircle" size={25} color="#093624" />
        </TouchableOpacity>
        <Text style={{ textAlign: 'center', fontSize: 24, fontWeight: '700', lineHeight: 29.05, margin: 30, color: '#093624', marginTop: 50 }}>
        Rescued Animals
        </Text>

        <View style={{paddingHorizontal: 20}}>
        <View style={{ height: 50, width: '100%', backgroundColor: '#093624', alignItems: 'center', borderRadius: 10, flexDirection: 'row' }}>
            {searchTerm.length === 0 && (
              <EvilIcons name="search" size={30} color="white" style={{left: 10, top: -3}}/>
            )}
            <TextInput
              placeholder="Search..."
              placeholderTextColor="#ffffff"
              style={{
                flex: 1,
                color: 'white',
                paddingLeft: 20,
              }}
              value={searchTerm}
              onChangeText={setSearchTerm}
            />
            {searchTerm.length > 0 && (
              <TouchableOpacity
                onPress={handleSearch}
                style={{marginRight: 10}}>
                <Text style={{color: 'white'}}>Search</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: 40,
            flexDirection: 'row',
            gap: 10,
            top: 20,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Rescuerformscreen', {userId})}>
            <Ionicons name="add-circle" size={40} color="#093624" />
          </TouchableOpacity>
          <Text style={{top: 10, fontWeight: '700', color: 'black'}}>
          Upload Rescue
          </Text>
        </View>

        {loading ? (
          <ActivityIndicator size="large" color="#093624" />
        ) : (
          <View style={{ marginBottom: 50, top: 40, paddingHorizontal:20}}>
          {filteredPatients.length > 0 ? (
            filteredPatients.map((patient, index) => (
              <View key={patient.id} style={{ marginBottom: 20 }}>
                <View style={{  height: 110, width: '100%', borderWidth: 1, borderColor: '#000000', borderRadius: 20,}}>
                  
                  {/* Image Section */}

                  <TouchableOpacity
                    // onPress={async () => {
                    //   await AsyncStorage.setItem('patientId', patient.id.toString());
                    //   navigation.navigate('Patientprofile');
                    // }}
                    style={{flexDirection:"row",}}
                  >
                
                  <View style={{ height: 100, width: 100, backgroundColor: '#093624', borderRadius: 50, justifyContent: 'center', alignSelf:'center',top:5}}>
                    <Image source={{ uri: patient.photo_url }} style={{ width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 50 }} />
                  </View>
        
                  {/* Patient Information Section */}

                    <View style={{ justifyContent: 'center', gap: 10,alignSelf:"center", left:20}}>
                      <Text style={{ color: '#000000' }}>
                        Name: {patient.SpeciesName}
                      </Text>
                      <Text style={{ color: '#000000' }}>
                        Snake ID: {patient.SnakeID}
                      </Text>
                    </View> 
                    </TouchableOpacity>     
                  </View>
              </View>

            ))
          ) : (
            <Text style={{ textAlign: 'center', color: '#000000' }}>
              No patients found
            </Text>
          )}
        </View>
        
        )}
      </ScrollView>
      <RescuerFooterNavigation navigation={navigation} />
    </>
  );
}

export default Rescuanimalscreen;
