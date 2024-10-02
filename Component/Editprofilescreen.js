import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTranslation } from 'react-i18next';
import FooterNavigationcenter from './FooterNavigationcenter';

function Editprofilescreen({ navigation }) {
  const { t } = useTranslation();
  const [authorizesName, setAuthorizesName] = useState('');

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
            height: 100,
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
          }}>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 20,
              right: 130,
            }}>
            Profile
          </Text>
        </ImageBackground>

        <Image
          source={require('./Assets/MaleUser.png')}
          style={{ left: 120, width: 150, height: 150 }}
        />
        <Text
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            color: '#093624',
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          {authorizesName || 'Name'} {/* Display the authorized name or a default */}
        </Text>
  
        <View style={{ flexDirection: 'column', gap: 25, left: 17, top: 20 }}>
        <TouchableOpacity onPress={() => handleButtonPress('AuthorEditscreen')}>
          <View style={{ height: 60, width: 350, backgroundColor: '#093624', borderRadius: 10 }}>
            <Text style={{ color: 'white', left: 40, margin: 15, fontSize: 20, fontWeight: 'bold' }}>
              Edit Profile
            </Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{ height: 60, width: 350, backgroundColor: '#093624', borderRadius: 10 }}>
              <Text style={{ color: 'white', left: 40, margin: 15, fontSize: 20, fontWeight: 'bold' }}>
                Settings
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleButtonPress('Abouttabscreen')}>
            <View style={{ height: 60, width: 350, backgroundColor: '#093624', borderRadius: 10 }}>
              <Text style={{ color: 'white', left: 40, margin: 15, fontSize: 20, fontWeight: 'bold' }}>
                About Us
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleButtonPress('Privancypolicyscreen')}>
            <View style={{ height: 60, width: 350, backgroundColor: '#093624', borderRadius: 10 }}>
              <Text style={{ color: 'white', left: 40, margin: 15, fontSize: 20, fontWeight: 'bold' }}>
                Privacy Policy
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleButtonPress('Home')}>
            <View style={{ height: 60, width: 350, backgroundColor: '#093624', borderRadius: 10, marginBottom: 50 }}>
              <Text style={{ color: 'white', left: 40, margin: 15, fontSize: 20, fontWeight: 'bold' }}>
                Logout
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <FooterNavigationcenter navigation={navigation} />
    </>
  );
}

export default Editprofilescreen;
