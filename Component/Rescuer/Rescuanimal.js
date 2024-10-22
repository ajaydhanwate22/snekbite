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
import RescuerFooterNavigation from './RescuerFooterNavigation';

function Rescuanimalscreen({ navigation }) {
  const { t } = useTranslation();
  const handleButtonPress = (screen) => {
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
              height: 100,
              borderBottomLeftRadius: 40,
              borderBottomRightRadius: 40,
            }}
          ></ImageBackground>
          <View
            style={{
              width: 300,
              height: 900,
              backgroundColor: 'white',
              left: 30,
              top: -60,
              borderRadius: 30,
              marginBottom: -30,
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
              Rescued Animals
            </Text>
            <View style={{ gap: 20 }}>
              <View
                style={{
                  width: 270,
                  height: 70,
                  left: 15,
                  top: 10,
                  backgroundColor: '#FFFFFF',
                  borderRadius: 10,
                  borderColor: '#093624',
                  borderWidth: 1,
                }}
              >
                <View style={{ left: 50, top: 10, color: '#093624' }}>
                  <Text style={{color: '#093624', fontWeight:'bold'}}>name</Text>
                  <Text style={{color: '#093624', fontWeight:'bold'}}>snake ID</Text>
                </View>
              </View>
              <View
                style={{
                  width: 270,
                  height: 70,
                  left: 15,
                  top: 10,
                  backgroundColor: '#FFFFFF',
                  borderRadius: 10,
                  borderColor: '#093624',
                  borderWidth: 1,
                }}
              >
                <View style={{ left: 50, top: 10, color: '#093624' }}>
                  <Text style={{color: '#093624', fontWeight:'bold'}}>name</Text>
                  <Text style={{color: '#093624', fontWeight:'bold'}}>snake ID</Text>
                </View>
              </View>
              <View
                style={{
                  width: 270,
                  height: 70,
                  left: 15,
                  top: 10,
                  backgroundColor: '#FFFFFF',
                  borderRadius: 10,
                  borderColor: '#093624',
                  borderWidth: 1,
                }}
              >
                <View style={{ left: 50, top: 10, color: '#093624' }}>
                  <Text style={{color: '#093624', fontWeight:'bold'}}>name</Text>
                  <Text style={{color: '#093624', fontWeight:'bold'}}>snake ID</Text>
                </View>
              </View>
              <View
                style={{
                  width: 270,
                  height: 70,
                  left: 15,
                  top: 10,
                  backgroundColor: '#FFFFFF',
                  borderRadius: 10,
                  borderColor: '#093624',
                  borderWidth: 1,
                }}
              >
                <View style={{ left: 50, top: 10,  }}>
                  <Text style={{color: '#093624', fontWeight:'bold'}}>name</Text>
                  <Text style={{color: '#093624', fontWeight:'bold'}}>snake ID</Text>
                </View>
              </View>
              <View
                style={{
                  width: 270,
                  height: 70,
                  left: 15,
                  top: 10,
                  backgroundColor: '#FFFFFF',
                  borderRadius: 10,
                  borderColor: '#093624',
                  borderWidth: 1,
                }}
              >
                <View style={{ left: 50, top: 10, color: '#093624' }}>
                  <Text style={{color: '#093624', fontWeight:'bold'}}>name</Text>
                  <Text style={{color: '#093624', fontWeight:'bold'}}>snake ID</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <RescuerFooterNavigation navigation={navigation} />
    </>
  );
}

export default Rescuanimalscreen;
