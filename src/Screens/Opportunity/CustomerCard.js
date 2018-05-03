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
import ActivatedAccount from "../../components/ActivatedAccount"

export default class CustomerCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Card style={styles.cardStyle}>
          <Text>{this.props.customerData.Description + "\n"}</Text>
          <Text> {"מייל: " + this.props.customerData.PrimaryEmail}</Text>          
          <Text style = {styles.sso}>{"SSO: "}</Text>
          <ActivatedAccount AccountCreated={this.props.customerData.SSO.AccountCreated} AccountActivated = {this.props.customerData.SSO.AccountActiveted}/>        
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

  sso:{
    writingDirection:'ltr',
    textAlign:'right'
  }
});


