import React from 'react';
import {Image, TouchableOpacity, StyleSheet, Dimensions, View, Text} from 'react-native';
import colors from '../../../../res/colors';
import { useNavigation } from '@react-navigation/native';
export default function PostImage({post}) {
  const navigation = useNavigation();
  return  <TouchableOpacity onPress={()=>{navigation.navigate("ProductDetail")}}>
            <Image source={post.imgUrl} style={Styles.postImg} />
            {
              post.discount!=""?<Text style={{position: 'absolute', bottom: 40, right: 0, backgroundColor: colors.primary, paddingHorizontal: 20, paddingVertical: 5, fontSize: 15, color: "white", fontWeight: "bold"}}>Discount: {post.discount}</Text>:null
            }
          </TouchableOpacity>
}

const Styles = StyleSheet.create({
  postImg: {
    height: Dimensions.get('screen').height / 3,
    width: Dimensions.get('screen').width,
    resizeMode: 'cover',
  },
});
