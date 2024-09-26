import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Image,
} from 'react-native';
import {useTranslation} from 'react-i18next';

function GuestLoginScreen({navigation}) {
  const {t} = useTranslation();
  const handleButtonPress = screen => {
    navigation.navigate(screen);
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
    {/* Background Image */}
    <View style={{flex: 1, justifyContent: 'center', top: -50}}>
      <ImageBackground
           source={require('../Assets/background.png')}
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
          height: '100%',
        }}>
        {/* Logo in the center of the background */}
        <Image
      source={require('../Assets/logo.png')}
          style={{
            width: 180,
            height: 180,
            resizeMode: 'contain',
            top: 30,
          }}
        />
      </ImageBackground>
    </View>

    {/* Language Selection Container */}
    <View style={{width: 320,backgroundColor: 'white', height: 300,left: 30,top: -90,elevation: 10,borderRadius: 30,}}>
      <View style={{gap:15,top:100}}>
        <TouchableOpacity onPress={() => handleButtonPress('Guestsignupscreen')} >
          <View style={{height:50, width:250, backgroundColor:'#093624', borderRadius:10, left:35}}>
            <Text style={{justifyContent:'center',padding:15, color:'white',  textAlign:"center"}}>{t('Sign Up')}</Text>
          </View>             
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleButtonPress('GuestLoginform')}  >
          <View style={{height:50, width:250, backgroundColor:'#093624', borderRadius:10, left:35}}>
            <Text style={{justifyContent:'center',padding:15, color:'white',  textAlign:"center"}}>{t('Sign In')}</Text>
          </View>                   
        </TouchableOpacity>            
      </View>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    height: '100%', // Full height for the upper section
  },
  logo: {
    width: 200, // Adjust the size as needed
    height: 200, // Adjust the size as needed
    resizeMode: 'contain',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
    paddingHorizontal: 20,
    backgroundColor: 'white', // White background color
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,

    paddingBottom: 30, // Add some bottom padding for better appearance
  },
  button: {
    backgroundColor: '#093624', // Dark green background color
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 20,
    width: 200, // Fixed width for the button
    alignItems: 'center',
    height: 50,
  },
  buttonText: {
    color: '#fff', // White text color
    fontSize: 16,
  },
});

export default GuestLoginScreen;
