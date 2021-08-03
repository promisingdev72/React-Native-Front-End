import React from 'react';
import {View, Image, Text, ImageStore} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import images from 'res/images';
const data = [
  {key: '1'},
  {key: '2'},
  {key: '3'},
];

function Test() {
  return (
    <View style={{flexDirection: 'column'}}>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Image
          source={images.pro1}
          style={{
            height: 150,
            flex: 1,
            marginEnd: 2,
            marginBottom: 2,
            alignItems: 'center',
          }}
        />
        <Image
          source={images.pro2}
          style={{
            height: 150,
            flex: 1,
            marginEnd: 2,
            marginBottom: 2,
            alignItems: 'center',
          }}
        />
        <Image
          source={images.pro3}
          style={{
            height: 150,
            flex: 1,
            //marginEnd: 2,
            marginBottom: 2,
            alignItems: 'center',
          }}
        />
      </View>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Image
          source={images.pro4}
          style={{
            height: 150,
            flex: 1,
            marginEnd: 2,
            marginBottom: 2,
            alignItems: 'center',
          }}
        />
        <Image
          source={images.pro5}
          style={{
            height: 150,
            flex: 1,
            marginEnd: 2,
            marginBottom: 2,
            alignItems: 'center',
          }}
        />

        <Image
          source={images.pro6}
          style={{
            height: 150,
            flex: 1,
            //marginEnd: 2,
            marginBottom: 2,
            alignItems: 'center',
          }}
        />
      </View>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <Image
            source={images.pro7}
            style={{
              height: 150,
              flex: 1,
              marginEnd: 2,
              marginBottom: 2,
              alignItems: 'center',
            }}
          />
          <Image
            source={images.pro8}
            style={{
              height: 150,
              flex: 1,
              marginEnd: 2,
              marginBottom: 2,
              alignItems: 'center',
            }}
          />
        </View>
        <View style={{flex: 2}}>
          <Image
            source={images.pro9}
            style={{
              height: 150,
              flex: 1,
              //marginEnd: 2,
              marginBottom: 2,
              alignItems: 'center',
            }}
          />
        </View>
      </View>
    </View>
  );
}

export default function SearchGrid() {
  return (
    <FlatList
      data={data}
      //style={{marginTop: 2, marginStart: 2}}
      renderItem={({item, index}) => <Test />}
      //numColumns={3}
      indicatorStyle={'white'}
      showsVerticalScrollIndicator={true}
    />
  );
}
