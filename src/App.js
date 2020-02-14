import React, {useEffect} from 'react';
import messaging from '@react-native-firebase/messaging';
import 'react-native-gesture-handler';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  AsyncStorage,
  Image,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {primary, secondary, light} from './constants/colors';

function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: light,
      }}>
      <Text>ผลสลาก</Text>
    </View>
  );
}

function LiveScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: light,
      }}>
      <Text>ถ่ายทอดสด</Text>
    </View>
  );
}

function NewsScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: light,
      }}>
      <Text style={{fontFamily: 'NotoSansThaiUI-Regular'}}>ข่าวสาร</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const App = () => {
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log('FCM Message Data:', remoteMessage.data);
      console.log('Lotto@test');
      console.log('Lotto@testkey');

      const currentMessages = await AsyncStorage.getItem('messages');
      const messageArray = JSON.parse(currentMessages);
      messageArray.push(remoteMessage.data);
      await AsyncStorage.setItem('messages', JSON.stringify(messageArray));
    });
  }, []);

  return (
    <View style={styles.appContainer}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor={primary} />
        <View style={styles.topBar}>
          <Image source={require('../assets/brand.png')} />
        </View>
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: secondary,
            labelStyle: styles.labelStyle,
            tabStyle: {
              paddingBottom: 35,
            },
            style: styles.tabBarStyle,
          }}>
          <Tab.Screen name="ผลสลาก" component={HomeScreen} />
          <Tab.Screen name="ถ่ายทอดสด" component={LiveScreen} />
          <Tab.Screen name="ข่าวสาร" component={NewsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: light,
  },
  topBar: {
    backgroundColor: primary,
    alignItems: 'center',
    paddingVertical: 12,
  },
  labelStyle: {
    fontSize: 14,
    fontFamily: 'NotoSansThaiUI-Regular',
  },
  tabBarStyle: {
    backgroundColor: 'white',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    height: 100,
  },
});

export default App;
