import React from 'react';
import {View, Text} from 'react-native';

export default function UserBio() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        marginStart: 10,
        marginTop: 20,
      }}>
      <View style={{marginBottom: 5}}>
        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 18}}>John Doe</Text>
      </View>
      <View style={{marginBottom: 5, fontSize: 14}}>
        <Text style={{color: 'black', marginBottom: 20}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat
        </Text>
      </View>
    </View>
  );
}
