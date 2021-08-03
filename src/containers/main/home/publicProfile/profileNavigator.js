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
import CustomNavigationBar from './CustomHeader'
export default function profileNavigator() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={profileScreen}
        options={{
          header: (props) => <CustomNavigationBar {...props} />,
        }}
      />
      <Stack.Screen
        name="EditProfile"
        component={editprofilescreen}
        options={{
          header: (props) => <CustomNavigationBar {...props} />,
        }}
      />
      <Stack.Screen
        name="UserSetting"
        component={usersettingscreen}
        options={{
          header: (props) => <CustomNavigationBar {...props} />,
        }}
      />
      <Stack.Screen
        name="Subscription"
        component={subscription}
        options={{
          header: (props) => <CustomNavigationBar {...props} />,
        }}
      />
    </Stack.Navigator>
  );
}
