import React, { useState } from 'react';
import {
  View, 
  Image, 
  TextInput, 
  Text,
  Dimensions,
  LogBox,
  StyleSheet,
  InteractionManager,
} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import colors from 'res/colors';
import images from 'res/images';
import { Badge } from 'react-native-paper';
import EmojiBoard from 'react-native-emoji-board'
import Icon from 'react-native-vector-icons/FontAwesome';

// Ignore log notification by message
LogBox.ignoreLogs(['Warning: ...']);
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const data = [
  
  {
    key: '3',
    userId: 1,
    name: 'ana',
    message: "Nice to meet you💋",
    created_at: "2021-02-03 23:00",
    read: true,
    avatar: images.av1,
  },
  {
    key: '4',
    userId: 2,
    name: 'ana',
    message: "Nice to meet you💋",
    created_at: "2021-02-03 23:00",
    read: true,
    avatar: images.av2,
  },
  {
    key: '5',
    userId: 1,
    name: 'ana',
    message: "Nice to meet you❤️",
    created_at: "2021-02-03 23:00",
    read: true,
    avatar: images.av1,
  },
  {
    key: '6',
    userId: 2,
    name: 'ana',
    message: "Nice to meet you💋",
    created_at: "2021-02-03 23:00",
    read: true,
    avatar: images.av2,
  },
  {
    key: '1',
    userId: 1,
    name: 'ana',
    message: "Hello",
    created_at: "2021-02-03 23:00",
    read: true,
    avatar: images.av1,
  },
  {
    key: '2',
    userId: 2,
    name: 'andrey',
    message: "hello",
    read: true,
    created_at: "2021-02-03 23:00",
    avatar: images.av2,
  },
];

export default function MessageScreen() {
  const [emojiShow, setEmojiShow] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [messageData, setMessageData] = React.useState(data);
  const myId = 1
  const onClick = emoji => {
    console.log(emoji);
    setMessage(message+emoji.code)
    setEmojiShow(!emojiShow)
  };
  const readMsg = ()=>{
    var temp = messageData
    messageData.map((item, index)=>{
      if(item.userId == myId){
        if(!item.read) temp[index].read = true
      }
    })
    setMessageData(temp)
    console.log(messageData)
  }
  const listData = (d)=>{
    console.log(d)
    return d
  }
  return (
    <View style={{ flex: 1}}>
      <FlatList
        style={{backgroundColor: "white"}}
        inverted
        data={messageData}
        renderItem={({item, index}) => (
          <TouchableOpacity style={myId==item.userId?Styles.userMessage:Styles.otherMessage} onPress={()=>{readMsg()}} activeOpacity={1} >
            <View style={{padding: 15, flexDirection: "row"}}>
              <View>
                {
                  myId!=item.userId?<Image
                      source={item.avatar?item.avatar:images.avatar}
                      style={{width: 45, height: 45, borderRadius: 45, marginRight: 10}}
                    />:null
                }
              </View>
              <View style={myId==item.userId?Styles.userMessageBox:Styles.otherMessageBox}>
                <View style={{flexDirection: "row"}}>
                  <Text style={{marginBottom: 10, color: "black", fontSize: 18, color: "white"}}>{item.message}</Text>
                </View>
                <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                  <View>
                    <Text>2021-02-01 23:00</Text>
                  </View>
                  <View>
                    <View style={{marginLeft: 5}}>
                      {
                        item.read?<Icon name="check" size={18} color="white"/>:null
                      }
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
      <EmojiBoard showBoard={emojiShow} onClick={onClick} />
      <View style={{height: 70, borderTopWidth: 1, borderColor: colors.primary, backgroundColor: colors.primary, flexDirection: "row", justifyContent: "center", alignItems: "center", width: "100%"}}>
        <View style={{width: (windowWidth-30), height: "75%", backgroundColor: "white", borderRadius: 20, flexDirection: "row", justifyContent: "flex-start", alignItems: "center"}}>
          <TouchableOpacity onPress={() =>{ setEmojiShow(!emojiShow); console.log("emoji show")}}>
            <Image
              source={images.emoji_icon}
              style={{width: 35, height: 35, borderRadius: 45, marginHorizontal: 10}}
            />
          </TouchableOpacity>
          <TextInput
            style={{width: (windowWidth-120), backgroundColor: "white", borderRadius: 20, fontSize: 18}}
            placeholder="Type a message"
            placeholderTextColor={colors.textFaded2}
            onChangeText = {(txt)=>{console.log(txt); setMessage(txt)}}
            value = {message}
          />
          <TouchableOpacity>
            <Image
              source={images.send_message}
              style={{width: 25, height: 25, marginHorizontal: 5}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  userMessage: { 
    padding: 5, 
    flexDirection: "row", 
    width:"100%", 
    justifyContent:"flex-end",
    
  },
  userMessageBox: {
    backgroundColor: colors.primary, 
    borderRadius: 5, 
    padding: 10
  },
  otherMessage: { 
    padding: 5, 
    flexDirection: "row", 
    width:"100%", 
    justifyContent:"flex-start",
    alignSelf: "flex-end"
  },
  otherMessageBox: {
    backgroundColor: colors.secondary, 
    borderRadius: 5, 
    padding: 10
  }
});

