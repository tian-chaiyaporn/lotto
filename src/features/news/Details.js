import React from 'react';
import ImageLoad from 'react-native-image-placeholder';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import {primary} from '../../constants/colors';

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
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Image source={require('../../../assets/back_arrow/back.png')} />
        </TouchableOpacity>
        <Image source={require('../../../assets/brand.png')} />
      </View>
      <ScrollView>
        <ImageLoad
          style={styles.image}
          isShowActivity={false}
          source={{uri: 'https://placedog.net/400/250'}}
          placeholderSource={require('../../../assets/defaultNews/defaultNewsThumbnail3x.png')}
          placeholderStyle={styles.image}
        />
        <View style={styles.text}>
          <Text style={styles.title}>{DATA.title}</Text>
          <Text style={styles.date}>{DATA.date}</Text>
          <Text style={styles.textBody}>{DATA.body}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  topBar: {
    backgroundColor: primary,
    alignItems: 'center',
    paddingVertical: 12,
    width: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  backButton: {position: 'absolute', left: 12, top: 18},
  image: {width: '100%', height: 250},
  text: {padding: 20, paddingBottom: 100},
  title: {fontFamily: 'NotoSansThaiUI-Bold', fontSize: 18, color: primary},
  date: {fontFamily: 'NotoSansThaiUI-SemiBold', fontSize: 14, color: 'grey'},
  textBody: {
    fontFamily: 'NotoSansThaiUI-Regular',
    fontSize: 16,
    paddingVertical: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 10,
    borderBottomColor: '#eaeaec',
    borderBottomWidth: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    paddingVertical: 5,
    paddingHorizontal: 25,
    marginVertical: 10,
    marginHorizontal: 5,
    borderRadius: 15,
    height: 30,
  },
  list: {
    backgroundColor: 'white',
    width: '100%',
    position: 'relative',
    flex: 1,
  },
});
