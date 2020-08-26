import React, { Component } from 'react';
import { Platform, StyleSheet,  View, ScrollView, FlatList,Button } from 'react-native';
import login from './LoginScreen';
import { ThemeProvider, Header, Text, Avatar, Image, Icon, ListItem } from 'react-native-elements';

import * as Font from "expo-font";


const theme = {
  color: '#1976D3'
}
const data = {
  name: "Prafit",
  desc: "Pengusaha",
  profilePic: require("./assets/img/avatar.png"),
  followers: 12100000,
  following: 1,
  sumPost: 1,
  photos: [
    require("./assets/img/10-10.jpg"),
    require("./assets/img/10-11.jpg"),
    require("./assets/img/10-13.jpg"),
    require("./assets/img/10-14-Day.jpg"),
    require("./assets/img/10-14-Night.jpg"),
    require("./assets/img/10-15-beta-dark.jpg"),
    require("./assets/img/10-15-beta-light.jpg"),
    require("./assets/img/img.jpg"),
  ]
}
const numFormatter = (num) => {
  try{
    
      return Math.abs(num) > 999999 ? Math.sign(num)*((Math.abs(num)/1000000).toFixed(1)) + 'M' : Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'K' : Math.sign(num)*Math.abs(num)
  }catch(err){
    return "Invalid Value Type"
  }
}

export  default class Profile extends Component {
  state = {
    fontLoaded: false,
  };
  async componentWillMount() {
    await Font.loadAsync({
      PoppinsLight: require("./assets/fonts/poppins/Poppins-Light.ttf"),
      PoppinsMedium: require("./assets/fonts/poppins/Poppins-Medium.ttf"),
      PoppinsBold: require("./assets/fonts/poppins/Poppins-Bold.ttf"),
      PoppinsRegular: require("./assets/fonts/poppins/Poppins-Regular.ttf"),
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    return (
      this.state.fontLoaded ? (
      <ThemeProvider>
        <NavbarComponent />
          <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between' }}>
          <HeaderComponent />
          <StatusComponent />
          <GalleryComponent />
          <PostComponent />
          </ScrollView>
      </ThemeProvider>
      ) : <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}><Text style={{fontSize: 32}}>Loading Sabar</Text></View>
    );
  }
}

const NavbarComponent = () => {
  return <Header backgroundColor={theme.color} containerStyle={{ borderBottomColor:'transparent' ,borderBottomWidth:0, shadowColor:'transparent' }} placement="left" 
  leftComponent={{icon: 'menu', color:'#fff'}} centerComponent={{text: 'Profile', style: {color: '#fff', fontSize: 18, fontFamily: 'PoppinsRegular'} }} rightComponent={ <MenuKanan /> } />
}

const HeaderComponent = () => {
  return (
    <>
          <View style={{flex: 4, backgroundColor: theme.color, marginTop: 0}}>
            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <View style={{flex: 2}}>
                  <Avatar size={100} avatarStyle={{ borderWidth: 3, borderColor: 'white', borderRadius: 100 }} title='Avatar' titleStyle={{fontSize: 11}} rounded source={data.profilePic} />
                </View>
                <View style={{flex: 1, paddingBottom: 20}}>
                  <Text style={{color: '#fff', textAlign: 'center', fontWeight: '400', fontSize: 20 , paddingTop: 11, fontFamily: 'PoppinsMedium'}}>{data.name}</Text>
                  <Text style={{color: '#fff', textAlign: 'center', fontWeight: '100', fontSize: 11, fontFamily: 'PoppinsLight'}}>{data.desc}</Text>
                </View>
            </View>
          </View>

      </>
  )
}

const StatusComponent = () => {
  return (
    <View style={{flex:2, paddingTop: 15}}>
      {/* <View style={{flex:1}}></View> */}
      <View style={{flex: 2, borderBottomWidth: 0.5, borderBottomColor: '#E9E9E9', flexDirection: 'row', justifyContent: 'space-between' , paddingLeft: '10%', paddingRight: '10%'}}>
        <View style={{flexDirection: 'column',marginBottom: 15, justifyContent: 'space-between'}}>
          <View style={{flex:1}}></View>
          <Text style={{ textAlign: 'center', }}>{numFormatter(data.sumPost)}</Text>
          <Text style={{ opacity: 0.6, fontFamily: 'PoppinsRegular',textAlign: 'center', }}>Posts</Text>
          <View style={{flex:1}}></View>
        </View>
        <View style={{marginBottom: 15}}>
          <View style={{flex:1}}></View>
          <Text style={{ textAlign: 'center', }}>{numFormatter(data.followers)}</Text>
          <Text style={{ opacity: 0.6, fontFamily: 'PoppinsRegular',textAlign: 'center'}}>Followers</Text>
          <View style={{flex:1}}></View>
        </View>
        <View style={{marginBottom: 15}}>
          <View style={{flex:1}}></View>
          <Text style={{ textAlign: 'center', }}>{numFormatter(data.following)}</Text>
          <Text style={{ opacity: 0.6, fontFamily: 'PoppinsRegular',textAlign: 'center', }}>Following</Text>
          <View style={{flex:1}}></View>
        </View>
      </View>
      {/* <View style={{flex:1}}></View> */}
    </View>
  )
}

const GalleryComponent = () => {
  return (
    <View style={{flex: 2, flexDirection: 'column', paddingRight: 12, marginBottom: 15 }}>
      <View style={{flex: 1, paddingTop: 10, paddingLeft: 12}}>
        <Text style={{fontFamily: 'PoppinsMedium', marginBottom: 12, fontSize: 15}}>Photos</Text>
      </View>
      <View style={{flex: 4, flexDirection: 'row', paddingLeft: 12, overflow: "scroll"}}>
        <FlatList
        horizontal={true}
        data={data.photos}
        renderItem={({ item }) => (
          <Image source={item} style={{height: 80, width: 80, marginRight: 10}} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      </View>
    </View>
  )
}

const PostComponent = () => {
  return (
    <View style={{flex: 5}}>
      <View style={{flex: 0.1, justifyContent: 'center', marginTop: 10, marginLeft: 12}}>
        <Text style={{fontFamily: 'PoppinsMedium', fontSize:15, marginBottom: -5}}>Post</Text>
      </View>
      <View style={{flex: 0.5}}>
        <ListItem titleStyle={{fontFamily: 'PoppinsRegular'}} leftAvatar={{ title: data.name[0], source: data.profilePic, fontFamily: 'PoppinsRegular', rounded: false, size: 60}} title={data.name} subtitle={<SubtitleComponent />} chevron />
      </View>
      <View style={{flex: 4, margin: 12, marginTop: 0}}>
        <Image source={data.photos[7]} style={{height: 300}} />
      </View>
    </View>
  )
}

const MenuKanan = () => {
  return (
    <View style={{flex: 1, flexDirection: 'row', marginTop: 10}}>
     {/* <Ionicons name='more' color='#fff' /> */}
     <Icon name='search' color='#fff' iconStyle={{marginRight: 10}} />
     <Icon name='more-vert' color='#fff' />
    </View>
  )
}

const SubtitleComponent = () => {
  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <View style={{flex: 1}}>
        <Icon name='date-range' size={20} color='#9F9F9F' />
      </View>
      <View style={{flex: 17, paddingLeft: 8}}>
        <Text style={{color: '#9F9F9F'}}>10 minutes ago</Text>
      </View>
    </View>
  )
}
