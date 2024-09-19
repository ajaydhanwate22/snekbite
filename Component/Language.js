import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  Modal,
} from 'react-native';
import {useTranslation} from 'react-i18next';

function LanguageScreen({navigation}) {
  const {t, i18n} = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);

  const handleButtonPress = () => {
    navigation.navigate('Login');
  };

  const handleLanguageSelect = language => {
    i18n.changeLanguage(language.toLowerCase());
    setSelectedLanguage(language);
    setModalVisible(false);
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
    
      <View style={{flex: 1, justifyContent: 'center', top: -50}}>
        <ImageBackground
         source={require('./Assets/background.png')}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
            height: '100%',
          }}>
         
          <Image source={require('./Assets/logo.png')}
            style={{
              width: 180,
              height: 180,
              resizeMode: 'contain',
              top: 30,
            }}
          />
        </ImageBackground>
      </View>


      <View
        style={{
          width: 300,
          backgroundColor: 'white',
          height: 300,
          left: 30,
          top: -90,
          elevation: 10,
          borderRadius: 30,
        }}>
        <Text
          style={{
            textAlign: 'center',
            top: 30,
            color: '#093624',
            fontSize: 16,
          }}>
          {t('chooseLanguage')}
        </Text>


        <TouchableOpacity
          style={{
            borderColor: 'green',
            borderWidth: 2,
            marginHorizontal: 30,
            marginTop: 50,
            borderRadius: 10,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => setModalVisible(true)}>
          <Text style={{color: '#4040409E'}}>
            {selectedLanguage ? selectedLanguage : t('selectLanguage')}
          </Text>
        </TouchableOpacity>


        <Modal
          transparent={true}
          visible={isModalVisible}
          animationType="slide">
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }}>
            <View
              style={{
                width: 300,
                backgroundColor: 'white',
                borderRadius: 10,
                padding: 20,
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 18, marginBottom: 20}}>
                {t('selectLanguage')}
              </Text>

              <TouchableOpacity
                style={{
                  backgroundColor: '#093624',
                  padding: 10,
                  borderRadius: 5,
                  width: '100%',
                  marginVertical: 10,
                  alignItems: 'center',
                }}
                onPress={() => handleLanguageSelect('english')}>
                <Text style={{color: 'white', fontSize: 16}}>
                  {t('english')}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  backgroundColor: '#093624',
                  padding: 10,
                  borderRadius: 5,
                  width: '100%',
                  marginVertical: 10,
                  alignItems: 'center',
                }}
                onPress={() => handleLanguageSelect('marathi')}>
                <Text style={{color: 'white', fontSize: 16}}>
                  {t('marathi')}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  backgroundColor: '#093624',
                  padding: 10,
                  borderRadius: 5,
                  width: '100%',
                  marginVertical: 10,
                  alignItems: 'center',
                }}
                onPress={() => handleLanguageSelect('hindi')}>
                <Text style={{color: 'white', fontSize: 16}}>{t('hindi')}</Text>
              </TouchableOpacity>


              <TouchableOpacity
                style={{marginTop: 10}}
                onPress={() => setModalVisible(false)}>
                <Text style={{color: '#093624', fontSize: 14}}>
                  {t('close')}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>


        <TouchableOpacity
          style={{
            backgroundColor: '#093624',
            marginTop: 100,
            left: 90,
            padding: 8,
            borderRadius: 10,
            width: '40%',
            alignItems: 'center',
          }}
          onPress={handleButtonPress}>
          <Text style={{color: 'white', fontSize: 16}}>{t('continue')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default LanguageScreen;
