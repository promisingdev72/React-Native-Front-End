import React from 'react';
import {View, Dimensions, TextInput, Text} from 'react-native';
import colors from 'res/colors';

export default function DirectMessageSearch() {
  return (
    <View>
      <TextInput
        placeholder="Search"
        placeholderTextColor={colors.textFaded2}
        style={{
          backgroundColor: "white",
          height: 40,
          borderRadius: 10,
          marginHorizontal: 10,
          marginVertical: 10,
          fontWeight: 'bold',
          paddingStart: 10,
          fontSize: 16,
          color: 'black',
          borderColor: colors.secondary,
          borderWidth: 1
        }}
      />
    </View>
  );
}
