import React, { Component } from 'react';
import { Platform, StyleSheet,  View, ScrollView, FlatList,Text, TouchableHighlight, KeyboardAvoidingView } from 'react-native';
import { Input , Button ,Avatar } from 'react-native-elements';


const theme = {
    color: '#fffff'
  }
  const data = {
    name: "Material X",
    desc: "Sign To Continue",
    profilePic: require("./assets/img/avatar.png")

}

export default class Login extends React.Component {
    static navigationOptions = {
        headerStyle:{
            display:"none"
        }
    }
    render(){
        return(
            <View>
            <Header/>
            <Inputs/>
            </View>
          
        )
     }
     }

     const Header = () => {
         return(
            <View style={{flex: 4, backgroundColor: theme.color, marginTop: 0}}>
            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <View style={{flex: 2}}>
                  <Avatar size={100} avatarStyle={{ borderWidth: 3, borderColor: 'white', borderRadius: 0 }} title='Avatar' titleStyle={{fontSize: 11}} rounded source={data.profilePic} />
                <View style={{flex: 1, paddingBottom: 5}}>
                  <Text style={{color: '#32a840', textAlign: 'center', fontWeight: '400', fontSize: 20 , paddingTop: 11, }}>{data.name}</Text>
                  <Text style={{color: '#535a5e', textAlign: 'center', fontWeight: '100', fontSize: 11, }}>{data.desc}</Text>
                  </View>
                </View>
            </View>
      </View>
         )
     }

     const Inputs = () => { 
         return(
             <KeyboardAvoidingView style={{ flex: 1, alignItems:"center", justifyContent="center" }} behavior="padding" enabled>
             <Input placeholder="Input Your Username" label="Username" containerStyle={{ paddingBottom: 20 }}/>
             <Input placeholder="Input Your Password" label="Password" containerStyle={{ paddingBottom: 18 }}/>
             <TouchableHighlight style={{
                 justifyContent :'center',alignItems:'center',backgroundColor:"#197603",borderRadius:30,borderWidth:1,borderColor:'#fff',width:"75%",height:50}}>
                 <Text style={{color:'#fff'}}>Login</Text>
                 </TouchableHighlight>
                 <Text style={{fontSize:15,color:"gray",marginTop:8 }}>Sign up for an account?</Text>
                 </KeyboardAvoidingView>
         )
     }