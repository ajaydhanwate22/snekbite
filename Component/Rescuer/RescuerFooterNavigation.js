import React from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/FontAwesome5';

const { height } = Dimensions.get('window'); 

const RescuerFooterNavigation = ({ navigation }) => {
  const handleButtonPress = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={{ backgroundColor: 'white' }}>
      <View style={[ styles.bottomBar,{height: height * 0.1,},]}>

        <TouchableOpacity onPress={() => handleButtonPress('RescuerAuthorizesNamesreen')} style={styles.iconContainer}>
          <Icon name="home" size={40} color="white" />
          <Text style={styles.iconText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleButtonPress('RescuerAboutscreen')} style={styles.iconContainer}>
          <Icon2 name="explore" size={40} color="white" />
          <Text style={styles.iconText}>Explore</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleButtonPress('RescuerEditprofilescreen')} style={styles.iconContainer}>
          <Icon3 name="user-circle" size={40} color="white" />
          <Text style={styles.iconText}>Profile</Text>
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

export default RescuerFooterNavigation;
