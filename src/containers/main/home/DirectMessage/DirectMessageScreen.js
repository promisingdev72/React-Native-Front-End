import React from 'react';
import {View, Image, Text} from 'react-native';
import DirectMessageSearch from './DirectMessageSearch';
import Title from './Title';
import MessagesList from './MessagesList';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import colors from 'res/colors';
import images from 'res/images';

const data = [{key: '1'}];

export default function DirectMessageScreen({navigation}) {
  return (
    <>
      <FlatList
        style={{backgroundColor: "white", flex: 1}}
        data={data}
        renderItem={() => (
          <>
            <DirectMessageSearch />
            <Title />
            <MessagesList navigation = {navigation}/>
          </>
        )}
      />
      
    </>
  );
}
