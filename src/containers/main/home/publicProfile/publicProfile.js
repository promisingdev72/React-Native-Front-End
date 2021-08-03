import React from 'react';
import {View, Text} from 'react-native';
import palette from 'res/palette';
import EditProfileHeader from './EditProfileHeader';
import {ScrollView, FlatList} from 'react-native-gesture-handler';
import EditUserBio from './EditUserBio';
import EditProfileButton from './EditProfileButton';
import ConstantStories from './ConstantStories';
import LineSeperator from './LineSeperator';
import ProfileGrid from './ProfileGrid';
import colors from '../../../res/colors';
import GridIcon from './gridIcon';
import { Appbar, Menu, Provider } from 'react-native-paper';
const data = [{key: '1'}];

export default function profileScreen() {
  return (
    <Provider>
    <FlatList
      style={{flex: 1, backgroundColor: colors.bottomBackGround}}
      data={data}
      renderItem={() => (
        <>
          <EditProfileHeader />
          <EditUserBio />
        </>
      )}
    />
    </Provider>
  );
}
