import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import favoriteScreen from './favoriteScreen';
import colors from 'res/colors';
import {Text} from 'react-native';

export default function favoriteNavigator() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorite"
        component={favoriteScreen}
        options={{
          headerStyle: {
            backgroundColor: colors.bottomBackGround,
            shadowColor: colors.seperatorLineColor,
          },
        }}
      />
    </Stack.Navigator>
  );
}
