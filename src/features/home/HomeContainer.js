import React from 'react';

import {StyleSheet, View, Text, FlatList, TouchableOpacity, Image} from 'react-native';

import {primary, bordeaux, light} from '../../constants/colors';
import {ResultCard} from './components/ResultCard';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'ไทย',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'ฮานอย',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'ลาว',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e2wd72',
    title: 'มาเลเซีย',
  },
];

function Item({id, title, selected, onSelect}) {
  return (
    <TouchableOpacity
      onPress={() => onSelect(title)}
      style={[styles.item, {backgroundColor: selected ? 'white' : primary}]}>
      <Text style={[styles.title, {color: selected ? primary : bordeaux}]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: light,
    flex: 1,
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
  title: {
    fontSize: 14,
    fontFamily: 'NotoSansThaiUI-Bold',
  },
  list: {
    backgroundColor: primary,
    width: '100%',
    position: 'relative',
    flex: 1,
  },
  cardSection: {
    flex: 10,
    backgroundColor: light,
    width: '100%',
    marginTop: 20,
  },
  topBar: {
    backgroundColor: primary,
    alignItems: 'center',
    paddingVertical: 12,
    width: '100%'
  },
});

export const HomeScreen = () => {
  // add id of item once we get the data from backend of the list of countries
  const [selected, setSelected] = React.useState('ไทย');
  const onSelect = title => setSelected(title);
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Image source={require('../../../assets/brand.png')} />
      </View>
      <FlatList
        style={styles.list}
        data={DATA}
        horizontal={true}
        renderItem={({item}) => (
          <Item
            id={item.id}
            title={item.title}
            selected={selected === item.title}
            onSelect={onSelect}
          />
        )}
        keyExtractor={item => item.id}
      />
      <View style={styles.cardSection}>
        <ResultCard />
      </View>
    </View>
  );
};
