import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
  TextInputComponent,
} from 'react-native';
import {useTranslation} from 'react-i18next';

function Guestprofilescreen({navigation}) {
  const {t} = useTranslation();
  const handleButtonPress = screen => {
    navigation.navigate(screen);
  };

  return (
    <>
    <ScrollView>
      <View style={{backgroundColor: 'white'}}>
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
          }}>
          <Image
            source={require('../Assets/logo.png')}
            style={{resizeMode: 'contain', height: 100, width: 100}}
          />
        </ImageBackground>
        <View
          style={{
            width: 320,
            height: 130,
            backgroundColor: 'white',
            left: 20,
            top: -60,
            borderRadius: 20,
            elevation: 10,
            flexDirection: 'row',
          }}>
          <View style={{left: 20, top: 20}}>
            <Text style={{color: '#093624', fontSize: 16}}>User’s Name</Text>
            <Text style={{color: '#093624', fontSize: 10}}>
              @authorizesname.com
            </Text>
            <Text style={{color: '#093624', fontSize: 10}}>Location</Text>
            <Text style={{color: '#093624', fontSize: 10}}>+91 0000000000</Text>
          </View>
        </View>
        <Text style={{left: 40, top: -30, color: '#093624', fontSize: 16}}>
          rescuer list
        </Text>
        <View style={{flexDirection: 'row', gap: 10, left: 20, bottom: 20}}>
          <View
            style={{
              height: 100,
              width: 100,
              backgroundColor: 'white',
              elevation: 10,
            }}>
            <View style={{padding: 10, top: 20, left: 10}}>
              <Text style={{color: '#093624'}}>Name</Text>
              <Text style={{color: 'BBBBBB'}}>ID</Text>
              <Text style={{color: 'BBBBBB'}}>Location</Text>
            </View>
          </View>
          <View
            style={{
              height: 100,
              width: 100,
              backgroundColor: 'white',
              elevation: 10,
            }}>
            <View style={{padding: 10, top: 20, left: 10}}>
              <Text style={{color: '#093624'}}>Name</Text>
              <Text style={{color: 'BBBBBB'}}>ID</Text>
              <Text style={{color: 'BBBBBB'}}>Location</Text>
            </View>
          </View>
          <View
            style={{
              height: 100,
              width: 100,
              backgroundColor: 'white',
              elevation: 10,
            }}>
            <View style={{padding: 10, top: 20, left: 10}}>
              <Text style={{color: '#093624'}}>Name</Text>
              <Text style={{color: 'BBBBBB'}}>ID</Text>
              <Text style={{color: 'BBBBBB'}}>Location</Text>
            </View>
          </View>
          <View
            style={{
              height: 100,
              width: 100,
              backgroundColor: 'white',
              elevation: 10,
            }}>
            <View style={{padding: 10, top: 20, left: 10}}>
              <Text style={{color: '#093624'}}>Name</Text>
              <Text style={{color: 'BBBBBB'}}>ID</Text>
              <Text style={{color: 'BBBBBB'}}>Location</Text>
            </View>
          </View>
        </View>
        <Text style={{left: 40, top: -10, color: '#093624', fontSize: 16}}>
          Nearby Treatment Centre
        </Text>
        <View
          style={{
            flexDirection: 'row',
            gap: 10,
            left: 20,
            bottom: 40,
            marginTop: 40,
          }}>
          <View
            style={{
              height: 100,
              width: 100,
              backgroundColor: 'white',
              elevation: 10,
            }}>
            <View style={{padding: 10, top: 20, left: 10}}>
              <Text style={{color: '#093624'}}>Name</Text>
              <Text style={{color: 'BBBBBB'}}>ID</Text>
              <Text style={{color: 'BBBBBB'}}>Location</Text>
            </View>
          </View>
          <View
            style={{
              height: 100,
              width: 100,
              backgroundColor: 'white',
              elevation: 10,
            }}>
            <View style={{padding: 10, top: 20, left: 10}}>
              <Text style={{color: '#093624'}}>Name</Text>
              <Text style={{color: 'BBBBBB'}}>ID</Text>
              <Text style={{color: 'BBBBBB'}}>Location</Text>
            </View>
          </View>
          <View
            style={{
              height: 100,
              width: 100,
              backgroundColor: 'white',
              elevation: 10,
            }}>
            <View style={{padding: 10, top: 20, left: 10}}>
              <Text style={{color: '#093624'}}>Name</Text>
              <Text style={{color: 'BBBBBB'}}>ID</Text>
              <Text style={{color: 'BBBBBB'}}>Location</Text>
            </View>
          </View>
          <View
            style={{
              height: 100,
              width: 100,
              backgroundColor: 'white',
              elevation: 10,
            }}>
            <View style={{padding: 10, top: 20, left: 10}}>
              <Text style={{color: '#093624'}}>Name</Text>
              <Text style={{color: 'BBBBBB'}}>ID</Text>
              <Text style={{color: 'BBBBBB'}}>Location</Text>
            </View>
          </View>
        </View>
        <Text style={{left: 40, top: -30, color: '#093624', fontSize: 16}}>
          Upload Photos
        </Text>
        <View style={{flexDirection: 'row', gap: 15, margBottom: 40, left: 20}}>
          <View
            style={{
              height: 80,
              width: 150,
              bottom: 10,
              borderRadius: 10,
              backgroundColor: '#D9D9D9',
            }}></View>
          <View
            style={{
              height: 80,
              width: 150,
              bottom: 10,
              borderRadius: 10,
              backgroundColor: '#D9D9D9',
            }}></View>
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
          }}>
          <TouchableOpacity onPress={() => handleButtonPress('Guestprofilescreen')} >
            <View
              style={{
                height: 30,
                width: 50,
                backgroundColor: 'red',
                top: 10,
                borderRadius: 20,
              }}>
              <Text style={{color: 'white', textAlign: 'center', top: 5}}>
                Profile
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleButtonPress('GuestAboutscreen')}>
            <View
              style={{
                height: 30,
                width: 50,
                backgroundColor: 'red',
                top: 10,
                borderRadius: 20,
              }}>
              <Text style={{color: 'white', textAlign: 'center', top: 5}}>
                About
              </Text>
            </View>
          </TouchableOpacity>
         <TouchableOpacity onPress={() => handleButtonPress('GuestEditscreen')}>
            <View
              style={{
                height: 30,
                width: 50,
                backgroundColor: 'red',
                top: 10,
                borderRadius: 20,
              }}>
              <Text style={{color: 'white', textAlign: 'center', top: 5}}>
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

export default Guestprofilescreen;
