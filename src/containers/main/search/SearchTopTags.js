import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import colors from 'res/colors';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';

const data = [
  {key: '1', tag: 'Clothes'},
  {key: '2', tag: 'Computer'},
  {key: '3', tag: 'Bike'},
  {key: '4', tag: 'Shows'},
  {key: '5', tag: 'Food'},
  {key: '6', tag: 'Electronics'},
  {key: '7', tag: 'furniture'},
];

function TagContainer({tag}) {
  return (
    <TouchableOpacity onPress={() => console.log('Pressed Search Tag')}>
      <View
        style={{
          height: 30,
          borderWidth: 1.5,
          borderColor: colors.secondary,
          borderRadius: 8,
          justifyContent: 'center',
          marginBottom: 10,
          marginTop: 10,
          backgroundColor: colors.primary,
          marginHorizontal: 5,
        }}>
        <Text
          style={{
            color: 'white',
            marginHorizontal: 15,
            fontWeight: 'bold',
          }}>
          {tag}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default function SearchTopTags() {
  return (
    <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{backgroundColor: colors.bottomBackGround}}
      data={data}
      renderItem={({item, index}) => <TagContainer tag={item.tag} />}
    />
  );
}
