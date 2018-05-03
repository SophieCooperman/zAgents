import React, {Component} from "react";
import { StyleSheet, View, Text } from "react-native";
import colors from "../../res/colors";

export default class Info extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Info Screen</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.red,
        alignItems: 'center', 
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    }
});
