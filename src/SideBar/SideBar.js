import React, { Component } from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Alert} from 'react-native';
import {Content, Card} from 'native-base';

export default class Sidebar extends Component {

  toggleStatus(){
    Alert.alert('Disconnect');
  }

  render() {
    return (
        <Content style={{backgroundColor:'#FFFFFF'}}>
        <View style = {styles.header}>
          <Text style = {styles.textHeader}>Drawer</Text>
          <TouchableOpacity 
            style = {styles.headerButton}
            underlayColor = '#4B03A9F4'
            onPress={()=>this.toggleStatus()}>           
            <Text style = {styles.textHeader}>התנתק</Text> 
        </TouchableOpacity>
        </View>
        <TouchableOpacity 
            underlayColor = '#4B03A9F4'
            onPress={()=>this.toggleStatus()}>           
            <Text style = {styles.textSideBarItems}>חיפוש לקוחות</Text> 
        </TouchableOpacity>
        
        <TouchableOpacity 
            underlayColor = '#4B03A9F4'
            onPress={()=>this.toggleStatus()}>           
            <Text style = {styles.textSideBarItems}>הסטוריה</Text> 
        </TouchableOpacity>
        
        <TouchableOpacity 
            underlayColor = '#4B03A9F4'
            onPress={()=>this.toggleStatus()}>           
            <Text style = {styles.textSideBarItems}>הזדמנויות שלי</Text> 
        </TouchableOpacity>

        <TouchableOpacity 
            underlayColor = '#4B03A9F4'
            onPress={()=>this.toggleStatus()}>           
            <Text style = {styles.textSideBarItems}>אודות</Text> 
        </TouchableOpacity>
         
        </Content>
    );
  }
}




module.exports = Sidebar;

const styles = StyleSheet.create({
    header: {
      backgroundColor: '#26a69a',
      height: 100,
      alignItems:'stretch' 
    },
    textHeader: {
      color: 'white',
      padding: 10
    },
    textSideBarItems:{
        color:'#000',
        padding: 15
    }, 
    headerButton: {
      padding: 10
    }
});