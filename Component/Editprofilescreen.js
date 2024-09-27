import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import FooterNavigationcenter from './FooterNavigationcenter';

function Editprofilescreen({navigation}) {
  const {t} = useTranslation();
  const handleButtonPress = screen => {
    navigation.navigate(screen);
  };

  return (
    <>
        <ScrollView style={{backgroundColor: 'white'}}>
        <ImageBackground
           source={require('./Assets/background.png')}
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            height: 100,
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
          }}>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 20,
              right: 100,
            }}>
            profile
          </Text>
        </ImageBackground>
        <View
          style={{
            height: 100,
            width: 100,
            backgroundColor: '#093624',
            justifyContent: 'center',
            alignItems: 'center',
            left: 130,
            top: 30,
            borderRadius: 50,
          }}>
          <Text style={{color: 'white'}}>Profile photo</Text>
        </View>
        <View style={{top:35}}>
        <Text
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            color: '#093624',
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          Name
        </Text>
        </View>
        <View  style={{flexDirection:'column',gap:25,left:25, top:90,}}>
           <TouchableOpacity onPress={() => handleButtonPress('Patientprofile')} >
        <View style={{height:50, width:310, backgroundColor:'#093624', borderRadius:10,}}>
        <Text style={{color:'white',left:60, margin:15,}}>Edit Profile </Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={{height:50, width:310, backgroundColor:'#093624', borderRadius:10,}}>
        <Text style={{color:'white',left:60, margin:15,}}>Setting</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleButtonPress('Abouttabscreen')} >
        <View style={{height:50, width:310, backgroundColor:'#093624', borderRadius:10,}}>
        <Text style={{color:'white',left:60, margin:15,}}>About Us</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleButtonPress('Privancypolicyscreen')} >
        <View style={{height:50, width:310, backgroundColor:'#093624', borderRadius:10,}}>
        <Text style={{color:'white',left:60, margin:15,}}>Privacy Policy</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleButtonPress('Home')} >
        <View style={{height:50, width:310, backgroundColor:'#093624', borderRadius:10,}}>
        <Text style={{color:'white',left:60, margin:15,}}>Logout</Text>
        </View>
        </TouchableOpacity>
        </View>  
      </ScrollView>
<FooterNavigationcenter navigation={navigation}/>
    </>
  );
}

export default Editprofilescreen;
