import React from 'react';
import {View, Text} from 'react-native';
import palette from 'res/palette';
import UserSettingHeader from './UserSettingHeader';
import {ScrollView, FlatList} from 'react-native-gesture-handler';
import UserSettingBio from './UserSettingBio';
import EditProfileButton from './EditProfileButton';
import ConstantStories from './ConstantStories';
import LineSeperator from './LineSeperator';
import ProfileGrid from './ProfileGrid';
import colors from '../../../res/colors';
import GridIcon from './gridIcon';
import { Appbar, Menu, Provider } from 'react-native-paper';
const data = [{key: '1'}];

export default function usersettingscreen() {
  return (
    <Provider>
    <FlatList
      style={{flex: 1, backgroundColor: colors.bottomBackGround}}
      data={data}
      renderItem={() => (
        <>
          <UserSettingHeader />
          <UserSettingBio />
        </>
      )}
    />
    </Provider>
  );
}
