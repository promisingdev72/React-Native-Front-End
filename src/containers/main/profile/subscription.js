import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import palette from 'res/palette';
import colors from '../../../res/colors';
import images from '../../../res/images';
import { Appbar, Menu, Provider, Card, Title, Paragraph, Button, Divider } from 'react-native-paper';
const data = [{key: '1'}];
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function subscription() {
  return (
    <View style={{width: windowWidth, height: windowHeight, justifyContent: "center", alignItems: "center"}}>
      <View style={{ width: "80%", height: "80%", margin: 10, padding: 10}}>
        <Card style={{marginBottom: 20}} onPress={()=>{console.log("month")}}>
          <Card.Content>
            <Title style={Styles.titleContainer}>Monthly Plan</Title>
            <Divider style={Styles.dividerStyle}/>
            <View style={Styles.priceContainer}>
              <Text style={Styles.des}>$</Text><Text style={Styles.priceNum}>50</Text><Text style={Styles.des_type}>/Month</Text>
            </View>
            <View style={Styles.description}>
              <Text>See if it’s right for you!</Text>
            </View>
          </Card.Content>
        </Card>
        <Card style={{marginBottom: 20}} onPress={()=>{console.log("anual")}}>
          <Card.Content>
            <Title style={Styles.titleContainer}>Annual Plan</Title>
            <Divider style={Styles.dividerStyle}/>
            <View style={Styles.priceContainer}>
              <Text style={Styles.des}>$</Text><Text style={Styles.priceNum}>300</Text><Text style={Styles.des_type}>/Month</Text>
            </View>
            <View style={Styles.description}>
              <Text>Save 50%!</Text>
            </View>
          </Card.Content>
        </Card>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  titleContainer:{
    color: colors.primary, 
    fontSize: 20, 
    marginBottom: 15
  },
  dividerStyle: {
    height: 0.5, 
    backgroundColor: colors.secondary, 
    width: "100%", 
    marginBottom: 15
  },
  priceContainer: {
    flexDirection: "row", 
    width: "100%", 
    justifyContent: "center", 
    marginBottom: 20
  },
  des: {
    color: colors.secondary, 
    fontSize: 16
  },
  des_type: {
    marginTop: 10, 
    color:colors.secondary, 
    fontSize: 18
  },
  priceNum: {
    color: colors.secondary, 
    fontSize: 28
  },
  description: {
    flexDirection: "row", 
    width: "100%", 
    justifyContent: "center"
  }
})
