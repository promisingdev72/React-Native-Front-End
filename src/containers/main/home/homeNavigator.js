import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import homeScreen from './homeScreen';
import StoryScreen from './story/StoryScreen';
import publicProfileScreen from './publicProfile/publicProfileScreen';
import productDetailscreen from './productDetail/productDetailscreen';
import StoryCamera from './StoryCamera/StoryCamera';
import NewsScreen from './newsScreen';
import {
  StyleSheet,
  StatusBar,
} from 'react-native';
import palette from 'res/palette';
import colors from '../../../res/colors';

export default function () {
  const Stack = createStackNavigator();
  StatusBar.setBarStyle('light-content');
  
  return (
    
    <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen
        name="Home"
        component={homeScreen}
        options={({navigation}) => ({
          title: '',
          headerStyle: {
            backgroundColor: colors.bottomBackGround,
            shadowColor: colors.seperatorLineColor,
          },
        })}
      />
      <Stack.Screen name="NewsScreen" component={NewsScreen}/>
      <Stack.Screen name="Story" component={StoryScreen} />
      <Stack.Screen name="UserProfile" component={publicProfileScreen} />
      <Stack.Screen name="ProductDetail" component={productDetailscreen} />
      <Stack.Screen
        name="StoryCamera"
        component={StoryCamera}
        options={{gestureDirection: 'horizontal-inverted'}} //for left to right transition
      />
    </Stack.Navigator>
  );
}

const Styles = StyleSheet.create({
  headerLeftContainer: palette.header.headerLeftContainer,
  headerLeftImage: palette.header.headerLeftImage,
  headerRightContainer: {
    paddingRight: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  headerRightImage: palette.header.headerRightImage,
});
