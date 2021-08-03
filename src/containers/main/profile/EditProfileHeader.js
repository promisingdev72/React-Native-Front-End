import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../../res/colors';
import images from '../../../res/images';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function EditProfileHeader() {
  return (
    <View style={Styles.container}>
      <TouchableOpacity>
        <LinearGradient
          colors={[colors.primary, colors.secondary, colors.primary]}
          start={{x: 0.0, y: 1.0}}
          end={{x: 1.0, y: 1.0}}
          style={{borderRadius: 100, padding: 2, marginLeft: 20}}>
          <View style={{borderWidth: 2, borderColor: "white", borderRadius: 100,}}>
            <Image
              source={images.av1}
              style={Styles.prfilePicture}
            />
            <Icon name="camera" style={{position: "absolute", right: -4, bottom: -4, borderColor: "gray", borderRadius: 30, borderWidth: 2, padding: 3, backgroundColor: "white", textAlignVertical: "center", textAlign: "center"}} size={25} color={colors.primary}/>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  prfilePicture: {
    height: 80,
    width: 80,
    borderRadius: 100,
  },
  numberContainer: {
    color: 'black',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 15,
  },
  container2: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
    marginEnd: 20,
  },
  text: {
    color: 'black',
    //fontWeight: 'bold',
    alignSelf: 'center',
  },
  container3: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between',
  },
});
