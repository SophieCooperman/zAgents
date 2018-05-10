import React, { Component } from "react";
import { StyleSheet, View, Alert, TouchableOpacity} from "react-native";
import colors from "../../res/colors";
import { Icon } from "react-native-elements";
import Communications from 'react-native-communications';

export default class PhoneIcon extends Component {

    constructor(props){
        super(props);

        this.state = {
            defaultNumber: '037532222'
        }
    }

    render() {
        
    return (
      <TouchableOpacity style={styles.floatingButton} 
      onPress={()=> Communications.phonecall(this.props.phoneNumber != '-1' ? this.props.phoneNumber: this.state.defaultNumber, true)}>
        <Icon name="phone" size={30} color="white" />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  floatingButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    position: "absolute",
    bottom: 30,
    left: 20,
    backgroundColor: colors.primary,
    borderRadius: 100
  }
});
