import React, {lazy} from 'react';
import {View, Text, Image} from 'react-native';
import images from 'res/images';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import StoryCamera from './home/StoryCamera/StoryCamera';
import {TouchableOpacity} from 'react-native-gesture-handler';
import DirectMessageScreen from './home/DirectMessage/DirectMessageScreen';
import StoryScreen from './home/story/StoryScreen';
import colors from '../../res/colors';
import MessageScreen from './home/MessageScreen/MessageScreen';
import SplashScreen from '../auth/SplashScreen'
import SignUpScreen from '../auth/SignUpScreen'
import LoginScreen from '../auth/LoginScreen'

export default function MainNavigator({navigation}) {
  const Stack = createStackNavigator();
  const NavigateToStoryCamera = () => navigation.navigate('StoryCamera');
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerStyle: {backgroundColor: '#000'},
          headerTintColor: '#fff',
          headerTransparent: true,
          title: '',
        }}
      />
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{
          headerStyle: {backgroundColor: '#000'},
          headerTintColor: '#fff',
          headerTransparent: true,
          title: '',
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{
          headerStyle: {backgroundColor: '#000'},
          headerTintColor: '#fff',
          headerTransparent: true,
          title: '',
        }}
      />
      <Stack.Screen
        name="MainScreen"
        component={TabNavigator}
        options={{title: '', headerShown: false}}
        NavigateToStoryCamera={NavigateToStoryCamera}
      />
      <Stack.Screen
        name="StoryCameraScreen"
        component={StoryCamera}
        options={{
          title: '',
          gestureDirection: 'horizontal-inverted',
          headerBackTitleVisible: false,
          headerTransparent: true,
          headerLeft: () => (
            <View
              style={{flexDirection: 'row', flex: 1, justifyContent: 'center'}}>
            </View>
          )
        }}
      />
      <Stack.Screen
        name="DirectMessageScreen"
        component={DirectMessageScreen}
        options={({navigation}) => ({
          //headerTransparent: true,
          headerTitle: () => (
            <View>
              <Text style={{color: 'black', fontWeight: 'bold', fontSize: 18}}>
                All Message
              </Text>
            </View>
          ),
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: colors.bottomBackGround,
            shadowColor: colors.seperatorLineColor,
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate('MainScreen')}>
              <Image
                source={images.dmBackButton}
                style={{width: 20, height: 20, marginStart: 10}}
              />
            </TouchableOpacity>
          )
        })}
      />
      <Stack.Screen
        name="StoryScreen"
        component={StoryScreen}
        navigation={navigation}
        options={{
          headerStyle: {backgroundColor: 'black', shadowColor: 'black'},
          title: '',
          headerLeft: () => <View></View>,
        }}
      />
      <Stack.Screen
        name="MessageScreen"
        component={MessageScreen}
        options={({navigation}) => ({
          title: '',
          headerStyle: {
            backgroundColor: colors.bottomBackGround,
            shadowColor: colors.seperatorLineColor,
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack(null)}>
              <Image
                source={images.dmBackButton}
                style={{width: 20, height: 20, marginStart: 10}}
              />
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <View>
              <Text style={{color: 'black', fontWeight: 'bold', fontSize: 18}}>
                juan
              </Text>
            </View>
          ),
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: colors.bottomBackGround,
            shadowColor: colors.seperatorLineColor,
          },
        })}
      />
    </Stack.Navigator>
  );
}
