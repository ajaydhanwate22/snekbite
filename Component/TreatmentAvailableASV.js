import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';

function TreatmentAvailableASVscreen({ navigation }) {
  const { t } = useTranslation();
  const handleButtonPress = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <>

    <ScrollView style={{ backgroundColor: 'white' }}>
    <View style={{ backgroundColor: 'white' }}>
      <ImageBackground
       source={require('./Assets/background.png')}
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          height: 200,
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
          top: -100,
        }}
      ></ImageBackground>
      <View
        style={{
          width: 300,
          height: 100,
          backgroundColor: '#093624',
          left: 30,
          top: -150,
          borderRadius: 20,
          elevation: 10,
        }}
      >
        <View style={{ flexDirection: 'row' }}>
          <View
            style={{
              height: 50,
              width: 50,
              left: 50,
              top: 20,
              backgroundColor: 'white',
              borderRadius: 50,
            }}
          >
            <Text style={{ textAlign: 'center', top: 10 }}>profile</Text>
          </View>
          <View style={{ textAlign: 'center', left: 80, top: 20, gap: 8 }}>
            <Text style={{ color: 'white', fontSize: 16 }}>
              Authorizes Name
            </Text>
            <Text style={{ color: 'white', fontSize: 10 }}>
              Center name
            </Text>
          </View>
        </View>
      </View>
      <Text
        style={{
          textAlign: 'center',
          top: -120,
          color: '#093624',
          fontWeight: 'bold',
          fontSize: 16,
        }}
      >
        Stock availability of ASV
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          top: -50,
          fontSize: 100,
        }}
      >
        <Text style={{ fontSize: 50, left: 40, color: '#093624' }}>-</Text>
        <Text
          style={{ fontSize: 50, color: '#093624', fontWeight: 'bold' }}
        >
          7
        </Text>
        <Text style={{ fontSize: 50, right: 40, color: '#093624' }}>+</Text>
      </View>
      <Text
        style={{
          textAlign: 'center',
          color: '#093624',
          top: -10,
          fontWeight: 'bold',
        }}
      >
        Last Stocked on
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          top: 20,
        }}
      >
        <View
          style={{
            height: 50,
            width: 70,
            backgroundColor: 'white',
            borderRadius: 10,
            left: 30,
            borderWidth: 1,
            borderColor: '#093624',
          }}
        >
          <Text style={{ padding: 14, left: 10 }}>Day</Text>
        </View>
        <View
          style={{
            height: 50,
            width: 100,
            backgroundColor: 'white',
            borderRadius: 10,
            borderColor: '#093624',
            borderWidth: 1,
          }}
        >
          <Text style={{ padding: 14, left: 10 }}>Month</Text>
        </View>
        <View
          style={{
            height: 50,
            width: 70,
            backgroundColor: 'White',
            borderRadius: 10,
            right: 30,
            borderColor: '#093624',
            borderWidth: 1,
          }}
        >
          <Text style={{ padding: 14, left: 10 }}>Year</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => handleButtonPress('Profiletab')}>
        <View
          style={{
            height: 50,
            width: 150,
            left: 110,
            top: 60,
            backgroundColor: '#093624',
            borderRadius: 10,
          }}
        >
          <Text style={{ textAlign: 'center', color: 'white', margin: 15 }}>
            Save
          </Text>
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

export default TreatmentAvailableASVscreen;
