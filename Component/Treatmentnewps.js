import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';

function Treatmentnewpsscreen({ navigation }) {
  const { t } = useTranslation();
  const handleButtonPress = () => {
    navigation.navigate('Loginform2Screen');
  };

  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <View style={{ backgroundColor: 'white' }}>
        <ImageBackground
          source={require('./Assets/background.png')}
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center', height: 300, borderBottomLeftRadius: 40, borderBottomRightRadius: 40 }}
        >
          <Image source={require('./Assets/logo.png')} style={{ resizeMode: 'contain', height: 200, width: 200 }} />
        </ImageBackground>
        <View style={{ width: 300, height: 450, backgroundColor: 'white', marginHorizontal: 30, marginTop: -60, borderRadius: 30, elevation: 10 }}>
          <Text style={{ textAlign: 'center', color: '#093624', fontSize: 20, margin: 30, fontWeight: 'bold' }}>
            Create New Password
          </Text>
          <Text style={{ color: '#A3A3A3', marginHorizontal: 20 }}>Enter New Password</Text>
          <TextInput
            style={{ height: 40, margin: 12, width: 250, borderWidth: 1, paddingLeft: 30, borderRadius: 10, borderColor: '#093624', color: '#093624' }}
            placeholder=""
            placeholderTextColor="#093624"
          />
          <Text style={{ color: '#A3A3A3', marginHorizontal: 20, marginTop: 30 }}>Confirm Password</Text>
          <TextInput
            style={{ height: 40, margin: 12, width: 250, borderWidth: 1, paddingLeft: 30, borderRadius: 10, borderColor: '#093624', color: '#093624' }}
            placeholder=""
            placeholderTextColor="#093624"
          />
          <Text style={{ textAlign: 'center', color: '#093624', fontSize: 12, marginTop: 50 }}>Change Password</Text>
          <TouchableOpacity onPress={handleButtonPress}>
            <View style={{ height: 40, margin: 12, width: 100, borderWidth: 1, borderRadius: 10, backgroundColor: '#093624', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: 'white' }}>Save</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default Treatmentnewpsscreen;
