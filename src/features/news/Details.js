import React, {useEffect} from 'react';
import ImageLoad from 'react-native-image-placeholder';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  AsyncStorage,
  Image,
  TouchableOpacity,
} from 'react-native';

import {primary, secondary, light} from '../../constants/colors';

export const DetailsScreen = ({navigation}) => {
  const DATA = {
    image: 'https://placedog.net/1000/800',
    title: 'title',
    date: '1 ก.พ. 63',
    body: `Affiliate marketing is the latest trend online. With so many products to sell and services to offer, sometimes displaying it on one site isn’t enough. Thus, advertisers or merchants need affiliates, some sites which are willing to display ads for a particular cost. On the other hand, this is an opportunity for potential affiliates to earn extra income online.

Affiliate marketing is the latest trend online. With so many products to sell and services to offer, sometimes displaying it on one site isn’t enough. Thus, advertisers or merchants need affiliates, some sites which are willing to display ads for a particular cost. On the other hand, this is an opportunity for potential affiliates to earn extra income online.

Affiliate marketing is the latest trend online. With so many products to sell and services to offer, sometimes displaying it on one site isn’t enough. Thus, advertisers or merchants need affiliates, some sites which are willing to display ads for a particular cost. On the other hand, this is an opportunity for potential affiliates to earn extra income online.

Affiliate marketing is the latest trend online. With so many products to sell and services to offer, sometimes displaying it on one site isn’t enough. Thus, advertisers or merchants need affiliates, some sites which are willing to display ads for a particular cost. On the other hand, this is an opportunity for potential affiliates to earn extra income online.

The easy way to earn from affiliate marketing is to join an affiliate marketing network. Joining poses several benefits to both the advertiser and the affiliate.`,
  };
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
          width: '100%',
        }}>
        <TouchableOpacity
          style={{position: 'absolute', left: 12, top: 18}}
          onPress={() => navigation.goBack()}>
          <Image source={require('../../../assets/back_arrow/back.png')} />
        </TouchableOpacity>
        <Image source={require('../../../assets/brand.png')} />
      </View>
      <ScrollView>
        <ImageLoad
          style={{width: '100%', height: 250}}
          isShowActivity={false}
          source={{uri: 'https://placedog.net/400/250'}}
          placeholderSource={require('../../../assets/defaultNews/defaultNewsThumbnail3x.png')}
          placeholderStyle={{width: '100%', height: 250}}
        />
        <View style={{padding: 20, paddingBottom: 100}}>
          <Text style={{fontFamily: 'NotoSansThaiUI-Bold', fontSize: 18, color: primary}}>
            {DATA.title}
          </Text>
          <Text style={{fontFamily: 'NotoSansThaiUI-SemiBold', fontSize: 14, color: 'grey'}}>
            {DATA.date}
          </Text>
          <Text style={{fontFamily: 'NotoSansThaiUI-Regular', fontSize: 16, paddingVertical: 20}}>
            {DATA.body}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};
