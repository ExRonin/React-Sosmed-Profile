import React, { Component } from 'react';
import { Platform, StyleSheet,  View, ScrollView, FlatList,Text,Button } from 'react-native';
import login from './LoginScreen';
export default class HomePage extends React.Component {
    render(){
     return(
         <View style={{
             height: "100%",
             flexDirection :"column",
             alignItems : "center",
             justifyContent:"center",
         }}>
             <Text>Home Page</Text>
             <Button  onPress={()=>{ 
                    this.props.navigation.navigate("login")
                }} title="Login">
                </Button>
         </View>
     )
     }
     }