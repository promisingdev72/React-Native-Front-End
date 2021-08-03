import React, { useEffect } from 'react';
import LinearGradient from 'react-native-linear-gradient'
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import images from '../../res/images';
StatusBar.setBarStyle('light-content');

export default function LoginScreen({navigation}) {
  const _signInAsync = async () => {
    navigation.navigate('MainScreen');
  };
  return (
    <View style={Styles.container}>
      <View style={Styles.onboardWrap}>
        <ImageBackground source={images.onboardingBack} style={Styles.onboardingBack}>
          <View style={Styles.logoContainer}>
            <Image source={images.logo} style={{height:73, width: 75}}></Image>
          </View>
          <View style={Styles.underLine}></View>
          <LinearGradient
            colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.7)', 'white']}
            style={Styles.linearGradient}
          />
          <View style={Styles.textWrap}>
            <Text style={Styles.text}>Ta del av all din tandvård direkt i telefonen!</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={Styles.btnWrap}>
        <View style={Styles.signIn}>
          <Image source={images.bankId} style={{height:25, width: 30}}></Image>
          <TouchableOpacity onPress={_signInAsync}>
            <Text style={Styles.signinText}>Logga in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  signinText:{
    color:'#fff',
    textAlign:'center',
    alignItems:'center',
  },
  btnWrap:{
    flex: 1,
    justifyContent:'center',
    alignItems: "center",
    top:20,
  },
  signIn:{
    backgroundColor:'#6658EA',
    paddingHorizontal:100,
    paddingVertical:10,
    borderTopLeftRadius:8,
    borderBottomRightRadius:8,
    flexDirection:'row'
  },
  underLine:{
    height:5,
    width:210,
    backgroundColor:'#6658EA',
    position:'absolute',
    top:'85%',
    left: '40%',
    zIndex:1,
  },
  linearGradient: {
    height: 200,
    width: '100%',
    opacity:1,
    position:'absolute',
    bottom:0,
  },
  opacityRect:{
    width:'100%',
    height: 100,
    opacity:0.5,
    backgroundColor:'#fff',
  },
  textWrap:{
    opacity:0.7,
  },
  logoContainer:{
    alignSelf: 'flex-end',
    marginTop: 40,
    marginRight:30,
  },
  onboardWrap:{
     width:'100%',
     height:'70%',
  },
  container: {
    flex: 1,
    backgroundColor:'#EAF2FE',
  },
  onboardingBack: {
    flex: 1,
    resizeMode: "cover",
    position:'relative',
  },
  text: {
    color: '#000',
    fontSize: 30,
    textAlign: "center",
    zIndex:2,
  },
  textWrap:{
    position: 'absolute',
    bottom:30,
  },
});
