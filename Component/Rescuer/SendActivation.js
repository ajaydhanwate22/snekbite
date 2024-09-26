import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import { useTranslation } from 'react-i18next';

function Rescuersentactivetionscreen({ navigation }) {
  const { t } = useTranslation();

  const handleButtonPress = (screen) => {
    if (screen === 'RescuerAuthorizesNamesreen') {
      Alert.alert(
        'Request Submitted',
        'Your activation request has been sent.'
      );
    } else if (screen === 'Home') {
      Alert.alert('Data Saved', 'Your data has been saved successfully.');
    }
    navigation.navigate(screen);
  };

  return (
    <>
      <ScrollView style={{backgroundColor:'white'}}>
        <View style={{ backgroundColor: 'white' }}>
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
            }}
          >
            <Image
                 source={require('../Assets/logo.png')}
              style={{
                resizeMode: 'contain',
                height: 200,
                width: 200,
              }}
            />
          </ImageBackground>
          <View
            style={{
              width: 300,
              height: 400,
              backgroundColor: 'white',
              left: 30,
              top: -60,
              borderRadius: 30,
              // marginBottom: -30,
              elevation: 10,
            }}
          >
            <Text
              style={{
                textAlign: 'center',
                color: '#093624',
                fontSize: 20,
                margin: 30,
                fontWeight: 'bold',
              }}
            >
              {t('Send Admin Request for Activation')}
            </Text>
            <View  style={{left:20, gap:30, top:100}}>
            <TouchableOpacity
              onPress={() => handleButtonPress('RescuerAuthorizesNamesreen')}
            >
              <View
                style={{
                  height: 40,
                  width: 250,
                  borderWidth: 1,
                  borderRadius: 10,
                  backgroundColor: '#093624',
                }}
              >
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    padding: 8,
                  }}
                >
                  {t('Request')}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleButtonPress('Home')}>
              <View
                style={{
                  height: 40,
                  width: 250,
                  borderWidth: 1,
                  borderRadius: 10,
                }}
              >
                <Text
                  style={{
                    color: '#093624',
                    textAlign: 'center',
                    padding: 8,
                  }}
                >
                  {t('Save and Exit')}
                </Text>
              </View>
            </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

export default Rescuersentactivetionscreen;
