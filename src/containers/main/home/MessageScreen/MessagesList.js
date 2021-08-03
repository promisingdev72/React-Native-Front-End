import React from 'react';
import {Text} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import DirectMessageSearch from './DirectMessageSearch';
import Title from './Title';
import MessageListItem from './MessageListItem';
import images from 'res/images';
const data = [
  {key: '5', name: 'carla', avatar: '', message: 'id ornare arcu odio ut', badge: 0},
  {key: '6', name: 'juan', avatar: images.av2, message: 'in mollis nunc sed id', badge: 0},
  {key: '7', name: 'donna', avatar: images.av3, message: 'in est ante in nibh', badge: 1},
  {key: '8', name: 'marta', avatar: images.av1, message: 'egestas erat imperdiet sed', badge: 1},
  {key: '9', name: 'paula', avatar: '', message: 'dictum sit amet justo donec',badge: 0},
  {key: '10', name: 'cardi', avatar: '', message: 'nisl suscipit adipiscing',badge: 0},
  {key: '11', name: 'lana', avatar: '', message: 'volutpat est velit egestas dui',badge: 1}
];

export default function MessagesList() {
  return (
    <FlatList
      data={data}
      renderItem={({item, index}) => <MessageListItem data={item} />}
    />
  );
}
