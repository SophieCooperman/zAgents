import React, { Component } from "react";
import { StyleSheet, View, Alert, TouchableOpacity} from "react-native";
import colors from "../../res/colors";
import { Icon } from "react-native-elements";

export default class PhoneIcon extends Component {

    render() {
    return (
      <TouchableOpacity style={styles.floatingButton} onPress={()=>{Alert.alert('1')}}>
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
