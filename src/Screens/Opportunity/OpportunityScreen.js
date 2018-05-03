import React from "react";
import ReactDOM from "react-dom";
import {
  StatusBar,
  StyleSheet,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Keyboard,
  Alert} from "react-native";
import Colors from "../../../res/colors";
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

import { getUserData } from "../../../Repository/UserData";
import ClientCard from "./CustomerCard"
import {TextInputMask} from 'react-native-masked-text';
import PhoneIcon from "../../components/PhoneIcon"
// import { Icon } from "react-native-elements";

export default class OpportunityScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [],
      rawJson: "",
      agentNum: "",
      validAgentNum: false
    };
  }


  transferToClient(customer){
    this.props.navigation.navigate('ClientScreen', {customerData: customer});
  }



  fetchUserClients() {
    const _this = this;

    getUserData(this.state.agentNum).then(data => {
      _this.setState({
        rawJson: data,
        customers: data.Customers.map(customer => {
          this.state.validAgentNum = true;
          return (
            <TouchableOpacity  onPress={() => {this.transferToClient(customer)}}>
              <ClientCard customerData = {customer}/>
            </TouchableOpacity>
          );
        })
      });
    })
    .catch(error =>{
      Alert.alert('לא קיימים לקוחות עבור מספר טלפון/לקוח שהוזן')
      this.setState({agentNum: "", validAgentNum: false});
    });
  }


  getUserClients(){
    Keyboard.dismiss();
    this.fetchUserClients();
  }


  render() {
    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon name="menu" />
            </Button>
          </Left>

          <Body>
            <Title>חיפוש לקוחות</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <View style={styles.headerContent}>

            <TextInputMask
              ref={'inputCustomerNum'}
              type={'custom'}
              kind={'only-numbers'}
              options={{mask:'999-999-9999'}}
              style={styles.editText}
              editable={true}
              placeholder="מספר טלפון של עסק/מספר לקוח"
              underlineColorAndroid="transparent"
              onChangeText={(text)=>this.setState({agentNum:text})}
              value = {this.state.agentNum}
              keyboardType='numeric'
            />

            
            <Button
              block
              style={styles.buttonStyle}
              onPress={() => this.getUserClients()}>
              <Text style={styles.buttonText}>חפש עסק</Text>
            </Button>
          </View>
          
          {this.state.validAgentNum ? <ScrollView>{this.state.customers != []? this.state.customers: <Text>no Data</Text> }</ScrollView> : null}

        
        </Content>

        <PhoneIcon/>
        
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lightGray
  },
  header: {
    backgroundColor: Colors.primary
  },
  headerContent: {
    backgroundColor: Colors.primary,
    flexDirection: "column"
  },
  buttonStyle: {
    flex: 1,
    backgroundColor: Colors.accent,
    padding: 10,
    margin: 10,
  },
  buttonText: {
    fontSize: 17,
    textAlign: "center"
  },
  editText: {
    backgroundColor: "white",
    margin: 10,
    padding: 10,
  },

});
