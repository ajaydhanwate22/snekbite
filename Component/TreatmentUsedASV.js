import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';

function TreatmentUsedASVscreen({navigation}) {
  const {t} = useTranslation();
  const [usedASV, setUsedASV] = useState('0');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [userData, setUserData] = useState(null);

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

    fetchUserData();
  }, []);

  const handleButtonPress = screen => {
    navigation.navigate(screen);
  };

  if (!userData) {
    return <Text>Loading...</Text>;
  }

  const {authorizesName, centerName} = userData;

  const incrementASV = () => {
    setUsedASV(prev => prev + 1); // Increase by 1
  };

  const decrementASV = () => {
    setUsedASV(prev => (prev > 0 ? prev - 1 : 0)); // Decrease by 1, not below 0
  };
  

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
              top: -100,
            }}></ImageBackground>
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
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  height: 50,
                  width: 50,
                  left: 50,
                  top: 20,
                  backgroundColor: 'white',
                  borderRadius: 50,
                }}>
                <Text style={{textAlign: 'center', top: 10}}>profile</Text>
              </View>
              <View style={{textAlign: 'center', left: 80, top: 20, gap: 8}}>
                <Text style={{color: 'white', fontSize: 16}}>
                  {authorizesName}
                </Text>
                <Text style={{color: 'white', fontSize: 10}}>{centerName}</Text>
              </View>
            </View>
          </View>
          <Text
            style={{
              textAlign: 'center',
              top: -120,
              color: '#093624',
              fontWeight: 'bold',
              fontSize: 16,
            }}>
            Used ASV
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              top: -50,
              fontSize: 100,
            }}>
            <TouchableOpacity onPress={decrementASV}>
              <Text style={{fontSize: 50, left: 40, color: '#093624'}}>-</Text>
            </TouchableOpacity>
            <TextInput
              style={{
                fontSize: 30, // Adjusted for better visibility
                color: '#093624',
                width: 100,
                textAlign: 'center',
              }}
              placeholder="Update stock"
              keyboardType="numeric"
              value={usedASV.toString()} // Convert the number to string for display
              onChangeText={text => {
                const value = text ? parseInt(text) : 0;
                setUsedASV(value); // Update state based on user input
              }}
            />
            <TouchableOpacity onPress={incrementASV}>
              <Text style={{fontSize: 50, right: 40, color: '#093624'}}>+</Text>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              textAlign: 'center',
              color: '#093624',
              top: -10,
              fontWeight: 'bold',
            }}>
            Last used on
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              top: 20,
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
              onChangeText={setDay}
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
              onChangeText={setMonth}
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
              onChangeText={setYear}
            />
          </View>
          <TouchableOpacity onPress={() => handleButtonPress('Profiletab')}>
            <View
              style={{
                height: 50,
                width: 150,
                left: 110,
                top: 60,
                backgroundColor: '#093624',
                borderRadius: 10,
              }}>
              <Text style={{textAlign: 'center', color: 'white', margin: 15}}>
                Save
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={{backgroundColor: 'white'}}>
        <View
          style={{
            height: 50,
            width: 310,
            left: 25,
            backgroundColor: '#093624',
            marginBottom: 8,
            borderRadius: 15,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <TouchableOpacity onPress={() => handleButtonPress('Profiletab')}>
              <View
                style={{
                  height: 30,
                  width: 50,
                  backgroundColor: 'red',
                  top: 10,
                  borderRadius: 20,
                }}>
                <Text style={{color: 'white', textAlign: 'center', top: 5}}>
                  Profile
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleButtonPress('Abouttabscreen')}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  top: 6,
                }}>
                <Image source={require('./Assets/about.png')} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleButtonPress('Editprofilescreen')}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  top: 10,
                }}>
                <Image source={require('./Assets/edit.png')} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}

export default TreatmentUsedASVscreen;
