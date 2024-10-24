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

function RescuePatientFormscren({ navigation }) {
  const { t } = useTranslation();
  const handleButtonPress = screen => {
    navigation.navigate(screen);
  };

  return (
    <>
      <ScrollView style={{backgroundColor:'white'}}>
          <ImageBackground
        source={require('../Assets/background.png')}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              height: 200,
              borderBottomLeftRadius: 40,
              borderBottomRightRadius: 40,
            }}
          >
            <Image
                    source={require('../Assets/logo.png')}
              style={{ resizeMode: 'contain', height: 100, width: 100 }}
            />
          </ImageBackground>
          <View
            style={{
              width: 300,
              height: 1100,
              backgroundColor: 'white',
              left: 30,
              top: -50,
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
              Patient Form
            </Text>
            <Text style={{ left: 30, color: '#093624', fontWeight:'bold' }}>Patient Details</Text>
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
              placeholder="Name "
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
              placeholder="Age"
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
              placeholder="Gender"
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
              placeholder="Contact details of patient"
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
              placeholder="Address"
              placeholderTextColor="#093624"
            />
            <Text style={{ left: 30, color: '#093624', fontWeight:'bold' }}>Snakebite Details</Text>
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
              placeholder="Snake ID(if available)"
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
              placeholder="Bite location(area)"
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
              placeholder="Affected body part"
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
              placeholder="Used ASV on the patient"
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
              placeholder="Rescuer name"
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
                borderColor: '#000000',
                borderWidth:2
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
            <Text style={{ left: 30, color: '#093624', fontWeight:'bold', top:30 }}>Snakebite Details</Text>
            <TextInput
              style={{
                height: 40,
                margin: 12,
                width: 250,
                left: 10,
                top:30,
                borderWidth: 1,
                paddingLeft: 30,
                borderRadius: 10,
                borderColor: '#093624',
                color: '#093624',
              }}
              placeholder="Snake ID(if available)"
              placeholderTextColor="#093624"
            />
                <TextInput
              style={{
                height: 40,
                margin: 12,
                width: 250,
                left: 10,
                top:30,
                borderWidth: 1,
                paddingLeft: 30,
                borderRadius: 10,
                borderColor: '#093624',
                color: '#093624',
              }}
              placeholder="Bite location(area)"
              placeholderTextColor="#093624"
            />
            <TouchableOpacity onPress={() => handleButtonPress('RescuerAuthorizesNamesreen')} >
                 <View style={{height:40, width:150,backgroundColor:'#093624',marginLeft:75, top:40, borderRadius:10,  }}>
                  <Text style={{color:'white', padding:10, textAlign:'center'}}> Save </Text>
                 </View>
                 </TouchableOpacity>
          </View>     
      </ScrollView>
      <RescuerFooterNavigation navigation={navigation} />
    </>
  );
}

export default RescuePatientFormscren;
