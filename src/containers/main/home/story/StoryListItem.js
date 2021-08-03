import React from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import images from 'res/images';
import colors from '../../../../res/colors';
export default function StoryListItem({item, storyOnPress}) {
  return (
    <View style={Styles.container}>
      <TouchableOpacity onPress={storyOnPress}>
        <LinearGradient
          colors={[colors.primary, colors.secondary, colors.primary]}
          start={{x: 0.0, y: 1.0}}
          end={{x: 1.0, y: 1.0}}
          style={{borderRadius: 100, padding: 2}}>
          <View style={{borderWidth: 2, borderColor: "white", borderRadius: 100}}>
            {
              item.src==''?<Text style={{width: 55, height: 55, borderRadius: 70, textAlignVertical:"center", textAlign: "center", fontSize: 30, color: "white"}}>{item?.key[0]?.toUpperCase() +item?.key[1]?.toUpperCase()}</Text>:<Image
                                            source={item.src?images[item.src]:images.avatar}
                                            style={{width: 55, height: 55, borderRadius: 70}}
                                          />
            }
          </View>
        </LinearGradient>
      </TouchableOpacity>
      <View>
        <Text style={Styles.storyText}> {item.key} </Text>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginStart: 10,
    marginEnd: 10,
    marginTop: 10,
    marginBottom: 5,
    alignItems: 'center',
  },
  storyText: {
    color: 'white',
    fontSize: 12,
    marginTop: 5,
  },
});
