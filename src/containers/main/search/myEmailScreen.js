import React from 'react';
import images from 'res/images';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export default function myEmailScreen({navigation}) {
  return (
    <ScrollView>
      <View style={Styles.container}>
          <View style={{justifyContent:'space-between',flexDirection:'row'}}>
            <TouchableOpacity style={Styles.backBtn}>
               <Image source={images.arrow1}/>
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop:30}} onPress={() => navigation.navigate('SendEmail')}>
                <Image source={images.msg1} style={{width:50,height:50}}/>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection:'row',marginTop:30}}>
              <Image source={images.avatar1} style={{width:80,height:80,borderTopLeftRadius:15,borderBottomRightRadius:15}}></Image>
              <View style={{marginLeft:20,justifyContent:'center',}}>
                <Text style={{color:'#FFC267'}}>Oral Care</Text>
                <Text style={{fontSize:17}}>Välkommen!</Text>
                <Text style={{color:'#8D9AAE'}}>2021-03-29</Text>
              </View>
          </View>
          <View style={{marginTop:30}}>
            <Text style={{color:'#575A7B',lineHeight:20}}>
              Hej Christofer Robin!{'\n'}{'\n'}Vad roligt att du vill prova vår app.{'\n'}{'\n'}
              Lorem ipsum dolor sit amet, consectetur adipiscing{'\n'}elit.
              In urna lectus, mattis non accumsan in, tempor{'\n'}dictum neque.
              In hac habitasse platea dictumst. Lorem ipsum dolor sit amet,
              consectetur adipiscing.{'\n'}{'\n'}Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. In urna lectus, mattis non accumsan in, tempor
              dictum neque. In hac habitasse platea dictumst. Lorem ipsum dolor
              sit amet, consectetur adipiscing.{'\n'}{'\n'}Vi ser fram emot att ta hand
              om dig,{'\n'}Oral Care
            </Text>
          </View>
          <TouchableOpacity style={{padding:10,backgroundColor:'#564CAF',justifyContent:'center',alignItems:'center',marginTop:40,borderBottomRightRadius:15,borderTopLeftRadius:15}}>
            <Text style={{color:'#fff',fontSize:20}}>Svara</Text>
          </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
const Styles = StyleSheet.create({
    backBtn:{
        justifyContent:'center',
        alignItems:'center',
        width:45,
        height:45,
        borderWidth:1,
        borderColor:'#6658EA',
        opacity:0.8,
        borderTopLeftRadius:10,
        borderBottomRightRadius:10,
        marginTop:30,
       },
  container: {
    flex: 1,
    backgroundColor:'#fff',
    padding:30,
  },
});
