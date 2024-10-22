import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import RescuerFooterNavigation from './RescuerFooterNavigation';

function Rescuerpatientlistscreen({ navigation }) {
  const { t } = useTranslation();
  const handleButtonPress = screen => {
    navigation.navigate(screen);
  };

  return (
    <>
      <ScrollView style={{ backgroundColor: 'white' }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
          }}
        >
          <Image
                source={require('../Assets/logo.png')}
            style={{ width: 90, height: 50, top: 15, margin: 10 }}
          />
        </View>
        <Text
          style={{
            textAlign: 'center',
            justifyContent: 'center',
            top: 15,
            color: '#093624',
            fontWeight: 'bold',
            fontSize: 16,
          }}
        >
          Patient List
        </Text>
        <View
          style={{
            height: 35,
            width: 280,
            backgroundColor: '#093624',
            margin: 25,
            borderRadius: 20,
            top: 10,
          }}
        >
          <Text style={{ color: 'white', padding: 5, left: 10 }}>Search</Text>
        </View>
        <View style={{ gap: 25,top:30}}>
          <View
            style={{
              height: 80,
              width: 250,
              borderWidth: 2,
              borderColor: '#000000',
              left: 50,
              borderRadius: 20,
            }}
          >
            <View style={{ padding: 10 }}>
              <Text style={{ color: '#000000' }}>Name-</Text>
              <Text style={{ color: '#000000' }}>Snake ID -</Text>
              <Text style={{ color: '#000000' }}>number of used ASV -</Text>
            </View>
          </View>
          <View
            style={{
              height: 80,
              width: 250,
              borderWidth: 2,
              borderColor: '#000000',
              left: 50,
              borderRadius: 20,
            }}
          >
            <View style={{ padding: 10 }}>
              <Text style={{ color: '#000000' }}>Name-</Text>
              <Text style={{ color: '#000000' }}>Snake ID -</Text>
              <Text style={{ color: '#000000' }}>number of used ASV -</Text>
            </View>
          </View>
          <View
            style={{
              height: 80,
              width: 250,
              borderWidth: 2,
              borderColor: '#000000',
              left: 50,
              borderRadius: 20,
            }}
          >
            <View style={{ padding: 10 }}>
              <Text style={{ color: '#000000' }}>Name-</Text>
              <Text style={{ color: '#000000' }}>Snake ID -</Text>
              <Text style={{ color: '#000000' }}>number of used ASV -</Text>
            </View>
          </View>
          <View
            style={{
              height: 80,
              width: 250,
              borderWidth: 2,
              borderColor: '#000000',
              left: 50,
              borderRadius: 20,
            }}
          >
            <View style={{ padding: 10 }}>
              <Text style={{ color: '#000000' }}>Name-</Text>
              <Text style={{ color: '#000000' }}>Snake ID -</Text>
              <Text style={{ color: '#000000' }}>number of used ASV -</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <RescuerFooterNavigation navigation={navigation} />
    </>
  );
}

export default Rescuerpatientlistscreen;
