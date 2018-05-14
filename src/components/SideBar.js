import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Alert,
  TouchableHighlight,
  AsyncStorage
} from "react-native";
import { Content, Card } from "native-base";
import colors from "../../res/colors";

export default class Sidebar extends Component {
  async userLogout() {
    try {
      await AsyncStorage.removeItem('agentToken');
      Alert.alert('Logout Success!');
      this.props.navigation.navigate("LoginScreen");
    } catch (error) {
      console.log('AsyncStorage error: ' + error.message);
    }
  }

  toggleStatus() {
    this.userLogout();
  }

  createSideMenuItem(title, onPressFunc) {
    return (
      <TouchableHighlight
        style={styles.itemsStyle}
        underlayColor={colors.lightGray}
        onPress = {onPressFunc}>
        <Text>{title}</Text>
      </TouchableHighlight>
    );
  }


  render() {
    return (
      <Content style={{ backgroundColor: colors.white }}>
        <View style={styles.header}>
          {/* <Text style={styles.textHeader}>Drawer</Text> */}
          <TouchableHighlight
            style={styles.headerButton}
            underlayColor={colors.lightGray}
            onPress={() => this.toggleStatus()}
          >
            <Text style={styles.textHeader}>התנתק</Text>
          </TouchableHighlight>
        </View>

        {this.createSideMenuItem("חיפוש לקוחות", () => {this.props.navigation.navigate("Opportunity")})}
        {this.createSideMenuItem("היסטוריה", () => {this.props.navigation.navigate("History")})}
        {this.createSideMenuItem("הזדמנויות שלי", () => {this.props.navigation.navigate("MyChances")})}
        {this.createSideMenuItem("אודות", () => {this.props.navigation.navigate("Info")})}

      </Content>
    );
  }
}

module.exports = Sidebar;

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.accent,
    height: 100,
    alignItems: "stretch"
  },
  textHeader: {
    color: "white",
    padding: 10
  },
  headerButton: {
    padding: 10,
    marginTop: 40
    
  },
  itemsStyle: {
    padding: 15
  }
});
