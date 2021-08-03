import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Card} from 'react-native-paper'
import colors from '../../../../res/colors';
import images from '../../../../res/images';
const data = [{key: '1'}];
const post = {
    key: '1',
    userName: 'AL',
    placeName: 'Istanbul, Turkey',
    imgUrl: images.pro1,
    avatar: images.av1,
    likeCount: 103,
    commentCount: 21,
    discount: "30%",
    price: 150,
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A diam maecenas sed enim ut sem viverra.',
    publishDate: new Date().toDateString(),
}
function tapToFavorite(favoriteIcon) {
    
    if (favoriteIcon % 2 === 0) {
      return images.favorite_select;
    } else {
      return images.favorite;
    }
  }
export default function productDetailscreen() {
    const [favoriteIcon, setFavoriteIcon] = React.useState(1);
    const [bookmarkIcon, setBookmarkIcon] = React.useState(1);
    const [likIcon, setLikeIcon] = React.useState(1);
  return (
    <FlatList
      style={{flex: 1, backgroundColor: colors.bottomBackGround}}
      data={data}
      renderItem={() => (
        <View style={{flex:1}}>
            <Card>
            <Image source={post.imgUrl} style={Styles.postImg} />
            {
              post.discount!=""?<Text style={{position: 'absolute', bottom: 40, right: 0, backgroundColor: colors.primary, paddingHorizontal: 20, paddingVertical: 5, fontSize: 15, color: "white", fontWeight: "bold"}}>Discount: {post.discount}</Text>:null
            }
            <View style={{flexDirection: 'row', justifyContent: 'center', position: 'absolute', bottom: 5, left: 5, backgroundColor: "rgba(255, 255, 255, 0.2)", padding: 4, borderRadius: 10}}>
                <TouchableOpacity onPress={() => setFavoriteIcon(favoriteIcon + 1)}>
                <Image source={tapToFavorite(favoriteIcon)} style={Styles.actionIcons} />
                </TouchableOpacity>
                <TouchableOpacity onPress = {()=>{}}>
                <Image source={images.like} style={Styles.actionIcons} />
                </TouchableOpacity>
            </View>
          </Card>
            <View
                style={{
                    marginStart: 15,
                    marginEnd: 15,
                    flexDirection: 'column',
                    marginTop: 10,
                }}>
                <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                    <Text style={{color: colors.text, fontWeight: 'bold', fontSize: 18}}>
                        {post.userName}
                    </Text>
                    <Text style={{color: colors.primary, fontSize: 16, fontWeight: "bold"}}>$ {post.price}</Text>
                </View>
                <Text style={{color: colors.text, fontSize: 15}}>{post.text}</Text>
            </View>
            <TouchableOpacity
                onPress={() => console.log('Pressed Post Likes')}
                style={{marginLeft: 15, marginTop: 10, marginEnd: 15}}>
                <Text style={{color: colors.text, fontWeight: 'bold'}}>
                    {post.likeCount} likes{' '}
                </Text>
            </TouchableOpacity>
            <Text
                style={{
                color: colors.textFaded2,
                marginTop: 5,
                marginStart: 15,
                fontSize: 12,
                }}>
                {post.publishDate}
            </Text>
        </View>
      )}
    />
  );
}

const Styles = StyleSheet.create({
    postImg: {
      height: Dimensions.get('screen').height / 3,
      width: Dimensions.get('screen').width,
      resizeMode: 'cover',
      marginTop: 20
    },
    actionIcons: {
        width: 23,
        height: 23,
        marginHorizontal: 7,
      },
  });
