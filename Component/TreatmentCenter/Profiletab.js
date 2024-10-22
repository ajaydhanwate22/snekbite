import React, {useEffect, useState} from 'react';
import { View, Text, ImageBackground, ScrollView, TouchableOpacity, Image, Modal, SafeAreaView,Alert } from 'react-native';
import {useTranslation} from 'react-i18next';
import FooterNavigationcenter from './FooterNavigationcenter';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/Fontisto';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {useFocusEffect} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

function Profiletab({navigation, route}) {
  const {t} = useTranslation();
  const [userData, setUserData] = useState(null);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
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
      const response = await fetch(`https://realrate.store/ajayApi/Fetchauthor.php?userId=${userId}`);
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


  const formatDate = dateString => {
    if (!dateString) {
      return "Date not available"; 
    }
    const [day, month, year] = dateString.split('-');
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${day} ${months[parseInt(month) - 1]} ${year}`;
  };

  const handleButtonPress = (screen, params) => {
    navigation.navigate(screen, params);
  };

  const toggleEditModal = item => {
    setSelectedItem(item);
    setIsEditModalVisible(!isEditModalVisible);
  };

  const handleEditAction = () => {
    setIsEditModalVisible(false);

if (selectedItem === 'asv') {
      navigation.navigate('TreatmentAvailableASVscreen',{ userId });
    } else if (selectedItem === 'usedAsv') {
      navigation.navigate('TreatmentUsedASVscreen',{ userId });
    }
};


  if (!userData) {
    return <Text>No user data found.</Text>;
  }

  const { AuthorizesName, EmailID, CenterName, ContactNumber, AvailableASVDate, UsedASVdate, UsedASV, AvailabilityofASV, CenterLocation, photo_url } = userData


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
              navigation.navigate('Loginform2Screen');  // Navigate to Home screen after logout
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
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <ScrollView>
          <View style={{backgroundColor: 'white',flex:1 }}>
          <ImageBackground
        source={require('../Assets/background.png')}
        style={{ flex: 1, alignItems: 'center',justifyContent: 'center',overflow: 'hidden',height: 200,borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,position: 'relative', }}>
            <TouchableOpacity  style={{ position: 'absolute', top: 20, left: 15 }}   onPress={handleLogout}  activeOpacity={0.7}>
            <AntDesign name="leftcircle" size={25} color="white" />
            </TouchableOpacity>
        <Image source={require('../Assets/logo.png')} style={{resizeMode: 'contain',height: 100,width: 100,position: 'absolute',top: '40%',left: '50%', transform: [{ translateX: -50 }, { translateY: -50 }] }}/>
      </ImageBackground>

          <View style={{paddingHorizontal: 10}}>


                {/* authorization profile */}
              <TouchableOpacity onPress={() => handleButtonPress('AuthorEditscreen')}>
               <View style={{width: '100%', height: 109, backgroundColor: '#ffffff', top: -40, borderRadius: 10, elevation: 15, flexDirection: 'row', justifyContent: 'space-between', padding: 8, paddingLeft: 25}}>
                  <View style={{gap: 2,alignSelf:'center'}}>
                  <Text style={{color: '#093624', fontSize: 20, fontWeight: '600', lineHeight: 24.02}}>{AuthorizesName}</Text>
                  <Text style={{color: '#093624', fontSize: 12, fontWeight: '500', lineHeight: 15.73}}>{EmailID}</Text>
                  <Text style={{color: '#093624', fontSize: 12, fontWeight: '500', lineHeight: 15.73}}>{CenterName}</Text>
                  <Text style={{color: '#093624', fontSize: 12, fontWeight: '500', lineHeight: 15.73}}>{CenterLocation}</Text>
                  <Text style={{color: '#093624', fontSize: 12, fontWeight: '500', lineHeight: 15.73}}>+91{ContactNumber}</Text>
                  </View>
                  <View style={{ height: 100, width: 100, backgroundColor: '#093624', borderRadius: 50, justifyContent: 'center', alignSelf: 'center', alignItems: 'center' }}>
                      {photo_url ? ( <Image source={{uri: photo_url}} style={{width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 50}} />
                      ) : (<FontAwesome6 name="user-circle" size={60} color="white" />)}
                  </View>  
                </View>
                </TouchableOpacity>


                {/* Patient Details container */}
               <Text style={{top: -20, fontWeight: '600', fontSize: 14, lineHeight: 17.23, color: '#093624'}}>Patient Details</Text>
                <View style={{flexDirection: 'row', bottom: 20, justifyContent: 'space-between', alignItems: 'center', top: -15}}>

                {/* Patient Details first container */}
                <TouchableOpacity onPress={() => handleButtonPress('patientform', {userId})} style={{width: '49%'}}>
                <View style={{height: 109, backgroundColor: '#093624', elevation: 15, borderRadius: 15, justifyContent: 'center', alignItems: 'center'}}>
                    <FontAwesome6 name="user-plus" size={40} color="white" />
                    <Text style={{color: 'white', textAlign: 'center', fontSize: 14, fontWeight: '600', lineHeight: 19.36, marginTop: 10}}>Add new patient</Text>

                </View>
                </TouchableOpacity>

                {/* Patient Details second container */}
                <TouchableOpacity onPress={() => handleButtonPress('Patientlist', {userId})}style={{width: '49%'}}>
                <View style={{height: 109, backgroundColor: '#093624', elevation: 15, borderRadius: 15, justifyContent: 'center', alignItems: 'center'}}>
                <Icon2 name="format-list-bulleted-add" size={40} color="white" />
                <Text style={{ color: 'white', textAlign: 'center', fontSize: 14, fontWeight: '600', lineHeight: 19.36,  marginTop: 10 }}>Patient List</Text>
                </View>
                </TouchableOpacity>

              </View>

                        {/* Anti Snake Venom container */}
          <Text style={{ top: -5, fontWeight: '600', fontSize: 14, lineHeight: 17.23, color: '#093624' }}>Anti Snake Venom</Text>
               {/* Anti Snake Venom first container */}
          <View style={{ height: 109, width: '100%', backgroundColor: '#093624', borderRadius: 15, elevation: 15 }}>
             <View style={{ justifyContent: 'space-around', flexDirection: 'row' }}>
                  <Icon3 name="injection-syringe" size={40} color="white" style={{ top: 30 }} />
                   <View style={{flexDirection: 'column', top: 35}}>
                  <Text style={{ color: 'white', fontSize: 14, fontWeight: '600', textAlign: 'left', lineHeight: 19.36 }}>Used ASV</Text>
                  <Text style={{ color: 'white', fontSize: 10, fontWeight: '400', lineHeight: 12.01 }}>Last used on {formatDate(UsedASVdate)}</Text>
                  </View>
                  <Text style={{ color: 'white', fontSize: 40, top: 25, fontWeight: '700', lineHeight: 58.09 }}>{UsedASV}</Text>
                  <TouchableOpacity onPress={() => toggleEditModal('usedAsv')}>
                  <MaterialCommunityIcons name="dots-vertical" size={15} color="white" style={{ top: 15 }} />
                  </TouchableOpacity>
              </View>
           </View>
                {/* Anti Snake Venom second container */}
          <View style={{ height: 109, width: '100%', backgroundColor: '#093624', top: 8, borderRadius: 15, marginBottom: 20, elevation: 15 }} >
            <View style={{ justifyContent: 'space-around', flexDirection: 'row' }} >
              <Ionicons name="cart-sharp" size={40} color="white" style={{ top: 30 }} />
                  <View style={{flexDirection: 'column', top: 35}}>
                  <Text style={{ color: 'white', fontSize: 14, fontWeight: '600', textAlign: 'left', lineHeight: 19.36 }}>Stock ASV</Text>
                  <Text style={{ color: 'white', fontSize: 10, fontWeight: '400', lineHeight: 12.01 }}>Last stocked on {formatDate(AvailableASVDate)}</Text>
                  </View>
                   <Text style={{ color: 'white', fontSize: 40, top: 25, fontWeight: '700', lineHeight: 58.09 }}>{AvailabilityofASV}</Text>
                  <TouchableOpacity onPress={() => toggleEditModal('asv')}>
                  <MaterialCommunityIcons name="dots-vertical" size={15} color="white" style={{top: 15}} />
                  </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      {/* modal section */}

      <Modal transparent={true} animationType="slide" visible={isEditModalVisible} onRequestClose={() => setIsEditModalVisible(false)}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, width: '70%', alignItems: 'center' }}>
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

    </ScrollView>
  <FooterNavigationcenter navigation={navigation} />
 </SafeAreaView>
    </>
  );
}

export default Profiletab;
