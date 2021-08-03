import React from 'react';
import images from 'res/images';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

export default function OppointmentScreen({navigation}) {
  return (
    <ScrollView>
      <View style={Styles.container}>
          <View>
            <TouchableOpacity style={Styles.backBtn}>
               <Image source={images.arrow1}/>
            </TouchableOpacity>
          </View>
          <View style={{marginTop:30}}>
              <Text style={{fontSize:30}}>Mina bokningar</Text>
          </View>
          <View style={{padding:30,backgroundColor:'#6658EA',borderTopLeftRadius:20,borderBottomRightRadius:20,flexDirection:'row'}}>
              <Image source={images.avatar1} style={{width:60,height:60,borderTopLeftRadius:10,borderBottomRightRadius:10}}/>
              <View style={{marginLeft:20}}>
                  <View style={{flexDirection:'row'}}>
                    <Text style={{color:'#fff'}}>Undersökning</Text>
                    <Text style={{color:'#FFC267',marginLeft:20}}>Klinik</Text>
                  </View>
                  <Text style={{color:'#fff',fontSize:17}}>Tdl. Anna Andersson</Text>
                  <Text style={{color:'#fff'}}>25 mar kl. 17:00 - 17:45</Text>
              </View>
          </View>
          <View style={{padding:30,backgroundColor:'#6658EA',borderTopLeftRadius:20,borderBottomRightRadius:20,flexDirection:'row',marginTop:30}}>
              <Image source={images.avatar1} style={{width:60,height:60,borderTopLeftRadius:10,borderBottomRightRadius:10}}/>
              <View style={{marginLeft:20}}>
                  <View style={{flexDirection:'row'}}>
                    <Text style={{color:'#fff'}}>Undersökning</Text>
                    <Text style={{color:'#FFC267',marginLeft:20}}>Klinik</Text>
                  </View>
                  <Text style={{color:'#fff',fontSize:17}}>Tdl. Anna Andersson</Text>
                  <Text style={{color:'#fff'}}>25 mar kl. 17:00 - 17:45</Text>
              </View>
          </View>
          <View style={{padding:30,backgroundColor:'#6658EA',borderTopLeftRadius:20,borderBottomRightRadius:20,flexDirection:'row',marginTop:30}}>
              <Image source={images.avatar1} style={{width:60,height:60,borderTopLeftRadius:10,borderBottomRightRadius:10}}/>
              <View style={{marginLeft:20}}>
                  <View style={{flexDirection:'row'}}>
                    <Text style={{color:'#fff'}}>Undersökning</Text>
                    <Text style={{color:'#FFC267',marginLeft:20}}>Klinik</Text>
                  </View>
                  <Text style={{color:'#fff',fontSize:17}}>Tdl. Anna Andersson</Text>
                  <Text style={{color:'#fff'}}>25 mar kl. 17:00 - 17:45</Text>
              </View>
          </View>
          <View style={{padding:30,backgroundColor:'#6658EA',borderTopLeftRadius:20,borderBottomRightRadius:20,flexDirection:'row',marginTop:30}}>
              <Image source={images.avatar1} style={{width:60,height:60,borderTopLeftRadius:10,borderBottomRightRadius:10}}/>
              <View style={{marginLeft:20}}>
                  <View style={{flexDirection:'row'}}>
                    <Text style={{color:'#fff'}}>Undersökning</Text>
                    <Text style={{color:'#FFC267',marginLeft:20}}>Klinik</Text>
                  </View>
                  <Text style={{color:'#fff',fontSize:17}}>Tdl. Anna Andersson</Text>
                  <Text style={{color:'#fff'}}>25 mar kl. 17:00 - 17:45</Text>
              </View>
          </View>
      </View>
    </ScrollView>
  );
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#F0F0FF',
    padding:30,
  },
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
});
