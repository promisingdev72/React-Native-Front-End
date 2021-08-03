import React from 'react';
import {View, Image, Text} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import images from '../../../../res/images';

const data = [
  {
    key: '1',
    proImage: images.pro1
  },
  {
    key: '2',
    proImage: images.pro2
  },
  {
    key: '3',
    proImage: images.pro3
  },
  {
    key: '4',
    proImage: images.pro4
  },
  {
    key: '5',
    proImage: images.pro5
  },
  {
    key: '6',
    proImage: images.pro6
  },
  /*{key: '7'},
  {key: '8'},
  {key: '9'},
  {key: '10'},
  {key: '11'},
  {key: '12'},
  {key: '13'},
  {key: '14'},*/
];

function Test({item}) {
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        onPress={() => console.log('Pressed Profile Grid Image')}>
        <Image
          source={item.proImage}
          style={{
            height: 150,
            width: 150,
            flex: 1,
            marginEnd: 2,
            marginBottom: 2,
            alignItems: 'center',
            resizeMode: "cover"
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

export default function ProfileGrid() {
  return (
    <FlatList
      data={data}
      style={{marginTop: 2, marginStart: 2}}
      renderItem={({item, index}) => <Test item={item}/>}
      numColumns={3}
      indicatorStyle={'black'}
      showsVerticalScrollIndicator={true}
    />
  );
}
