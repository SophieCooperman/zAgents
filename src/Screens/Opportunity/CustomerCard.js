import React, { Component } from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import {
  Button,
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Title,
  Left,
  Icon,
  Right
} from "native-base";

import colors from "../../../res/colors";

export default class CustomerCard extends Component {
  constructor(props) {
    super(props);
  }

  _checkCustomerExists(isExists) {
    return (
      <View>
        <Text style={styles.exists}> ■ </Text> <Text>קיים משתמש</Text>
      </View>
    );
    // return {isExists}? <View><Text style={styles.exists}> ■ </Text> <Text>קיים משתמש</Text></View> : <View><Text style={styles.notExists}> ■ </Text> <Text>לא קיים משתמש</Text></View>;
  }

  _checkAccountActivated(isActivated) {
    return (
      <View>
        <Text style={styles.exists}> ■ </Text> <Text>בוצע אקטוב</Text>
      </View>
    );
    // return {isActivated} ? <View><Text style={styles.exists}> ■ </Text> <Text>בוצע אקטוב</Text></View> : <View><Text style={styles.notExists}> ■ </Text> <Text>לא בוצע אקטוב</Text></View>
  }

  render() {
    const userExists = (
      <Text>
        <Text style={styles.exists}>&#x25A0;</Text>
        <Text> קיים משתמש  </Text>
      </Text>
    );
    const useNotExists = (
      <Text>
        <Text style={styles.notExists}>&#x25A0;</Text>
        <Text> לא קיים משתמש  </Text>
      </Text>
    );
    const accountActivated = (
      <Text>
        <Text style={styles.exists}>&#x25A0;</Text> 
        <Text>  בוצע אקטוב </Text>
      </Text>
    );
    const accountNotActivated = (
      <Text>
        <Text style={styles.notExists}>&#x25A0;</Text>{" "}
        <Text>  לא בוצע אקטוב </Text>
      </Text>
    );

    return (
      <View>
        <Card style={styles.cardStyle}>
          <Text>{this.props.customerData.Description + "\n"}</Text>
          <Text> {"מייל: " + this.props.customerData.PrimaryEmail}</Text>
          
          <Text style = {styles.sso}>{"SSO: "}</Text>
          <Text>
          {this.props.customerData.SSO.AccountCreated ? userExists : useNotExists}
          {this.props.customerData.SSO.AccountActiveted ? accountActivated : accountNotActivated}
          </Text>
          
          
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardStyle: {
    padding: 10,
    flexDirection: "column",
    justifyContent: "flex-start"
  },
  exists: {
    color: colors.green,
    textAlign:'right'
  },
  notExists: {
    color: colors.red,
    textAlign:'right'
  },
  sso:{
    writingDirection:'ltr',
    textAlign:'right'
  }
});
