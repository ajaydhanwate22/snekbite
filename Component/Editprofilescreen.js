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
              right: 130,
            }}>
            profile
          </Text>
        </ImageBackground>

        <Image
          source={require('./Assets/MaleUser.png')}
          style={{left:120, width:150, height:150}}
        />
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

    
        <View  style={{flexDirection:'column',gap:25,left:17, top:20,}}>
        <View style={{height:60, width:350, backgroundColor:'#093624', borderRadius:10,}}>
        <Text style={{color:'white',left:40, margin:15,fontSize:20, fontWeight:'bold'}}>Edit Profile </Text>
        </View>
        <TouchableOpacity>
        <View style={{height:60, width:350, backgroundColor:'#093624', borderRadius:10,}}>
        <Text style={{color:'white',left:40, margin:15,fontSize:20, fontWeight:'bold'}}>Setting</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleButtonPress('Abouttabscreen')} >
        <View style={{height:60, width:350, backgroundColor:'#093624', borderRadius:10,}}>
        <Text style={{color:'white',left:40, margin:15,fontSize:20, fontWeight:'bold'}}>About Us</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleButtonPress('Privancypolicyscreen')} >
        <View style={{height:60, width:350, backgroundColor:'#093624', borderRadius:10,}}>
        <Text style={{color:'white',left:40, margin:15,fontSize:20, fontWeight:'bold'}}>Privacy Policy</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleButtonPress('Home')} >
        <View style={{height:60, width:350, backgroundColor:'#093624', borderRadius:10,marginBottom:50}}>
        <Text style={{color:'white',left:40, margin:15,fontSize:20, fontWeight:'bold'}}>Logout</Text>
        </View>
        </TouchableOpacity>
        </View>  
      </ScrollView>
<FooterNavigationcenter navigation={navigation}/>
    </>
  );
}

export default Editprofilescreen;
