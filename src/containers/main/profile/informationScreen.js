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

export default function informationScreen({navigation}) {
  const [text1, onChangeText1] = React.useState("Christofer Robin");
  const [text2, onChangeText2] = React.useState("Andersson");
  const [text3, onChangeText3] = React.useState("19800101-1234");
  const [text4, onChangeText4] = React.useState("Storgatan1");
  const [text5, onChangeText5] = React.useState("123 45");
  const [text6, onChangeText6] = React.useState("Stockholm");
  const [text7, onChangeText7] = React.useState("070-123 456");
  const [text8, onChangeText8] = React.useState("christoferrobin@gmail.com");

  return (
    <ScrollView>
      <View style={Styles.container}>
          <View style={{justifyContent:'space-between',flexDirection:'row'}}>
            <TouchableOpacity style={Styles.backBtn}>
               <Image source={images.arrow1}/>
            </TouchableOpacity>
          </View>
          <View style={{marginTop:30}}>
              <Text style={{fontSize:30}}>Mina uppgifter</Text>
          </View>
          <View style={{marginTop:30}}>
              <Text>Förnamn</Text>
              <TextInput
                    style={Styles.input}
                    onChangeText={onChangeText1}
                    value={text1}
                />
          </View>
          <View style={{marginTop:15}}>
              <Text>Efternamn</Text>
              <TextInput
                    style={Styles.input}
                    onChangeText={onChangeText2}
                    value={text2}
                />
          </View>
          <View style={{marginTop:15}}>
              <Text>Personnummer</Text>
              <TextInput
                    style={Styles.input}
                    onChangeText={onChangeText3}
                    value={text3}
                />
          </View>
          <View style={{marginTop:15}}>
              <Text>Adress</Text>
              <TextInput
                    style={Styles.input}
                    onChangeText={onChangeText4}
                    value={text4}
                />
          </View>
          <View style={{marginTop:15}}>
              <Text>Postnummer</Text>
              <TextInput
                    style={Styles.input}
                    onChangeText={onChangeText5}
                    value={text5}
                />
          </View>
          <View style={{marginTop:15}}>
              <Text>Ort</Text>
              <TextInput
                    style={Styles.input}
                    onChangeText={onChangeText6}
                    value={text6}
                />
          </View>
          <View style={{marginTop:15}}>
              <Text>Telefon</Text>
              <TextInput
                    style={Styles.input}
                    onChangeText={onChangeText7}
                    value={text7}
                />
          </View>
          <View style={{marginTop:15}}>
              <Text>E-post</Text>
              <TextInput
                    style={Styles.input}
                    onChangeText={onChangeText8}
                    value={text8}
                />
          </View>
          <View style={{marginTop:20,backgroundColor:'#564CAF',padding:10,justifyContent:'center',alignItems:'center',borderBottomRightRadius:10,borderTopLeftRadius:10}}>
              <Text style={{color:'#fff',fontSize:20}}>Uppdatera</Text>
          </View>
      </View>
    </ScrollView>
  );
}

const Styles = StyleSheet.create({
    input:{
        backgroundColor:'#F3F8FF',
        borderTopLeftRadius:10,
        borderBottomRightRadius:10,
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
