import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';

function TreatmentAvailableASVscreen({ navigation }) {
  const { t } = useTranslation();
  const handleButtonPress = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <View style={{ backgroundColor: 'white' }}>
        <ImageBackground
          source={require('./Assets/background.png')}
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center', height: 200, borderBottomLeftRadius: 40, borderBottomRightRadius: 40, marginTop: -100 }}
        />
        <View style={{ width: 300, height: 100, backgroundColor: '#093624', marginHorizontal: 30, marginTop: -150, borderRadius: 20, elevation: 10 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ height: 50, width: 50, backgroundColor: 'white', borderRadius: 50, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ textAlign: 'center' }}>profile</Text>
            </View>
            <View style={{ marginLeft: 20 }}>
              <Text style={{ color: 'white', fontSize: 16 }}>Authorizes Name</Text>
              <Text style={{ color: 'white', fontSize: 10 }}>Center name</Text>
            </View>
          </View>
        </View>
        <Text style={{ textAlign: 'center', color: '#093624', fontWeight: 'bold', fontSize: 16, marginTop: -120 }}>
          Stock availability of ASV
        </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: -50 }}>
          <Text style={{ fontSize: 50, color: '#093624' }}>-</Text>
          <Text style={{ fontSize: 50, color: '#093624', fontWeight: 'bold' }}>7</Text>
          <Text style={{ fontSize: 50, color: '#093624' }}>+</Text>
        </View>
        <Text style={{ textAlign: 'center', color: '#093624', fontWeight: 'bold', marginTop: -10 }}>
          Last Stocked on
        </Text>
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
          <View style={{ height: 50, width: 150, backgroundColor: '#093624', borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginHorizontal: 110, marginTop: 60 }}>
            <Text style={{ color: 'white' }}>Save</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default TreatmentAvailableASVscreen;
