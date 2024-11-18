import React from 'react'; import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet, Image, ScrollView } from 'react-native'; import { useTranslation } from 'react-i18next';
import GuestFooternavigation from './GuestFooternavigation';
import AntDesign from 'react-native-vector-icons/AntDesign';


function GuestAboutscreen({ navigation }) {
   const { t } = useTranslation();
    const handleButtonPress = screen => {
       navigation.navigate(screen); 
      };

return ( <>
  <ScrollView>
    <View style={{ backgroundColor: 'white' }}>
    <ImageBackground
          source={require('../Assets/background.png')} 
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            height: 180,
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
          }}>
          <TouchableOpacity
            style={{ position: 'absolute', top: 20, left: 15 }}
            onPress={() => navigation.goBack()}>
            <AntDesign name="leftcircle" size={25} color="white" />
          </TouchableOpacity>
          
          <Image 
            source={require('../Assets/logo.png')}
            style={{ resizeMode: 'contain', height: 100, width: 100, top: -20 }} 
          />
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
  <GuestFooternavigation navigation={navigation} />
</> ); }

export default GuestAboutscreen;
