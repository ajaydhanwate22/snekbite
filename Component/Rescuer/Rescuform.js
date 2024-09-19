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

function Rescuerformscreen({ navigation }) {
  const { t } = useTranslation();
  const handleButtonPress = screen => {
    navigation.navigate(screen);
  };

  return (
    <>
      <ScrollView>
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
              style={{ resizeMode: 'contain', height: 200, width: 200 }}
            />
          </ImageBackground>
          <View
            style={{
              width: 300,
              height: 600,
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
              Rescue Form
            </Text>
            <TextInput
              style={{
                height: 40,
                margin: 12,
                width: 250,
                left: 10,
                borderWidth: 1,
                paddingLeft: 30,
                borderRadius: 10,
                borderColor: '#093624',
                color: '#093624',
              }}
              placeholder="Species"
              placeholderTextColor="#093624"
            />
            <TextInput
              style={{
                height: 40,
                margin: 12,
                width: 250,
                left: 10,
                borderWidth: 1,
                paddingLeft: 30,
                borderRadius: 10,
                borderColor: '#093624',
                color: '#093624',
              }}
              placeholder="Location of rescue"
              placeholderTextColor="#093624"
            />
            <TextInput
              style={{
                height: 40,
                margin: 12,
                width: 250,
                left: 10,
                borderWidth: 1,
                paddingLeft: 30,
                borderRadius: 10,
                borderColor: '#093624',
                color: '#093624',
              }}
              placeholder="Release location"
              placeholderTextColor="#093624"
            />
            <TextInput
              style={{
                height: 40,
                margin: 12,
                width: 250,
                left: 10,
                borderWidth: 1,
                paddingLeft: 30,
                borderRadius: 10,
                borderColor: '#093624',
                color: '#093624',
              }}
              placeholder="Description"
              placeholderTextColor="#093624"
            />
            <TextInput
              style={{
                height: 40,
                margin: 12,
                width: 250,
                left: 10,
                borderWidth: 1,
                paddingLeft: 30,
                borderRadius: 10,
                borderColor: '#093624',
                color: '#093624',
              }}
              placeholder="Size of the species"
              placeholderTextColor="#093624"
            />
            <View
              style={{
                width: 100,
                height: 90,
                top: 10,
                backgroundColor: '#FFFFFF',
                borderRadius: 10,
                elevation: 10,
                marginLeft: 100,
                borderColor: '#093624',
                borderWidth: 1,
              }}
            >
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
            <TouchableOpacity
              onPress={() => handleButtonPress('RescuerAuthorizesNamesreen')}
            >
              <View
                style={{
                  height: 40,
                  margin: 12,
                  top: 20,
                  width: 250,
                  left: 10,
                  borderWidth: 1,
                  borderRadius: 10,
                  backgroundColor: '#093624',
                }}
              >
                <Text
                  style={{ color: 'white', padding: 8, textAlign: 'center' }}
                >
                  Save
                </Text>
              </View>
            </TouchableOpacity>
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

export default Rescuerformscreen;
