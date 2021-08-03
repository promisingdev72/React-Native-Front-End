import React from 'react';
import {
  View, 
  Text,
  TextInput,
  StyleSheet
} from 'react-native';
import colors from '../../../res/colors';
import { Appbar, Menu, Divider } from 'react-native-paper';

export default function EditUserBio() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        marginTop: 20,
        alignItems: "center"
      }}>
      <View style={Styles.groupContainer}>
        <Text style={Styles.labelContainer}>UserName</Text>
        <TextInput style={Styles.textInputContainer} placeholder={"User Name"} value = {"John Doe"}/>
      </View>
      <View style={Styles.groupContainer}>
        <Text style={Styles.labelContainer}>Name</Text>
        <View style={{width: "100%", flexDirection: "row", justifyContent: "space-between"}}>
          <TextInput style={Styles.userNameContainer} placeholder={"First Name"}/>
          <TextInput style={Styles.userNameContainer} placeholder={"Last Name"}/>
        </View>
      </View>
      <View style={Styles.groupContainer}>
        <Text style={Styles.labelContainer}>City</Text>
        <TextInput
          style={Styles.textInputContainer} placeholder={"City"}/>
      </View>
      <View style={Styles.groupContainer}>
        <Text style={Styles.labelContainer}>About Me</Text>
        <TextInput
          style={Styles.aboutMeContainer} placeholder={"About me"} multiline value={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"} />
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  labelContainer:{
    alignSelf:"flex-start", 
    fontSize: 16, 
    color: colors.secondary
  },
  groupContainer: {
    marginBottom: 15,
    width: "90%", 
    flexDirection: "column", 
    alignItems: "center"
  },
  textInputContainer: {
    width: "100%", 
    color: 'black', 
    fontSize: 18, 
    borderColor:colors.primary, 
    borderWidth: 1,
    padding: 3,
    borderRadius: 3
  },
  userNameContainer: {
    width: "47%",
    color: 'black', 
    fontSize: 18, 
    borderColor:colors.primary, 
    borderWidth: 1,
    padding: 3,
    borderRadius: 3
  },
  aboutMeContainer: {
    width: "100%",
    color: 'black', 
    marginBottom: 20,  
    borderColor: colors.primary, 
    borderWidth:1,
    padding: 3,
    borderRadius: 3
  }
})