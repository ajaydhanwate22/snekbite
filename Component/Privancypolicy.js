import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';
import { useTranslation } from 'react-i18next';

function Privancypolicyscreen({ navigation }) {
  const { t } = useTranslation();

  const handleButtonPress = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <>
      <ScrollView style={{ backgroundColor: 'white' }}>
        <ImageBackground
          source={require('./Assets/background.png')}
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            height: 100,
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
          }}
        />
        <View style={{ margin: 15, left: 10, right: 20 }}>
          <Text style={{ color: '#093624', fontWeight: 'bold', fontSize: 16 }}>Privacy Policy</Text>
          <Text style={{ color: '#093624', fontWeight: 'bold', fontSize: 12, marginTop: 20 }}>
            Information We Collect:
          </Text>
          <Text style={{ color: '#093624', fontSize: 12, marginTop: 20 }}>
            We collect the following types of information when you use the App:
          </Text>
          <Text style={{ color: '#093624', fontSize: 12, marginTop: 10, marginLeft: 10 }}>
            Registration Information: When you register for an account, we may collect personally identifiable information (“PII”) such as your name, email address, phone number, and username.
          </Text>
          <Text style={{ color: '#093624', fontSize: 12, marginTop: 10, marginLeft: 10 }}>
            Usage Data: We may collect information about your use of the App, such as the features you access, the content you view, and the time and date of your activity. This information may be collected automatically by the App or through third-party analytics tools.
          </Text>
          <Text style={{ color: '#093624', fontSize: 12, marginTop: 10, marginLeft: 10 }}>
            Device Information: We may collect information about your device, such as the device type, operating system, IP address, and unique device identifier.
          </Text>
          <Text style={{ color: '#093624', fontWeight: 'bold', fontSize: 12, marginTop: 30 }}>
            How We Use Your Information:
          </Text>
          <Text style={{ color: '#093624', fontSize: 12, marginTop: 10, marginLeft: 10 }}>
            To provide and improve the App and its features.
          </Text>
          <Text style={{ color: '#093624', fontSize: 12, marginTop: 5, marginLeft: 10 }}>
            To process your donations and other transactions.
          </Text>
          <Text style={{ color: '#093624', fontSize: 12, marginTop: 5, marginLeft: 10 }}>
            To send you information about our organization, including upcoming events, news, and fundraising campaigns.
          </Text>
          <Text style={{ color: '#093624', fontSize: 12, marginTop: 5, marginLeft: 10 }}>
            To respond to your inquiries and requests.
          </Text>
          <Text style={{ color: '#093624', fontSize: 12, marginTop: 5, marginLeft: 10 }}>
            To analyze how the App is used and to improve our services.
          </Text>
          <Text style={{ color: '#093624', fontWeight: 'bold', fontSize: 12, marginTop: 30 }}>
            Changes to this Privacy Policy:
          </Text>
          <Text style={{ color: '#093624', fontSize: 12, marginTop: 10, marginLeft: 10, marginBottom: 100 }}>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on the App. You are advised to review this Privacy Policy periodically for any changes.
          </Text>
          <Text style={{ color: '#093624', fontWeight: 'bold', fontSize: 12, marginTop: 40 }}>
            Your Choices:
          </Text>
          <Text style={{ color: '#093624', fontSize: 12, marginTop: 10 }}>
            You have the following choices regarding your information:
          </Text>
          <Text style={{ color: '#093624', fontSize: 12, marginTop: 10, marginLeft: 10 }}>
            You can access and update your account information at any time.
          </Text>
          <Text style={{ color: '#093624', fontSize: 12, marginTop: 5, marginLeft: 10 }}>
            You can opt out of receiving marketing communications from us by following the unsubscribe instructions in our emails.
          </Text>
          <Text style={{ color: '#093624', fontSize: 12, marginTop: 5, marginLeft: 10, marginBottom: 80 }}>
            You can uninstall the App from your device.
          </Text>
          <Text style={{ color: '#093624', fontWeight: 'bold', fontSize: 12, marginTop: 5, marginBottom: 50 }}>
            Data Security:
          </Text>
          <Text style={{ color: '#093624', fontSize: 12, marginLeft: 10 }}>
            We take reasonable steps to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no internet or electronic storage system is completely secure, so we cannot guarantee the absolute security of your information.
          </Text>
        </View>
      </ScrollView>
      <View style={{backgroundColor:'white'}}>
      <View
        style={{
          height: 50,
          width: 310,
          left: 25,
          backgroundColor: '#093624',
          marginBottom: 8,
          borderRadius: 15,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}
        >
          <TouchableOpacity onPress={() => handleButtonPress('Profiletab')}>
            <View
              style={{
                height: 30,
                width: 50,
                backgroundColor: 'red',
                top: 10,
                borderRadius: 20,
              }}
            >
              <Text style={{ color: 'white', textAlign: 'center', top: 5 }}>
                Profile
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleButtonPress('Abouttabscreen')}>
            <View style={{justifyContent:'center', alignItems:'center',top:6}}>
              <Image source={require('./Assets/about.png')}/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleButtonPress('Editprofilescreen')}>
          <View style={{justifyContent:'center', alignItems:'center', top:10}}>
              <Image source={require('./Assets/edit.png')}/>
            </View>
          </TouchableOpacity>
        </View>
      </View>              
      </View>
    </>
  );
}

export default Privancypolicyscreen;
