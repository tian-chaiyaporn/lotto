import React, {useEffect} from 'react';

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

import {primary, secondary, light} from '../../constants/colors';

export const LiveScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: light,
      }}>
      <View
        style={{
          backgroundColor: primary,
          alignItems: 'center',
          paddingVertical: 12,
          width: '100%'
        }}>
        <Image source={require('../../../assets/brand.png')} />
      </View>
      <Text>ถ่ายทอดสด</Text>
    </View>
  );
};
