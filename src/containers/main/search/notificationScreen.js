import React from 'react';
import images from 'res/images';
import ToggleSwitch from 'toggle-switch-react-native';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

export default function notificationScreen({navigation}) {

  const [isSwitch1, setStatus1] = React.useState(false);
  const [isSwitch2, setStatus2] = React.useState(false);
  const [isSwitch3, setStatus3] = React.useState(false);

  const toggleSwitchfunc1 = () => {
    console.log("switched status!");
    setStatus1(!isSwitch1);
  }
  const toggleSwitchfunc2 = () => {
    console.log("switched status!");
    setStatus2(!isSwitch2);
  }
  const toggleSwitchfunc3 = () => {
    console.log("switched status!");
    setStatus3(!isSwitch3);
  }
  return (
    <ScrollView>
      <View style={Styles.container}>
         <View>
            <TouchableOpacity style={Styles.backBtn}>
               <Image source={images.arrow1}/>
            </TouchableOpacity>
          </View>
          <View style={{marginTop:30}}>
              <Text style={{fontSize:30}}>Notiser</Text>
          </View>
          <View style={{backgroundColor:'#fff',padding:20,borderBottomRightRadius:20,borderTopLeftRadius:20,marginTop:50}}>
              <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                  <View>
                      <Text style={{fontSize:17}}>Jag vill ha mina</Text>
                      <Text style={{fontSize:17}}>kallelser här i appen</Text>
                  </View>
                  <View>
                        <ToggleSwitch
                            isOn={isSwitch1}
                            onColor="#6658EA"
                            offColor="#707070"
                            size="medium"
                            onToggle={toggleSwitchfunc1}
                        />
                  </View>
              </View>
              <View style={Styles.groupData}>
                  <View>
                      <Text style={{fontSize:17}}>Jag vill inte ha kallelser för</Text>
                      <Text style={{fontSize:17}}>mina barn</Text>
                  </View>
                  <View>
                        <ToggleSwitch
                            isOn={isSwitch2}
                            onColor="#6658EA"
                            offColor="#707070"
                            size="medium"
                            onToggle={toggleSwitchfunc2}
                        />
                  </View>
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                  <View>
                      <Text style={{fontSize:17}}>Lorem ipsum</Text>
                  </View>
                  <View>
                        <ToggleSwitch
                            isOn={isSwitch3}
                            onColor="#6658EA"
                            offColor="#707070"
                            size="medium"
                            onToggle={toggleSwitchfunc3}
                        />
                  </View>
              </View>
          </View>
      </View>
    </ScrollView>
  );
}
const Styles = StyleSheet.create({
  groupData:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginVertical:20,
    borderTopWidth:2,
    borderBottomWidth:2,
    paddingVertical:20,
    borderBottomColor:'#EAF2FE',
    borderTopColor:'#EAF2FE'
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
