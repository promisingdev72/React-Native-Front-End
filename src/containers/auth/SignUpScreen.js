import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Dimensions,
  Image,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import images from '../../res/images';
import colors from '../../res/colors';
import {Avatar} from "react-native-elements";
import { Button, Card, Dialog, Portal } from 'react-native-paper';
import ImagePicker from 'react-native-image-crop-picker';
import PhoneInput from "react-native-phone-number-input";

StatusBar.setBarStyle('light-content');
const windowWidth = Dimensions.get('screen').width;

export default function SignUpScreen({navigation}) {
  const [modal, setModal] = React.useState(false);
  const [imageFile, setImageFile] = React.useState("");
  const [checkValid, setCheckValid] = React.useState(false);
  const phoneInput = useRef(null);
  const hideDialog =()=>{
    setModal(false)
  }
  const showDialog = ()=>{
    setModal(true)
  }
  const imagePickLibrary = ()=>{
    hideDialog()
    ImagePicker.openPicker({
      cropping: true,
      cropperCircleOverlay: true,
      mediaType: "image",
    }).then(image => {
      console.log(image);
      setImageFile(image.path)
    });
  }

  const imagePickCamera = ()=>{
    hideDialog()
    ImagePicker.openCamera({
      cropping: true,
      cropperCircleOverlay: true,
      mediaType: "image",
    }).then(image => {
      console.log(image);
      setImageFile(image.path)
    });

  }
  return (
    <ScrollView style={Styles.signUpContainer}>
      <Portal>
        <Dialog visible={modal} onDismiss={hideDialog} style={{width: 200, marginHorizontal: (windowWidth-200)/2}}>
          {/* <Dialog.Content> */}
            <Card onPress={imagePickLibrary}>
              <Card.Content style={{flexDirection: "row", alignItems: "center"}}>
                <Image source={images.photo_gallary} style={{width: 50, height: 50, resizeMode: "contain"}}/>
                <Text style={{color: colors.primary, fontSize: 20, marginLeft: 20}}>Library</Text>
              </Card.Content>
            </Card>
            <Card onPress={imagePickCamera}>
              <Card.Content style={{flexDirection: "row", alignItems: "center"}}>
                <Image source={images.photo_camera} style={{width: 50, height: 50, resizeMode: "contain"}}/>
                <Text style={{color: colors.primary, fontSize: 20, marginLeft: 20}}>Camera</Text>
              </Card.Content>
            </Card>
        </Dialog>
      </Portal>
      <View style={Styles.avatarContainer}>
        <Text style={Styles.signUpTitle}>Sign Up</Text>
        <Avatar
            containerStyle={Styles.avatarStyle}
            rounded
            size={100}
            source={imageFile!=""?{uri: imageFile}:images.avatar}
            onPress={()=>{console.log("avatar"); showDialog()}}
        />
      </View>
      <View style={Styles.userNameContainer}>
        <TextInput
          style={Styles.nameInput}
          secureTextEntry={true}
          placeholder="* UserName"
          placeholderTextColor={colors.textFaded2}
        />
      </View>
      <SafeAreaView  style={Styles.phoneNumContainer}>
          <View>
            <PhoneInput
              defaultCode="IQ"
              layout="second"
              ref={phoneInput}
              onChangeFormattedText={(text) => {
                console.log(text, 'formated text');
                const valid = phoneInput.current?.isValidNumber(text);
                setCheckValid(valid)
              }}
              placeholder={"* Phone Number"}
              containerStyle={{margin: 0, padding: 0, backgroundColor: "white", width: 270}}
              textInputStyle={{margin: 0, padding: 0, backgroundColor: "white", color: "black"}}
              textContainerStyle={{margin: 0, padding: 0, backgroundColor: "white"}}
            />
          </View>
        <View
          style={Styles.rightInnerBtn}
        >
          <TouchableOpacity style={{height: "100%", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
            <Text style={{color: "white"}}>
              Send Code
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView >
      <View style={Styles.phoneNumContainer}>
        <TextInput
          style={Styles.userNameInput}
          placeholder="* Verify Code"
          placeholderTextColor={colors.textFaded2}
        />
        <View
          style={Styles.rightInnerBtn}
        >
          <TouchableOpacity style={{height: "100%", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
            <Text style={{color: "white"}}>
              Verify Code
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      
      <View style={Styles.passwordContainer}>
        <TextInput
          style={Styles.nameInput}
          secureTextEntry={true}
          placeholder="* Password"
          placeholderTextColor={colors.textFaded2}
        />
      </View>
      <View style={Styles.passwordContainer}>
        <TextInput
          style={Styles.nameInput}
          secureTextEntry={true}
          placeholder="* Confirm Password"
          placeholderTextColor={colors.textFaded2}
        />
      </View>
      <TouchableOpacity style={Styles.loginContainer}>
        <Text style={Styles.loginText}>Sign Up</Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 20,
          marginBottom: 50
        }}>
        <Text style={{color: '#969696'}}>Do you have an account?</Text>
        <TouchableOpacity onPress={()=>{navigation.navigate("Login")}}>
          <Text style={{color: colors.primary}}> Log In</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
    width: 250
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
    height: 50,
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
    height: 50,
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

  phoneNumContainer: {
    borderColor: colors.secondary,
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    //alignItems: 'center',
    height: 50,
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
