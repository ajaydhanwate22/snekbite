import React from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';

function Patientlist({ navigation }) {
  const { t } = useTranslation();
  const handleButtonPress = (screen) => navigation.navigate(screen);

  return (
    <>
      <ScrollView style={{ backgroundColor: 'white' }}>
        <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
          <Image source={require('./Assets/patientlistlogo.jpg')} style={{ width: 90, height: 50, margin: 10 }} />
        </View>
        <Text style={{ textAlign: 'center', color: '#093624', fontWeight: 'bold', fontSize: 16, marginVertical: 15 }}>Patient List</Text>
        <View style={{ height: 35, width: 280, backgroundColor: '#093624', margin: 25, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'white' }}>Search</Text>
        </View>
        <View style={{ gap: 15, marginBottom: 20 }}>
          {[...Array(4)].map((_, index) => (
            <View key={index} style={{ height: 80, width: 250, borderWidth: 2, borderColor: '#000000', borderRadius: 20, marginLeft: 50 }}>
              <View style={{ padding: 10 }}>
                <Text style={{ color: '#000000' }}>Name-</Text>
                <Text style={{ color: '#000000' }}>Snake ID -</Text>
                <Text style={{ color: '#000000' }}>number of used ASV -</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <View style={{ height: 50, width: 310, marginLeft: 25, backgroundColor: '#093624', marginBottom: 8, borderRadius: 15 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', height: '100%' }}>
          {['Profile', 'About', 'Edit'].map((title, index) => (
            <TouchableOpacity key={index} onPress={() => handleButtonPress(`${title.toLowerCase()}tabscreen`)}>
              <View style={{ height: 30, width: 50, backgroundColor: 'red', borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'white' }}>{title}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </>
  );
}

export default Patientlist;
