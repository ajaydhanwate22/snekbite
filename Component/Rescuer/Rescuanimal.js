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
      <View style={{backgroundColor:'white'}}>
      <View
        style={{
          height: 60,
          width: 350,
          left: 17,
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
                top: 15,
                borderRadius: 20,
              }}
            >
              <Text style={{ color: 'white', textAlign: 'center', top: 5 }}>
                Profile
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleButtonPress('RescuerAboutscreen')}>
            <View style={{justifyContent:'center', alignItems:'center',top:10}}>
              <Image source={require('../Assets/about.png')}/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleButtonPress('RescuerEditprofilescreen')}>
          <View style={{justifyContent:'center', alignItems:'center', top:15}}>
              <Image source={require('../Assets/edit.png')}/>
            </View>
          </TouchableOpacity>
        </View>
      </View>              
      </View>
    </>
  );
}

export default Rescuanimalscreen;
