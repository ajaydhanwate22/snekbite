import React, {useEffect, useState} from 'react';
import { View, Text, ImageBackground, ScrollView, TouchableOpacity, Image, Modal, SafeAreaView,Alert } from 'react-native';
import {useTranslation} from 'react-i18next';
import GuestFooternavigation from './GuestFooternavigation';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/Fontisto';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {useFocusEffect} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

function Guestprofilescreen({navigation, route}) {
  const {t} = useTranslation();
  const [userData, setUserData] = useState(null);
  const [rescuerData, setRescuerData] = useState([]);
  const [TretmentcenterData, setTretmentcenter] = useState([]);
  const userId = route.params?.userId; 
  
  useEffect(() => {
    if (userId) {
      fetchUserData(userId);
    }
  }, [userId]);

  useFocusEffect(
    React.useCallback(() => {
      if (userId) {
        fetchUserData(userId);
      }
    }, [userId])
  );

  const fetchUserData = async (userId) => {
    try {
      const response = await fetch(`https://realrate.store/ajayApi/Guestfetch.php?userId=${userId}`);
      const data = await response.json();

      if (data.message === 'User data fetched successfully') {
        setUserData(data.data);
        await AsyncStorage.setItem('userData', JSON.stringify(data.data));
      } else {
        console.error('User not found:', data.message);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };


  useEffect(() => {
    const fetchRescuerData = async () => {
      try {
        const response = await fetch(`https://realrate.store/ajayApi/GuestRescuerfetch.php`);
        const data = await response.json();
  
        if (data.message === 'Patients fetched successfully') {
          setRescuerData(data.data);
        } else {
          console.error('No rescuer data found:', data.message);
        }
      } catch (error) {
        console.error('Error fetching rescuer data:', error);
      }
    };
  
    fetchRescuerData();
  }, []);

  useEffect(() => {
    const fetchTretmentcenterData = async () => {
      try {
        const response = await fetch(`https://realrate.store/ajayApi/GuestTretmentcenterfetch.php`);
        const data = await response.json();
  
        if (data.message === 'Patients fetched successfully') {
          setTretmentcenter(data.data);
        } else {
          console.error('No rescuer data found:', data.message);
        }
      } catch (error) {
        console.error('Error fetching rescuer data:', error);
      }
    };
  
    fetchTretmentcenterData();
  }, []);
  



  const handleButtonPress = (screen, params) => {
    navigation.navigate(screen, params);
  };


  if (!userData) {
    return <Text>No user data found.</Text>;
  }

  const { Username, ContactNumber, EmailID, Address,photo_url } = userData



  const handleLogout = () => {
    Alert.alert(
      t('Are you sure you want to log out?'),  
      '', 
      [
        {
          text: t('Cancel'),  
          style: 'cancel',  
        },
        {
          text: t('Log Out'), 
          onPress: async () => {
            try {
              await AsyncStorage.removeItem('userData'); 
              navigation.navigate('GuestLoginform');  
            } catch (error) {
              console.error('Error during logout:', error);
            }
          },
          style: 'destructive',  
        },
      ],
      { cancelable: false }  
    );
  };


  return (
    <>
         <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <ScrollView>
          <View style={{backgroundColor: 'white',flex:1 }}>
           <ImageBackground
              source={require('../Assets/background.png')}
                 style={{ flex: 1, alignItems: 'center',justifyContent: 'center',overflow: 'hidden',height: 150,borderBottomLeftRadius: 40,
              borderBottomRightRadius: 40,position: 'relative', }}>
            <TouchableOpacity  style={{ position: 'absolute', top: 20, left: 15 }}   onPress={handleLogout}  activeOpacity={0.7}>
            <AntDesign name="leftcircle" size={25} color="white" />
            </TouchableOpacity>
        <Image source={require('../Assets/logo.png')} style={{resizeMode: 'contain',height: 80,width: 80,position: 'absolute',top: '40%',left: '50%', transform: [{ translateX: -50 }, { translateY: -50 }] }}/>
      </ImageBackground>

      <View style={{paddingHorizontal: 10, marginBottom:'1%'}}>
                  
              <TouchableOpacity onPress={() => handleButtonPress('GuestUpdate')}>
               <View style={{width: '100%', height: 109, backgroundColor: '#ffffff', top: -40, borderRadius: 10, elevation: 15, flexDirection: 'row', justifyContent: 'space-between', padding: 8, paddingLeft: 25,}}>
                  <View style={{gap: 2,alignSelf:'center'}}>
                  <Text style={{color: '#093624', fontSize: 20, fontWeight: '600', lineHeight: 24.02}}>{Username}</Text>
                  <Text style={{color: '#093624', fontSize: 12, fontWeight: '500', lineHeight: 15.73}}>{EmailID}</Text>
                  <Text style={{color: '#093624', fontSize: 12, fontWeight: '500', lineHeight: 15.73}}>{Address}</Text>
                  {/* <Text style={{color: '#093624', fontSize: 12, fontWeight: '500', lineHeight: 15.73}}>Age-{Age}</Text> */}
                  <Text style={{color: '#093624', fontSize: 12, fontWeight: '500', lineHeight: 15.73}}>+91{ContactNumber}</Text>
                  </View>
                  <View style={{ height: 100, width: 100, backgroundColor: '#093624', borderRadius: 50, justifyContent: 'center', alignSelf: 'center', alignItems: 'center' }}>
                      {photo_url ? ( <Image source={{uri: photo_url}} style={{width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 50}} />
                      ) : (<FontAwesome6 name="user-circle" size={60} color="white" />)}
                  </View>  
                </View>
                </TouchableOpacity>


                <Text style={{top: -20, fontWeight: '600', fontSize: 14, lineHeight: 17.23, color: '#093624'}}>Upload posts</Text>
                <View style={{flexDirection: 'row', bottom: 20, justifyContent: 'space-between', alignItems: 'center', top: -15}}>

                {/* first container */}
                <TouchableOpacity onPress={() => handleButtonPress('Guestformscreen', {userId})} style={{width: '49%'}}>
                <View style={{height: 109, backgroundColor: '#093624', elevation: 15, borderRadius: 15, justifyContent: 'center', alignItems: 'center'}}>
                    <MaterialCommunityIcons name="cloud-upload" size={40} color="white" />
                    <Text style={{color: 'white', textAlign: 'center', fontSize: 14, fontWeight: '600', lineHeight: 19.36, marginTop: 10}}> Upload Post</Text>
                </View>
                </TouchableOpacity>

                {/*  second container */}
                <TouchableOpacity style={{width: '49%'}}>
                <View style={{height: 109, backgroundColor: '#093624', elevation: 15, borderRadius: 15, justifyContent: 'center', alignItems: 'center'}}>
                <Icon2 name="format-list-bulleted-add" size={40} color="white" />
                <Text style={{ color: 'white', textAlign: 'center', fontSize: 14, fontWeight: '600', lineHeight: 19.36,  marginTop: 10 }}>List</Text>
                </View>
                </TouchableOpacity>

              </View>

                <View style={{ flex: 1,}}>
  <Text style={{ fontWeight: '600', fontSize: 14, lineHeight: 17.23, color: '#093624'  }}>Rescuer list</Text>
  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    <View style={{ flexDirection: 'row', flexWrap: 'nowrap' }}>
      {rescuerData.map((rescuer, index) => (
        <View key={index} style={{ margin: 5 }}> 
          <View style={{ backgroundColor: '#D9D9D9', height: 60, width: 100, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
          <View style={{ backgroundColor: '#ffffff', height: 60, width: 100, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, elevation: 15 }}>
            <View style={{ padding: 10 }}>
              <Text style={{ fontWeight: '500', fontSize: 12, lineHeight: 14.52, color: '#093624' }}>{rescuer.RescuerName}</Text>
              <Text style={{ fontWeight: '500', fontSize: 10, lineHeight: 12.1, color: '#BBBBBB' }}>{rescuer.id}</Text>
              <Text style={{ fontWeight: '500', fontSize: 10, lineHeight: 12.1, color: '#BBBBBB' }}>{rescuer.Address}</Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  </ScrollView>
</View>





<View style={{ flex: 1, top:10}}>
  <Text style={{ fontWeight: '600', fontSize: 14, lineHeight: 17.23, color: '#093624' }}>Nearby Treatment Centre</Text>
  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    <View style={{ flexDirection: 'row', flexWrap: 'nowrap' }}>
      {TretmentcenterData.map((TretmenCenter, index) => (
        <View key={index} style={{ margin: 5 }}> 
          <View style={{ backgroundColor: '#D9D9D9', height: 60, width: 100, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
          <View style={{ backgroundColor: '#ffffff', height: 60, width: 100, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, elevation: 15 }}>
            <View style={{ padding: 10 }}>
              <Text style={{ fontWeight: '500', fontSize: 12, lineHeight: 14.52, color: '#093624' }}>{TretmenCenter.CenterName}</Text>
              <Text style={{ fontWeight: '500', fontSize: 10, lineHeight: 12.1, color: '#BBBBBB' }}>{TretmenCenter.id}</Text>
              <Text style={{ fontWeight: '500', fontSize: 10, lineHeight: 12.1, color: '#BBBBBB' }}>{TretmenCenter.CenterLocation}</Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  </ScrollView>
</View>




        </View>
      </View>
    </ScrollView>
    <GuestFooternavigation navigation={navigation} />
 </SafeAreaView>
          </>
    
  );
}

export default Guestprofilescreen;
