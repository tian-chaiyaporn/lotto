import React, {useEffect} from 'react';
import messaging from '@react-native-firebase/messaging';
import 'react-native-gesture-handler';
import {
  StyleSheet,
  View,
  StatusBar,
  AsyncStorage,
  Image,
  SafeAreaView,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import {primary, secondary, light} from './constants/colors';
import {HomeScreen} from './features/home/HomeContainer';
import {LiveScreen} from './features/live/Live';
import {NewsScreen} from './features/news/News';
import {DetailsScreen} from './features/news/Details';

const Tab = createBottomTabNavigator();

const NewsStack = createStackNavigator();

function NewsStackScreen() {
  return (
    <NewsStack.Navigator>
      <NewsStack.Screen
        name="News"
        component={NewsScreen}
        options={{headerShown: false}}
      />
      <NewsStack.Screen
        name="NewsDetails"
        component={DetailsScreen}
        options={{headerShown: false}}
      />
    </NewsStack.Navigator>
  );
}

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
    <SafeAreaView style={styles.appContainer}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor={primary} />
        {/* <View style={styles.topBar}>
          <Image source={require('../assets/brand.png')} />
        </View> */}
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused}) => {
              const homeIcon = (
                <Image
                  source={require('../assets/textDoc_white/textDoc.png')}
                />
              );
              const homeIconFilled = (
                <Image
                  source={require('../assets/textDoc_filled/textDoc.png')}
                />
              );
              const liveIcon = (
                <Image source={require('../assets/camera/camera.png')} />
              );
              const liveIconFilled = (
                <Image source={require('../assets/camera_filled/camera.png')} />
              );
              const newsIcon = (
                <Image
                  source={require('../assets/alertBubble/alertBubble.png')}
                />
              );
              const newsIconFilled = (
                <Image
                  source={require('../assets/alertBubble_filled/alertBubble.png')}
                />
              );
              if (route.name === 'ผลสลาก') {
                return !focused ? homeIcon : homeIconFilled;
              } else if (route.name === 'ถ่ายทอดสด') {
                return !focused ? liveIcon : liveIconFilled;
              } else if (route.name === 'ข่าวสาร') {
                return !focused ? newsIcon : newsIconFilled;
              }
              return <Image source={require('../assets/brand.png')} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: secondary,
            labelStyle: styles.labelStyle,
            tabStyle: {
              paddingTop: 10,
              height: 60,
            },
            style: styles.tabBarStyle,
          }}>
          <Tab.Screen name="ผลสลาก" component={HomeScreen} />
          <Tab.Screen name="ถ่ายทอดสด" component={LiveScreen} />
          <Tab.Screen name="ข่าวสาร" component={NewsStackScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
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
    fontSize: 12,
    fontFamily: 'NotoSansThaiUI-Medium',
  },
  tabBarStyle: {
    backgroundColor: 'white',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    height: 100,
    position: 'absolute',
    zIndex: 1,
    width: '100%',
  },
});

export default App;
