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
              width: 340,
              height: 680,
              backgroundColor: 'white',
              left: 20,
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
                fontSize: 25,
                margin: 30,
                fontWeight: 'bold',
              }}
            >
              Rescue Form
            </Text>
            <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: '#093624',
              borderRadius: 10,
              left: 10,
              paddingLeft: 10,
              gap: 20,
              margin: 12,
              width: 300,
              height: 50,
            }}
          >
            <Image source={require('../Assets/speciesicon.png')} />
            <TextInput 
              placeholder="Species"
              placeholderTextColor="#093624"
              // value={age}
              // onChangeText={setage}
            />
          </View>
            <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: '#093624',
              borderRadius: 10,
              left: 10,
              paddingLeft: 10,
              gap: 20,
              margin: 12,
              width: 300,
              height: 50,
            }}
          >
            <Image source={require('../Assets/location.png')} />
            <TextInput 
              placeholder="Location of rescue"
              placeholderTextColor="#093624"
              // value={age}
              // onChangeText={setage}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: '#093624',
              borderRadius: 10,
              left: 10,
              paddingLeft: 10,
              gap: 20,
              margin: 12,
              width: 300,
              height: 50,
            }}
          >
            <Image source={require('../Assets/releaselocationicon.png')} />
            <TextInput 
              placeholder="Release location"
              placeholderTextColor="#093624"
              // value={age}
              // onChangeText={setage}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: '#093624',
              borderRadius: 10,
              left: 10,
              paddingLeft: 10,
              gap: 20,
              margin: 12,
              width: 300,
              height: 50,
            }}
          >
            <Image source={require('../Assets/description.png')} />
            <TextInput 
              placeholder="Description"
              placeholderTextColor="#093624"
              // value={age}
              // onChangeText={setage}
            />
          </View>
           <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: '#093624',
              borderRadius: 10,
              left: 10,
              paddingLeft: 10,
              gap: 20,
              margin: 12,
              width: 300,
              height: 50,
            }}
          >
            <Image source={require('../Assets/sizeofspecies.png')} />
            <TextInput 
              placeholder="Size of the species"
              placeholderTextColor="#093624"
              // value={age}
              // onChangeText={setage}
            />
          </View>
            <View
              style={{
                width: 130,
                height: 90,
                top: 20,
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
                  height: 40,
                  resizeMode: 'contain',
                  position: 'absolute',
                  top: '10%',
                  left: '35%',
                  elevation: 10,
                }}
                
              />
                 <Text style={{color:"#093624", textAlign:'center', top:60, }}>{t('photo of the animal')}</Text>     
            </View>
            <TouchableOpacity
              onPress={() => handleButtonPress('RescuerAuthorizesNamesreen')}
            >
              <View
                style={{
                  height: 50,
                  margin: 12,
                  width: 300,
                  left: 10,
                  borderWidth: 1,
                  borderRadius: 10,
                  backgroundColor: '#093624',
                  top: 40,
                }}
              >
                <Text
                  style={{ color: 'white', padding: 15, textAlign: 'center' }}
                >
                  Save
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <RescuerFooterNavigation navigation={navigation} />
    </>
  );
}

export default Rescuerformscreen;
