import React, {useState} from 'react';
import ImageLoad from 'react-native-image-placeholder';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

import {primary, secondary, light} from '../../constants/colors';

const DATA = [
  {
    id: '1234',
    title:
      'title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title',
    thumbnail: 'https://placedog.net/50/50',
    date: '1 ก.พ. 63',
  },
  {
    id: '12345',
    title: 'title 2',
    thumbnail: 'https://placedog.net/50/50',
    date: '1 ก.พ. 63',
  },
  {
    id: '123456',
    title: 'title 3',
    thumbnail: 'https://placedog.net/50/50',
    date: '1 ก.พ. 63',
  },
  {
    id: '1234567',
    title: 'title 4',
    thumbnail: 'https://placedog.net/50/50',
    date: '1 ก.พ. 63',
  },
  {
    id: '234',
    title: 'title',
    thumbnail: 'https://placedog.net/50/50',
    date: '1 ก.พ. 63',
  },
  {
    id: '2345',
    title: 'title 2',
    thumbnail: 'https://placedog.net/50/50',
    date: '1 ก.พ. 63',
  },
  {
    id: '23456',
    title: 'title 3',
    thumbnail: 'https://placedog.net/50/50',
    date: '1 ก.พ. 63',
  },
  {
    id: '234567',
    title: 'title 4',
    thumbnail: 'https://placedog.net/50/50',
    date: '1 ก.พ. 63',
  },
  {
    id: '4234',
    title: 'title',
    thumbnail: 'https://placedog.net/50/50',
    date: '1 ก.พ. 63',
  },
  {
    id: '42345',
    title: 'title 2',
    thumbnail: 'https://placedog.net/50/50',
    date: '1 ก.พ. 63',
  },
  {
    id: '423456',
    title: 'title 3',
    thumbnail: 'https://placedog.net/50/50',
    date: '1 ก.พ. 63',
  },
  {
    id: '4234567',
    title: 'title 4',
    thumbnail: 'https://placedog.net/50/50',
    date: '1 ก.พ. 63',
  },
];

function Item({id, title, thumbnail, date, onPress}) {
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
      <View style={{borderRadius: 16, overflow: 'hidden'}}>
        <ImageLoad
          style={{width: 60, height: 60}}
          isShowActivity={false}
          source={{uri: thumbnail}}
          placeholderSource={require('../../../assets/defaultNews/defaultNewsThumbnail.png')}
          placeholderStyle={{width: 60, height: 60}}
        />
      </View>
      <View style={{flex: 1, paddingHorizontal: 5}}>
        <Text
          numberOfLines={2}
          ellipsizeMode="tail"
          style={{fontFamily: 'NotoSansThaiUI-SemiBold'}}>
          {title}
        </Text>
        <Text style={{fontFamily: 'NotoSansThaiUI-SemiBold', color: 'grey'}}>
          {date}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export const NewsScreen = ({navigation}) => {
  const onPress = () => navigation.navigate('NewsDetails');
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Image source={require('../../../assets/brand.png')} />
      </View>
      <FlatList
        style={styles.list}
        data={DATA}
        renderItem={({item}) => (
          <Item
            id={item.id}
            title={item.title}
            thumbnail={item.thumbnail}
            date={item.date}
            onPress={onPress}
          />
        )}
        keyExtractor={item => item.id}
      />
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: light,
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
