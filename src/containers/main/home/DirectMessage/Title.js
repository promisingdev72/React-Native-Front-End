import React from 'react';
import {View, Text} from 'react-native';
import colors from 'res/colors';

export default function Title() {
  return (
    <View style={{marginTop: 10, marginStart: 10}}>
      <Text style={{color: colors.primary, fontWeight: 'bold', fontSize: 18}}>
        Messages
      </Text>
    </View>
  );
}
