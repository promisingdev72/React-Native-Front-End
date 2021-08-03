import React from 'react';
import {View, Text, Image, StyleSheet, TextInput} from 'react-native';
import colors from '../../../res/colors';
import images from '../../../res/images';
import { Card, Button } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
export default function addPostScreen() {
  const [proImage, setProImage] = React.useState("");
  return (
    <View style={{
      flexDirection: 'column',
      alignItems: "center",
      flex: 1
    }}>
      <ScrollView
        contentContainerStyle={{justifyContent: "center", alignItems: "center", marginTop: 20, paddingBottom: 30}}
        showsVerticalScrollIndicator={false}
      >
        {
          proImage==""?<Card style={{marginBottom: 20, height: 180, flexDirection: "row", justifyContent: "center", alignItems: "center"}} onPress={()=>{console.log("month"); setProImage("pro")}}>
          <Card.Content>
            <View style={Styles.btnTextContainer}>
              <Text style={Styles.btnText}>Select Image/Video</Text>
            </View>
          </Card.Content>
          </Card>:<Card style={{marginBottom: 20, height: 180, flexDirection: "row", justifyContent: "center", alignItems: "center", padding: 0}} onPress={()=>{console.log("month"); setProImage("")}}>
            <Image source = {images.pro1} style={{width: "100%", height: "100%"}}/>
          </Card>
        }
        <View style={Styles.groupContainer}>
          <Text style={Styles.labelContainer}>Product Name</Text>
          <TextInput style={Styles.textInputContainer} placeholder={"Product Name"} value = {"bike A 30"}/>
        </View>
        <View style={Styles.groupContainer}>
          <Text style={Styles.labelContainer}>Price</Text>
          <View style={{width: "100%", flexDirection: "row", justifyContent: "space-between"}}>
            <TextInput keyboardType={'numeric'} style={Styles.priceInputContainer} placeholder={"Price"}/>
            <Text style={{position: 'absolute', left: 5, top: 7, fontSize: 16, color: "gray"}}>$</Text>
          </View>
        </View>
        <View style={Styles.groupContainer}>
          <Text style={Styles.labelContainer}>City</Text>
          <TextInput
            style={Styles.textInputContainer} placeholder={"City"}/>
        </View>
        <View style={Styles.groupContainer}>
          <Text style={Styles.labelContainer}>Description</Text>
          <TextInput
            style={Styles.aboutMeContainer} placeholder={"Description"} multiline  />
        </View>
        <View style={Styles.groupContainer}>
          <Button icon="camera" mode="contained" color={colors.primary} onPress={() => console.log('Pressed')} labelStyle={{color: "white"}}>
            Publish
          </Button>
        </View>
      </ScrollView>
    </View>
  );
}

const Styles = StyleSheet.create({
  btnTextContainer: {
    flexDirection: "row", 
    width: "100%", 
    justifyContent: "center", 
  },
  btnText: {
    color: colors.secondary, 
    fontSize: 28
  },
  labelContainer:{
    alignSelf:"flex-start", 
    fontSize: 16, 
    color: colors.secondary
  },
  groupContainer: {
    marginBottom: 15,
    width: "95%", 
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
  priceInputContainer: {
    width: "100%", 
    color: 'black', 
    fontSize: 18, 
    borderColor:colors.primary, 
    borderWidth: 1,
    padding: 3,
    paddingLeft: 20,
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
    height: 100,
    borderColor: colors.primary, 
    borderWidth:1,
    padding: 3,
    borderRadius: 3,
    textAlignVertical: "top"
  }
})
