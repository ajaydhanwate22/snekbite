import React from 'react'; import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet, Image, ScrollView } from 'react-native'; import { useTranslation } from 'react-i18next';

function GuestAboutscreen({ navigation }) {
   const { t } = useTranslation();
    const handleButtonPress = screen => {
       navigation.navigate(screen); 
      };

return ( <>
  <ScrollView>
    <View style={{ backgroundColor: 'white' }}>
      <ImageBackground source={require('../Assets/background.png')} style={{ flex: 1, alignItems: 'center', justifyContent: 'center', overflow: 'hidden', height: 200, borderBottomLeftRadius: 40, borderBottomRightRadius: 40 }}>
        <Image source={require('../Assets/logo.png')} style={{ resizeMode: 'contain', height: 100, width: 150 }} />
        <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 20, top: 15 }}>About us</Text>
      </ImageBackground>
      <View>
        <Text style={{ textAlign: 'center', justifyContent: 'center', marginTop: 20, color: '#093624', fontWeight: 'bold', fontSize: 20 }}>World for Nature</Text>
        <Text style={{ textAlign: 'center', color: '#093624', fontSize: 12, margin: 10 }}>Addressing the Snakebite Crisis in India World For Nature is committed to tackling the critical issue of snakebite envenoming in India. We recognize the devastating impact it has on communities, causing fatalities and disabilities.</Text>
        <Text style={{ color: '#093624', margin: 10, left: 20, fontWeight: 'bold', fontSize: 20 }}>Mission</Text>
        <Text style={{ textAlign: 'left', fontSize: 12, color: '#093624', left: 12, padding: 10 }}>5 million snakebites occur globally each year, with 81,000-138,000 deaths.</Text>
        <Text style={{ textAlign: 'left', fontSize: 12, color: '#093624', left: 12, padding: 10 }}>India faces a significant burden, with an estimated 56,000 annual deaths.</Text>
        <Text style={{ textAlign: 'left', fontSize: 12, color: '#093624', left: 12, padding: 10 }}>WFN works to raise awareness and improve access to effective treatment, aiming to save lives and prevent disabilities.</Text>
        <Text style={{ color: '#093624', margin: 10, left: 20, fontWeight: 'bold', fontSize: 20 }}>Team</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 50 }}>
          <View style={{ height: 100, width: 100, backgroundColor: '#093624', justifyContent: 'center', alignItems: 'center', top: 30, borderRadius: 50, left: 10 }}>
            <Text style={{ color: 'white' }}>Profile photo</Text>
          </View>
          <View style={{ height: 100, width: 100, backgroundColor: '#093624', justifyContent: 'center', alignItems: 'center', top: 30, borderRadius: 50 }}>
            <Text style={{ color: 'white' }}>Profile photo</Text>
          </View>
          <View style={{ height: 100, width: 100, backgroundColor: '#093624', justifyContent: 'center', alignItems: 'center', top: 30, right: 10, borderRadius: 50 }}>
            <Text style={{ color: 'white' }}>Profile photo</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 50, top: -20 }}>
          <View style={{ height: 100, width: 100, backgroundColor: '#093624', justifyContent: 'center', alignItems: 'center', top: 30, borderRadius: 50, left: 30 }}>
            <Text style={{ color: 'white' }}>Profile photo</Text>
          </View>
          <View style={{ height: 100, width: 100, backgroundColor: '#093624', justifyContent: 'center', alignItems: 'center', top: 30, right: 40, borderRadius: 50 }}>
            <Text style={{ color: 'white' }}>Profile photo</Text>
          </View>
        </View>
      </View>
    </View>
  </ScrollView>
  <View style={{ backgroundColor: 'white' }}>
    <View style={{ height: 50, width: 310, left: 25, backgroundColor: '#093624', marginBottom: 8, borderRadius: 15 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <TouchableOpacity onPress={() => handleButtonPress('Guestprofilescreen')}>
          <View style={{ height: 30, width: 50, backgroundColor: 'red', top: 10, borderRadius: 20 }}>
            <Text style={{ color: 'white', textAlign: 'center', top: 5 }}>Profile</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleButtonPress('GuestAboutscreen')}>
        <View style={{justifyContent:'center', alignItems:'center',top:5}}>
              <Image source={require('../Assets/about.png')}/>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleButtonPress('GuestEditscreen')}>
        <View style={{justifyContent:'center', alignItems:'center', top:10}}>
              <Image source={require('../Assets/edit.png')}/>
            </View>
        </TouchableOpacity>
      </View>
    </View>
  </View>
</> ); }

export default GuestAboutscreen;
