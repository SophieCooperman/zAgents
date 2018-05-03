import React, {Component} from "react";
import { StyleSheet, View, Text } from "react-native";
import colors from "../../res/colors";

export default class MyChances extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> MyChances Screen</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.accent,
        alignItems: 'center', 
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    }
});
