import React from 'react';
import {
  View, 
  Text,
  TextInput,
  StyleSheet
} from 'react-native';
import colors from '../../../res/colors';
import { Appbar, Menu, Divider, Checkbox } from 'react-native-paper';
export default function UserSettingBio() {
  const [checked, setChecked] = React.useState(false);
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        marginTop: 20,
        alignItems: "center"
      }}>
      <View style={Styles.groupContainer}>
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked(!checked);
          }}
        />
        <Text style={Styles.labelContainer}>Send me Notification</Text>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  labelContainer:{
    fontSize: 16, 
    color: colors.secondary
  },
  groupContainer: {
    marginBottom: 15,
    width: "90%", 
    flexDirection: "row", 
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