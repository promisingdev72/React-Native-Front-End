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

export default function searchScreen({navigation}) {
  return (
    <ScrollView>
      <View style={Styles.container}>
          <ImageBackground source={images.fall} style={{width:'100%', height:250}}>
              <TouchableOpacity style={Styles.backBtn}>
                <Image source={images.arrow_left}></Image>
              </TouchableOpacity>
          </ImageBackground>
          <View style={{justifyContent:'center',alignItems:'center',marginTop:-70}}>
            <View style={Styles.circle}>
              <Image source={images.logo} style={{width:70, height:70}}></Image>
            </View>
          </View>
          <View style={{marginTop:20,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:30}}>Oral Care AB</Text>
            <Text style={{color:'#575A7B',fontSize:15}}>Storgatan 1, 123 45 Stockholm</Text>
          </View>
          <View style={{paddingHorizontal:20,marginTop:30,zIndex:2}}>
            <View style={{borderTopLeftRadius:20}}>
              <Image source={images.map} style={{width:350,height:200,borderTopLeftRadius:20}}></Image>
            </View>
            <View style={{backgroundColor:'#fff',paddingHorizontal:30,marginBottom:30,borderBottomRightRadius:20}}>
              <Text style={{fontWeight:'bold',color:'#6658EA',fontSize:16,marginTop:20}}>KONTAKTA OSS</Text>
              <View style={{marginTop:20,flexDirection:'row',justifyContent:'space-evenly'}}>
                <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}}>
                  <Image source={images.local} style={{width:80,height:80}}></Image>
                  <Text style={{color:'#575A7B',marginTop:5}}>Hitta hit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}}>
                  <Image source={images.phone} style={{width:80,height:80}}></Image>
                  <Text style={{color:'#575A7B',marginTop:5}}>Ring</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}}>
                  <Image source={images.message} style={{width:80,height:80}}></Image>
                  <Text style={{color:'#575A7B',marginTop:5}}>Maila</Text>
                </TouchableOpacity>
              </View>
              <View style={{marginTop:20}}>
                <Text style={{fontWeight:'bold',color:'#6658EA',fontSize:16}}>ÖPPETTIDER</Text>
                <View style={{flexDirection:'row'}}>
                  <Text style={{fontWeight:'bold',color:'#575A7B',lineHeight:20,marginTop:20}}>
                    Mån:{'\n'}
                    Tis:{'\n'}
                    Ons:{'\n'}
                    Tors:{'\n'}
                    Fre:{'\n'}
                    Lör:{'\n'}
                    Sön:{'\n'}
                  </Text>
                  <Text style={{color:'#575A7B',lineHeight:20,marginTop:20,marginLeft:10}}>
                    07:00 - 17:00{'\n'}
                    07:00 - 17:00{'\n'}
                    07:00 - 17:00{'\n'}
                    07:00 - 17:00{'\n'}
                    07:00 - 17:00{'\n'}
                    Stängt{'\n'}
                    Stängt{'\n'}
                  </Text>
                </View>
              </View>
              <View>
                <Text style={{fontWeight:'bold',color:'#6658EA',fontSize:16}}>BESKRVNING</Text>
                <Text style={{marginTop:20,lineHeight:25,fontSize:15,color:'#575A7B'}}>
                  Välkommen till Oral Care! Vi erbjuder{'\n'}allmäntandvård,
                  specialisttandvård,{'\n'}tandhygienistbehandling, tandblekning,{'\n'}
                  estetisk tandvård, barntandvård och{'\n'}hemtandvård. Ring oss
                  eller boka din tid{'\n'}direkt online.
                </Text>
              </View>
              <View style={{marginTop:30}}>
                <Text style={{fontWeight:'bold',color:'#6658EA',fontSize:16}}>VÄRA TJÄNSTER</Text>
                <Text style={{marginTop:20,lineHeight:25,fontSize:15,color:'#575A7B'}}>
                  Akuttandvård{'\n'}
                  Allmäntandvård{'\n'}
                  Barntandvård{'\n'}
                  Hygienistbehandling{'\n'}
                  Estetisk tandvård{'\n'}
                  Specialisttandvård{'\n'}
                  Mobil tandvård{'\n'}
                  Vuxentandvård{'\n'}
                  Våra behandlingar{'\n'}
                </Text>
              </View>
            </View>
          </View>
          <View style={{marginTop:-170,zIndex:1}}>
            <Image source={images.wave} style={{width:'100%',height:90}}></Image>
            <View style={{width:'100%',height:1200,backgroundColor:'#2B265A',padding:45,}}>
              <View style={{marginTop:80}}>
                <Text style={{color:'#fff',fontSize:30}}>Vår personal</Text>
                <Text style={{color:'#575A7B',fontSize:20}}>Hos Oral Care hittar du oss</Text>
              </View>
              <View style={{marginTop:50}}>
                <View style={{flexDirection:'row'}}>
                    <View style={{marginLeft:-30}}>
                      <Image source={images.avatar1} style={{width:150,height:150,borderBottomRightRadius:20,borderTopLeftRadius:20}}></Image>
                      <View style={{justifyContent:'center',alignItems:'center',marginTop:15}}>
                        <Text style={{color:'#fff',fontSize:15}}>Anna Andersson</Text>
                        <Text style={{color:'#8D9AAE'}}>Tandiåkare</Text>
                      </View>
                    </View>
                    <View style={{marginLeft:50}}>
                      <Image source={images.avatar1} style={{width:150,height:150,borderBottomRightRadius:20,borderTopLeftRadius:20}}></Image>
                      <View style={{justifyContent:'center',alignItems:'center',marginTop:15}}>
                      <Text style={{color:'#fff',fontSize:15}}>Anna Andersson</Text>
                      <Text style={{color:'#8D9AAE'}}>Tandiåkare</Text>
                      </View>
                    </View>
                </View>
                <View style={{flexDirection:'row',marginTop:20}}>
                    <View style={{marginLeft:-30}}>
                      <Image source={images.avatar1} style={{width:150,height:150,borderBottomRightRadius:20,borderTopLeftRadius:20}}></Image>
                      <View style={{justifyContent:'center',alignItems:'center',marginTop:15}}>
                        <Text style={{color:'#fff',fontSize:15}}>Anna Andersson</Text>
                        <Text style={{color:'#8D9AAE'}}>Tandiåkare</Text>
                      </View>
                    </View>
                    <View style={{marginLeft:50}}>
                      <Image source={images.avatar1} style={{width:150,height:150,borderBottomRightRadius:20,borderTopLeftRadius:20}}></Image>
                      <View style={{justifyContent:'center',alignItems:'center',marginTop:15}}>
                      <Text style={{color:'#fff',fontSize:15}}>Anna Andersson</Text>
                      <Text style={{color:'#8D9AAE'}}>Tandiåkare</Text>
                      </View>
                    </View>
                </View>
                <View style={{flexDirection:'row',marginTop:20}}>
                    <View style={{marginLeft:-30}}>
                      <Image source={images.avatar1} style={{width:150,height:150,borderBottomRightRadius:20,borderTopLeftRadius:20}}></Image>
                      <View style={{justifyContent:'center',alignItems:'center',marginTop:15}}>
                        <Text style={{color:'#fff',fontSize:15}}>Anna Andersson</Text>
                        <Text style={{color:'#8D9AAE'}}>Tandiåkare</Text>
                      </View>
                    </View>
                    <View style={{marginLeft:50}}>
                      <Image source={images.avatar1} style={{width:150,height:150,borderBottomRightRadius:20,borderTopLeftRadius:20}}></Image>
                      <View style={{justifyContent:'center',alignItems:'center',marginTop:15}}>
                      <Text style={{color:'#fff',fontSize:15}}>Anna Andersson</Text>
                      <Text style={{color:'#8D9AAE'}}>Tandiåkare</Text>
                      </View>
                    </View>
                </View>
                <View style={{flexDirection:'row',marginTop:20}}>
                    <View style={{marginLeft:-30}}>
                      <Image source={images.avatar1} style={{width:150,height:150,borderBottomRightRadius:20,borderTopLeftRadius:20}}></Image>
                      <View style={{justifyContent:'center',alignItems:'center',marginTop:15}}>
                        <Text style={{color:'#fff',fontSize:15}}>Anna Andersson</Text>
                        <Text style={{color:'#8D9AAE'}}>Tandiåkare</Text>
                      </View>
                    </View>
                    <View style={{marginLeft:50}}>
                      <Image source={images.avatar1} style={{width:150,height:150,borderBottomRightRadius:20,borderTopLeftRadius:20}}></Image>
                      <View style={{justifyContent:'center',alignItems:'center',marginTop:15}}>
                      <Text style={{color:'#fff',fontSize:15}}>Anna Andersson</Text>
                      <Text style={{color:'#8D9AAE'}}>Tandiåkare</Text>
                      </View>
                    </View>
                </View>
              </View>
            </View>
          </View>
          
      </View>
    </ScrollView>
  );
}
const Styles = StyleSheet.create({
  circle:{
    width: 130,
    height: 130,
    borderBottomRightRadius:65,
    borderTopLeftRadius:65,
    borderTopRightRadius:65,
    borderBottomLeftRadius:65,
    backgroundColor:'#fff',
    justifyContent:'center',
    alignItems:'center'
  },
  container: {
    flex: 1,
  },
  backBtn:{
    justifyContent:'center',
    alignItems:'center',
    width:45,
    height:45,
    backgroundColor:'#6658EA',
    opacity:0.8,
    borderTopLeftRadius:10,
    borderBottomRightRadius:10,
    top:20,
    left:25
  },
});
