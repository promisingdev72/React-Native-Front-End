import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import profileScreen from './profileScreen';
import editprofilescreen from './editprofilescreen';
import usersettingscreen from './usersettingscreen';
import subscription from './subscription';
import {Text, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import colors from 'res/colors';
import images from 'res/images';
import informationScreen from './informationScreen';
import CustomNavigationBar from './CustomHeader'
import dentistryScreen from '../search/dentistryScreen';
import myEmailScreen from '../search/myEmailScreen';
export default function profileNavigator() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen
        name="Profile"
        component={dentistryScreen}
        options={{
        }}
      />
      <Stack.Screen
        name="myMail"
        component={myEmailScreen}
        options={{
        }}
      />
      <Stack.Screen
        name="EditProfile"
        component={editprofilescreen}
        options={{
        }}
      />
      <Stack.Screen
        name="UserSetting"
        component={usersettingscreen}
        options={{
        }}
      />
      <Stack.Screen
        name="Subscription"
        component={subscription}
        options={{
        }}
      />
      <Stack.Screen
        name="Information"
        component={informationScreen}
        options={{
        }}
      />
    </Stack.Navigator>
  );
}
