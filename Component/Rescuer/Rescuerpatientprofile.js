import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import { useTranslation } from 'react-i18next';

function Rescuerpatientprofilescreen({ navigation }) {
  const { t } = useTranslation();
  const handleButtonPress = screen => {
    navigation.navigate(screen);
  };

  return (
    <>
 <ScrollView style={{backgroundColor:'white'}}>
        {/* backgound image and logo */}
        <ImageBackground
          source={require('../Assets/background.png')}
          style={{
            height: 421,
            top: -200,
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
            overflow: 'hidden',
            resizeMode: 'cover',
            opacity: 1,
            position: 'relative',
          }}>
          <Image
                  source={require('../Assets/logo.png')}
            style={{
              width: 110,
              height: 140,
              resizeMode: 'contain',
              position: 'absolute',
              top: '50%',
              left: '30%',
            }}
          />
        </ImageBackground>
        {/* profile container */}
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 7,
            marginLeft: 30,
            height: 800,
            width: 300,
            top: -270,
            elevation: 5,
            marginBottom:-250
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: '#093624',
              margin: 40,
              fontSize: 20,
            }}>
            {t('Patient Profile')}
          </Text>

          {/* first box profile cntainer  */}
          <Text style={{fontSize: 12, color: '#093624', marginLeft: 20}}>
            {t('Patient Details')}
          </Text>
          <View
            style={{
              width: 250,
              height: 140,
              top: 10,
              borderRadius: 10,
              marginLeft: 20,
              backgroundColor: 'white',
              elevation: 5,
            }}>
            <View
              style={{
                top: 10,
                marginLeft: 20,
                flex: 1,
                flexDirection: 'column',
                gap: 5,
                color: '#A3A3A3',
              }}>
              <Text>{t('Name')}</Text>
              <Text>{t('Age')}</Text>
              <Text>{t('Gender')}</Text>
              <Text>{t('Contact details of patient')}</Text>
              <Text>{t('address')}</Text>
            </View>
          </View>
          {/* second box profile container */}
          <Text
            style={{fontSize: 12, color: '#093624', marginLeft: 20, top: 30}}>
            {t('Snakebite Details')}
          </Text>
          <View
            style={{
              width: 250,
              height: 250,
              top: 40,
              borderRadius: 10,
              marginLeft: 20,
              backgroundColor: 'white',
              elevation: 5,
            }}>
            <View
              style={{
                top: 10,
                marginLeft: 20,
                flex: 1,
                flexDirection: 'column',
                fontSize: 10,
                gap: 5,
                color: '#A3A3A3',
              }}>
              <Text>{t('Snake ID(if available)')}</Text>
              <Text>{t('bite location(area)')}</Text>
              <Text>{t('affected body part')}</Text>
              <Text>{t('used ASV on the patient')}</Text>
              <Text>{t('rescuer name')}</Text>
              <View
                style={{
                  width: 100,
                  height: 90,
                  top: 10,
                  backgroundColor: '#FFFFFF',
                  borderRadius: 5,
                  elevation: 10,
                }}>
                <Image
                  source={require('../Assets/Gallery.jpg')}
                  style={{
                    width: 40,
                    height: 30,
                    resizeMode: 'contain',
                    position: 'absolute',
                    top: '30%',
                    left: '30%',
                    elevation: 10,
                  }}
                />
              </View>
            </View>
          </View>
          {/* third box profile conatiner */}
          <Text
            style={{fontSize: 12, color: '#093624', marginLeft: 20, top: 70}}>
            {t('Discharge Details')}
          </Text>
          <View
            style={{
              width: 250,
              height: 120,
              top: 90,
              borderRadius: 10,
              marginLeft: 20,
              backgroundColor: 'white',
              elevation: 5,
            }}>
            <View
              style={{
                top: 20,
                marginLeft: 20,
                flex: 1,
                flexDirection: 'column',
                gap: 20,
                color: '#C0C0C0',
              }}>
              <Text>{t('Patient Status ')}</Text>
              <Text>{t('Any Disability Caused')}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={{backgroundColor:'white'}}>
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
          }}
        >
          <TouchableOpacity onPress={() => handleButtonPress('RescuerAuthorizesNamesreen')}>
            <View
              style={{
                height: 30,
                width: 50,
                backgroundColor: 'red',
                top: 10,
                borderRadius: 20,
              }}
            >
              <Text style={{ color: 'white', textAlign: 'center', top: 5 }}>
                Profile
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleButtonPress('RescuerAboutscreen')}>
            <View
              style={{
                height: 30,
                width: 50,
                backgroundColor: 'red',
                top: 10,
                borderRadius: 20,
              }}
            >
              <Text style={{ color: 'white', textAlign: 'center', top: 5 }}>
                About
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleButtonPress('RescuerEditprofilescreen')}
          >
            <View
              style={{
                height: 30,
                width: 50,
                backgroundColor: 'red',
                top: 10,
                borderRadius: 20,
              }}
            >
              <Text style={{ color: 'white', textAlign: 'center', top: 5 }}>
                Edit
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
              
      </View>
    </>
  );
}

export default Rescuerpatientprofilescreen;
