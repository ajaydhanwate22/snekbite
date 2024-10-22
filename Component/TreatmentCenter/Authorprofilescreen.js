import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator, 
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useTranslation} from 'react-i18next';
import FooterNavigationcenter from './FooterNavigationcenter';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'; 
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; 

const Authorprofilescreen = ({ navigation }) => {
    const {t} = useTranslation();
    const [authorizesName, setAuthorizesName] = useState('');
    const [centerName, setCenterName] = useState('');
    const [centerLocation, setCenterLocation] = useState('');
    const [email, setEmail] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [usedASV, setusedASV] = useState('');
    const [usedASVdate, setusedASVdate] = useState('');
    const [availabilityOfASV, setAvailabilityOfASV] = useState('');
    const [availableASVdate, setavailableASVdate] = useState('');
    const [description, setDescription] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchUserData = async () => {
          try {
            const userData = await AsyncStorage.getItem('userData');
            if (userData) {
              const parsedData = JSON.parse(userData);
              setAuthorizesName(parsedData.authorizesName || '');
              setCenterName(parsedData.centerName || '');
              setCenterLocation(parsedData.centerLocation || '');
              setEmail(parsedData.email || '');
              setContactNumber(parsedData.contactNumber || '');
              setusedASV(parsedData.usedASV || '0');
              setusedASVdate(parsedData.usedASVdate || '');
              setAvailabilityOfASV(parsedData.availabilityOfASV || '0');
              setavailableASVdate(parsedData.availableASVdate || '0');
              setDescription(parsedData.description || '');
            }
          } catch (error) {
            console.error('Error fetching user data from AsyncStorage', error);
          } finally {
            // Hide the loader after data is fetched
            setIsLoading(false);
          }
        };
        fetchUserData();
      }, []);


const handleEdit = () => {
    navigation.navigate('AuthorEditscreen');
};

  return (
    <>
      <ScrollView
        contentContainerStyle={{flexGrow: 1, backgroundColor: 'white'}}>
        {/* backgound image and logo */}
        <ImageBackground
          source={require('../Assets/background.png')}
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            height: 300,
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
          }}>
            <TouchableOpacity onPress={handleEdit} >
            <Image
            source={require('../Assets/pencil.png')}
            style={{resizeMode: 'contain',left:140}}
          />
          </TouchableOpacity>
              <Image
            source={require('../Assets/logo.png')}
            style={{resizeMode: 'contain', height: 150, width: 150}}
          />
        </ImageBackground>
        <View style={{paddingHorizontal:20}}>

        <View
          style={{
            width: '100%',
            height: 510,
            backgroundColor: 'white',
            top: -60,
            borderRadius: 30,
            marginBottom: -30,
            elevation: 5,
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: '#093624',
              fontSize: 25,
              marginTop: 30,
              fontWeight:700,
              lineHeight:29.07
            }}>
            {t('Authorizes Profile')}
          </Text>

          {/* Show loading spinner while data is loading */}
          {isLoading ? (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', height: 300}}>
              <ActivityIndicator size="large" color="#093624" />
              <Text style={{marginTop: 20, color: '#093624', fontSize: 18}}>Loading...</Text>
            </View>
          ) : (
            <View
              style={{
                top: 30,
                marginLeft: 20,
                flex: 1,
                flexDirection: 'column',
                gap: 20,
                color: '#093624',
                // alignItems:"center",
              }}>
                <View style={{flexDirection:"row", gap:5}}>
                  <FontAwesome5 name="user-check" size={16} color="#093624"/>
                  <Text style={{color: '#093624',fontSize: 16,fontWeight:600}}>Authorizes Name: {authorizesName}</Text>
                </View>
                <View style={{flexDirection:'row', gap:5}}>
                  <FontAwesome5 name="hospital" size={16} color="#093624"/>
                  <Text style={{color: '#093624',fontSize: 16,fontWeight:600}}>Center Name: {centerName} </Text>
                </View>
                <View style={{flexDirection:'row',gap:5}}>
                  <MaterialCommunityIcons name="hospital-marker" size={16} color="#093624"/>
                  <Text style={{color: '#093624',fontSize: 16,fontWeight:600}}>Center Location: {centerLocation} </Text>
                </View>
                <View style={{flexDirection:'row',gap:5}}>
                  <MaterialCommunityIcons name="email" size={16} color="#093624"/>
                  <Text style={{color: '#093624',fontSize: 16,fontWeight:600}}>Email ID: {email} </Text>
                </View>
                <View style={{flexDirection:'row',gap:5}}>
                  <FontAwesome5 name="phone-alt" size={16} color="#093624"/>
                  <Text style={{color: '#093624',fontSize: 16,fontWeight:600}}>Contact Number:+91 {contactNumber} </Text>
                </View>
                <View style={{flexDirection:'row',gap:5}}>
                  <FontAwesome5 name="syringe" size={16} color="#093624"/>
                  <Text style={{color: '#093624',fontSize: 16,fontWeight:600}}>Used ASV:{usedASV}</Text>
                </View>
                <View style={{flexDirection:'row',gap:5}}>
                  <FontAwesome5 name="calendar-alt" size={16} color="#093624" />
                  <Text style={{color: '#093624',fontSize: 16,fontWeight:600}}>UsedASV date:{usedASVdate}</Text>
                </View>
                <View style={{flexDirection:'row',gap:5}}>
                  <FontAwesome5 name="check-circle" size={16} color="#093624"/>
                  <Text style={{color: '#093624',fontSize: 15,fontWeight:600}}>Availability of ASV:{availabilityOfASV} </Text>
                </View>
                <View style={{flexDirection:'row',gap:5}}>
                  <FontAwesome5 name="calendar-alt" size={16} color="#093624" />
                  <Text style={{color: '#093624',fontSize: 16,fontWeight:600}}>AvailableASV Date:{availableASVdate}</Text>
                </View>
                <View style={{flexDirection:'row',gap:5}}>
                  <FontAwesome5 name="file-alt" size={16} color="#093624" />
                  <Text style={{color: '#093624',fontSize: 16,fontWeight:600}}>Description:{description} </Text>
                </View>
            </View>
          )}
        </View>                 
        </View>
      </ScrollView>
    </>
  );
};

export default Authorprofilescreen;
