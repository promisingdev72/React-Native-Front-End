import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import images from 'res/images';
import {Image, View, Text} from 'react-native';
import palette from 'res/palette';
import colors from 'res/colors';

import homeNavigator from './home/homeNavigator';
import addPostNavigator from './addPost/addPostNavigator';
import profileNavigator from './profile/profileNavigator';
import searchNavigator from './search/searchNavigator';

export default function TabNavigator({NavigateToStoryCamera}) {
  const Tab = createBottomTabNavigator();
  return (
    <React.Fragment>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          showIcon: true,
          style: {
            backgroundColor: colors.bottomBackGround,
            borderTopColor: colors.seperatorLineColor,
          },
        }}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused}) => {
            let iconName;

            if (route.name === 'Hem') {
              iconName = focused ? images.home : images.home;
            } else if (route.name === 'Om kliniken') {
              iconName = focused ? images.search : images.search;
            } else if (route.name === 'Tjänster') {
              iconName = focused ? images.add : images.add;
            } else if (route.name === 'Min tandvård') {
              iconName = focused ? images.profile : images.profile;
            }
            return <View style={{justifyContent:'center',alignItems:'center'}}>
                    <Image style={palette.header.image} source={iconName} />
                    <Text style={{color:'#575A7B'}}>{route.name}</Text>
                   </View>;
          },
        })}>
        <Tab.Screen name="Hem" component={homeNavigator} />
        <Tab.Screen name="Om kliniken" component={searchNavigator} />
        <Tab.Screen name="Tjänster" component={addPostNavigator} />
        <Tab.Screen name="Min tandvård" component={profileNavigator} />
      </Tab.Navigator>
    </React.Fragment>
  );
}
