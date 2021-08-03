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

export default function inboxScreen({navigation}) {

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
          <View style={{marginTop:30}}>
              <Text style={{fontSize:30}}>Min inkorg</Text>
          </View>
          <ScrollView style={{marginTop:30}}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={200}
            decelerationRate="fast"
            >
                <View style={Styles.eleCard}>
                    <Image source={images.avatar1} style={{width:60,height:60,borderTopLeftRadius:10,borderBottomRightRadius:10}}/>
                    <View style={{marginLeft:20}}>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color:'#FFC267'}}>Undersökning Klinik</Text>
                        </View>
                        <Text style={{color:'#1B1642',fontSize:17}}>Tdl. Anna Andersson</Text>
                        <Text style={{color:'#8D9AAE'}}>2021-03-29</Text>
                    </View>
                </View>
                <View style={{padding:30,marginLeft:20,justifyContent:'center', alignItems:'center', backgroundColor:'#F9655B',borderBottomRightRadius:20,borderTopLeftRadius:20}}>
                    <Text style={{fontSize:20,color:'#fff'}}>Radera</Text>
                </View>
         </ScrollView>
         <ScrollView style={{marginTop:30}}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={200}
            decelerationRate="fast"
            >
                <View style={Styles.eleCard}>
                    <Image source={images.avatar1} style={{width:60,height:60,borderTopLeftRadius:10,borderBottomRightRadius:10}}/>
                    <View style={{marginLeft:20}}>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color:'#FFC267'}}>Undersökning Klinik</Text>
                        </View>
                        <Text style={{color:'#1B1642',fontSize:17}}>Tdl. Anna Andersson</Text>
                        <Text style={{color:'#8D9AAE'}}>2021-03-29</Text>
                    </View>
                </View>
                <View style={{padding:30,marginLeft:20,justifyContent:'center', alignItems:'center', backgroundColor:'#F9655B',borderBottomRightRadius:20,borderTopLeftRadius:20}}>
                    <Text style={{fontSize:20,color:'#fff'}}>Radera</Text>
                </View>
         </ScrollView>
         <ScrollView style={{marginTop:30}}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={200}
            decelerationRate="fast"
            >
                <View style={Styles.eleCard}>
                    <Image source={images.avatar1} style={{width:60,height:60,borderTopLeftRadius:10,borderBottomRightRadius:10}}/>
                    <View style={{marginLeft:20}}>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color:'#FFC267'}}>Undersökning Klinik</Text>
                        </View>
                        <Text style={{color:'#1B1642',fontSize:17}}>Tdl. Anna Andersson</Text>
                        <Text style={{color:'#8D9AAE'}}>2021-03-29</Text>
                    </View>
                </View>
                <View style={{padding:30,marginLeft:20,justifyContent:'center', alignItems:'center', backgroundColor:'#F9655B',borderBottomRightRadius:20,borderTopLeftRadius:20}}>
                    <Text style={{fontSize:20,color:'#fff'}}>Radera</Text>
                </View>
         </ScrollView>
         <ScrollView style={{marginTop:30}}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={200}
            decelerationRate="fast"
            >
                <View style={Styles.eleCard}>
                    <Image source={images.avatar1} style={{width:60,height:60,borderTopLeftRadius:10,borderBottomRightRadius:10}}/>
                    <View style={{marginLeft:20}}>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color:'#FFC267'}}>Undersökning Klinik</Text>
                        </View>
                        <Text style={{color:'#1B1642',fontSize:17}}>Tdl. Anna Andersson</Text>
                        <Text style={{color:'#8D9AAE'}}>2021-03-29</Text>
                    </View>
                </View>
                <View style={{padding:30,marginLeft:20,justifyContent:'center', alignItems:'center', backgroundColor:'#F9655B',borderBottomRightRadius:20,borderTopLeftRadius:20}}>
                    <Text style={{fontSize:20,color:'#fff'}}>Radera</Text>
                </View>
         </ScrollView>
         <ScrollView style={{marginTop:30}}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={200}
            decelerationRate="fast"
            >
                <View style={Styles.eleCard}>
                    <Image source={images.avatar1} style={{width:60,height:60,borderTopLeftRadius:10,borderBottomRightRadius:10}}/>
                    <View style={{marginLeft:20}}>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color:'#FFC267'}}>Undersökning Klinik</Text>
                        </View>
                        <Text style={{color:'#1B1642',fontSize:17}}>Tdl. Anna Andersson</Text>
                        <Text style={{color:'#8D9AAE'}}>2021-03-29</Text>
                    </View>
                </View>
                <View style={{padding:30,marginLeft:20,justifyContent:'center', alignItems:'center', backgroundColor:'#F9655B',borderBottomRightRadius:20,borderTopLeftRadius:20}}>
                    <Text style={{fontSize:20,color:'#fff'}}>Radera</Text>
                </View>
         </ScrollView>
         <ScrollView style={{marginTop:30}}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={200}
            decelerationRate="fast"
            >
                <View style={Styles.eleCard}>
                    <Image source={images.avatar1} style={{width:60,height:60,borderTopLeftRadius:10,borderBottomRightRadius:10}}/>
                    <View style={{marginLeft:20}}>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color:'#FFC267'}}>Undersökning Klinik</Text>
                        </View>
                        <Text style={{color:'#1B1642',fontSize:17}}>Tdl. Anna Andersson</Text>
                        <Text style={{color:'#8D9AAE'}}>2021-03-29</Text>
                    </View>
                </View>
                <View style={{padding:30,marginLeft:20,justifyContent:'center', alignItems:'center', backgroundColor:'#F9655B',borderBottomRightRadius:20,borderTopLeftRadius:20}}>
                    <Text style={{fontSize:20,color:'#fff'}}>Radera</Text>
                </View>
         </ScrollView>
         <ScrollView style={{marginTop:30}}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={200}
            decelerationRate="fast"
            >
                <View style={Styles.eleCard}>
                    <Image source={images.avatar1} style={{width:60,height:60,borderTopLeftRadius:10,borderBottomRightRadius:10}}/>
                    <View style={{marginLeft:20}}>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color:'#FFC267'}}>Undersökning Klinik</Text>
                        </View>
                        <Text style={{color:'#1B1642',fontSize:17}}>Tdl. Anna Andersson</Text>
                        <Text style={{color:'#8D9AAE'}}>2021-03-29</Text>
                    </View>
                </View>
                <View style={{padding:30,marginLeft:20,justifyContent:'center', alignItems:'center', backgroundColor:'#F9655B',borderBottomRightRadius:20,borderTopLeftRadius:20}}>
                    <Text style={{fontSize:20,color:'#fff'}}>Radera</Text>
                </View>
         </ScrollView>
      </View>
    </ScrollView>
  );
}

const Styles = StyleSheet.create({
    eleCard:{
        paddingHorizontal:40,
        paddingVertical:30,
        backgroundColor:'#fff',
        borderTopColor:'#6658EA',
        borderTopWidth:3,
        borderBottomRightRadius:20,
        flexDirection:'row'
    },
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
