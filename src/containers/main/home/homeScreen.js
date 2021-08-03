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
  TouchableOpacity
} from 'react-native';

export default function homeScreen({navigation}) {

  const [isModalVisible, setVisible] = React.useState(false);

  const openModal = () => {
    console.log("open modal");
    setVisible(!isModalVisible);
  }
  return (
    <ScrollView>
      
      <View style={Styles.container}>
        <View style={Styles.personInfo}>
          <Image source={images.home_pic1} style={{height:50, width: 50}}></Image>
          <View style={{marginLeft:20}}>
            <Text style={{fontSize:15, marginTop:3}}>Christofer Robin</Text>
            <Text style={{fontSize:17, color:'#575A7B'}}>Välkommen!</Text>
          </View>
        </View>
        <View style={{marginTop:25}}>
            <Text style={{fontSize:30}}>Bokade tider</Text>
            <Text style={{marginTop:10, fontSize:17, color:'#575A7B'}}>Dina kommande bokningar hos oss</Text>
        </View>
        <View style={Styles.cauroselWrap}>
          <Swiper activeDotColor={'#6658EA'} style={Styles.wrapper} showsButtons={false} autoplay={false} dotStyle={Styles.dotPos} activeDotStyle={Styles.activeDot}>
            <TouchableOpacity style={Styles.slide1} onPress={openModal}>
              <View style={Styles.cauroselInfo}>
                <Image source={images.home_pic2} style={{height:70, width: 70}}></Image>
                <View style={{marginLeft:20, marginTop:5,}}>
                  <View style={{flexDirection:'row'}}>
                    <Text style={{color:'#fff'}}>Undersökning </Text><Text style={{color:'#FFC267'}}> Klinik</Text>
                  </View>
                  <Text style={{color:'#fff', fontSize:18}}>Tdl.Anna Andersson</Text>
                  <Text style={{color:'#fff'}}>25 mar kl. 17:00 - 17:45</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.slide2} onPress={openModal}>
              <View style={Styles.cauroselInfo}>
                  <Image source={images.home_pic2} style={{height:70, width: 70}}></Image>
                  <View style={{marginLeft:20, marginTop:5,}}>
                    <View style={{flexDirection:'row'}}>
                      <Text style={{color:'#fff'}}>Undersökning </Text><Text style={{color:'#FFC267'}}> Klinik</Text>
                    </View>
                    <Text style={{color:'#fff', fontSize:18}}>Tdl.Anna Andersson</Text>
                    <Text style={{color:'#fff'}}>25 mar kl. 17:00 - 17:45</Text>
                  </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.slide3} onPress={openModal}>
              <View style={Styles.cauroselInfo}>
                  <Image source={images.home_pic2} style={{height:70, width: 70}}></Image>
                  <View style={{marginLeft:20, marginTop:5,}}>
                    <View style={{flexDirection:'row'}}>
                      <Text style={{color:'#fff'}}>Undersökning </Text><Text style={{color:'#FFC267'}}> Klinik</Text>
                    </View>
                    <Text style={{color:'#fff', fontSize:18}}>Tdl.Anna Andersson</Text>
                    <Text style={{color:'#fff'}}>25 mar kl. 17:00 - 17:45</Text>
                  </View>
              </View>
            </TouchableOpacity>
          </Swiper>
        </View>
        <View style={Styles.txtCard}>
            <View>
              <Text style={{fontSize:30}}>Nyheter</Text>
              <Text style={{marginTop:10, fontSize:17, color:'#575A7B'}}>Ta del av nyheter och kampanjer</Text>
            </View>
        </View>
        <View style={Styles.imgCard}>
          <Image source={images.women} style={{height:200,width:350,borderTopLeftRadius:20}}></Image>
          <View style={{marginTop:20,padding:20}}>
            <Text style={{fontSize:30}}>Boka rådgivning via</Text>
            <Text style={{fontSize:30}}>video</Text>
            <Text style={{marginTop:10, fontSize:17, color:'#575A7B'}}>
                Vi erbjuder nu videobesök hos oss så {"\n"}
                du slipper lämna hemmet. Kostnad {"\n"}
                295 SEK för 15 min rådgivning.
            </Text>
          </View>
          <View style={{marginTop:20,flex:1,justifyContent:'center',alignItems:'center'}}>
            <View style={{width:80,height:1,backgroundColor:'#d0d0d0'}}></View>
            <TouchableOpacity style={{marginTop:20,marginBottom:30}} onPress={() => navigation.navigate('NewsScreen')}>
              <Text style={{color:'#6658EA',fontWeight:'bold',fontSize:17}}>BOKA HÄR</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={Styles.imgCard}>
          <Image source={images.teeth} style={{height:200,width:350,borderTopLeftRadius:20}}></Image>
          <View style={{marginTop:20,padding:20}}>
            <Text style={{fontSize:30}}>50% på tandblekning</Text>
            <Text style={{marginTop:10, fontSize:17, color:'#575A7B'}}>
              Fram till den 31 maj erbjuder vi våra {"\n"}befintliga
              kunder att boka en {"\n"}tandblekning med 50% rabatt.{"\n"}{"\n"}{"\n"}
              Passa på att skaffa dig snygga vita{"\n"}tänder inför
              sommaren.Boka en tid för{"\n"}tandblekning med kod
              VITSOMMAR så kostar den bara 995 SEK.
            </Text>
          </View>
          <View style={{marginTop:20,flex:1,justifyContent:'center',alignItems:'center'}}>
            <View style={{width:80,height:1,backgroundColor:'#d0d0d0'}}></View>
            <View style={{marginTop:20,marginBottom:30}}>
              <Text style={{color:'#6658EA',fontWeight:'bold',fontSize:17}}>LÄS MER</Text>
            </View>
          </View>
        </View>
        <View style={Styles.imgCard}>
          <Image source={images.bottle} style={{height:200,width:350,borderTopLeftRadius:20}}></Image>
          <View style={{marginTop:20,padding:20}}>
            <Text style={{fontSize:30}}>Borsta tänderna med Flux</Text>
            <Text style={{marginTop:10, fontSize:17, color:'#575A7B'}}>
              Nu finns en ny metod för snyggare tänder.
              Använd gärna Flux efter tandborstningen.
              i hittar produkten hos oss i samband med ditt nästa besök.
              Välkommen!
            </Text>
          </View>
        </View>
        <View style={Styles.imgCard}>
          <Image source={images.child} style={{height:200,width:350,borderTopLeftRadius:20}}></Image>
          <View style={{marginTop:20,padding:20}}>
            <Text style={{fontSize:30}}>Tandvård hos oss</Text>
            <Text style={{marginTop:10, fontSize:17, color:'#575A7B'}}>
              Vi erbjuder nu videobesök hos oss så 
              du slipper lämna hemmet. Kostnad 
              295 SEK för 15 min rådgivning.  
            </Text>
          </View>
          <View style={{marginTop:10,flex:1,justifyContent:'center',alignItems:'center'}}>
            <View style={{width:80,height:1,backgroundColor:'#d0d0d0'}}></View>
            <View style={{marginTop:10,marginBottom:30}}>
              <Text style={{color:'#6658EA',fontWeight:'bold',fontSize:17}}>BOKA HÄR</Text>
            </View>
          </View>
        </View>
        <View style={{marginLeft:-20,marginRight:-20,marginTop:-120,zIndex:1}}>
          <Image source={images.wave} style={{width:'100%',height:90}}></Image>
          <View style={{height:400,backgroundColor:'#2B265A',marginTop:-5,padding:20}}>
            <View style={{marginTop:50,justifyContent:'center',alignItems:'center'}}>
              <Text style={{color:'#fff',fontSize:25}}>Vanliga frågor och svar</Text>
            </View>
            <View style={{marginTop:30}}>
              <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{color:'#fff',fontWeight:'bold',fontSize:15}}>Kan vi få denna app klar i tid?</Text>
                <Image source={images.x} style={{width:15,height:15}}></Image>
              </View>
              <Text style={{color:'#fff',marginTop:10}}>
                Självklart, den är redan så gott som färdig.
                Bara att tuta och köra. Några rader kod,
                hur svårt kan det vara.
              </Text>
            </View>
            <View style={Styles.midText}>
              <Text style={{color:'#fff',fontWeight:'bold',fontSize:15}}>Kan vi få denna app klar i tid?</Text>
              <Image source={images.plus} style={{width:15,height:15}}></Image>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
              <Text style={{color:'#fff',fontWeight:'bold',fontSize:15}}>Kan vi få denna app klar i tid?</Text>
              <Image source={images.plus} style={{width:15,height:15}}></Image>
            </View>
          </View>
        </View>
      </View>
      <Modal isVisible={isModalVisible} onBackdropPress={openModal} coverScreen={true} backdropColor={'#1B1642'} style={Styles.modalContent}>
        <View style={Styles.modalView}>
          <View>
            <Text style={{fontSize:30,textAlign:'center'}}>Kallelse</Text>
          </View>
          <View>
            <Text style={{textAlign:'center',color:'#575A7B',fontSize:15,marginTop:10}}>Du är härmed kallad till <Text style={{color:'#6658EA'}}>undersökning hos</Text></Text>
            <Text style={{textAlign:'center',color:'#6658EA',marginTop:5}}>tandläkare Anna Andersson. </Text>
          </View>
          <View style={{paddingHorizontal:100,marginTop:30}}>
            <View style={{flexDirection:'row'}}>
              <Image source={images.calendar} style={{width:20,height:20}}></Image>
              <Text style={{marginLeft:10,color:'#6658EA'}}>24 april 2021</Text>
            </View>
            <View style={{flexDirection:'row',marginTop:10}}>
              <Image source={images.clock} style={{width:20,height:20}}></Image>
              <Text style={{marginLeft:10,color:'#6658EA'}}>14:45 - 15:15</Text>
            </View>
          </View>
          <View style={{marginTop:25}}>
            <Text style={{textAlign:'center',fontSize:15,color:'#575A7B',lineHeight:25}}>
              Om tiden inte passar är du välkommen att{'\n'}kontakta oss.
              Dock senast 24 h innan{'\n'} besöket för att undvika debitering.
              {'\n'}{'\n'}Mvh,
            </Text>
          </View>
          <View style={{flexDirection:'row',marginTop:30}}>
             <Image source={images.home_pic2} style={{height:70, width: 70}}></Image>
             <View style={{marginLeft:20}}>
               <Text style={{fontSize:17, marginTop:3}}>Anna Andersson</Text>
               <Text style={{fontSize:17, color:'#575A7B'}}>Tandläkare</Text>
               <Text style={{fontSize:17, color:'#575A7B'}}>Oral Care AB</Text>
             </View>
          </View>
          <TouchableOpacity style={Styles.btnLog} onPress={openModal}>
            <Text style={{color:'#fff',fontSize:20}}>Lägg i kalendern</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </ScrollView>
  );
}
// #FFC267
const Styles = StyleSheet.create({
  btnLog:{
    marginTop:30,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#564CAF',
    padding:10,
    borderBottomRightRadius:20,
    borderTopLeftRadius:20,
  },
  modalView:{
    flex: 1,
    backgroundColor:'#fff',
    borderTopLeftRadius:20,
    borderBottomRightRadius:20,
    padding:30
  },
  modalContent:{
    paddingVertical:60,
  },
  midText:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:10,borderTopWidth:1,
    borderTopColor:'#ddd',
    borderBottomWidth:1,
    borderBottomColor:'#ddd',
    paddingVertical:15,
  },
  imgCard:{
    marginTop:20,
    backgroundColor:'#fff',
    borderTopLeftRadius:20,
    borderBottomRightRadius:20,
    zIndex:2
  },
  txtCard:{
    marginTop:30,
  },
  dotPos:{
    marginBottom:-80,
  },
  activeDot:{
    marginBottom:-80,
  },
  cauroselWrap:{
    height:130,
    width:'100%',
    marginTop:20,
  },
  container: {
    flex: 1,
    padding:20,
    paddingBottom:0,
  },
  personInfo:{
    flexDirection:'row',
    paddingTop:30,
  },
  cauroselInfo:{
    flexDirection:'row',
    marginLeft:-50,
  },
  wrapper: {},
  slide1: {
    borderTopLeftRadius:20,
    borderBottomRightRadius:20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6658EA'
  },
  slide2: {
    borderTopLeftRadius:20,
    borderBottomRightRadius:20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6658EA'
  },
  slide3: {
    borderTopLeftRadius:20,
    borderBottomRightRadius:20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6658EA'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
});