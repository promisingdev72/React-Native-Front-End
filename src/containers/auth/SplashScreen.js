import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  Dimensions,
} from 'react-native';
import images from '../../res/images';
import colors from '../../res/colors';
import Shimmer from 'react-native-shimmer'
StatusBar.setBarStyle('light-content');

export default function SplashScreen({navigation}) {
  useEffect(() => {
    setTimeout(()=>{
      navigation.navigate('Login');
    }, 2000)
  }, []);
  return (
    <View style={Styles.container}>
      <View style={Styles.logoContainer}>
        <Image source={images.logo} style={{width: "90%", height: "70%", resizeMode:"contain"}} />
      </View>
      <View 
        style={{
          height: 100,
          width: "100%",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Shimmer>
          <Text style={{fontSize: 40, color: colors.secondary}}>شركة المليار العالمية</Text>
        </Shimmer>
        <Text style={{fontSize: 20, color: colors.secondary}}>للدعاية والتسويق الرقمي</Text>
          <View style={{
            flexDirection: "column",
            alignItems: "flex-end"}}
            >
              <View>
                <Text style={{textAlign: "right", width: "100%", fontSize: 20, color: colors.secondary}}>AL MAYAR internation company</Text>
                <Text style={{width: "100%", color: colors.secondary}}>for advertising and digital marketing</Text>
              </View>
          </View>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  signUpTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.primary,
    marginTop: 40,
  },
  avatarStyle:{
    width:100,
    height:100,
    marginTop: 20,
    marginBottom: 40
  },
  signUpContainer: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  avatarContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 30,
    height: 150,
  },
  userNameInput: {
    // width: "80%",
    marginStart: 10,
    color: 'black',
  },
  rightInnerBtn: { 
    borderLeftColor: colors.secondary, 
    borderLeftWidth:1,
    height: "100%", 
    width: 87,
    paddingHorizontal: 5, 
    flexDirection: "row", 
    justifyContent: "center", 
    alignItems: "center",
    backgroundColor: colors.primary
  },
  nameInput: {
    marginStart: 10,
    color: 'black'
  },  
  firstNameContainer: {
    borderColor: colors.secondary,
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    width: (Dimensions.get('screen').width/2-30),
    justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: "#fff",
    marginBottom: 20,
  },
  passwordContainer: {
    borderColor: colors.secondary,
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    justifyContent: 'center',
    //alignItems: 'center',
    marginStart: 20,
    marginEnd: 20,
    backgroundColor: "#fff",
    marginBottom: 20,
  },

  userNameContainer: {
    borderColor: colors.secondary,
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    justifyContent: 'center',
    //alignItems: 'center',
    marginStart: 20,
    marginEnd: 20,
    backgroundColor: "#fff",
    marginBottom: 20,
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  verifyCodeContainer: {
    borderColor: colors.secondary,
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    justifyContent: 'center',
    //alignItems: 'center',
    marginStart: 20,
    marginEnd: 20,
    backgroundColor: "#fff",
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  radioContainer: {
    height: 40,
    marginStart: 20,
    marginEnd: 20,
    marginBottom: 20,
  },
  passwordInput: {marginStart: 10, color: 'black'},
  forgotPasswordContainer: {
    alignItems: 'flex-end',
    marginEnd: 20,
  },
  forgotPasswordText: {
    color: colors.primary,
  },
  loginContainer: {
    alignItems: 'center',
    height: 40,
    marginTop: 30,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    marginStart: 20,
    marginEnd: 20,
    borderRadius: 5,
  },
  loginText: {
    color: '#fff',
  },
});
