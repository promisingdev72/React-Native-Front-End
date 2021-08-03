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

export default function dentistryScreen({navigation}) {
  return (
    <ScrollView>
      <View style={Styles.container}>
          <View style={{paddingHorizontal:30}}>
            <View style={Styles.personInfo}>
                <Image source={images.home_pic1} style={{height:50, width: 50}}></Image>
                <View style={{marginLeft:20}}>
                    <Text style={{fontSize:15, marginTop:3}}>Christofer Robin</Text>
                    <Text style={{fontSize:17, color:'#575A7B'}}>Välkommen!</Text>
                </View>
                <View style={{marginLeft:110}}>
                    <Image source={images.settingIcon} style={{width:50,height:50}}></Image>
                </View>
            </View>
            <View style={{marginTop:30}}>
                <Text style={{fontSize:30}}>Min tandvård</Text>
            </View>
            <View style={{marginTop:70,borderTopLeftRadius:20,borderBottomRightRadius:20,padding:20,backgroundColor:'#fff'}}>
                <TouchableOpacity style={{flexDirection:'row',alignItems:'center',marginBottom:30}} onPress={() => navigation.navigate('Notification')}>
                    <Image source={images.msgIcon} style={{width:45,height:45}}></Image>
                    <Text style={{marginLeft:15,fontSize:17}}>Min inkorg</Text>
                    <View style={{backgroundColor:'#F9655B',width:20,height:20,borderRadius:10,justifyContent:'center',alignItems:'center',marginLeft:120}}>
                        <Text style={{color:'#fff'}}>1</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.linkTo} onPress={() => navigation.navigate('Oppointment')}>
                    <Image source={images.clockIcon} style={{width:45,height:45}}></Image>
                    <Text style={{marginLeft:15,fontSize:17}}>Mina bokningar</Text>
                    <View style={{backgroundColor:'#F9655B',width:20,height:20,borderRadius:10,justifyContent:'center',alignItems:'center',marginLeft:80}}>
                        <Text style={{color:'#fff'}}>1</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection:'row',alignItems:'center',marginBottom:30}} onPress={() => navigation.navigate('Inbox')}>
                    <Image source={images.userIcon} style={{width:45,height:45}}></Image>
                    <Text style={{marginLeft:15,fontSize:17}}>Min barn</Text>
                    <View style={{backgroundColor:'#FFF9EF',width:80,height:20,borderRadius:10,justifyContent:'center',alignItems:'center',marginLeft:85}}>
                        <Text style={{color:'#FFC671',fontSize:10}}>Hösten 2021</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{marginTop:30,borderTopLeftRadius:20,borderBottomRightRadius:20,padding:20,backgroundColor:'#fff'}}>
                <TouchableOpacity style={{flexDirection:'row',alignItems:'center',marginBottom:30,borderBottomWidth:1,borderBottomColor:'#F4F8FE',paddingBottom:20}} onPress={() => navigation.navigate('myMail')}>
                    <Image source={images.docIcon} style={{width:45,height:45}}></Image>
                    <Text style={{marginLeft:15,fontSize:17}}>Min journal</Text>
                    <View style={{backgroundColor:'#FFF9EF',width:80,height:20,borderRadius:10,justifyContent:'center',alignItems:'center',marginLeft:65}}>
                        <Text style={{color:'#FFC671',fontSize:10}}>Hösten 2021</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection:'row',alignItems:'center',marginBottom:30,paddingVertical:20,borderBottomWidth:1,borderBottomColor:'#F4F8FE',paddingBottom:20}} onPress={() => navigation.navigate('Information')}>
                    <Image source={images.mediaIcon} style={{width:45,height:45}}></Image>
                    <Text style={{marginLeft:15,fontSize:17}}>Mina röntgenbilder</Text>
                    <View style={{backgroundColor:'#FFF9EF',width:80,height:20,borderRadius:10,justifyContent:'center',alignItems:'center',marginLeft:10}}>
                        <Text style={{color:'#FFC671',fontSize:10}}>Hösten 2021</Text>
                    </View>
                </TouchableOpacity>
                <View style={{flexDirection:'row',alignItems:'center',marginBottom:30,borderBottomWidth:1,borderBottomColor:'#F4F8FE',paddingBottom:20}}>
                    <Image source={images.clipIcon} style={{width:45,height:45}}></Image>
                    <Text style={{marginLeft:15,fontSize:17}}>Min hälsodeklaration</Text>
                    <View style={{backgroundColor:'#FFF9EF',width:80,height:20,borderRadius:10,justifyContent:'center',alignItems:'center',marginLeft:5}}>
                        <Text style={{color:'#FFC671',fontSize:10}}>Hösten 2021</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row',alignItems:'center',marginBottom:30,borderBottomWidth:1,borderBottomColor:'#F4F8FE',paddingBottom:20}}>
                    <Image source={images.dollarIcon} style={{width:45,height:45}}></Image>
                    <Text style={{marginLeft:15,fontSize:17}}>Betalningar & kvitton</Text>
                    <View style={{backgroundColor:'#FFF9EF',width:80,height:20,borderRadius:10,justifyContent:'center',alignItems:'center',marginLeft:5}}>
                        <Text style={{color:'#FFC671',fontSize:10}}>Hösten 2021</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row',alignItems:'center',marginBottom:30}}>
                    <Image source={images.heartIcon} style={{width:45,height:45}}></Image>
                    <Text style={{marginLeft:15,fontSize:17}}>E-recept</Text>
                    <View style={{backgroundColor:'#FFF9EF',width:80,height:20,borderRadius:10,justifyContent:'center',alignItems:'center',marginLeft:100}}>
                        <Text style={{color:'#FFC671',fontSize:10}}>Hösten 2021</Text>
                    </View>
                </View>
            </View>
            <View style={{marginTop:70,borderTopLeftRadius:20,borderBottomRightRadius:20,marginBottom:70,padding:20,backgroundColor:'#fff'}}>
                <View>
                    <Text style={{fontWeight:'bold'}}>Synk med journalsystemet</Text>
                    <Text style={{lineHeight:25,marginTop:10}}>
                        Vi synkar kontinuerligt med vårt journalsystem
                        för att ge dig den senaste informationen.
                    </Text>
                    <Text style={{textAlign:'center',marginTop:40,lineHeight:25,color:'#8D9AAE'}}>
                        Senaste synkad: 3 mars 2021 13:34 {'\n'}
                        från Opus Dental
                    </Text>
                </View>
            </View>
          </View>
      </View>
    </ScrollView>
  );
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#F0F0FF'
  },
  personInfo:{
    flexDirection:'row',
    paddingTop:30,
  },
  linkTo:{
    flexDirection:'row',
    alignItems:'center',
    marginBottom:30,
    borderTopWidth:1,
    borderTopColor:'#F4F8FE',
    paddingVertical:20,
    borderBottomWidth:1,
    borderBottomColor:'#F4F8FE'
  }
});
