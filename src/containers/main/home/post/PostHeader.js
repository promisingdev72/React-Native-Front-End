import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet, Image} from 'react-native';
import palette from 'res/palette';
import images from 'res/images';
import colors from 'res/colors';
import PostImage from './PostImage';
import { useNavigation } from '@react-navigation/native';
export default function PostHeader({post}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={Styles.container} onPress={()=>{navigation.navigate("UserProfile")}}>
      <View style={Styles.nameContainer}>
        <Image
          source={post.avatar}
          style={Styles.personImage}
        />
        <View>
          <Text style={Styles.personName}> {post.userName} </Text>
          <Text style={Styles.placeName}> {post.placeName} </Text>
        </View>
      </View>
      <View>
        <TouchableOpacity>
          <Image source={images.more} style={Styles.iconMore} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const Styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    marginBottom: 6,
    marginStart: 10,
    marginEnd: 10,
    alignItems: 'center',
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  personImage: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  personName: {
    color: colors.text,
    marginStart: 10,
    fontWeight: 'bold',
  },
  placeName: {
    color: colors.text,
    marginStart: 10,
    fontSize: 12,
  },
  iconMore: {
    height: 15,
    width: 15,
  },
});
