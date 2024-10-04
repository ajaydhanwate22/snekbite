import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/FontAwesome5';

const FooterNavigationcenter = ({ navigation }) => {
  const handleButtonPress = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={{ backgroundColor: 'white' }}>

      <View
        style={{
          height: 90,
          // width: 200,
          // left: 10,
          backgroundColor: '#192e26',
          // marginBottom: 2,
        // borderRadius:10,
          flexDirection: 'row',
          borderWidth:1,
          // borderColor:'white',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingLeft:40, 
          paddingRight:40,
          borderTopWidth:1,
          borderTopColor:'white',



        }}
      >
        <TouchableOpacity onPress={() => handleButtonPress('Profiletab')}>
        
        <Icon name="home" size={40} color="white" />
        <Text style={{color:'white', marginBottom:7, fontSize:12, textAlign:"center",fontWeight:400}}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleButtonPress('Abouttabscreen')}>
        <Icon2 name="explore" size={40} color="white" />
        <Text style={{color:'white', marginBottom:7, fontSize:12, textAlign:"center"}}>Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleButtonPress('Editprofilescreen')}>
        <Icon3 name="user-circle" size={40} color="white" />
        <Text style={{color:'white', marginBottom:7, fontSize:12, textAlign:"center"}}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FooterNavigationcenter;
