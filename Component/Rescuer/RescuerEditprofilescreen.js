import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Image, ScrollView, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTranslation } from 'react-i18next';
import RescuerFooterNavigation from './RescuerFooterNavigation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/AntDesign';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import AntDesign from 'react-native-vector-icons/AntDesign';


function RescuerEditprofilescreen({navigation}) {
  const { t } = useTranslation();
  const [rescuername, setrescuername] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    const getData = async () => {
      try {
        const userData = await AsyncStorage.getItem('userData');
        if (userData) {
          const parsedData = JSON.parse(userData);
          setrescuername(parsedData.RescuerName || ''); 
          setImage(parsedData.photo_url || ''); 
        }
      } catch (error) {
        console.error('Error fetching user data from AsyncStorage', error);
      }
    };
    getData();
  }, []);

  const handleButtonPress = (screen) => {
    navigation.navigate(screen);
  };

  const handleLogout = () => {
    Alert.alert(
      t('Are you sure you want to log out?'),  // Alert message
      '',  // No extra message
      [
        {
          text: t('Cancel'),  // Text for cancel button
          style: 'cancel',  // Cancel button style
        },
        {
          text: t('Log Out'),  // Text for logout button
          onPress: async () => {
            try {
              await AsyncStorage.removeItem('userData');  // Remove user data from AsyncStorage
              navigation.navigate('Home');  // Navigate to Home screen after logout
            } catch (error) {
              console.error('Error during logout:', error);
            }
          },
          style: 'destructive',  // Destructive style to highlight the action
        },
      ],
      { cancelable: false }  // Make the alert non-cancelable by tapping outside
    );
  };


  return (
    <>
 <ScrollView style={{ backgroundColor: 'white' }}>
        <ImageBackground 
          source={require('../Assets/background.png')} 
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center', overflow: 'hidden', height: 150, borderBottomLeftRadius: 40, borderBottomRightRadius: 40 }}>    
          <TouchableOpacity style={{ position: 'absolute',top: 60,   left: 15}}        onPress={() => navigation.goBack()}>
          <AntDesign name="leftcircle" size={25} color="white" />  
            </TouchableOpacity> 
          <Text style={{ color: 'white', fontWeight: '700', fontSize: 24, right: 60, lineHeight: 29.05 }}>Profile </Text>
        </ImageBackground>

        {/* Profile photo and name */}
        <View style={{ height: 100, width: 100, backgroundColor: '#093624', borderRadius: 50, alignSelf: "center", marginVertical: 20, justifyContent: 'center', alignItems: "center" }}>
          {image ? (
            <Image source={{ uri: image }} style={{ width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 50 }} />
          ) : (
            <FontAwesome6 name="user-circle" size={60} color="white" />
          )}
        </View>  
   
        <Text style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center', color: '#093624', fontSize: 24, fontWeight: '700', lineHeight: 29.05 }}>
          {rescuername || 'Name'}
        </Text>

        {/* Other options */}
        <View style={{ flexDirection: 'column', gap: 15, alignItems:'center', padding:20 }}>
          {/* Edit profile */}
          <TouchableOpacity>
            <View style={{ height: 55, width: '100%', backgroundColor: '#093624', borderRadius: 10, flexDirection: "row", justifyContent: 'space-between', alignItems:'center', paddingHorizontal:15}}>
              <Icon name="user-edit" size={20} color="white" />
              <Text style={{ color: '#ffffff', right: 75, fontFamily: 'Inter', fontWeight: '500', fontSize: 15, lineHeight: 24.2 }}>
                Edit Profile
              </Text>
              <Icon2 name="right" size={20} color="white"  />
            </View>
          </TouchableOpacity>

          {/* Setting */}
          <TouchableOpacity>
            <View style={{ height: 55, width: '100%', backgroundColor: '#093624', borderRadius: 10, flexDirection: "row", justifyContent: 'space-between', alignItems:'center', paddingHorizontal:15}}>
              <Icon2 name="setting" size={20} color="white" />
              <Text style={{ color: '#ffffff', right: 80, fontFamily: 'Inter', fontWeight: '500', fontSize: 15, lineHeight: 24.2 }}>
                Setting
              </Text>
              <Icon2 name="right" size={20} color="white" />
            </View>
          </TouchableOpacity>

          {/* About screen */}
          <TouchableOpacity onPress={() => handleButtonPress('RescuerAboutscreen')}>
            <View style={{ height: 55, width: '100%', backgroundColor: '#093624', borderRadius: 10, flexDirection: "row", justifyContent: 'space-between', alignItems:'center', paddingHorizontal:15}}>
              <Icon name="info-circle" size={20} color="white"/>
              <Text style={{color: '#ffffff', right: 75, fontFamily: 'Inter', fontWeight: '500', fontSize: 15, lineHeight: 24.2}}>
                About Us
              </Text>
              <Icon2 name="right" size={20} color="white" />
            </View>
          </TouchableOpacity>

          {/* Privacy Policy */}
          <TouchableOpacity onPress={() => handleButtonPress('Rescueprivancypolicyscreen')}>
            <View style={{ height: 55, width: '100%', backgroundColor: '#093624', borderRadius: 10, flexDirection: "row", justifyContent: 'space-between', alignItems:'center', paddingHorizontal:15}}>
              <Icon name="shield-alt" size={20} color="white" />
              <Text style={{color: '#ffffff', right: 60, fontFamily: 'Inter', fontWeight: '500', fontSize: 15, lineHeight: 24.2}}>
                Privacy Policy
              </Text>
              <Icon2 name="right" size={20} color="white" />
            </View>
          </TouchableOpacity>

          {/* Logout */}
          <TouchableOpacity onPress={handleLogout}>
            <View style={{ height: 55, width: '100%', backgroundColor: '#093624', borderRadius: 10, flexDirection: "row", justifyContent: 'space-between', alignItems:'center', paddingHorizontal:15}}>
              <Icon name="sign-out-alt" size={20} color="white" />
              <Text style={{ color: '#ffffff', right: 80, fontFamily: 'Inter', fontWeight: '500', fontSize: 15, lineHeight: 24.2 }}>
                Logout
              </Text>
              <Icon2 name="right" size={20} color="white" />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <RescuerFooterNavigation navigation={navigation} />
    </>
  );
}

export default RescuerEditprofilescreen;
