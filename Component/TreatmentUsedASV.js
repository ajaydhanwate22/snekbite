import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Alert,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import FooterNavigationcenter from './FooterNavigationcenter';

function TreatmentUsedASVscreen({ navigation }) {
  const { t } = useTranslation();
  const [usedASV, setUsedASV] = useState(0);
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [userData, setUserData] = useState(null);
  const [initialUsedASV, setInitialUsedASV] = useState(0);
  const [initialDate, setInitialDate] = useState('');
  const [dateChanged, setDateChanged] = useState(false);
  const [stockChanged, setStockChanged] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await AsyncStorage.getItem('userData');
        if (data) {
          setUserData(JSON.parse(data));
        }
      } catch (error) {
        console.error('Failed to load user data', error);
      }
    };

    const fetchUsedASVData = async () => {
      try {
        const storedUsedASV = await AsyncStorage.getItem('usedASV');
        const storedDate = await AsyncStorage.getItem('lastUsedDate');
        if (storedUsedASV) {
          const parsedASV = parseInt(storedUsedASV);
          setUsedASV(parsedASV);
          setInitialUsedASV(parsedASV);
        }
        if (storedDate) {
          const [storedDay, storedMonth, storedYear] = storedDate.split('-');
          setDay(storedDay);
          setMonth(storedMonth);
          setYear(storedYear);
          setInitialDate(storedDate);
        }
      } catch (error) {
        console.error('Failed to load ASV data', error);
      }
    };

    fetchUserData();
    fetchUsedASVData();
  }, []);

  const handleButtonPress = async () => {
    if (!userData) return;
  
    const formattedDate = `${year}-${month}-${day}`;
  
    // Check for no updates
    if (!dateChanged && !stockChanged) {
      Alert.alert(t('No Update'), t('No UsedASV changes!'));
      navigation.navigate('Profiletab');
      return;
    }
  
    // Check for missing date when stock is updated
    if (stockChanged && (day === '' || month === '' || year === '')) {
      Alert.alert(t('Error'), t('Please fill in the date before saving.'));
      return;
    }
  
    // Check if stock is updated and date is not changed
    if (stockChanged && (initialUsedASV !== usedASV) && !dateChanged) {
      Alert.alert(t('Error'), t('Please update the date when changing the Used ASV.'));
      return;
    }
  
    // Check for missing stock when only date is changed
    if (dateChanged && !stockChanged) {
      Alert.alert(t('Error'), t('Please update Used ASV before saving.'));
      return;
    }
  
    // If only the date is changed but not the stock
    if (dateChanged && initialUsedASV === usedASV) {
      Alert.alert(
        t('Warning'),
        t('You have changed the date, but not the Used ASV. Would you like to update the Used ASV?'),
        [
          { text: t('Cancel'), onPress: () => {}, style: 'cancel' },
          { text: t('Update'), onPress: async () => {
              // If user chooses to proceed with the current state
              await updateData(formattedDate);
          }},
        ]
      );
      return;
    }
  
    // Proceed with the update if both values are changed correctly
    await updateData(formattedDate);
  };
  
  const updateData = async (formattedDate) => {
    const formData = new FormData();
    formData.append('AuthorizesName', userData.authorizesName);
    formData.append('CenterName', userData.centerName);
    formData.append('UsedASV', usedASV);
    formData.append('Date', formattedDate);
  
    try {
      const response = await axios.post('https://realrate.store/ajayApi/UsedASVtretmentcenter.php', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      if (response.data.message === "updated successfully") {
        // Save the usedASV and date to AsyncStorage
        await AsyncStorage.setItem('usedASV', usedASV.toString());
        await AsyncStorage.setItem('lastUsedDate', `${day}-${month}-${year}`);
        
        Alert.alert(t('Success'), response.data.message);
        navigation.navigate('Profiletab');
      } else {
        Alert.alert(t('Error'), response.data.message);
      }
    } catch (error) {
      console.error('API call error:', error);
      Alert.alert(t('Error'), t('Could not submit data. Please try again later.'));
    }
  };
  

  const incrementASV = () => {
    setUsedASV(prev => prev + 1);
    setStockChanged(true);
  };

  const decrementASV = () => {
    setUsedASV(prev => (prev > 0 ? prev - 1 : 0));
    setStockChanged(true);
  };

  const handleDateChange = () => {
    setDateChanged(true);
  };

  if (!userData) {
    return <Text>Loading...</Text>;
  }

  const { authorizesName, centerName } = userData;

  return (
    <>
      <ScrollView style={{ backgroundColor: 'white' }}>
        <View style={{ backgroundColor: 'white' }}>
          <ImageBackground
            source={require('./Assets/background.png')}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              height: 200,
              borderBottomLeftRadius: 40,
              borderBottomRightRadius: 40,
              top: -100,
            }} 
          />
          <View
            style={{
              width: 300,
              height: 100,
              backgroundColor: '#093624',
              left: 30,
              top: -150,
              borderRadius: 20,
              elevation: 10,
            }}>
            <View style={{ flexDirection: 'row' }}>
              <View
                style={{
                  height: 50,
                  width: 50,
                  left: 50,
                  top: 20,
                  backgroundColor: 'white',
                  borderRadius: 50,
                }}>
                <Text style={{ textAlign: 'center', top: 10 }}>Profile</Text>
              </View>
              <View style={{ textAlign: 'center', left: 80, top: 20 }}>
                <Text style={{ color: 'white', fontSize: 16 }}>{authorizesName}</Text>
                <Text style={{ color: 'white', fontSize: 10 }}>{centerName}</Text>
              </View>
            </View>
          </View>
          <Text style={{ textAlign: 'center', top: -120, color: '#093624', fontWeight: 'bold', fontSize: 16 }}>
            Used ASV
          </Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', top: -50 }}>
            <TouchableOpacity onPress={decrementASV}>
              <Text style={{ fontSize: 50, color: '#093624' }}>-</Text>
            </TouchableOpacity>
            <TextInput
              style={{
                fontSize: 30,
                color: '#093624',
                width: 100,
                textAlign: 'center',
              }}
              placeholder="Update stock"
              keyboardType="numeric"
              value={usedASV.toString()}
              onChangeText={text => {
                const newValue = text ? parseInt(text) : 0;
                setUsedASV(newValue);
                if (newValue !== initialUsedASV) {
                  setStockChanged(true);
                }
              }}
            />
            <TouchableOpacity onPress={incrementASV}>
              <Text style={{ fontSize: 50, color: '#093624' }}>+</Text>
            </TouchableOpacity>
          </View>
          <Text style={{ textAlign: 'center', color: '#093624', top: -10, fontWeight: 'bold' }}>
            Last used on
          </Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', top: 20 }}>
            <TextInput
              style={{
                height: 50,
                width: 70,
                backgroundColor: 'white',
                borderRadius: 10,
                borderWidth: 1,
                borderColor: '#093624',
                textAlign: 'center',
              }}
              keyboardType="numeric"
              placeholder="Day"
              value={day}
              onChangeText={text => {
                setDay(text);
                handleDateChange();
              }}
            />
            <TextInput
              style={{
                height: 50,
                width: 100,
                backgroundColor: 'white',
                borderRadius: 10,
                borderWidth: 1,
                borderColor: '#093624',
                textAlign: 'center',
              }}
              keyboardType="numeric"
              placeholder="Month"
              value={month}
              onChangeText={text => {
                setMonth(text);
                handleDateChange();
              }}
            />
            <TextInput
              style={{
                height: 50,
                width: 70,
                backgroundColor: 'white',
                borderRadius: 10,
                borderWidth: 1,
                borderColor: '#093624',
                textAlign: 'center',
              }}
              keyboardType="numeric"
              placeholder="Year"
              value={year}
              onChangeText={text => {
                setYear(text);
                handleDateChange();
              }}
            />
          </View>
          <TouchableOpacity onPress={handleButtonPress}>
            <View
              style={{
                height: 50,
                width: 150,
                left: 110,
                top: 60,
                backgroundColor: '#093624',
                borderRadius: 10,
                marginBottom: 100,
              }}>
              <Text style={{ textAlign: 'center', color: 'white', margin: 15 }}>
                Save
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <FooterNavigationcenter navigation={navigation} />
    </>
  );
}

export default TreatmentUsedASVscreen;
