import React from 'react';
import images from 'res/images';
import Swiper from 'react-native-swiper';
import Modal from 'react-native-modal';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground
} from 'react-native';

export default function newsScreen({navigation}) {

  return (
    <ScrollView>
        <View style={Styles.container}>
            <View>
                <ImageBackground source={images.women} style={{width:'100%', height:300}}>
                    <TouchableOpacity style={Styles.backBtn}>
                        <Image source={images.arrow_left}></Image>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
            <View style={Styles.contentBody}>
                <View>
                    <Text style={{color:'#FFC267',fontWeight:'bold',textAlign:'center',fontSize:20}}>NY TJÄNST</Text>
                </View>
                <View style={{justifyContent:'center', alignItems:'center',marginTop:30}}>
                    <Text style={{fontSize:28}}>Boka rådgivning via video!</Text>
                    <Text style={{fontSize:28}}>video!</Text>
                </View>
                <View style={{marginTop:20}}>
                    <Text style={{textAlign:'center',fontSize:18,lineHeight:25,color:'#575A7B'}}>
                        Vi erbjuder nu videobesök hos oss så  du{'\n'}slipper
                        lämna hemmet. Kostnad  295 SEK{'\n'} för 15 min rådgivning.  
                    </Text>
                </View>
                <View style={{marginTop:50,justifyContent:'center',alignItems:'center'}}>
                    <View style={{width:100,height:5,backgroundColor:'#FFC267'}}></View>
                </View>
                <View style={{marginTop:50,paddingHorizontal:30}}>
                    <Text style={{fontSize:18,color:'#575A7B'}}>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium,
                        totam rem aperiam, eaque ipsa quae ab
                        illo inventore veritatis et  quasi architecto
                        beatae vitae dicta sunt explicabo. 
                        {'\n'}{'\n'}{'\n'}
                        Nemo enim ipsam voluptatem quia voluptas sit
                        aspernatur aut odit aut fugit, sed quia
                        consequuntur magni dolores eos qui ratione
                        voluptatem sequi nesciunt.
                    </Text>
                </View>
                <View style={{marginTop:30,paddingHorizontal:30}}>
                    <TouchableOpacity style={Styles.btnBoka}>
                        <Text style={{color:'#fff', fontSize:20}}>Boka</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </ScrollView>
  );
}

const Styles = StyleSheet.create({
    btnBoka:{
        width:'100%',
        height:50,
        backgroundColor:'#564CAF',
        borderTopLeftRadius:15,
        borderBottomRightRadius:15,
        justifyContent:'center',
        alignItems:'center'
    },
    contentBody:{
        backgroundColor:'#fff',
        width:'100%',
        height:750,
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
    container: {
        flex: 1,
        backgroundColor:'#fff',
    },
});