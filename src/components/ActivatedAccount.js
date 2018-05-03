import React, { Component } from "react";
import { StyleSheet, View, Alert, TouchableOpacity, Text} from "react-native";
import colors from "../../res/colors";

export default class ActivatedAccount extends Component {

    constructor(props){
        super(props);
    }


  render() {
    const userExists = (
      <Text>
        <Text style={styles.exists}>&#x25A0;</Text>
        <Text> קיים משתמש </Text>
      </Text>
    );
    const useNotExists = (
      <Text>
        <Text style={styles.notExists}>&#x25A0;</Text>
        <Text> לא קיים משתמש </Text>
      </Text>
    );
    const accountActivated = (
      <Text>
        <Text style={styles.exists}>&#x25A0;</Text>
        <Text> בוצע אקטוב </Text>
      </Text>
    );
    const accountNotActivated = (
      <Text>
        <Text style={styles.notExists}>&#x25A0;</Text>{" "}
        <Text> לא בוצע אקטוב </Text>
      </Text>
    );
    return (
      <Text style={styles.text}>
        {this.props.AccountCreated ? userExists : useNotExists}
        {this.props.AccountActivated ? accountActivated : accountNotActivated}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    alignSelf: "flex-end",
    marginBottom: 5,
    writingDirection: "rtl"
  },
  exists: {
    color: colors.green,
    textAlign: "right"
  },
  notExists: {
    color: colors.red,
    textAlign: "right"
  }
});
