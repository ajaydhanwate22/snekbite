import React from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/FontAwesome5';
import {useTranslation} from 'react-i18next';

const { height } = Dimensions.get('window'); 

const GuestFooternavigation = ({ navigation }) => {
  const {t} = useTranslation();
  const handleButtonPress = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={{ backgroundColor: 'white' }}>
      <View style={[ styles.bottomBar,{height: height * 0.1,},]}>

        <TouchableOpacity onPress={() => handleButtonPress('Guestprofilescreen')} style={styles.iconContainer}>
          <Icon name="home" size={40} color="white" />
          <Text style={styles.iconText}>{t('Home')}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleButtonPress('GuestAboutscreen')} style={styles.iconContainer}>
          <Icon2 name="explore" size={40} color="white" />
          <Text style={styles.iconText}>{t('Explore')}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleButtonPress('GuestEditscreen')} style={styles.iconContainer}>
          <Icon3 name="user-circle" size={40} color="white" />
          <Text style={styles.iconText}>{t('Profile')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomBar: {
    backgroundColor: '#192e26',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 40,
    paddingRight: 40,
    borderTopWidth: 1,
    borderTopColor: 'white',
    width: '100%',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '500',
  },
});

export default GuestFooternavigation;
