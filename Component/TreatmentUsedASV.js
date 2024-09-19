import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';

function TreatmentUsedASVscreen({ navigation }) {
  const { t } = useTranslation();
  const handleButtonPress = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <View style={{ backgroundColor: 'white' }}>
        <ImageBackground
          source={require('./Assets/background.png')}
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center', height: 200, borderBottomLeftRadius: 40, borderBottomRightRadius: 40, marginBottom: -100 }}>
        </ImageBackground>
        <View style={{ width: 300, height: 100, backgroundColor: '#093624', borderRadius: 20, elevation: 10, marginHorizontal: 30, marginTop: -150 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>
            <View style={{ height: 50, width: 50, backgroundColor: 'white', borderRadius: 50, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ textAlign: 'center' }}>Profile</Text>
            </View>
            <View style={{ marginLeft: 10 }}>
              <Text style={{ color: 'white', fontSize: 16 }}>Authorizes Name</Text>
              <Text style={{ color: 'white', fontSize: 10 }}>Center name</Text>
            </View>
          </View>
        </View>
        <Text style={{ textAlign: 'center', color: '#093624', fontWeight: 'bold', fontSize: 16, marginTop: -120 }}>Used ASV</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: -50 }}>
          <Text style={{ fontSize: 50, color: '#093624' }}>-</Text>
          <Text style={{ fontSize: 50, color: '#093624', fontWeight: 'bold' }}>2</Text>
          <Text style={{ fontSize: 50, color: '#093624' }}>+</Text>
        </View>
        <Text style={{ textAlign: 'center', color: '#093624', fontWeight: 'bold', marginTop: -10 }}>Last used on</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
          <View style={{ height: 50, width: 70, backgroundColor: 'white', borderRadius: 10, borderWidth: 1, borderColor: '#093624', justifyContent: 'center', alignItems: 'center' }}>
            <Text>Day</Text>
          </View>
          <View style={{ height: 50, width: 100, backgroundColor: 'white', borderRadius: 10, borderWidth: 1, borderColor: '#093624', justifyContent: 'center', alignItems: 'center' }}>
            <Text>Month</Text>
          </View>
          <View style={{ height: 50, width: 70, backgroundColor: 'white', borderRadius: 10, borderWidth: 1, borderColor: '#093624', justifyContent: 'center', alignItems: 'center' }}>
            <Text>Year</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => handleButtonPress('Profiletab')}>
          <View style={{ height: 50, width: 150, backgroundColor: '#093624', borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginVertical: 60, marginHorizontal: 110 }}>
            <Text style={{ color: 'white', fontSize: 16 }}>Save</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default TreatmentUsedASVscreen;
