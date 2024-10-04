import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, ScrollView, TouchableOpacity, Image,Modal  } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTranslation } from 'react-i18next';
import FooterNavigationcenter from './FooterNavigationcenter';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; 
import Icon2 from 'react-native-vector-icons/MaterialIcons'; 
import Icon3 from 'react-native-vector-icons/Fontisto'; 
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'; 


function Profiletab({ navigation }) {
  const { t } = useTranslation();
  const [userData, setUserData] = useState(null);
  const [usedASV, setUsedASV] = useState(0);
  const [lastUsedDate, setLastUsedDate] = useState('');
  const [availableASV, setAvailableASV] = useState(0);
  const [lastStockedDate, setLastStockedDate] = useState('');
  const [isEditModalVisible, setIsEditModalVisible] = useState(false); 
  const [selectedItem, setSelectedItem] = useState(null);

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

    const fetchASVData = async () => {
      try {
        const storedUsedASV = await AsyncStorage.getItem('usedASV');
        const storedDate = await AsyncStorage.getItem('lastUsedDate');
        const storedAvailableASV = await AsyncStorage.getItem('availableASV');
        const storedLastStockedDate = await AsyncStorage.getItem('lastStockedDate');

        if (storedUsedASV) {
          setUsedASV(parseInt(storedUsedASV));
        }
        if (storedDate) {
          setLastUsedDate(formatDate(storedDate));
        }
        if (storedAvailableASV) {
          setAvailableASV(parseInt(storedAvailableASV));
        }
        if (storedLastStockedDate) {
          setLastStockedDate(formatDate(storedLastStockedDate));
        }
      } catch (error) {
        console.error('Failed to load ASV data', error);
      }
    };

    fetchUserData();
    fetchASVData();
  }, []);

  const formatDate = (dateString) => {
    const [day, month, year] = dateString.split('-');
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${day} ${months[parseInt(month) - 1]} ${year}`;
  };

  const handleButtonPress = (screen) => {
    navigation.navigate(screen);
  };

  const toggleEditModal = (item) => {
    setSelectedItem(item);
    setIsEditModalVisible(!isEditModalVisible);
  };

  const handleEditAction = () => {
    setIsEditModalVisible(false);
    if (selectedItem === 'asv') {
      handleButtonPress('TreatmentAvailableASVscreen');
    } else if (selectedItem === 'usedAsv') {
      handleButtonPress('TreatmentUsedASVscreen');  // Navigate to "TreatmentUsedASVscreen" when 'usedAsv' is selected
    }
  };

  if (!userData) {
    return <Text>Loading...</Text>;
  }

  const { authorizesName, email, centerLocation, contactNumber } = userData;

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
          overflow: 'hidden',
          height: 200,
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
        }}>
        <Image
          source={require('./Assets/logo.png')}
          style={{resizeMode: 'contain', height: 60, width: 130,top:-10}}
        />
      </ImageBackground>
          <View
            style={{
              width: 360,
              height: 143,
              backgroundColor: '#ffffff',
              left: 13,
              top: -40,
              borderRadius: 10,
              elevation: 15,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <View style={{ top: 25, gap: 10 }}>
              <Text style={{ color: '#093624', fontSize: 20, fontWeight:'500' ,  lineHeight: 24.02,}}>
                {authorizesName}
              </Text>
              <Text style={{ color: '#093624', fontSize: 13, fontWeight:'500' ,  lineHeight: 15.73,}}>
                {email}
              </Text>
              <Text style={{ color: '#093624', fontSize: 13,fontWeight:'500' ,  lineHeight: 15.73, }}>
                {centerLocation}
              </Text>
              <Text style={{ color: '#093624', fontSize: 13,fontWeight:'500' ,  lineHeight: 15.73, }}>
                {contactNumber}
              </Text>
            </View>
            <View>
              <Image source={require('./Assets/MaleUser.png')}  style={{height:120, width:120, top:12}}/>
            </View>
          </View>
          <Text style={{ left: 20, top: -5,  fontWeight: '600',    // 600 weight
    fontSize: 14,         // Font size 14px
    lineHeight: 17.23,   }}>
            Patient Details
          </Text>
          <View
            style={{
              flexDirection: 'row',
              gap: 10,
              left: 10,
              bottom: 20,
              top: 5,
            }}>
            <TouchableOpacity onPress={() => handleButtonPress('patientform')}>
              <View
                style={{
                  height: 160,
                  width: 177,
                  backgroundColor:  '#093624',
                  elevation: 15,
                  borderRadius: 15,
                }}>
                <View style={{ flexDirection: 'column', alignItems: 'center', top: 40, gap: 10 }}>
                <FontAwesome6 name="user-plus" size={55} color="white" />
                  <Text style={{ color: 'white', textAlign: 'center', fontSize:12, fontWeight:"500" , lineHeight: 14.77,top:13}}>
                    Add new patient 
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleButtonPress('Patientlist')}>
              <View
                style={{
                  height: 160,
                  width: 177,
                  backgroundColor: '#093624',
                  elevation: 15,
                  borderRadius: 15,
                }}>
                <View style={{ flexDirection: 'column', alignItems: 'center', top: 40, gap: 10 }}>
                <Icon2 name="format-list-bulleted-add" size={55} color="white" />
                  <Text style={{ color: 'white', textAlign: 'center', fontSize:12, fontWeight:"500" , lineHeight: 14.77,top:13 }}>
                    Patient List
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <Text style={{left: 20, top: 25,  fontWeight: '600',    // 600 weight
    fontSize: 14,         // Font size 14px
    lineHeight: 17.23, }}>
            Anti Snake Venom
          </Text>
            <View
              style={{
                height: 109,
                width: 360,
                backgroundColor: '#093624',
                left: 13,
                top:35,
                borderRadius: 15,
                elevation:15
              }}>
              <View style={{ justifyContent: 'space-around', flexDirection: 'row' }}>
              <Icon3 name="injection-syringe" size={67} color="white" style={{top:20}}  />
                <View style={{ flexDirection: 'column', top: 35 }}>
                  <Text style={{ color: 'white', fontSize: 16, fontWeight:"600", textAlign:'left' ,   lineHeight: 19.36,}}>Used ASV</Text>
                  <Text style={{ color: 'white', fontSize: 10 , fontWeight:"400",lineHeight: 12.01,}}>
                    Last used on {lastUsedDate || 'Not available'}
                  </Text>
                </View>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 48,
                    top: 25,
                    fontWeight: '700',lineHeight: 58.09,
                  }}>
                  {usedASV || 0}
                </Text>
                <TouchableOpacity onPress={() => toggleEditModal('usedAsv')}>
                <MaterialCommunityIcons name="dots-vertical" size={15} color="white"  style={{top:15}} />
                </TouchableOpacity>
                              </View>
            </View>
            <View
              style={{
                height: 109,
                width: 360,
                backgroundColor: '#093624',
                left: 13,
                top: 50,
                borderRadius: 15,
                marginBottom: 70,
                elevation:15
              }}>
              <View style={{ justifyContent: 'space-around', flexDirection: 'row' }}>
              <Ionicons name="cart-sharp" size={67} color="white"  style={{top:20}} />
                <View style={{ flexDirection: 'column', top: 35 }}>
                  <Text style={{ color: 'white', fontSize: 16, fontWeight:"600", textAlign:'left' ,   lineHeight: 19.36, }}>
                    Stock Availability{'\n'} of ASV
                  </Text>
                  <Text style={{ color: 'white', fontSize: 8, textAlign: 'center' }}>
                    Last stocked on {lastStockedDate || 'Not available'}
                  </Text>
                </View>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 48,
                    top: 25,
                    fontWeight: '700',lineHeight: 58.09,
                  }}>
                  {availableASV || 0}
                </Text>
                <TouchableOpacity onPress={() => toggleEditModal('asv')}>
                <MaterialCommunityIcons name="dots-vertical" size={15} color="white"  style={{top:15}} />
                </TouchableOpacity>
                <Modal
            transparent={true}
            animationType="slide"
            visible={isEditModalVisible}
            onRequestClose={() => setIsEditModalVisible(false)}
          >
            <View style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0,0,0,0.5)',
            }}>
              <View style={{
                backgroundColor: 'white',
                padding: 20,
                borderRadius: 10,
                width: 300,
                alignItems: 'center',
              }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 20 }}>Select Action</Text>
                <TouchableOpacity onPress={handleEditAction}>
                  <Text style={{ fontSize: 16, color: '#093624', padding: 10 }}>Edit ASV</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setIsEditModalVisible(false)}>
                  <Text style={{ fontSize: 16, color: 'red', padding: 10 }}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
              </View> 
            </View>
        </View>
      </ScrollView>
      <FooterNavigationcenter navigation={navigation}/>
    </>
  );
}

export default Profiletab;
