import React from 'react';
import {TouchableOpacity, Image, View, StyleSheet, Text} from 'react-native';
import images from 'res/images';
import { useNavigation } from '@react-navigation/native';
import colors from '../../../../res/colors';

function tapToFavorite(favoriteIcon) {
  if (favoriteIcon % 2 === 0) {
    return images.favorite_select;
  } else {
    return images.favorite;
  }
}

export default function PostActions({post}) {
  const [favoriteIcon, setFavoriteIcon] = React.useState(1);
  const [bookmarkIcon, setBookmarkIcon] = React.useState(1);
  const [likIcon, setLikeIcon] = React.useState(1);
  const navigation = useNavigation();
  return (
    <View style={Styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
        <TouchableOpacity onPress={() => setFavoriteIcon(favoriteIcon + 1)}>
          <Image source={tapToFavorite(favoriteIcon)} style={Styles.actionIcons} />
        </TouchableOpacity>
        <TouchableOpacity onPress = {()=>{}}>
          <Image source={images.like} style={Styles.actionIcons} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigation.navigate('MessageScreen')}}>
          <Image source={images.direct_message} style={Styles.actionIcons} />
        </TouchableOpacity>
      </View>
      <Text style={{color: colors.primary, fontSize: 16, fontWeight: "bold"}}>$ {post.price}</Text>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    //paddingStart: 20,
    marginEnd: 15,
    marginTop: 15,
  },
  actionIcons: {
    width: 23,
    height: 23,
    marginStart: 15,
  },
});
