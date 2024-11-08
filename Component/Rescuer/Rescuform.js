import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ImageBackground, Image, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import AntDesign from 'react-native-vector-icons/AntDesign'; // Already imported AntDesign

function Rescuerformscreen({ navigation }) {
  const { t } = useTranslation();
  const [speciesname, setspeciesname] = useState('');
  const [snakeID, setsnakeID] = useState('');
  const [rescuLocation, setrescuLocation] = useState('');
  const [speciesSize, setspeciesSize] = useState('');
  const [description, setdescription] = useState('');
  const [image, setImage] = useState(null);
  const currentDate = new Date().toISOString().split('T')[0];

  const handleImagePick = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        setImage(response.assets[0]);
      }
    });
  };

  const handleButtonPress = async () => {
    if (!speciesname || !snakeID || !rescuLocation || !speciesSize || !description) {
      Alert.alert('Error', 'Please fill all fields.');
      return;
    }

    const formData = new FormData();
    formData.append('SpeciesName', speciesname);
    formData.append('SnakeID', snakeID);
    formData.append('RescuLocation', rescuLocation);
    formData.append('SpeciesSize', speciesSize);
    formData.append('Description', description);
    formData.append('Date', currentDate);

    if (image) {
      const localUri = image.uri;
      const filename = localUri.split('/').pop();
      const type = image.type;

      formData.append('photo', {
        uri: localUri,
        name: filename,
        type: type,
      });
    }

    try {
      const response = await axios.post('https://realrate.store/ajayApi/Rescuedata.php', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const responseJson = response.data;
      if (responseJson.message === 'Registration successfully') {
        Alert.alert('Success', 'Registration successful!', [
          {
            text: 'OK',
            onPress: () => navigation.navigate('RescuerAuthorizesNamesreen'),
          },
        ]);
      } else {
        Alert.alert('Error', 'Data not saved: ' + responseJson.message);
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'An error occurred while submitting the data');
    }
  };

  return (
    <>
      <ScrollView style={{ backgroundColor: 'white' }}>
        <ImageBackground
          source={require('../Assets/background.png')}
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            height: 180,
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
          }}
        >
          <TouchableOpacity
            style={{ position: 'absolute', top: 20, left: 15 }}
            onPress={() => navigation.goBack()}
          >
            <AntDesign name="leftcircle" size={25} color="white" />
          </TouchableOpacity>

          <Image
            source={require('../Assets/logo.png')}
            style={{ resizeMode: 'contain', height: 100, width: 100, top: -20 }}
          />
        </ImageBackground>

        <View style={{ paddingHorizontal: 20 }}>
          <View
            style={{
              width: '100%',
              height: 700,
              backgroundColor: 'white',
              top: -50,
              borderRadius: 30,
              marginBottom: -30,
              elevation: 5,
              padding: 20,
              gap: 20,
            }}
          >
            <Text
              style={{
                textAlign: 'center',
                color: '#093624',
                fontSize: 25,
                fontWeight: 'bold',
                margin: 20,
              }}
            >
              Rescue Form
            </Text>

            {/* Species Name Input */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderWidth: 1,
                borderColor: '#093624',
                borderRadius: 10,
                paddingLeft: 10,
                width: '100%',
                height: 55,
              }}
            >
              <AntDesign name="book" size={20} color="#093624" style={{ marginRight: 10 }} />
              <TextInput
                style={{
                  flex: 1,
                  height: '100%',
                  paddingLeft: 5,
                  color: '#093624',
                }}
                placeholder="Species Name"
                placeholderTextColor="#093624"
                value={speciesname}
                onChangeText={setspeciesname}
              />
            </View>

            {/* Snake ID Input */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderWidth: 1,
                borderColor: '#093624',
                borderRadius: 10,
                paddingLeft: 10,
                width: '100%',
                height: 55,
              }}
            >
              <AntDesign name="idcard" size={20} color="#093624" style={{ marginRight: 10 }} />
              <TextInput
                style={{
                  flex: 1,
                  height: '100%',
                  paddingLeft: 5,
                  color: '#093624',
                }}
                placeholder="Snake ID"
                placeholderTextColor="#093624"
                value={snakeID}
                onChangeText={(text) => /^\d*$/.test(text) && setsnakeID(text)}
                keyboardType="numeric"
              />
            </View>

            {/* Location of Rescue Input */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderWidth: 1,
                borderColor: '#093624',
                borderRadius: 10,
                paddingLeft: 10,
                width: '100%',
                height: 55,
              }}
            >
              <AntDesign name="enviroment" size={20} color="#093624" style={{ marginRight: 10 }} />
              <TextInput
                style={{
                  flex: 1,
                  height: '100%',
                  paddingLeft: 5,
                  color: '#093624',
                }}
                placeholder="Location of Rescue"
                placeholderTextColor="#093624"
                value={rescuLocation}
                onChangeText={setrescuLocation}
              />
            </View>

            {/* Species Size Input */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderWidth: 1,
                borderColor: '#093624',
                borderRadius: 10,
                paddingLeft: 10,
                width: '100%',
                height: 55,
              }}
            >
              <AntDesign name="appstore-o" size={20} color="#093624" style={{ marginRight: 10 }} />
              <TextInput
                style={{
                  flex: 1,
                  height: '100%',
                  paddingLeft: 5,
                  color: '#093624',
                }}
                placeholder="Species Size"
                placeholderTextColor="#093624"
                value={speciesSize}
                onChangeText={setspeciesSize}
              />
            </View>

            {/* Description Input */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderWidth: 1,
                borderColor: '#093624',
                borderRadius: 10,
                paddingLeft: 10,
                width: '100%',
                height: 55,
              }}
            >
              <AntDesign name="filetext1" size={20} color="#093624" style={{ marginRight: 10 }} />
              <TextInput
                style={{
                  flex: 1,
                  height: '100%',
                  paddingLeft: 5,
                  color: '#093624',
                }}
                placeholder="Description"
                placeholderTextColor="#093624"
                value={description}
                onChangeText={setdescription}
              />
            </View>

            {/* Image Picker */}
            <TouchableOpacity onPress={handleImagePick}>
              <View
                style={{
                  width: '35%',
                  height: 90,
                  top: 10,
                  backgroundColor: '#FFFFFF',
                  borderRadius: 10,
                  elevation: 10,
                  borderColor: '#000000',
                  borderWidth: 1,
                  marginBottom: 20,
                  alignSelf: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {image ? (
                  <Image
                    source={{ uri: image.uri }}
                    style={{
                      width: '100%',
                      height: '100%',
                      resizeMode: 'contain',
                      borderRadius: 10,
                    }}
                  />
                ) : (
                  <AntDesign name="camera" size={30} color="#093624" />
                )}
              </View>
            </TouchableOpacity>

            {/* Save Button */}
            <TouchableOpacity onPress={handleButtonPress}>
              <View
                style={{
                  height: 55,
                  width: '100%',
                  borderWidth: 1,
                  borderRadius: 10,
                  backgroundColor: '#093624',
                  top: 10,
                }}
              >
                <Text
                  style={{
                    color: 'white',
                    padding: 15,
                    textAlign: 'center',
                  }}
                >
                  Save
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

export default Rescuerformscreen;
