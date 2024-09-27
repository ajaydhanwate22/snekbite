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
    }, 5000); // Show alert after 5 seconds if still loading

    fetchPatients(); // Fetch patients when the component mounts

    return () => clearTimeout(timeoutId); // Cleanup the timeout on unmount
  }, [loading]);

  const handleButtonPress = screen => navigation.navigate(screen);

  const filteredPatients = patients.filter(patient =>
    patient.fullname.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <ScrollView style={{ backgroundColor: 'white' }}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image
            source={require('./Assets/logo.png')}
            style={{ width: 90, height: 50, top: 15, margin: 10 }}
          />
        </View>

        <Text
          style={{
            textAlign: 'center',
            top: 15,
            color: '#093624',
            fontWeight: 'bold',
            fontSize: 16,
          }}>
          {t('Patient List')}
        </Text>

        <View style={{ margin: 25, top: 10,borderRadiusL:10, backgroundColor:"#093624" }}>
          <TextInput
            placeholder={t('Search')}
            value={searchTerm}
            onChangeText={setSearchTerm}
            style={{
              height: 40,
              borderColor: '#093624',
              borderWidth: 1,
              borderRadius: 20,
              paddingHorizontal: 15,
            }}
              placeholderTextColor="#FFFFFF"
          />

        </View>

        {loading ? (
          <ActivityIndicator size="large" color="#093624" />
        ) : (
          <View style={{ gap: 25, top: 30, marginBottom: 200 }}>
            {filteredPatients.length > 0 ? (
              filteredPatients.map((patient, index) => (
                <View
                  key={index}
                  style={{
                    height: 80,
                    width: 250,
                    borderWidth: 2,
                    borderColor: '#000000',
                    left: 50,
                    borderRadius: 20,
                  }}>
                  <TouchableOpacity
                    onPress={async () => {
                      // Save patientId to AsyncStorage
                      await AsyncStorage.setItem('patientId', patient.id.toString());
                      // Navigate to PatientProfile
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

    <FooterNavigationcenter navigation={navigation}/>
    </>
  );
}

export default PatientList;
