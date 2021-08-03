import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import searchScreen from './searchScreen';
import dentistryScreen from './dentistryScreen';
import OppointmentScreen from './OppointmentScreen';
import notificationScreen from './notificationScreen';
import inboxScreen from './inboxScreen';
import sendEmailScreen from './sendEmailScreen';
import {View, Text, Dimensions} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import colors from 'res/colors';
import myEmailScreen from './myEmailScreen';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default function searchNavigator() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen
        name="Search"
        component={searchScreen}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: colors.bottomBackGround,
            shadowColor: 'transparent',
          },
        }}
      />
      <Stack.Screen
        name="Dentistry"
        component={dentistryScreen}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: colors.bottomBackGround,
            shadowColor: 'transparent',
          },
        }}
      />
      <Stack.Screen
        name="Oppointment"
        component={OppointmentScreen}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: colors.bottomBackGround,
            shadowColor: 'transparent',
          },
        }}
      />
      <Stack.Screen
        name="Notification"
        component={notificationScreen}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: colors.bottomBackGround,
            shadowColor: 'transparent',
          },
        }}
      />
      <Stack.Screen
        name="Inbox"
        component={inboxScreen}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: colors.bottomBackGround,
            shadowColor: 'transparent',
          },
        }}
      />
      <Stack.Screen
        name="SendEmail"
        component={sendEmailScreen}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: colors.bottomBackGround,
            shadowColor: 'transparent',
          },
        }}
      />
      <Stack.Screen
        name="myMail"
        component={myEmailScreen}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: colors.bottomBackGround,
            shadowColor: 'transparent',
          },
        }}
      />
    </Stack.Navigator>
  );
}
