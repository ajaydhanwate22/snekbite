import React, {useState} from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image, Modal, StyleSheet } from 'react-native';
import {useTranslation} from 'react-i18next';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'; 
import AntDesign from 'react-native-vector-icons/AntDesign';

function GuestLanguage({navigation}) {
  const {t, i18n} = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);

  const handleButtonPress = () => {
    navigation.navigate('GuestLogin');
  };

  const handleLanguageSelect = language => {
    i18n.changeLanguage(language.toLowerCase());
    setSelectedLanguage(language);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
    <View style={styles.upperContainer}>
      <ImageBackground
        source={require('../Assets/background.png')}
        style={styles.backgroundImage}>
   
        <Image source={require('../Assets/logo.png')} style={styles.logo} />
      </ImageBackground>
    </View>
    <TouchableOpacity
        style={{position: 'absolute', top: 20, left: 15}}
        onPress={() => navigation.goBack()}>
        <AntDesign name="leftcircle" size={25} color="white" />
      </TouchableOpacity>
    <View style={{paddingHorizontal:20}}>
    <View style={styles.languageContainer}>
      <Text style={styles.languageText}>{t('chooseLanguage')}</Text>

      <TouchableOpacity
        style={styles.languageButton}
        onPress={() => setModalVisible(true)}>
        <View style={{flexDirection: 'row', justifyContent:"space-around", gap:50}}>
        <FontAwesome5 name="globe-asia" size={20} color="#093624" />
          <Text>
            {selectedLanguage ? selectedLanguage : t('selectLanguage')}
          </Text>
          <FontAwesome5 name="angle-down" size={20} color="#093624" />
          </View>
      </TouchableOpacity>
      <Modal
        transparent={true}
        visible={isModalVisible}
        animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{t('selectLanguage')}</Text>

            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => handleLanguageSelect('English')}>
              <Text style={styles.modalButtonText}>{t('english')}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => handleLanguageSelect('Marathi')}>
              <Text style={styles.modalButtonText}>{t('marathi')}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => handleLanguageSelect('Hindi')}>
              <Text style={styles.modalButtonText}>{t('hindi')}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButtonText}>{t('close')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={styles.continueButton}
        onPress={handleButtonPress}>
        <Text style={styles.continueText}>{t('continue')}</Text>
      </TouchableOpacity>
    </View>    
    </View>
  </View>
);
}

const styles = StyleSheet.create({
container: { flex: 1, backgroundColor: 'white' },
upperContainer: { flex: 1, justifyContent: 'center', top: -50 },
backgroundImage: { flex: 1, justifyContent: 'center', alignItems: 'center', overflow: 'hidden', borderBottomLeftRadius: 40, borderBottomRightRadius: 40, height: '100%' },
logo: { width: 150, height: 150, resizeMode: 'contain', top: 30 },  
languageContainer: { width: '100%', backgroundColor: 'white', height: 360, top: -100, elevation: 10, borderRadius: 30 },
languageText: { textAlign: 'center', top: 30, color: '#093624', fontSize: 24, fontWeight: '700', lineHeight: 29.07 },  
languageButton: { borderColor: '#093624', borderWidth: 1, marginHorizontal: 30, marginTop: 70, borderRadius: 10, height: 50, justifyContent: 'center', alignItems: 'center' },
languageButtonText: { color: '#404040' },  
modalContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' },
modalContent: { width: '80%', backgroundColor: 'white', borderRadius: 10, padding: 30, alignItems: 'center' },
modalTitle: { fontSize: 18, marginBottom: 20 },
modalButton: { backgroundColor: '#093624', padding: 15, borderRadius: 5, width: '100%', marginVertical: 10, alignItems: 'center' },
modalButtonText: { color: 'white', fontSize: 16 },
closeButton: { marginTop: 10 },
closeButtonText: { color: '#093624', fontSize: 14, marginHorizontal: 100 },
continueButton: { backgroundColor: '#093624', marginTop: 100, left: 100, padding: 12, borderRadius: 10, width: '40%', height: '15%', alignItems: 'center' },
continueText: { color: 'white', fontSize: 16 }
});

export default GuestLanguage;
