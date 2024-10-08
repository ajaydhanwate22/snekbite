import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Alert,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import FooterNavigationcenter from './FooterNavigationcenter';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

function TreatmentAvailableASVscreen({navigation}) {
  const {t} = useTranslation();
  const [availableASV, setAvailableASV] = useState(0);
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [userData, setUserData] = useState(null);
  const [initialAvailableASV, setInitialAvailableASV] = useState(0);
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

    const fetchAvailableASVData = async () => {
      try {
        const storedAvailableASV = await AsyncStorage.getItem('availableASV');
        const storedDate = await AsyncStorage.getItem('lastStockedDate');
        if (storedAvailableASV) {
          const parsedASV = parseInt(storedAvailableASV);
          setAvailableASV(parsedASV);
          setInitialAvailableASV(parsedASV);
        }
        if (storedDate) {
          const [storedDay, storedMonth, storedYear] = storedDate.split('-');
          setDay(storedDay);
          setMonth(storedMonth);
          setYear(storedYear);
        }
      } catch (error) {
        console.error('Failed to load ASV data', error);
      }
    };

    fetchUserData();
    fetchAvailableASVData();
  }, []);

  const handleButtonPress = async () => {
    if (!userData) return;

    const formattedDate = `${year}-${month}-${day}`;

    // Check for no updates
    if (!dateChanged && !stockChanged) {
      Alert.alert(t('No Update'), t('No Available ASV changes!'));
      navigation.navigate('Profiletab');
      return;
    }

    // Check for missing date when stock is updated
    if (stockChanged && (day === '' || month === '' || year === '')) {
      Alert.alert(t('Error'), t('Please fill in the date before saving.'));
      return;
    }

    // Check for missing stock when date is updated
    if (dateChanged && initialAvailableASV === availableASV) {
      Alert.alert(
        t('Warning'),
        t(
          'You have changed the date, but not the Available ASV. Would you like to update the Available ASV?',
        ),
        [
          {text: t('Cancel'), onPress: () => {}, style: 'cancel'},
          {
            text: t('Update'),
            onPress: async () => {
              await updateData(formattedDate);
            },
          },
        ],
      );
      return;
    }

    // ** New Check: Prompt to update date if stock changed but date unchanged **
    if (stockChanged && (day === '' || month === '' || year === '')) {
      Alert.alert(
        t('Warning'),
        t(
          'You have changed the Available ASV, but not the date. Would you like to update the date?',
        ),
        [
          {text: t('Cancel'), onPress: () => {}, style: 'cancel'},
          {
            text: t('Update'),
            onPress: async () => {
              // Here, we can prompt them to set the date or set it to today's date
              const today = new Date();
              setDay(today.getDate().toString());
              setMonth((today.getMonth() + 1).toString());
              setYear(today.getFullYear().toString());
              await updateData(formattedDate);
            },
          },
        ],
      );
      return;
    }

    // If both values are changed correctly
    await updateData(formattedDate);
  };
  const updateData = async formattedDate => {
    const formData = new FormData();
    formData.append('AuthorizesName', userData.authorizesName);
    formData.append('CenterName', userData.centerName);
    formData.append('StockASV', availableASV);
    formData.append('Date', formattedDate);

    try {
      const response = await axios.post(
        'https://realrate.store/ajayApi/AvailableASVtretmentcenter.php',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );

      if (response.data.message === 'updated successfully') {
        // Save the availableASV and date to AsyncStorage
        await AsyncStorage.setItem('availableASV', availableASV.toString());
        await AsyncStorage.setItem(
          'lastStockedDate',
          `${day}-${month}-${year}`,
        );

        Alert.alert(t('Success'), response.data.message);
        navigation.navigate('Profiletab');
      } else {
        Alert.alert(t('Error'), response.data.message);
      }
    } catch (error) {
      console.error('API call error:', error);
      Alert.alert(
        t('Error'),
        t('Could not submit data. Please try again later.'),
      );
    }
  };

  const incrementASV = () => {
    setAvailableASV(prev => prev + 1);
    setStockChanged(true);
  };

  const decrementASV = () => {
    setAvailableASV(prev => (prev > 0 ? prev - 1 : 0));
    setStockChanged(true);
  };

  const handleDateChange = () => {
    setDateChanged(true);
  };

  if (!userData) {
    return <Text>Loading...</Text>;
  }

  const {authorizesName, centerName} = userData;

  return (
    <>
      <ScrollView style={{backgroundColor: 'white'}}>
        <View style={{backgroundColor: 'white'}}>
          <ImageBackground
            source={require('./Assets/background.png')}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              height: 200,
              borderBottomLeftRadius: 40,
              borderBottomRightRadius: 40,
            }}></ImageBackground>
          <View
            style={{
              width: 360,
              height: 134,
              backgroundColor: '#093624',
              left: 13,
              top: -50,
              borderRadius: 20,
              elevation: 10,
            }}>
            <View style={{flexDirection: 'row', gap: 30}}>
              <View style={{top: 30, left: 35}}>
                <FontAwesome6 name="circle-user" size={70} color="white" />
              </View>
              <View style={{textAlign: 'center', left: 80, top: 20}}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 16,
                    fontWeight: '500',
                    lineHeight: 24.2,
                  }}>
                  Authorizer Name: {'\n'}
                  <Text style={{fontSize: 10, fontWeight: '400'}}>
                    {authorizesName}
                  </Text>
                </Text>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 16,
                    fontWeight: '500',
                    lineHeight: 24.2,
                  }}>
                  Center Name: {'\n'}
                  <Text style={{fontSize: 10, fontWeight: '400'}}>
                    {centerName}
                  </Text>
                </Text>
              </View>
            </View>
          </View>
          <Text
            style={{
              textAlign: 'center',
              // top: -120,
              color: '#093624',
              fontWeight: '500',
              fontSize: 24,
              lineHeight: 29.05,
            }}>
            Stock Availability of ASV
          </Text>
          <View
            style={{
              flexDirection: 'row',
              // justifyContent: 'space-around',
              justifyContent: 'center',
              top: 20,
              gap: 50,
            }}>
            <TouchableOpacity onPress={decrementASV}>
              <Text
                style={{
                  fontSize: 64,
                  color: '#093624',
                  fontWeight: 400,
                  lineHeight: 77.45,
                  top: 30,
                }}>
                -
              </Text>
            </TouchableOpacity>
            <TextInput
              style={{
                fontSize: 96,
                color: '#093624',
                width: 100,
                textAlign: 'center',
                fontWeight: '700',
                lineHeight: 116.18,
              }}
              placeholder="Update stock"
              keyboardType="numeric"
              value={availableASV.toString()}
              onChangeText={text => {
                const newValue = text ? parseInt(text) : 0;
                setAvailableASV(newValue);
                if (newValue !== initialAvailableASV) {
                  setStockChanged(true);
                }
              }}
            />
            <TouchableOpacity onPress={incrementASV}>
              <Text
                style={{
                  fontSize: 64,
                  color: '#093624',
                  fontWeight: 400,
                  lineHeight: 77.45,
                  top: 30,
                }}>
                +
              </Text>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              textAlign: 'center',
              color: '#093624',
              top: 30,
              fontWeight: '500',
              fontSize: 24,
            }}>
            Last Stocked on
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              top: 60,
              marginBottom:100
            }}>
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
                height: 60,
                width: 150,
                left: 120,
                backgroundColor: '#093624',
                borderRadius: 10,
           
              }}>
              <Text style={{textAlign: 'center', color: 'white', margin: 18}}>
                Save
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}

export default TreatmentAvailableASVscreen;
