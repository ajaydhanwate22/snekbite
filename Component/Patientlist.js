import React, { useEffect, useState } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FooterNavigationcenter from './FooterNavigationcenter';
import EvilIcons from 'react-native-vector-icons/EvilIcons'; 

function PatientList({ navigation }) {
  const { t } = useTranslation();
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(''); 

  const fetchPatients = async () => {
    try {
      const response = await axios.get('https://realrate.store/ajayApi/FetchPatients.php'); 
      if (response.data.message === 'Patients fetched successfully') {
        setPatients(response.data.data);
      } else {
        Alert.alert('Info', response.data.message);
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Could not fetch patient data. Please try again later.');
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
          [{ text: 'OK' }],
        );
      }
    }, 5000);

    fetchPatients();

    return () => clearTimeout(timeoutId);
  }, [loading]);

  const filteredPatients = patients.filter(patient =>
    patient.fullname.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = () => {
    // This function can be expanded if needed
    console.log(`Searching for: ${searchTerm}`);
  };

  return (
    <>
      <ScrollView style={{ backgroundColor: 'white' }}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image
            source={require('./Assets/patietlistlogo.png')}
            style={{ width: 90, height: 50, top: 15, margin: 10 }}
          />
        </View>

        <View style={{ height: 45, width: 320, backgroundColor: "#093624", alignItems: "center", borderRadius: 20, marginVertical: 15, top: 20, left: 40, flexDirection: 'row' }}>
          {searchTerm.length === 0 && (
             <EvilIcons name="search" size={30} color="white" style={{left:10,top:-3}}/>
          )}
          <TextInput
            placeholder="Search..."
            placeholderTextColor="#ffffff"
            style={{
              flex: 1,
              color: 'white',
              marginLeft: 20,
            }}
            value={searchTerm}
            onChangeText={setSearchTerm}
          />
          {searchTerm.length > 0 && (
            <TouchableOpacity onPress={handleSearch} style={{ marginRight: 10 }}>
              <Text style={{ color: 'white' }}>Search</Text>
            </TouchableOpacity>
          )}
        </View>

        {loading ? (
          <ActivityIndicator size="large" color="#093624" />
        ) : (
          <View style={{ gap: 20, top: 30, marginBottom:60 }}>
            {filteredPatients.length > 0 ? (
              filteredPatients.map((patient, index) => (
                <View
                  key={index}
                  style={{
                    height: 80,
                    width: 300,
                    borderWidth: 2,
                    borderColor: '#000000',
                    left: 48,
                    borderRadius: 20,
                  }}>
                  <TouchableOpacity
                    onPress={async () => {
                      await AsyncStorage.setItem('patientId', patient.id.toString());
                      navigation.navigate('Patientprofile');
                    }}>
                    <View style={{ padding: 10 }}>
                      <Text style={{ color: '#000000' }}>
                        Name: {patient.fullname}
                      </Text>
                      <Text style={{ color: '#000000' }}>
                        Snake ID: {patient.snakeID}
                      </Text>
                      <Text style={{ color: '#000000' }}>
                        Number of Used ASV: {patient.usedASV}
                      </Text>
                    </View>
                  </TouchableOpacity>
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
      <FooterNavigationcenter navigation={navigation} />
    </>
  );
}

export default PatientList;
