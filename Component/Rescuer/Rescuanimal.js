import React, { useEffect, useState } from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView, Alert, TextInput, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import RescuerFooterNavigation from './RescuerFooterNavigation';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

function Rescuanimalscreen({ navigation, route }) {
  const { t } = useTranslation();
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const { userId } = route.params;

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
          [{ text: 'OK' }],
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
      <ScrollView style={{ backgroundColor: 'white' }}>
        <TouchableOpacity
          style={{ position: 'absolute', top: 20, left: 15 }}
          onPress={() => navigation.goBack()}>
          <AntDesign name="leftcircle" size={25} color="#093624" />
        </TouchableOpacity>

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 26,
              fontWeight: '700',
              color: '#093624',
              marginVertical: 20,
            }}>
            {t('Rescued Animals')}
          </Text>
        </View>

        {/* Search Bar */}
        <View style={{ paddingHorizontal: 20 }}>
          <View
            style={{
              height: 50,
              width: '100%',
              backgroundColor: '#093624',
              alignItems: 'center',
              borderRadius: 10,
              flexDirection: 'row',
              marginBottom: 20,
            }}>
            {searchTerm.length === 0 && (
              <EvilIcons name="search" size={30} color="white" style={{ left: 10, top: -3 }} />
            )}
            <TextInput
              placeholder="Search..."
              placeholderTextColor="#ffffff"
              style={{
                flex: 1,
                color: 'white',
                paddingLeft: 20,
                fontSize: 16,
              }}
              value={searchTerm}
              onChangeText={setSearchTerm}
            />
            {searchTerm.length > 0 && (
              <TouchableOpacity onPress={handleSearch} style={{ marginRight: 10 }}>
                <Text style={{ color: 'white', fontSize: 16 }}>Search</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>

        {/* Upload Rescue Button */}
        <View
          style={{
            paddingHorizontal: 20,
            flexDirection: 'row',
            gap: 10,
            // top: 10,
            alignItems: 'center',
            marginBottom: 20,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Rescuerformscreen', { userId })}>
            <Ionicons name="add-circle" size={40} color="#093624" />
          </TouchableOpacity>
          <Text style={{ fontWeight: '700', color: 'black', fontSize: 18 }}>
            {t('Upload Rescue')}
          </Text>
        </View>

        {/* Loading Indicator */}
        {loading ? (
          <View style={{ marginTop: 20, alignItems: 'center' }}>
            <ActivityIndicator size="large" color="#093624" />
            <Text style={{ marginTop: 10, color: '#093624' }}>Loading Data...</Text>
          </View>
        ) : (
          <View style={{ marginBottom: 50, paddingHorizontal: 20 }}>
            {filteredPatients.length > 0 ? (
              filteredPatients.map((patient) => (
                <View key={patient.id} style={{ marginBottom: 15 }}>
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      backgroundColor: '#f4f4f4',
                      padding: 15,
                      borderRadius: 10,
                      borderWidth: 1,
                      borderColor: '#ddd',
                    }}
                    // onPress={async () => {
                    //   await AsyncStorage.setItem('patientId', patient.id.toString());
                    //   navigation.navigate('Patientprofile');
                    // }}
                  >
                    <View
                      style={{
                        height: 70,
                        width: 70,
                        backgroundColor: '#093624',
                        borderRadius: 50,
                        overflow: 'hidden',
                      }}>
                      <Image
                        source={{ uri: patient.photo_url }}
                        style={{ width: '100%', height: '100%', resizeMode: 'cover' }}
                      />
                    </View>

                    <View style={{ marginLeft: 15, flex: 1 }}>
                      <Text style={{ color: '#093624', fontWeight: 'bold', fontSize: 18 }}>
                        {patient.SpeciesName}
                      </Text>
                      <Text style={{ color: '#000000' }}>Snake ID: {patient.SnakeID}</Text>
                      <Text
                        style={{
                          color: '#093624',
                          fontSize: 12,
                          marginTop: 5,
                          textAlign: 'right',
                        }}>
                        {patient.date}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              ))
            ) : (
              <Text style={{ textAlign: 'center', color: '#000000' }}>
                {t('No patients found')}
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
