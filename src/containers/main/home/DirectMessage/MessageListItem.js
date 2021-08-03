import React from 'react';
import {View, Image, Text, Vibration} from 'react-native';
import colors from 'res/colors';
import images from 'res/images';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { Badge } from 'react-native-paper';
export default function MessageListItem({data, nav}) {
  const onItemPress = ()=>{
    nav.navigate('MessageScreen')
  }
  return (
    <TouchableOpacity
      onPress = {()=>{onItemPress()}}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginStart: 10,
          marginEnd: 10,
          marginTop: 15,
        }}>
        <View style={{flexDirection: 'row'}}>
          {
              data.avatar==''?<Text style={{width: 60, height: 60, borderRadius: 70, textAlignVertical:"center", textAlign: "center", fontSize: 30, color: "white", backgroundColor: colors.primary}}>{data?.name[0]?.toUpperCase() +data?.name[1]?.toUpperCase()}</Text>:<Image
              source={data.avatar?data.avatar:images.avatar}
              style={{width: 60, height: 60, borderRadius: 70}}
            />
            }
          
          <View style={{flexDirection: 'column', marginStart: 15}}>
            <Text style={{color: "black", fontWeight: 'bold'}}>
              {data.name}
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{color: colors.textFaded2}}>{data.message}</Text>
              <Image
                source={images.dot}
                style={{width: 3, height: 3, marginStart: 5}}
              />
              <Text style={{color: colors.textFaded2, marginStart: 5}}>2h</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity>
          <View>
            {
              data.badge?<Badge size={25}>{data.badge}</Badge>:null
            } 
          </View>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}
