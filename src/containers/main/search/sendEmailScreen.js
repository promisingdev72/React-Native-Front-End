import React from 'react';
import images from 'res/images';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default function sendEmailScreen({navigation}) {
  const [text1, onChangeText1] = React.useState("Jag har tandvärk!!");
  const [text2, onChangeText2] = React.useState("Snälla hjälp mig. Jag har så ont. Har inte kunnat sova på hela natten. Värktabletterna ni rekommenderade hjälper inte. Ring mig så fort ni läst detta.Kram Anna ");

  return (
    <ScrollView>
      <View style={Styles.container}>
         <View style={{justifyContent:'space-between',flexDirection:'row'}}>
            <TouchableOpacity style={Styles.backBtn}>
               <Image source={images.arrow1}/>
            </TouchableOpacity>
          </View>
          <View style={{marginTop:30}}>
              <Text style={{fontSize:30}}>Maila kliniken</Text>
          </View>
          <View style={{marginTop:30}}>
              <Text style={{fontSize:18}}>Rubrik</Text>
              <TextInput
                    style={Styles.input1}
                    onChangeText={onChangeText1}
                    value={text1}
                />
          </View>
          <View style={{marginTop:10}}>
              <Text style={{fontSize:18}}>Text</Text>
              <TextInput
                    style={Styles.input2}
                    onChangeText={onChangeText2}
                    value={text2}
                    multiline={true}
                    textAlignVertical='top'
                    numberOfLines={6}
                />
          </View>
          <View style={{marginTop:30 ,paddingVertical:10,backgroundColor:'#564CAF',justifyContent:'center',alignItems:'center',borderBottomRightRadius:20,borderTopLeftRadius:20}}>
              <Text style={{color:'#fff', fontSize:20}}>Skicka</Text>
          </View>
      </View>
    </ScrollView>
  );
}

const Styles = StyleSheet.create({
    input1:{
        backgroundColor:'#F3F8FF',
        borderTopLeftRadius:10,
        borderBottomRightRadius:10,
        padding:10
    },
    input2:{
        backgroundColor:'#F3F8FF',
        borderTopLeftRadius:15,
        borderBottomRightRadius:15,
        height:300
    },
  container: {
    flex: 1,
    backgroundColor:'#fff',
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
