import React from 'react';
import {View,Text,StyleSheet,Image,Dimensions,ImageBackground,TouchableOpacity,ScrollView,} from 'react-native';
import {useTranslation} from 'react-i18next';

function Profiletab({navigation}) {
  const {t} = useTranslation();
  const handleButtonPress = screen => {
    navigation.navigate(screen);
  };
  return (
    <>
      <ScrollView style={{backgroundColor:'white'}}>
        <View style={{backgroundColor: 'white'}}>
          <ImageBackground source={require('./Assets/background.png')}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              height: 250,
              borderBottomLeftRadius: 40,
              borderBottomRightRadius: 40,
              top: -150,
            }}></ImageBackground>
          <View
            style={{
              width: 300,
              height: 110,
              backgroundColor: 'white',
              left: 30,
              top: -200,
              borderRadius: 20,
              elevation: 10,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <View style={{top: 15, gap: 7}}>
              <Text style={{color: '#093624', fontSize: 16}}>
                Authorizes Name
              </Text>
              <Text style={{color: '#093624', fontSize: 10}}>
                @authorizesname.com
              </Text>
              <Text style={{color: '#093624', fontSize: 10}}>
                Center Location
              </Text>
              <Text style={{color: '#093624', fontSize: 10}}>
                +91 0000000000
              </Text>
            </View>
            <View>
           <Image source={require('./Assets/MaleUser.png')}/>
            </View>
          </View>
          <Text style={{left: 40, top: -190, color: '#093624', fontSize: 12}}>
            Patient Details
          </Text>
          <View
            style={{
              flexDirection: 'row',
              gap: 13,
              left: 25,
              bottom: 20,
              top: -180,
            }}>
            <TouchableOpacity onPress={() => handleButtonPress('patientform')}>
              <View
                style={{
                  height: 110,
                  width: 145,
                  backgroundColor: '#093624',
                  elevation: 10,
                  borderRadius: 15,
                }}>
                <View style={{flexDirection:'column', alignItems:'center',top:10, gap:10}}>
                <Image
                source={require('./Assets/rescuraddnewpatient.png')} style={{}}
            />
             
                <Text style={{ color: 'white', textAlign: 'center', }}>
                Add new patient 
                </Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleButtonPress('Patientlist')}>
              <View
                style={{
                  height: 110,
                  width: 145,
                  backgroundColor: '#093624',
                  elevation: 10,
                  borderRadius: 15,
                }}>
               <View style={{flexDirection:'column', alignItems:'center',top:10, gap:10}}>
                <Image
                source={require('./Assets/rescuanimal.png')} style={{}}
            />
             
                <Text style={{ color: 'white', textAlign: 'center', }}>
                Patient List
                </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <Text style={{left: 40, top: -170, color: '#093624', fontSize: 12}}>
            Anti Snake Venom
          </Text>
          <TouchableOpacity
            onPress={() => handleButtonPress('TreatmentUsedASVscreen')}>
            <View
              style={{
                height: 80,
                width: 310,
                backgroundColor: '#093624',
                left: 25,
                top: -160,
                borderRadius: 15,
              }}>
                <View
                style={{justifyContent: 'space-around', flexDirection: 'row'}}>
               <Image
                source={require('./Assets/usedASV.png')} style={{height:60,width:50,top:10}}
            />
                <View style={{flexDirection: 'column', top: 25}}>
                  <Text style={{color: 'white', fontSize: 12}}>Used ASV</Text>
                  <Text style={{color: 'white', fontSize: 8}}>
                    Last used on 2 March
                  </Text>
                </View>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 35,
                    top: 10,
                    fontWeight: 'bold',
                  }}>
                  2
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleButtonPress('TreatmentAvailableASVscreen')}>
            <View
              style={{
                height: 80,
                width: 310,
                backgroundColor: '#093624',
                left: 25,
                top: -145,
                borderRadius: 15,
                marginBottom:-100
              }}>
          <View
                style={{justifyContent: 'space-around', flexDirection: 'row'}}>
            <Image
                source={require('./Assets/avilabalASV.png')} style={{width:50,top:10,}}
            />
                <View style={{flexDirection: 'column', top: 25}}>
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
                    fontSize: 35,
                    top: 10,
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
          <TouchableOpacity onPress={() => handleButtonPress('Profiletab')}>
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
          <TouchableOpacity onPress={() => handleButtonPress('Abouttabscreen')}>
            <View style={{justifyContent:'center', alignItems:'center',top:6}}>
              <Image source={require('./Assets/about.png')}/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleButtonPress('Editprofilescreen')}>
          <View style={{justifyContent:'center', alignItems:'center', top:10}}>
              <Image source={require('./Assets/edit.png')}/>
            </View>
          </TouchableOpacity>
        </View>
      </View>              
      </View>
    </>
  );
}

export default Profiletab;
