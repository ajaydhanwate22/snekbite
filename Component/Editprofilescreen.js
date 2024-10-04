import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
  ActivityIndicator, // Import ActivityIndicator for loading spinner
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTranslation } from 'react-i18next';
import FooterNavigationcenter from './FooterNavigationcenter';
import Icon from 'react-native-vector-icons/FontAwesome5'; 
import Icon2 from 'react-native-vector-icons/AntDesign'; 

function Editprofilescreen({ navigation }) {
  const { t } = useTranslation();
  
  const [authorizesName, setAuthorizesName] = useState('');
  const [loading, setLoading] = useState(true);  // State to track loading status

  useEffect(() => {
    const getData = async () => {
      try {
        const userData = await AsyncStorage.getItem('userData');
        if (userData) {
          const parsedData = JSON.parse(userData);
          setAuthorizesName(parsedData.authorizesName);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);  // Set loading to false when the data is fetched
      }
    };

    getData();
  }, []);

  const handleButtonPress = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <>
      <ScrollView style={{ backgroundColor: 'white' }}>
        <ImageBackground
          source={require('./Assets/background.png')}
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            height: 150,
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
          }}>
          <Text
            style={{
              color: 'white',
              fontWeight: '700',
              fontSize: 24,
              right: 130,
              lineHeight:29.05
            }}>
            Profile
          </Text>
        </ImageBackground>

        {loading ? (  // Show loading spinner until data is loaded
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: 200 }}>
            <ActivityIndicator size="large" color="#093624" />
            <Text style={{ marginTop: 20, color: '#093624' }}>Loading...</Text>
          </View>
        ) : (
          <>
            <Image
              source={require('./Assets/MaleUser.png')}
              style={{ left: 115, width: 150, height: 150 }}
            />
            <Text
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                color: '#093624',
                fontSize: 24,
                fontWeight: '700',
                lineHeight:29.05
              }}>
              {authorizesName || 'Name'} {/* Display the authorized name or a default */}
            </Text>
            <View style={{ flexDirection: 'column', gap: 15, left: 6, top: 20, marginBottom: 40 }}>
              <TouchableOpacity onPress={() => handleButtonPress('AuthorEditscreen')}>
                <View style={{ height: 71, width: 371, backgroundColor: '#093624', borderRadius: 10, flexDirection: "row", justifyContent: 'space-between' }}>
                  <Icon name="user-edit" size={30} color="white" style={{ left: 25, top: 18 }} />
                  <Text style={{ color: '#ffffff',  right: 75, top: 22,   fontFamily: 'Inter',fontWeight: '500', fontSize: 20,lineHeight: 24.2,  }}>
                    Edit Profile
                  </Text>
                  <Icon2 name="right" size={20} color="white" style={{ top: 23, right: 15 }} />
                </View>
              </TouchableOpacity>
              
              <TouchableOpacity>
                <View style={{ height: 71, width: 371, backgroundColor: '#093624', borderRadius: 10, flexDirection: "row", justifyContent: 'space-between' }}>
                  <Icon2 name="setting" size={30} color="white" style={{ left: 28, top: 18 }} />
                  <Text style={{ color: '#ffffff',  right: 80, top: 22,   fontFamily: 'Inter',fontWeight: '500', fontSize: 20,lineHeight: 24.2,  }}>
                    Setting
                  </Text>
                  <Icon2 name="right" size={20} color="white" style={{ top: 23, right: 15 }} />
                </View>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={() => handleButtonPress('Abouttabscreen')}>
                <View style={{ height: 71, width: 371, backgroundColor: '#093624', borderRadius: 10, flexDirection: "row", justifyContent: 'space-between' }}>
                  <Icon name="info-circle" size={30} color="white" style={{ left: 28, top: 18 }} />
                  <Text style={{ color: '#ffffff',  right: 75, top: 22,   fontFamily: 'Inter',fontWeight: '500', fontSize: 20,lineHeight: 24.2, }}>
                    About Us
                  </Text>
                  <Icon2 name="right" size={20} color="white" style={{ top: 23, right: 15 }} />
                </View>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={() => handleButtonPress('Privancypolicyscreen')}>
                <View style={{ height: 71, width: 371, backgroundColor: '#093624', borderRadius: 10, flexDirection: "row", justifyContent: 'space-between' }}>
                  <Icon name="shield-alt" size={30} color="white" style={{ left: 28, top: 18 }} />
                  <Text style={{  color: '#ffffff',  right: 50, top: 22,   fontFamily: 'Inter',fontWeight: '500', fontSize: 20,lineHeight: 24.2,}}>
                    Privacy Policy
                  </Text>
                  <Icon2 name="right" size={20} color="white" style={{ top: 23, right: 15 }} />
                </View>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={() => handleButtonPress('Home')}>
                <View style={{ height: 71, width: 371, backgroundColor: '#093624', borderRadius: 10, flexDirection: "row", justifyContent: 'space-between' }}>
                  <Icon name="sign-out-alt" size={30} color="white" style={{ left: 35, top: 18 }} />
                  <Text style={{  color: '#ffffff',  right: 75, top: 22,   fontFamily: 'Inter',fontWeight: '500', fontSize: 20,lineHeight: 24.2,}}>
                    Logout
                  </Text>
                  <Icon2 name="right" size={20} color="white" style={{ top: 23, right: 15 }} />
                </View>
              </TouchableOpacity>
            </View>
          </>
        )}
      </ScrollView>
      <FooterNavigationcenter navigation={navigation} />
    </>
  );
}

export default Editprofilescreen;
