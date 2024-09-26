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

function RescuerAuthorizesNamesreen({ navigation }) {
  const { t } = useTranslation();
  const handleButtonPress = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <>
      <ScrollView style={{backgroundColor:'white',}}>
        <View style={{ backgroundColor: 'white',marginBottom:80 }}>
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
              top: -100,
            }}
          >
            <Image
                source={require('../Assets/logo.png')}
              style={{
                resizeMode: 'contain',
                height: 100,
                width: 100,
                top: 30,
              }}
            />
          </ImageBackground>
          <View
            style={{
              width: 350,
              height: 130,
              backgroundColor: 'white',
              left: 18,
              top: -150,
              borderRadius: 20,
              elevation: 10,
              flexDirection: 'row',
            }}
          >
            <View style={{flexDirection:'row', gap:120, justifyContent:"space-around"}}>
            <View style={{ top: 20, gap: 5,left:40 }}>
              <Text style={{ color: '#093624', fontSize: 16 }}>
                Authorizes Name
              </Text>
              <Text style={{ color: '#093624', fontSize: 10 }}>
                @authorizesname.com
              </Text>
              <Text style={{ color: '#093624', fontSize: 10 }}>
                Center Location
              </Text>
              <Text style={{ color: '#093624', fontSize: 10 }}>
                +91 0000000000
              </Text>
            </View>
            <Image
                source={require('../Assets/MaleUser.png')} style={{height: 120,width: 100,top: 5,
              }}
            />
            </View>
          </View>
          <Text style={{ left: 30, top: -110, color: '#093624', fontSize: 16 }}>
            Rescue Details
          </Text>
          <View
            style={{
              flexDirection: 'row',
              gap: 10,
              left: 18,
              bottom: 20,
              top: -100,
            }}
          >
            <TouchableOpacity
              onPress={() => handleButtonPress('Rescuerformscreen')}
            >
              <View
                style={{
                  height: 140,
                  width: 170,
                  backgroundColor: '#093624',
                  elevation: 10,
                  borderRadius: 20,
                }}
              >
                <View style={{flexDirection:'column', alignItems:'center',top:20, gap:10}}>
                <Image
                source={require('../Assets/snake.png')} style={{}}
            />
             
                <Text style={{ color: 'white', textAlign: 'center', }}>
                  Upload Rescue
                </Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleButtonPress('Rescuanimalscreen')}
            >
              <View
                style={{
                  height: 140,
                  width: 170,
                  backgroundColor: '#093624',
                  elevation: 10,
                  borderRadius: 20,
                }}
              >
                 <View style={{flexDirection:'column', alignItems:'center',top:20, gap:20}}>
                <Image
                source={require('../Assets/rescuanimal.png')} style={{}}
            />
             
                <Text style={{ color: 'white', textAlign: 'center', }}>
                Rescued Animals
                </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <Text style={{ left: 30, top: -80, color: '#093624', fontSize: 16 }}>
            Patient Details
          </Text>
          <View
            style={{
              flexDirection: 'row',
              gap: 10,
              left: 18,
              bottom: 20,
              top: -70,
            }}
          >
            <TouchableOpacity
              onPress={() => handleButtonPress('RescuePatientFormscren')}
            >
              <View
                style={{
                  height: 140,
                  width: 170,
                  backgroundColor: '#093624',
                  elevation: 10,
                  borderRadius: 20,
                }}
              >
                 <View style={{flexDirection:'column', alignItems:'center',top:30, gap:10}}>
                <Image
                source={require('../Assets/rescuraddnewpatient.png')} style={{}}
            />
             
                <Text style={{ color: 'white', textAlign: 'center', }}>
                Add new patient 
                </Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleButtonPress('Rescuerpatientlistscreen')}
            >
              <View
                style={{
                  height: 140,
                  width: 170,
                  backgroundColor: '#093624',
                  elevation: 10,
                  borderRadius: 20,
                }}
              >
            <View style={{flexDirection:'column', alignItems:'center',top:22, gap:10}}>
                <Image
                source={require('../Assets/rescuanimal.png')} style={{}}
            />
             
                <Text style={{ color: 'white', textAlign: 'center', }}>
                Patient List
                </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <Text style={{ left: 30, top: -50, color: '#093624', fontSize: 16 }}>
            Anti Snake Venom
          </Text>
          <TouchableOpacity
            onPress={() => handleButtonPress('UsedASVscreen')}>
            <View
              style={{
                height: 100,
                width: 350,
                backgroundColor: '#093624',
                left: 18,
                top: -40,
                borderRadius: 15,
              }}>
              <View
                style={{justifyContent: 'space-around', flexDirection: 'row'}}>
               <Image
                source={require('../Assets/usedASV.png')} style={{height:50,width:50,top:25}}
            />
                <View style={{flexDirection: 'column', top: 35}}>
                  <Text style={{color: 'white', fontSize: 12}}>Used ASV</Text>
                  <Text style={{color: 'white', fontSize: 8}}>
                    Last used on 2 March
                  </Text>
                </View>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 50,
                    top: 15,
                    fontWeight: 'bold',
                  }}>
                  2
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleButtonPress('StockASVScreen')}>
            <View
              style={{
                height: 100,
                width: 350,
                backgroundColor: '#093624',
                left: 18,
                top: -20,
                borderRadius: 15,
                marginBottom:-80
                
              }}>
              <View
                style={{justifyContent: 'space-around', flexDirection: 'row'}}>
            <Image
                source={require('../Assets/avilabalASV.png')} style={{width:50,top:20}}
            />
                <View style={{flexDirection: 'column', top: 35}}>
                  <Text
                    style={{color: 'white', textAlign: 'center', fontSize: 12}}>
                    Stock Availability of ASV
                  </Text>
                  <Text
                    style={{color: 'white', fontSize: 8, textAlign: 'center'}}>
                    Last stocked on 8 February
                  </Text>
                </View>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 50,
                    top: 15,
                    fontWeight: 'bold',
                  }}>
                  7
                </Text>
              </View>
            </View>
          </TouchableOpacity>
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

export default RescuerAuthorizesNamesreen;
